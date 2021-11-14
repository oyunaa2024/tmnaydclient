const axios = require('axios')
const Stomp = require('stompjs')
const dayjs = require('dayjs')
const makeID = require('./utils/makeID')
const {headers, realValues } = require('./utils/base')
const dotenv = require('dotenv')
dotenv.config({ path: "./config/config.env" });

const db_scada = require("./config/db-mssql/scada");
// const { json } = require('sequelize/types')

const id = makeID(20);
let sum = {};
let mainCount = 0;
  
async function init() {
    try {
        for (let tag of Object.keys(realValues)) {
               
            res = await axios(`https://nayd.erdenetmc.mn/service/redis/get.php?tags[]=ELEC_${tag}`)
                realValues[tag] = JSON.parse(res.data[0]).d;
                sum[tag] = 0;
                if(tag === "KP3_PII_GOKB_AI1"){
                    console.log(`Анхны утга :`, realValues["KP3_PII_GOKB_AI1"])
                    console.log("------------");
                }
        }

        const on_connect = async () => {
    
            console.log("WebSocket амжилттай холбогдлоо");
    
            for (let tag of Object.keys(realValues)) {
                // console.log(`Connection RANDOM ID << ${id} >>`)
                await axios.get(`https://nayd.erdenetmc.mn/service/rmq/bind.php?id=${id}&tags[]=ELEC_${tag}`)
                // console.log(`Bind success => ${tag}`)
            }
            client.subscribe("/amq/queue/temp_" + id, message => {
                const json = JSON.parse(message.body);
                json.tag = message.headers.destination.substring(message.headers.destination.lastIndexOf("/") + 1);
                json.tag = json.tag.substring(5, json.tag.length).split('.').join('_');

                realValues[json.tag] = json.d;

                if(json.tag === "KP3_PII_GOKB_AI1") {
                    console.log(json);
                    console.log("REAL VALUE ->", realValues["KP3_PII_GOKB_AI1"]);
                }
            })
          
        }
        const on_error = error => {
            console.log('WebSocket холболт салсан ==> Error :', error);
        }
    
        const client = Stomp.overWS('wss://rabbit.erdenetmc.mn:15673/ws')
        client.connect(headers, on_connect, on_error)

        const mainTimer = setInterval(() => {
            console.log("- Timer started -")

            realValuesCopy = {...realValues}
            console.log("REAL VALUE COPY =>", realValuesCopy["KP3_PII_GOKB_AI1"]);

            for (let [key, value] of Object.entries(realValuesCopy)) {
                sum[key] += value;
            }
            console.log("SUM =>", sum["KP3_PII_GOKB_AI1"]);

            mainCount += 1;
            console.log("MAINCOUNT =>", mainCount);
          
            if(new Date().getSeconds() == 0) {
                console.log("<< Дундаж утга бодох хэсэг >>")
                const average = {};

                for (let [key, value] of Object.entries(sum)) {
                    average[key] = value / mainCount;
                    sum[key] = 0;
                }
               

                mainCount = 0;
                console.log("Average:", average["KP3_PII_GOKB_AI1"])
                console.log("Sum:", sum["KP3_PII_GOKB_AI1"]);
                console.log("mainCount:", mainCount);

                let now = dayjs()
                // console.log(`"${now.format('YYYY-MM-DD HH:mm:ss')}" 1 минутын дундаж SQL серверлүү бичигдлээ`, average)
                db_scada.Last_24Hour_AI_Graphic_m1
                    .create({ ValueDate: now.format('YYYY-MM-DD HH:mm:ss'), ...average })
                    .then(r => console.log(`"${now.format('YYYY-MM-DD HH:mm:ss')}" 1 минутын дундаж SQL серверлүү бичигдлээ`))
                    .catch(err => console.log(err.response ? err.response.data : err.message))
            }
            console.log("----------------------------------------");
        },1000)
    }
    catch(err) {
        console.log("Init функц дотроос алдаа гарлаа: ", err.response ? err.response.data : err.message)
    }
}

init()
