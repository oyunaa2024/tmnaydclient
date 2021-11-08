const axios = require('axios')
const Stomp = require('stompjs')
const dayjs = require('dayjs')
const makeID = require('./utils/makeID')
const {ids, headers, tags } = require('./utils/base')
const dotenv = require('dotenv')
dotenv.config({ path: "./config/config.env" });

const db_scada = require("./config/db-mssql/scada");

const id = makeID(20)
const values = {}, sum = {}
let count = 0

// const tmserviceHost = "https://tmservice.erdenetmc.mn"
const tmserviceHost = "http://localhost:8888"

async function init() {
    try {
        for (let i = 0; i < tags.length; i++) {
               
                console.log(`Таг : ${tags[i]}`)

                res = await axios(`https://nayd.erdenetmc.mn/service/redis/get.php?tags[]=ELEC_${tags[i]}`)

                if (res.data[0]) {
                    values[tags[i]] = JSON.parse(res.data[0]).d
                    console.log(`Анхны утга : ${values[tags[i]]}`)
                    console.log("------------")
                    sum[tags[i]] = 0
                }
                else {
                    values[tags[i]] = 0
                    console.log("+++++++++++++++++++++++++++++WARNING++++++++++++++++++++++++++++++++++++++")
                    console.log(`False tag[i] is '${tags[i]}'' res.data[0] ==> ${res.data[0]}`)
                    console.log("++++++++++++++++++++++++++++WARNING END+++++++++++++++++++++++++++++++++++")
                }
                console.log("--------------------------------------------------------------------------------")
        }
    
        const on_connect = async () => {
    
            console.log("WebSocket амжилттай холбогдлоо");
    
            for (let i = 0; i < tags.length; i++) {
                console.log(`Connection RANDOM ID << ${id} >>`)

                await axios.get(`https://nayd.erdenetmc.mn/service/rmq/bind.php?id=${id}&tags[]=ELEC_${tags[i]}`)
                console.log(`Bind success => ${tags[i]}`)
            }

            client.subscribe("/amq/queue/temp_" + id, message => {
                const json = JSON.parse(message.body)
                json.tag = message.headers.destination.substring(message.headers.destination.lastIndexOf("/") + 1)
                json.tag = json.tag.substring(5, json.tag.length).split('.').join('_')
                values[json.tag] = json.d
                console.log(json)
            })
        }
        const on_error = error => {
            console.log('WebSocket холболт салсан ==> Error :', error);
        }
    
        const client = Stomp.overWS('wss://rabbit.erdenetmc.mn:15673/ws')
        client.connect(headers, on_connect, on_error)

       

        setInterval(() => {
          
            tags.forEach(tag => sum[tag] += values[tag]);
            count++;

            if(new Date().getSeconds() == 0) {

                const avarage = {};

                tags.forEach(tag => {
                   avarage[tag] = sum[tag] / count;
                   sum[tag] = 0;
                });

                count = 0;

                let now = dayjs();
                // console.log(`"${now.format('YYYY-MM-DD HH:mm:ss')}" 1 минутын дундаж SQL серверлүү бичигдлээ`)
                // console.log(avarage)
                 db_scada.Last_24Hour_AI_Graphic_m1
                    .create({ ValueDate: now.format('YYYY-MM-DD HH:mm:ss'), ...avarage })
                    .then(r => console.log(`"${now.format('YYYY-MM-DD HH:mm:ss')}" 1 минутын дундаж SQL серверлүү бичигдлээ`))
                    .catch(err => console.log(err.response ? err.response.data : err.message))
            }
        }, 1000)
    }
    catch(err) {
        console.log("Init функц дотроос алдаа гарлаа: ", err.response ? err.response.data : err.message)
    }
}

init()
