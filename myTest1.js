const axios = require('axios')
const Stomp = require('stompjs')
const dayjs = require('dayjs')
const makeID = require('./utils/makeID')
const {headers, tags } = require('./utils/base')
const dotenv = require('dotenv')
dotenv.config({ path: "./config/config.env" });

const db_scada = require("./config/db-mssql/scada");

const id = makeID(20);
let sum = {};
let realValues = {};
  
async function init() {
    try {
        for (let tag of tags) {
               
            res = await axios(`https://nayd.erdenetmc.mn/service/redis/get.php?tags[]=ELEC_${tag}`)
                realValues[tag] = {
                    value: JSON.parse(res.data[0]).d,
                    time: JSON.parse(res.data[0]).t
                };
                sum[tag] = {
                    value: 0,
                    count: 0
                };
        }
        console.log("Тагууд анхны утгаа авлаа...");


        const on_connect = async () => {
    
            console.log("WebSocket амжилттай холбогдлоо");
    
            for (let tag of tags) {
                // console.log(`Connection RANDOM ID << ${id} >>`)
                await axios.get(`https://nayd.erdenetmc.mn/service/rmq/bind.php?id=${id}&tags[]=ELEC_${tag}`)
                // console.log(`Bind success => ${tag}`)
            }
            console.log("Bind success...");

            client.subscribe("/amq/queue/temp_" + id, message => {
                const json = JSON.parse(message.body);
                json.tag = message.headers.destination.substring(message.headers.destination.lastIndexOf("/") + 1);
                json.tag = json.tag.substring(5, json.tag.length).split('.').join('_');

                let now = json.t;
                let timeDiff = Math.floor(((now - realValues[json.tag].time) / 1000));

                sum[json.tag].value = parseFloat((sum[json.tag].value + realValues[json.tag].value * timeDiff).toFixed(2));
                sum[json.tag].count += timeDiff;
                
                realValues[json.tag].value = json.d;
                realValues[json.tag].time = now;
               
            })
          
        }
        const on_error = error => {
            console.log('WebSocket холболт салсан ==> Error :', error);
        }
    
        const client = Stomp.overWS('wss://rabbit.erdenetmc.mn:15673/ws')
        client.connect(headers, on_connect, on_error)

        const startTimer = setInterval(() => {

            console.log("--- Start timer ---");

            if(new Date().getSeconds() == 0) {
                setInterval(() => {

                    const realValuesCopy = {...realValues}
                    const sumCopy = {...sum}
                    const average = {};
                   
                    let timerNow = Date.now();

                    for (let [key, obj] of Object.entries(sumCopy)) {
                        average[key] = (obj.value + (realValuesCopy[key].value * Math.floor(((timerNow - realValues[key].time) / 1000)))) / (obj.count +  Math.floor(((timerNow - realValues[key].time) / 1000)));
                        sumCopy[key] = {
                            value: 0,
                            count: 0
                        }
                    }
                    sum = {...sumCopy};

                    let now = dayjs()

                    db_scada.Last_24Hour_AI_Graphic_m1
                        .create({ ValueDate: now.format('YYYY-MM-DD HH:mm:ss'), ...average })
                        .then(r => console.log(`"${now.format('YYYY-MM-DD HH:mm:ss')}" 1 минутын дундаж SQL серверлүү бичигдлээ`))
                        .catch(err => console.log(err.response ? err.response.data : err.message))
             
                }, 60 * 1000);

                clearInterval(startTimer);
                console.log(">>> Start timer STOPPED <<<")
            }
        }, 1000)
    }
    catch(err) {
        console.log("Init функц дотроос алдаа гарлаа: ", err.response ? err.response.data : err.message)
    }
}

init()
