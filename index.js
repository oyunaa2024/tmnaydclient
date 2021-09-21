const dotenv = require('dotenv')
const axios = require('axios')
const Stomp = require('stompjs')
const dayjs = require('dayjs')
const makeID = require('./utils/makeID')
const { ids, headers } = require('./utils/base')

dotenv.config({ path: "./config/config.env" });

const db_scada = require("./config/db-mssql/scada");

let id = makeID(20)
let tagToID = {}
let values = {}
let sum = {}
let count = 0


async function init() {

    for (let i = 0; i < ids.length; i++) {
        let res = await axios(`http://localhost:8888/api/v1/signals/id/${ids[i]}`)
        const tag = res.data.data.tagName.trim()
        if (tag) {
            tagToID[tag] = ids[i]
            console.log(tag + '-->' + tagToID[tag])

            res = await axios(`https://nayd.erdenetmc.mn/service/redis/get.php?tags[]=ELEC_${tag}`)
            if (res.data[0]) {
                values[ids[i]] = JSON.parse(res.data[0]).d
                sum[ids[i]] = 0
                console.log(ids[i] + ' ==> ' + values[ids[i]])
            }
            else
                values[ids[i]] = 0
        }
    }

    const on_connect = () => {

        console.warn('WebSocket connected');

        for (var tag in tagToID) {
            axios.get(`https://nayd.erdenetmc.mn/service/rmq/bind.php?id=${id}&tags[]=ELEC_${tag}`)
                .then(data => {
                    client.subscribe("/amq/queue/temp_" + id, message => {
                        const json = JSON.parse(message.body)
                        json.tag = message.headers.destination.substring(message.headers.destination.lastIndexOf("/") + 1)
                        json.tag = json.tag.substring(5, json.tag.length).split('.').join('_')
                        console.log(json)
                        values[tagToID[json.tag]] = parseFloat(json.d)
                    })
                })
                .catch(err => console.log(err.message))
        }
    }
    const on_error = error => {
        console.warn('WebSocket connection closed for Error');
        console.log(error)
    }

    const client = Stomp.overWS('wss://rabbit.erdenetmc.mn:15673/ws')
    client.connect(headers, on_connect, on_error)

    setInterval(() => {
        let now = dayjs()
        for(let key in values)
            sum[key] += values[key]

        count++

        if(new Date().getSeconds() == 1) {

            for(let key in values)
              sum[key] = sum[key] / count

            db_scada.Last_24Hour_AI_Graphic_m
            .create({ ValueDate: now.format('YYYY-MM-DD HH:mm:ss'), ...sum })
            .then(r => console.log('Inserted to sql ==>', now.format('YYYY-MM-DD HH:mm:ss')))
            .catch(err => console.log(err.message))

            for(let key in values)
              sum[key] = 0

            count = 0
        }
    }, 1000)
}

init()
