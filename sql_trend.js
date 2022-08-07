const dotenv = require("dotenv");
const axios = require("axios");
const Stomp = require("stompjs");
const dayjs = require("dayjs");
const makeID = require("./utils/makeID");
const { headers } = require("./utils/base");
dotenv.config({ path: "./config/config.env" });
const db_scada = require("./config/db-mssql/scada");

const store = {
  KP5X_ABB_T2_AI10:{
    values:[],
    name:"Оролт-2 хүчдэл"
  },
  KP5X_ABB_T2_AI14:{
    values:[],
    name:"Оролт-2 гүйдэл"
  },
  KP5X_ABB_T2_AI21:{
    values:[],
    name:"Оролт-2 чадал (МВт)"
  },
  KP5X_ABB_T2_AI13:{
    values:[],
    name:"Оролт-3 хүчдэл"
  },
  KP5X_ABB_T2_AI17:{
    values:[],
    name:"Оролт-3 гүйдэл"
  },
  KP5X_ABB_T2_AI26:{
    values:[],
    name:"Оролт-3 чадал (МВт)"
  },
  KP5X_ABB_F103_AI1:{
    values:[],
    name:"Яч-103 чадал (кВт)"
  },
  KP5X_ABB_F105_AI1:{
    values:[],
    name:"Яч-105 чадал (кВт)"
  },
  KP5X_ABB_F203_AI1:{
    values:[],
    name:"Яч-203 чадал (кВт)"
  },
  KP5X_ABB_F205_AI1:{
    values:[],
    name:"Яч-205 чадал (кВт)"
  },
  KP5X_ABB_F305_AI1:{
    values:[],
    name:"Яч-305 чадал (кВт)"
  },
  KP5X_ABB_F306_AI1:{
    values:[],
    name:"Яч-306 чадал (кВт)"
  },
  KP5X_ABB_F405_AI1:{
    values:[],
    name:"Яч-405 чадал (кВт)"
  },
  KP5X_ABB_F406_AI1:{
    values:[],
    name:"Яч-406 чадал (кВт)"
  },
}

const id = makeID(20);

async function init() {
  try {

      const response = await axios(`https://nayd.erdenetmc.mn/service/redis/get.php?${Object.keys(store).map(tag => `tags[]=ELEC_${tag}&`).join("")}`);

      Object.keys(store).forEach((tag ,index) => store[tag].values.push({
        ALM_TAGNAME: tag,
        ALM_NATIVETIMELAST: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss.SSS"),
        ALM_VALUE: (JSON.parse(response.data[index]).d / 10000).toFixed(2)
      }));
      
      console.log("Тагууд анхны утгаа авсан...");

      const on_connect = async () => {
        console.log("WebSocket амжилттай холбогдлоо: sql_trend");

        await axios.get(`https://nayd.erdenetmc.mn/service/rmq/bind.php?id=${id}&${Object.keys(store).map(tag => `tags[]=ELEC_${tag}&`).join("")}`);

        client.subscribe("/amq/queue/temp_" + id, (message) => {

          const json = JSON.parse(message.body);
          json.tag = message.headers.destination.substring(message.headers.destination.lastIndexOf("/") + 1);
          json.tag = json.tag.substring(5, json.tag.length).split(".").join("_");

          store[json.tag].values.push({
            ALM_TAGNAME: json.tag,
            ALM_NATIVETIMELAST: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss.SSS"),
            ALM_VALUE: (json.d / 10000).toFixed(2)
          });
          
        });
        
      };
      const on_error = (error) => console.log(`${dayjs().format("YYYY-MM-DD HH:mm:ss")} WebSocket дээр алдаа гарлаа: `, error);

      const client = Stomp.overWS("wss://rabbit.erdenetmc.mn:15673/ws");
      client.connect(headers, on_connect, on_error);

      const insertTimer = setInterval(() => {

        const insertData = [].concat(...Object.keys(store).map(tag => store[tag].values));

        if(insertData.length) {
            db_scada.Calculated_AI1.bulkCreate(insertData)
              .then(res => console.log(`-${dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss")}- SQL серверт амжилттай бичигдлээ...`))
              .catch(err =>{
                console.log("SQL серверт бичих үед алдаа гарлаа :", err.message);
                clearInterval(insertTimer);
              });

            Object.keys(store).forEach(tag => store[tag].values.length = 0);
        }

      }, 1000 * 60); // ms * 60
    
  } 
  catch (err) {
      console.log(`${dayjs().format("YYYY-MM-DD HH:mm:ss")} Init функц дотроос алдаа баригдлаа :`, err.message);
      insertTimer && clearInterval(insertTimer);
  }

}

init();
