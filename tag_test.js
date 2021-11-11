const axios = require('axios')
const Stomp = require('stompjs')
const dayjs = require('dayjs')
const makeID = require('./utils/makeID')
const {headers, tags } = require('./utils/base')
const dotenv = require('dotenv')
dotenv.config({ path: "./config/config.env" });

const db_scada = require("./config/db-mssql/scada");

const id = makeID(20)
let analogTagsRealValues = {};
let mainCount = 0;
let sum = {};

async function init() {
    try {
        for (let i = 0; i < tags.length; i++) {
               
            res = await axios(`https://nayd.erdenetmc.mn/service/redis/get.php?tags[]=ELEC_${tags[i]}`)

            if (res.data[0]) {
                console.log(`Таг : ${tags[i]}`)
                console.log(`Анхны утга : ${JSON.parse(res.data[0]).d}`)
                console.log("------------")
                analogTagsRealValues[tags[i]] = JSON.parse(res.data[0]).d;
                sum[tags[i]] = 0;
            }
            else {
                console.log("+++++++++++++++++++++++++++++WARNING++++++++++++++++++++++++++++++++++++++")
                console.log(`False tag[i] is '${tags[i]}'' res.data[0] ==> ${res.data[0]}`)
                console.log("++++++++++++++++++++++++++++WARNING END+++++++++++++++++++++++++++++++++++")
                analogTagsRealValues[tags[i]] = 0;
                sum[tags[i]] = 0;
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

                analogTagsRealValues[json.tag] = json.d;
            })
        }
        const on_error = error => {
            console.log('WebSocket холболт салсан ==> Error :', error);
            clearInterval(mainTimer)
        }
    
        const client = Stomp.overWS('wss://rabbit.erdenetmc.mn:15673/ws')
        client.connect(headers, on_connect, on_error)


        const mainTimer = setInterval(() => {

            const analogTagsRealValuesCopy = {...analogTagsRealValues};

            for (const [key, value] of Object.entries(analogTagsRealValuesCopy)) {
                sum[key] += value;
            };

            mainCount += 1;
         
            if(new Date().getSeconds() == 0) {

                const average = {};

                for (const [key, value] of Object.entries(sum)) {
                    average[key] = value / mainCount;
                    sum[key] = 0;           
                }

                mainCount = 0;

                // SQL серверлүү бичих хэсэг
                db_scada.Last_24Hour_AI_Graphic_m1
                    .create({ ValueDate: now.format('YYYY-MM-DD HH:mm:ss'), ...average })
                    .then(r => {
                        let now = dayjs()
                        console.log(`"${now.format('YYYY-MM-DD HH:mm:ss')}" 1 минутын дундаж SQL серверлүү бичигдлээ`)
                    })
                    .catch(err => console.log(err.response ? err.response.data : err.message))

            }

        }, 1000);
    }
    catch(err) {
        console.log("Init функц дотроос алдаа гарлаа: ", err.response ? err.response.data : err.message)
        clearInterval(mainTimer)
    }
}

init()
