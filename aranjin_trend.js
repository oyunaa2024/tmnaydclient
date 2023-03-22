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
    lastValue: "",
    name:"Оролт-2 хүчдэл",
    scale: 1
  },
  KP5X_ABB_T2_AI14:{
    values:[],
    lastValue: "",
    name:"Оролт-2 гүйдэл",
    scale: 1
  },
  KP5X_ABB_T2_AI21:{
    values:[],
    lastValue: "",
    name:"Оролт-2 чадал (МВт)",
    scale: 1000000
  },
  KP5X_ABB_T2_AI13:{
    values:[],
    lastValue: "",
    name:"Оролт-3 хүчдэл",
    scale: 1
  },
  KP5X_ABB_T2_AI17:{
    values:[],
    lastValue: "",
    name:"Оролт-3 гүйдэл",
    scale: 1
  },
  KP5X_ABB_T2_AI26:{
    values:[],
    lastValue: "",
    name:"Оролт-3 чадал (МВт)",
    scale: 1000000
  },
  KP5X_ABB_F103_AI1:{
    values:[],
    lastValue: "",
    name:"Яч-103 чадал (кВт)",
    scale: 10000
  },
  KP5X_ABB_F105_AI1:{
    values:[],
    lastValue: "",
    name:"Яч-105 чадал (кВт)",
    scale: 10000
  },
  KP5X_UCOM_F105_AI7:{
    values:[],
    lastValue: "",
    name:"Яч-105 МШЦ-8 чадал (МВт)",
    scale: 1
  },
  KP5X_ABB_F203_AI1:{
    values:[],
    lastValue: "",
    name:"Яч-203 чадал (кВт)",
    scale: 10000
  },
  KP5X_ABB_F205_AI1:{
    values:[],
    lastValue: "",
    name:"Яч-205 чадал (кВт)",
    scale: 10000
  },
  KP5X_UCOM_F205_AI7:{
    values:[],
    lastValue: "",
    name:"Яч-205 МПСИ-7 чадал (МВт)",
    scale: 1
  },
  KP5X_ABB_F305_AI1:{
    values:[],
    lastValue: "",
    name:"Яч-305 чадал (кВт)",
    scale: 10000
  },
  KP5X_ABB_F306_AI1:{
    values:[],
    lastValue: "",
    name:"Яч-306 чадал (кВт)",
    scale: 10000
  },
  KP5X_ABB_F405_AI1:{
    values:[],
    lastValue: "",
    name:"Яч-405 чадал (кВт)",
    scale: 10000
  },
  KP5X_ABB_F406_AI1:{
    values:[],
    lastValue: "",
    name:"Яч-406 чадал (кВт)",
    scale: 10000
  },
  KP5X_ABB_F403_AI1:{
    values:[],
    lastValue: "",
    name:"Яч-403 чадал (кВт)",
    scale: 10000
  },
  KP5X_UCOM_F403_AI7:{
    values:[],
    lastValue: "",
    name:"Яч-403 Б.насос-31 чадал (МВт)",
    scale: 1
  },
  KP5X_ABB_F304_AI1:{
    values:[],
    lastValue: "",
    name:"Яч-304 чадал (кВт)",
    scale: 10000
  },
  KP5X_UCOM_F304_AI7:{
    values:[],
    lastValue: "",
    name:"Яч-304 Б.насос-30 чадал (МВт)",
    scale: 1
  },
  KP5X_UCOM_F201_AI3:{
    values:[],
    lastValue: "",
    name:"Яч-201 Хүчдэл (В)",
    scale: 0.578
  },
}

const id = makeID(20);

