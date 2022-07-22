const axios = require("axios");
const Stomp = require("stompjs");
const dayjs = require("dayjs");
const makeID = require("./utils/makeID");
const { headers } = require("./utils/base");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

const db_scada = require("./config/db-mssql/scada");

const tags = ["KP5X_ABB_T2_AI13", "KP5X_ABB_T2_AI14", "KP5X_ABB_T2_AI10", "KP5X_ABB_T2_AI17"];

const id = makeID(20);
let realValues = {};
let RP10_BBOD3 = [];
let RP10_BBOD2 = [];
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

    RP10_BBOD3.push({
      ALM_TAGNAME: "RP10_BBOD3",
      ALM_NATIVETIMELAST: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss.SSS"),
      ALM_VALUE: (realValues["KP5X_ABB_T2_AI10"].value * realValues["KP5X_ABB_T2_AI17"].value * SQRT3 / 1000).toFixed(2)
    });
    RP10_BBOD2.push({
      ALM_TAGNAME: "RP10_BBOD2",
      ALM_NATIVETIMELAST: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss.SSS"),
      ALM_VALUE: (realValues["KP5X_ABB_T2_AI13"].value * realValues["KP5X_ABB_T2_AI14"].value * SQRT3 / 1000).toFixed(2)
    });

    const on_connect = async () => {
      console.log("WebSocket амжилттай холбогдлоо: calcAI.js");

      for (let tag of tags) {
        await axios.get(
          `https://nayd.erdenetmc.mn/service/rmq/bind.php?id=${id}&tags[]=ELEC_${tag}`
        );
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

      if(RP10_BBOD3.length > 0){
          db_scada.Calculated_AI1.bulkCreate([...RP10_BBOD3])
            .then(res => console.log("<-- INSERTED TO SQL BBOD3 -->", dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss")))
            .catch(err => console.log(err.message));
      }

      if(RP10_BBOD2.length > 0){
          db_scada.Calculated_AI1.bulkCreate([...RP10_BBOD2])
            .then(res => console.log("<-- INSERTED TO SQL BBOD2 -->", dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss")))
            .catch(err => console.log(err.message));
      }

      RP10_BBOD3 = [];
      RP10_BBOD2 = [];

    }, 1000 * 60);

      
    
  } catch (err) {
      console.log(
        "Init функц дотроос алдаа гарлаа ==> Error :",
        err.response ? err.response.data : err.message
      );
      let now = dayjs();
      console.log(now.format("YYYY-MM-DD HH:mm:ss"));

      clearInterval(myTimer);
  }
}

function calculatePower(json){
    if(json.tag === "KP5X_ABB_T2_AI10" || json.tag === "KP5X_ABB_T2_AI17") {
        if(json.tag === "KP5X_ABB_T2_AI10") {
          RP10_BBOD3.push({
            ALM_TAGNAME: "RP10_BBOD3",
            ALM_NATIVETIMELAST: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss.SSS"),
            ALM_VALUE: (realValues["KP5X_ABB_T2_AI17"].value * json.d * SQRT3 / 1000).toFixed(2)
          });
        }
        else {
          RP10_BBOD3.push({
            ALM_TAGNAME: "RP10_BBOD3",
            ALM_NATIVETIMELAST: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss.SSS"),
            ALM_VALUE: (realValues["KP5X_ABB_T2_AI10"].value * json.d * SQRT3 / 1000).toFixed(2)
          });
        }
    } else if(json.tag === "KP5X_ABB_T2_AI13") {
        RP10_BBOD2.push({
          ALM_TAGNAME: "RP10_BBOD2",
          ALM_NATIVETIMELAST: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss.SSS"),
          ALM_VALUE: (realValues["KP5X_ABB_T2_AI14"].value * json.d * SQRT3 / 1000).toFixed(2)
        });
    }
    else {
          RP10_BBOD2.push({
            ALM_TAGNAME: "RP10_BBOD2",
            ALM_NATIVETIMELAST: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss.SSS"),
            ALM_VALUE: (realValues["KP5X_ABB_T2_AI13"].value * json.d * SQRT3 / 1000).toFixed(2)
          });
    }
}

init();
