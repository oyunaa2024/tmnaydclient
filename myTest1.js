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
                if(tag === "KP3_PII_KOTB_AI1"){
                    console.log("Таг ==> ", tag);
                    console.log("FIRST REAL VALUE ==> ",realValues["KP3_PII_KOTB_AI1"]);
                    console.log("FIRST SUM ==> ", sum["KP3_PII_KOTB_AI1"]);
                    console.log("\n");
                }
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
                let timeDiff = now - realValues[json.tag].time;

                sum[json.tag].value = parseFloat((sum[json.tag].value + realValues[json.tag].value * timeDiff).toFixed(2));
                sum[json.tag].count += timeDiff;
                
                realValues[json.tag].value = json.d;
                realValues[json.tag].time = now;
                if(json.tag === "KP3_PII_KOTB_AI1"){
                    console.log(json)
                    console.log(Date.now())
                    console.log("TIMDIFF => ",timeDiff)
                    console.log("REAL VALUES => ",realValues["KP3_PII_KOTB_AI1"])
                    console.log("SUM => ", sum["KP3_PII_KOTB_AI1"])
                    console.log("\n")
                }
               
            })
          
        }
        const on_error = error => {
            console.log('WebSocket холболт салсан ==> Error :', error);
        }
    
        const client = Stomp.overWS('wss://rabbit.erdenetmc.mn:15673/ws')
        client.connect(headers, on_connect, on_error)

        
    }
    catch(err) {
        console.log("Init функц дотроос алдаа гарлаа: ", err.response ? err.response.data : err.message)
    }
}

init();

const startTimer = setInterval(() => {

    console.log("--- Start timer ---");

    if(new Date().getSeconds() == 0) {

        setInterval(() => {
            console.time();

            console.log("Дундаж утга бодох хэсэг")

            const realValuesCopy = {...realValues}
            const sumCopy = {...sum}
            const average = {};

          
                console.log("REAL VALUE COPY :",realValuesCopy["KP3_PII_KOTB_AI1"])
                console.log("SUM COPY :",sumCopy["KP3_PII_KOTB_AI1"])
           
           
            let timerNow = Date.now();

            console.log("TIMER NOW :", timerNow)

            for (let [key, obj] of Object.entries(sumCopy)) {
                average[key] = (obj.value + (realValuesCopy[key].value * (timerNow - realValuesCopy[key].time))) / (obj.count +  (timerNow - realValuesCopy[key].time));
                // realValues[key].time = timerNow;
                sumCopy[key] = {
                    value: 0,
                    count: 0
                }
            }
            sum = {...sumCopy};
            console.log("SUM",sum["KP3_PII_KOTB_AI1"])

            let now = dayjs()

            // console.log(`"${now.format('YYYY-MM-DD HH:mm:ss')}" 1 минутын дундаж SQL серверлүү бичигдлээ`, average["KP3_PII_KOTB_AI1"]);
            // console.log("-----------------------------------------------------------------------------------------------------------------\n")
          

            db_scada.Last_24Hour_AI_Graphic_m1
                .create({ ValueDate: now.format('YYYY-MM-DD HH:mm:ss'), ...average })
                .then(r => console.log(`"${now.format('YYYY-MM-DD HH:mm:ss')}" 1 минутын дундаж SQL серверлүү бичигдлээ`, average["KP3_PII_KOTB_AI1"]))
                .catch(err => console.log(err.response ? err.response.data : err.message))

            console.timeEnd()
     
        }, 60 * 1000);

        clearInterval(startTimer);
        console.log(">>> Start timer STOPPED <<<")
    }
}, 1000)