async function init() {
  try {

      const response = await axios(`https://nayd.erdenetmc.mn/service/redis/get.php?${Object.keys(store).map(tag => `tags[]=ELEC_${tag}&`).join("")}`);

      Object.keys(store).forEach((tag ,index) => {
        store[tag].values.push({
          ALM_TAGNAME: tag,
          ALM_NATIVETIMELAST: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss.SSS"),
          ALM_VALUE: (JSON.parse(response.data[index]).d / store[tag].scale).toFixed(2)
        });

        store[tag].lastValue = (JSON.parse(response.data[index]).d / store[tag].scale).toFixed(2);
      });
      
      console.log("Тагууд анхны утгаа авсан...");

      const on_connect = async () => {
        console.log("WebSocket амжилттай холбогдлоо: sql_trend.js");

        await axios.get(`https://nayd.erdenetmc.mn/service/rmq/bind.php?id=${id}&${Object.keys(store).map(tag => `tags[]=ELEC_${tag}&`).join("")}`);

        client.subscribe("/amq/queue/temp_" + id, (message) => {

          const json = JSON.parse(message.body);
          json.tag = message.headers.destination.substring(message.headers.destination.lastIndexOf("/") + 1);
          json.tag = json.tag.substring(5, json.tag.length).split(".").join("_");

          store[json.tag].values.push({
            ALM_TAGNAME: json.tag,
            ALM_NATIVETIMELAST: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss.SSS"),
            ALM_VALUE: (json.d / store[json.tag].scale).toFixed(2)
          });

          store[json.tag].lastValue = (json.d / store[json.tag].scale).toFixed(2);
          
        });
        
      };
      const on_error = (error) => console.log(`${dayjs().format("YYYY-MM-DD HH:mm:ss")} WebSocket дээр алдаа гарлаа: `, error);

      const client = Stomp.overWS("wss://rabbit.erdenetmc.mn:15673/ws");
      client.connect(headers, on_connect, on_error);

      const insertTimer = setInterval(() => {

         // [[...], [...]] -> [... ...]
        const insertData = [].concat(...Object.keys(store).map(tag => {
          if(store[tag].values.length == 0){
            return [{
              ALM_TAGNAME: tag,
              ALM_NATIVETIMELAST: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss.SSS"),
              ALM_VALUE: store[tag].lastValue
            }];
          }

          return store[tag].values; 
        }));

     

        db_scada.Calculated_AI1.bulkCreate(insertData)
          .then(res => console.log(`-${dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss")}- SQL серверт амжилттай бичигдлээ...`))
          .catch(err =>{
            console.log("SQL серверт бичих үед алдаа гарлаа :", err.message);
            clearInterval(insertTimer);
          });


        // [[...], [...]]
        const arr = ['KP5X_ABB_F205_AI1', 'KP5X_ABB_F105_AI1'].map(tag => {
          if(store[tag].values.length == 0){
            return [{
              ALM_TAGNAME: tag,
              ALM_NATIVETIMELAST: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss.SSS"),
              ALM_VALUE: store[tag].lastValue
            }];
          }

          return store[tag].values; 
        }); 

        let valueStr = "";

        [].concat(...arr).forEach(el => {
          valueStr += `('${el["ALM_NATIVETIMELAST"]}', '${el["ALM_NATIVETIMELAST"]}', '${el["ALM_TAGNAME"]}', '${el["ALM_VALUE"]}', '', 'ALARM', 'RATE' ),`
        });
        
        db_scada.sequelize.query(`
          INSERT INTO [FIXALARMS] 
          (ALM_NATIVETIMEIN, ALM_NATIVETIMELAST, ALM_TAGNAME, ALM_VALUE, ALM_UNIT ,ALM_MSGTYPE, ALM_ALMSTATUS)
          VALUES 
          ${valueStr.slice(0, -1)}`
        )
          .then(res => console.log("<-- INSERTED TO (FIXALARMS) -->", dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss")))
          .catch(err => {
            console.log("FIXALARMS-д бичих үед алдаа гарлаа :", err.message);
            clearInterval(insertTimer);
          });


        Object.keys(store).forEach(tag => store[tag].values.length = 0);
        

      }, 1000 * 60); // ms * 60
    
  } 
  catch (err) {
      console.log(`${dayjs().format("YYYY-MM-DD HH:mm:ss")} Init функц дотроос алдаа баригдлаа :`, err.message);
      insertTimer && clearInterval(insertTimer);
  }

}

init();
