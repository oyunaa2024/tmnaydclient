const axios = require('axios')
const Stomp = require('stompjs')
const dayjs = require('dayjs')
const makeID = require('./utils/makeID')
const { ids, headers } = require('./utils/base')
const dotenv = require('dotenv')
dotenv.config({ path: "./config/config.env" });

const db_scada = require("./config/db-mssql/scada");

const id = makeID(20)
const tagToID = {}, values = {}, sum = {}
let count = 0

const tmserviceHost = "https://tmservice.erdenetmc.mn"
// const tmserviceHost = "http://localhost:8888"

async function init() {
    try {
        for (let i = 0; i < ids.length; i++) {
            let res = await axios(`${tmserviceHost}/api/v1/signals/id/${ids[i]}`)
            const tag = res.data.data.tagName.trim()
            if (tag) {
                console.log(`Сигналын нэр : ${res.data.data.description}`)
                console.log(`таг : ${tag}`)
                console.log(`ID : ${ids[i]}`)

                res = await axios(`https://nayd.erdenetmc.mn/service/redis/get.php?tags[]=ELEC_${tag}`)

                if (res.data[0]) {
                    values[ids[i]] = JSON.parse(res.data[0]).d
                    // console.log(`Анхны утга : ${values[ids[i]]}`)
                    // console.log(`"values" обьектын утга =>`, values)

                    sum[ids[i]] = 0
                    // console.log(`"sum" обьектын утга =>`, sum)
                    // console.log(ids[i] + ' ==> ' + values[ids[i]])
                }
                else {
                    values[ids[i]] = 0
                    console.log("+++++++++++++++++++++++++++++WARNING++++++++++++++++++++++++++++++++++++++")
                    console.log(`False tag is '${tag}'' res.data[0] ==> ${res.data[0]}`)
                    console.log("++++++++++++++++++++++++++++WARNING END+++++++++++++++++++++++++++++++++++")
                }
                tagToID[tag] = ids[i]
                console.log("--------------------------------------------------------------------------------")
            }
        }
    
        const on_connect = async () => {
    
            console.log("WebSocket амжилттай холбогдлоо");

            const keys = Object.keys(tagToID)
    
            for (let i = 0; i < keys.length; i++) {
                console.log(`Connection RANDOM ID << ${id} >>`)
                const bindTag = keys[i]

                await axios.get(`https://nayd.erdenetmc.mn/service/rmq/bind.php?id=${id}&tags[]=ELEC_${bindTag}`)
                console.log(`Bind success => ${bindTag}`)
            }

            client.subscribe("/amq/queue/temp_" + id, message => {
                const json = JSON.parse(message.body)
                json.tag = message.headers.destination.substring(message.headers.destination.lastIndexOf("/") + 1)
                json.tag = json.tag.substring(5, json.tag.length).split('.').join('_')
                values[tagToID[json.tag]] = json.d
                if(json.d === 0 || json.d === 0.0)
                   console.log("================================= Zero value ==================================>", json)
            })
        }
        const on_error = error => {
            console.log('WebSocket холболт салсан ==> Error :', error);
        }
    
        const client = Stomp.overWS('wss://rabbit.erdenetmc.mn:15673/ws')
        client.connect(headers, on_connect, on_error)

        const myIds = Object.keys(values)

        setInterval(() => {
          
            myIds.forEach(id => sum[id] += values[id]);
            count++;

            if(new Date().getSeconds() == 0) {

                const avarage = {};

                myIds.forEach(id => {
                   avarage[id] = sum[id] / count;
                   sum[id] = 0;
                });

                count = 0;

                let now = dayjs();
                console.log(`"${now.format('YYYY-MM-DD HH:mm:ss')}" 1 минутын дундаж SQL серверлүү бичигдлээ`)
                 db_scada.Last_24Hour_AI_GSraphic_m
                    .create({ ValueDate: now.format('YYYY-MM-DD HH:mm:ss'), ...avarage })
                    .then(r => console.log(`"${now.format('YYYY-MM-DD HH:mm:ss')}" 1 минутын дундаж SQL серверлүү бичигдлээ`))
                    .catch(err => console.log(err.response ? err.response.data : err.message))
            }
        }, 1000)
    }
    catch(err) {
        console.log("Init функц дотроос алдаа гарлаа: ", err.response.data ? err.response.data : err.message)
    }
}

init()
