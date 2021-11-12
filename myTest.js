const axios = require('axios')
const Stomp = require('stompjs')
const dayjs = require('dayjs')
const makeID = require('./utils/makeID')
const {headers, tags } = require('./utils/base')
const dotenv = require('dotenv')
dotenv.config({ path: "./config/config.env" });

const db_scada = require("./config/db-mssql/scada");

const id = makeID(20);
let analogTagsRealValues = {};
let mainCount = 0;
let timerTags = {}
let sum = {};

function start() {
    add = setInterval(function() {
      input.value++;
    }, 1000);
  }
  

async function init() {
    try {
        for (let i = 0; i < tags.length; i++) {
               
            res = await axios(`https://nayd.erdenetmc.mn/service/redis/get.php?tags[]=ELEC_${tags[i]}`)

            if (res.data[0]) {
                console.log(`Таг : ${tags[i]}`)
                
                analogTagsRealValues[tags[i]] = {
                    value: JSON.parse(res.data[0]).d,
                    count: 1
                };

                timerTags[tags[i]] = setInterval(function() {
                    let now = dayjs()
                    analogTagsRealValues[tags[i]].count += 1;
                  }, 1000);
                  
                sum[tags[i]] = {
                    value: 0,
                    count:0
                }
                console.log(`Анхны утга :`, analogTagsRealValues)
                console.log("------------");
            }
            else {
                console.log("+++++++++++++++++++++++++++++WARNING++++++++++++++++++++++++++++++++++++++")
                console.log(`False tag[i] is '${tags[i]}'' res.data[0] ==> ${res.data[0]}`)
                console.log("++++++++++++++++++++++++++++WARNING END+++++++++++++++++++++++++++++++++++")
                analogTagsRealValues[tags[i]] = {
                    value: 0,
                    count: 1
                };
                timerTags[tags[i]] = null;
                sum[tags[i]] = {
                    value: 0,
                    count:0
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

                sum[json.tag].value += analogTagsRealValues[json.tag].value * analogTagsRealValues[json.tag].count;     // 5 * 3
                sum[json.tag].count += analogTagsRealValues[json.tag].count;  
                
                analogTagsRealValues[json.tag].value = json.d;
                analogTagsRealValues[json.tag].count = 1;
              
            })
          
        }
        const on_error = error => {
            console.log('WebSocket холболт салсан ==> Error :', error);
        }
    
        const client = Stomp.overWS('wss://rabbit.erdenetmc.mn:15673/ws')
        client.connect(headers, on_connect, on_error)

        const myTimer = setInterval(()=>{
            console.log("===> MyTIMER")
            if(new Date().getSeconds() == 0) {

                const sumCopy = {...sum};
                const average = {};

                for (const [key, sumValue] of Object.entries(sumCopy)) {
                    
                    average[key] = sumValue.count === 0 ? sumValue.value : sumValue.value / sumValue.count;
                    sumCopy[key].value = 0;
                    sumCopy[key].count = 0;
                };

                sum = {...sumCopy}

                let now = dayjs()
                // console.log(`"${now.format('YYYY-MM-DD HH:mm:ss')}" 1 минутын дундаж SQL серверлүү бичигдлээ`, average)
                db_scada.Last_24Hour_AI_Graphic_m1
                    .create({ ValueDate: now.format('YYYY-MM-DD HH:mm:ss'), ...average })
                    .then(r => console.log(`"${now.format('YYYY-MM-DD HH:mm:ss')}" 1 минутын дундаж SQL серверлүү бичигдлээ`))
                    .catch(err => console.log(err.response ? err.response.data : err.message))


                setInterval(() => {
                    const sumCopy = {...sum};
                    const average = {};
                    for (const [key, sum] of Object.entries(sumCopy)) {
                        average[key] = sum.value / sum.count;

                        sumCopy[key].value = 0;
                        sumCopy[key].count = 0;
                    };

                    sum = {...sumCopy}

                    let now = dayjs()
                    // console.log(`"${now.format('YYYY-MM-DD HH:mm:ss')}" 1 минутын дундаж SQL серверлүү бичигдлээ`, average)
                    // SQL серверлүү бичих хэсэг
                    db_scada.Last_24Hour_AI_Graphic_m1
                        .create({ ValueDate: now.format('YYYY-MM-DD HH:mm:ss'), ...average })
                        .then(r => console.log(`"${now.format('YYYY-MM-DD HH:mm:ss')}" 1 минутын дундаж SQL серверлүү бичигдлээ`))
                        .catch(err => console.log(err.response ? err.response.data : err.message))

                    
                }, 60 * 1000);

                clearInterval(myTimer);
                console.log("===> MyTIMER STOPPED")
            }
        },1000)
    }
    catch(err) {
        console.log("Init функц дотроос алдаа гарлаа: ", err.response ? err.response.data : err.message)
    }
}

init()
