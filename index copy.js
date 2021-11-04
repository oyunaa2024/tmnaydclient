const axios = require('axios')
const Stomp = require('stompjs')
const dayjs = require('dayjs')
const makeID = require('./utils/makeID')
const { ids, headers } = require('./utils/base')
const dotenv = require('dotenv')
dotenv.config({ path: "./config/config.env" });

const db_scada = require("./config/db-mssql/scada");

let id = makeID(20), tagToID = {}, values = {}, sum = {}, count = 0

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
                    console.log(`Анхны утга : ${values[ids[i]]}`)
                    console.log(`"values" обьектын утга =>`, values)

                    sum[ids[i]] = 0
                    console.log(`"sum" обьектын утга =>`, sum)
                    // console.log(ids[i] + ' ==> ' + values[ids[i]])
                }
                else {
                    values[ids[i]] = 0
                    console.log("+++++++++++++++++++++++++++++WARNING++++++++++++++++++++++++++++++++++++++")
                    console.log(`False tag is '${tag}'' res.data[0] ==> ${res.data[0]}`)
                    console.log("++++++++++++++++++++++++++++WARNING END+++++++++++++++++++++++++++++++++++")
                }

                tagToID[tag] = ids[i]
                console.log(`"tagToID" обьектын утга =>`, tagToID)
                console.log("--------------------------------------------------------------------------------")
            }
        }
    
        const on_connect = () => {
    
            console.log("WebSocket амжилттай холбогдлоо");
    
            for (var tag in tagToID) {
                axios.get(`https://nayd.erdenetmc.mn/service/rmq/bind.php?id=${id}&tags[]=ELEC_${tag}`)
                    .then(data => {
                        client.subscribe("/amq/queue/temp_" + id, message => {
                            const json = JSON.parse(message.body)
                            json.tag = message.headers.destination.substring(message.headers.destination.lastIndexOf("/") + 1)
                            json.tag = json.tag.substring(5, json.tag.length).split('.').join('_')
                            values[tagToID[json.tag]] = parseFloat(json.d)
                            console.log(values)
                        })
                    })
                    .catch(err => console.log(`Наяд сервисрүү "${tag}"-ийг bind хийх үед алдаа гарлаа `, err.response.data ? err.response.data : err.message))
            }
        }
        const on_error = error => {
            console.log('WebSocket холболт салсан ==> Error :', error.message);
        }
    
        const client = Stomp.overWS('wss://rabbit.erdenetmc.mn:15673/ws')
        client.connect(headers, on_connect, on_error)
    
        // setInterval(() => {
        //     let now = dayjs()
        //     for(let key in values)
        //         sum[key] += values[key]
    
        //     count++
    
        //     if(new Date().getSeconds() == 0) {
    
        //         for(let key in values)
        //           sum[key] = sum[key] / count
    
        //           console.log('Inserted to sql ==>', now.format('YYYY-MM-DD HH:mm:ss'))
        //           console.log(`Count ==> ${count}`)
    
        //         // db_scada.Last_24Hour_AI_Graphic_m
        //         // .create({ ValueDate: now.format('YYYY-MM-DD HH:mm:ss'), ...sum })
        //         // .then(r => console.log('Inserted to sql ==>', now.format('YYYY-MM-DD HH:mm:ss')))
        //         // .catch(err => console.log(err.message))
    
        //         for(let key in values)
        //           sum[key] = 0
    
        //         count = 0
        //     }
        // }, 1000)
    }
    catch(err) {
        console.log("Init функц дотроос алдаа гарлаа: ", err.response.data ? err.response.data : err.message)
    }
}

init()
