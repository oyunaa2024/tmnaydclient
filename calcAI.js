const axios = require("axios");
const Stomp = require("stompjs");
const dayjs = require("dayjs");
const makeID = require("./utils/makeID");
const { headers } = require("./utils/base");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

const db_scada = require("./config/db-mssql/scada");

const tags = [
  "KP5X_ABB_T2_AI10",  //Оролт-2 voltage
  "KP5X_ABB_T2_AI14",  //Оролт-2 current
  "KP5X_ABB_T2_AI13",  //Оролт-3 voltage
  "KP5X_ABB_T2_AI17",   //Оролт-3 current
];

const id = makeID(20);
let realValues = {};
let RP10_BBOD3_P = [];

let RP10_BBOD2_P = [];

const SQRT3 = Math.sqrt(3);

async function init() {
  try {
    for (let tag of tags) {
      res = await axios(
        `https://nayd.erdenetmc.mn/service/redis/get.php?tags[]=ELEC_${tag}`
      );
      realValues[tag] = {
        value: JSON.parse(res.data[0]).d,
        timestamp: Date.now(),
      };
    }
    console.log("Тагууд анхны утгаа авсан...");

    RP10_BBOD2_P.push({
      ALM_TAGNAME: "KP5X_ABB_T2_AI210", //Оролт-2 чадал кВт
      ALM_NATIVETIMELAST: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss.SSS"),
      ALM_VALUE: (realValues["KP5X_ABB_T2_AI10"].value * realValues["KP5X_ABB_T2_AI14"].value * SQRT3 / 1000).toFixed(2)
    });

    RP10_BBOD3_P.push({
      ALM_TAGNAME: "KP5X_ABB_T2_AI260", //Оролт-3 чадал кВт
      ALM_NATIVETIMELAST: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss.SSS"),
      ALM_VALUE: (realValues["KP5X_ABB_T2_AI13"].value * realValues["KP5X_ABB_T2_AI17"].value * SQRT3 / 1000).toFixed(2)
    });

    const on_connect = async () => {
      console.log("WebSocket амжилттай холбогдлоо: calcAI.js");

      for (let tag of tags) {
        await axios.get(`https://nayd.erdenetmc.mn/service/rmq/bind.php?id=${id}&tags[]=ELEC_${tag}`);
      }
      console.log("Bind success...");

      client.subscribe("/amq/queue/temp_" + id, (message) => {

        const json = JSON.parse(message.body);
        json.tag = message.headers.destination.substring(message.headers.destination.lastIndexOf("/") + 1);
        json.tag = json.tag.substring(5, json.tag.length).split(".").join("_");

        calculatePower(json);
        
        realValues[json.tag].value = json.d;
        realValues[json.tag].timestamp = Date.now();
      });
    };
    const on_error = (error) => {
      console.log("WebSocket холболт салсан ==> Error :", error);
      let now = dayjs();
      console.log(now.format("YYYY-MM-DD HH:mm:ss"));
    };

    const client = Stomp.overWS("wss://rabbit.erdenetmc.mn:15673/ws");
    client.connect(headers, on_connect, on_error);

    const myTimer = setInterval(() => {

      let valueStr = "";

      if(RP10_BBOD3_P.length > 0){
          db_scada.Calculated_AI1.bulkCreate([...RP10_BBOD3_P])
            .then(res => console.log("<-- INSERTED TO SQL BBOD3_P -->", dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss")))
            .catch(err => console.log(err.message));

          RP10_BBOD3_P.forEach(el => {
            valueStr = valueStr + `('${el["ALM_NATIVETIMELAST"]}', '${el["ALM_NATIVETIMELAST"]}', '${el["ALM_TAGNAME"]}', '${el["ALM_VALUE"]}', '', 'ALARM', 'RATE' ),`
          });

          db_scada.sequelize.query(`
            INSERT INTO [FIXALARMS] (ALM_NATIVETIMEIN, ALM_NATIVETIMELAST, ALM_TAGNAME, ALM_VALUE, ALM_UNIT ,ALM_MSGTYPE, ALM_ALMSTATUS)
            VALUES 
            ${valueStr.slice(0, -1)}`
          )
          .then(res => console.log("<-- INSERTED TO (FIXALARMS) BBOD3_P -->", dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss")))
          .catch(err => console.log(err.message));
      }

      if(RP10_BBOD2_P.length > 0){
          db_scada.Calculated_AI1.bulkCreate([...RP10_BBOD2_P])
            .then(res => console.log("<-- INSERTED TO SQL BBOD2_P -->", dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss")))
            .catch(err => console.log(err.message));

          valueStr = "";

          RP10_BBOD2_P.forEach(el => {
            valueStr = valueStr + `('${el["ALM_NATIVETIMELAST"]}', '${el["ALM_NATIVETIMELAST"]}', '${el["ALM_TAGNAME"]}', '${el["ALM_VALUE"]}', '', 'ALARM', 'RATE' ),`
          });

          db_scada.sequelize.query(`
            INSERT INTO [FIXALARMS] (ALM_NATIVETIMEIN, ALM_NATIVETIMELAST, ALM_TAGNAME, ALM_VALUE, ALM_UNIT, ALM_MSGTYPE, ALM_ALMSTATUS)
            VALUES 
            ${valueStr.slice(0, -1)}`
          )
          .then(res => console.log("<-- INSERTED TO (FIXALARMS) BBOD2_P -->", dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss")))
          .catch(err => console.log(err.message));
      }

      RP10_BBOD3_P = [];
      RP10_BBOD2_P = [];

    }, 1000 * 60);

      
    
  } catch (err) {
    console.log(`${dayjs().format("YYYY-MM-DD HH:mm:ss")} Init функц дотроос алдаа баригдлаа :`, err.message);
    insertTimer && clearInterval(insertTimer);
  }
}


function calculatePower(json){

    switch (json.tag) {
      case "KP5X_ABB_T2_AI13":
        RP10_BBOD3_P.push({
          ALM_TAGNAME: "KP5X_ABB_T2_AI260",
          ALM_NATIVETIMELAST: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss.SSS"),
          ALM_VALUE: (realValues["KP5X_ABB_T2_AI17"].value * json.d * SQRT3 / 1000).toFixed(2)
        });
        break;
      case "KP5X_ABB_T2_AI17":
        RP10_BBOD3_P.push({
          ALM_TAGNAME: "KP5X_ABB_T2_AI260",
          ALM_NATIVETIMELAST: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss.SSS"),
          ALM_VALUE: (realValues["KP5X_ABB_T2_AI13"].value * json.d * SQRT3 / 1000).toFixed(2)
        });
        break;
      case "KP5X_ABB_T2_AI10":
        RP10_BBOD2_P.push({
          ALM_TAGNAME: "KP5X_ABB_T2_AI210",
          ALM_NATIVETIMELAST: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss.SSS"),
          ALM_VALUE: (realValues["KP5X_ABB_T2_AI14"].value * json.d * SQRT3 / 1000).toFixed(2)
        });
        break;
      case "KP5X_ABB_T2_AI14":
        RP10_BBOD2_P.push({
          ALM_TAGNAME: "KP5X_ABB_T2_AI210",
          ALM_NATIVETIMELAST: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss.SSS"),
          ALM_VALUE: (realValues["KP5X_ABB_T2_AI10"].value * json.d * SQRT3 / 1000).toFixed(2)
        });
        break;
      default:
      // code block
    }

}

init();
