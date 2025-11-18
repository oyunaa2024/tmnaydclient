const dotenv = require("dotenv");
const axios = require("axios");
const Stomp = require("stompjs");
const dayjs = require("dayjs");
const makeID = require("./utils/makeID");
const { headers } = require("./utils/base");
dotenv.config({ path: "./config/config.env" });
const db_scada = require("./config/db-mssql/scada");

const store = {
  KP2_AI1:{
    values:[],
    lastValue: "",
    rate:40,
    name:"хүчдэл",
    scale: 1
  },
}

let lastTime = 0, lastRaw = 0;

const id = makeID(20);

async function init() {
  try {

      // const response = await axios(`https://nayd.erdenetmc.mn/service/redis/get.php?${Object.keys(store).map(tag => `tags[]=ELEC_${tag}&`).join("")}`);

      // Object.keys(store).forEach((tag ,index) => {
      //   store[tag].values.push({
      //     ALM_TAGNAME: tag,
      //     ALM_NATIVETIMELAST: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss.SSS"),
      //     ALM_VALUE: (JSON.parse(response.data[index]).d / store[tag].scale).toFixed(2)
      //   });

      //   store[tag].lastValue = (JSON.parse(response.data[index]).d / store[tag].scale).toFixed(2);
      // });
      
      console.log("Тагууд анхны утгаа авсан...");

      const on_connect = async () => {
        console.log("WebSocket амжилттай холбогдлоо: sql_trend.js");

        await axios.get(`https://nayd.erdenetmc.mn/service/rmq/bind.php?id=${id}&tags[]=ELEC_KP2_AI1`);

        client.subscribe("/amq/queue/temp_" + id, (message) => {

          const json = JSON.parse(message.body);
          json.tag = message.headers.destination.substring(message.headers.destination.lastIndexOf("/") + 1);
          // json.tag = json.tag.substring(5, json.tag.length).split(".").join("_");

          const mA = json.d * 16 / 7500 + 4;
          const raw = 32000 / 16 * (mA - 4);
          const rawDif = raw - lastRaw;
          lastRaw = raw;
          const timeDif = (json.t - lastTime) / 1000;
          lastTime = json.t
          const rateofchange = Math.abs(rawDif / timeDif)

          if(40 <= rateofchange){
            console.log(dayjs(json.t).format("YYYY-MM-DD hh:mm:ss.SSS") + " ==> " + json.d + " ==> " + mA.toFixed(2) +  " ==> " + Math.ceil(raw) + " ==> " + timeDif +  " ==> " + rateofchange);

          }
          
          
        });
        
      };
      const on_error = (error) => console.log(`${dayjs().format("YYYY-MM-DD HH:mm:ss")} WebSocket дээр алдаа гарлаа: `, error);

      const client = Stomp.overWS("wss://rabbit.erdenetmc.mn:15673/ws");
      client.connect(headers, on_connect, on_error);

  } 
  catch (err) {
      console.log(`${dayjs().format("YYYY-MM-DD HH:mm:ss")} Init функц дотроос алдаа баригдлаа :`, err.message);
  }

}

init();
