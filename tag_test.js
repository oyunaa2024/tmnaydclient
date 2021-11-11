const axios = require('axios')
const Stomp = require('stompjs')
const dayjs = require('dayjs')
const makeID = require('./utils/makeID')
const {ids, headers, tags } = require('./utils/base')
const dotenv = require('dotenv')
dotenv.config({ path: "./config/config.env" });

const db_scada = require("./config/db-mssql/scada");

const id = makeID(20)
let analogTags = {}
let resetTags = {}


async function init() {
    try {
        for (let i = 0; i < tags.length; i++) {
               
            res = await axios(`https://nayd.erdenetmc.mn/service/redis/get.php?tags[]=ELEC_${tags[i]}`)

            if (res.data[0]) {
                console.log(`Таг : ${tags[i]}`)
                console.log(`Анхны утга : ${JSON.parse(res.data[0]).d}`)
                console.log("------------")
                analogTags[tags[i]] = {
                    total: JSON.parse(res.data[0]).d,
                    count: 1
                }
                resetTags[tags[i]] = {
                    total: 0,
                    count: 0
                }
            }
            else {
                console.log("+++++++++++++++++++++++++++++WARNING++++++++++++++++++++++++++++++++++++++")
                console.log(`False tag[i] is '${tags[i]}'' res.data[0] ==> ${res.data[0]}`)
                console.log("++++++++++++++++++++++++++++WARNING END+++++++++++++++++++++++++++++++++++")
                analogTags[tags[i]] = {
                    total: 0,
                    count: 1
                }
                resetTags[tags[i]] = {
                    total: 0,
                    count: 0
                }
            }

        }
    
        const on_connect = async () => {
    
            console.log("WebSocket амжилттай холбогдлоо");
    
            for (let i = 0; i < tags.length; i++) {
                console.log(`Connection RANDOM ID << ${id} >>`)
                await axios.get(`https://nayd.erdenetmc.mn/service/rmq/bind.php?id=${id}&tags[]=ELEC_${tags[i]}`)
                console.log(`Bind success => ${tags[i]}`)
            }

            client.subscribe("/amq/queue/temp_" + id, message => {
                const json = JSON.parse(message.body);
                json.tag = message.headers.destination.substring(message.headers.destination.lastIndexOf("/") + 1);
                json.tag = json.tag.substring(5, json.tag.length).split('.').join('_');

                // console.log(json)
                analogTags[json.tag].total += json.d;
                analogTags[json.tag].count += 1;
                // console.log(analogTags)
               
            })
        }
        const on_error = error => {
            console.log('WebSocket холболт салсан ==> Error :', error);
            clearInterval(mainInterval)
        }
    
        const client = Stomp.overWS('wss://rabbit.erdenetmc.mn:15673/ws')
        client.connect(headers, on_connect, on_error)


        const myTimer = setInterval(() => {
            console.log("++ My Timer Worked ++")

            if(new Date().getSeconds() == 0) {
                let now = dayjs();
                console.log("<<<<<<<<<<< Main Timer Started >>>>>>>>>>>>")
                console.log(now.format('YYYY-MM-DD HH:mm:ss'))

                const mainInterval = setInterval(() => {

                    const analogTagsCopy = {...analogTags};
                    const average = {};

                    for (const [key, value] of Object.entries(analogTagsCopy)) {

                        if(value.count === 0){
                            average[key] = value.total;
                        }
                        else {
                            average[key] = value.total / value.count;
                            resetTags[key].total = value.total / value.count;
                            resetTags[key].count = 1;
                        }
                        
                    }

                    let now = dayjs();
               
                    db_scada.Last_24Hour_AI_Graphic_m1
                        .create({ ValueDate: now.format('YYYY-MM-DD HH:mm:ss'), ...average })
                        .then(r => console.log(`"${now.format('YYYY-MM-DD HH:mm:ss')}" 1 минутын дундаж SQL серверлүү бичигдлээ`))
                        .catch(err => console.log(err.response ? err.response.data : err.message))
                    
                    analogTags = {...resetTags};

                }, 60 * 1000)

                console.log("My Timer Stoped !!!")
                clearInterval(myTimer)
            }

        }, 1000)
    }
    catch(err) {
        console.log("Init функц дотроос алдаа гарлаа: ", err.response ? err.response.data : err.message)
        clearInterval(mainInterval)
    }
}

init()
