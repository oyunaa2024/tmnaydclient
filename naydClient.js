const axios = require("axios");
const Stomp = require("stompjs");
const dayjs = require("dayjs");
const makeID = require("./utils/makeID");
const { headers, tags } = require("./utils/base");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

const db_scada = require("./config/db-mssql/scada");

const id = makeID(20);
let sum = {};
let realValues = {};

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
      sum[tag] = {
        value: 0,
        count: 0,
      };
    }
    console.log("Тагууд анхны утгаа авлаа...");

    const on_connect = async () => {
      console.log("WebSocket амжилттай холбогдлоо: naydClient.js");

      for (let tag of tags) {
        await axios.get(
          `https://nayd.erdenetmc.mn/service/rmq/bind.php?id=${id}&tags[]=ELEC_${tag}`
        );
      }
      console.log("Bind success...");

      client.subscribe("/amq/queue/temp_" + id, (message) => {
        const json = JSON.parse(message.body);
        json.tag = message.headers.destination.substring(
          message.headers.destination.lastIndexOf("/") + 1
        );
        json.tag = json.tag.substring(5, json.tag.length).split(".").join("_");

        let nowTimestamp = Date.now();
        let millSec = nowTimestamp - realValues[json.tag].timestamp;

        sum[json.tag].value = parseFloat(
          (sum[json.tag].value + realValues[json.tag].value * millSec).toFixed(
            2
          )
        );
        sum[json.tag].count += millSec;

        realValues[json.tag].value = json.d;
        realValues[json.tag].timestamp = nowTimestamp;

        if (json.tag === "KP3_PII_KOTB_AI1") {
          console.log(json);
        }
      });
    };
    const on_error = (error) => {
      console.log("WebSocket холболт салсан ==> Error :", error);
      let now = dayjs();
      console.log(now.format("YYYY-MM-DD HH:mm:ss"));
    };

    const client = Stomp.overWS("wss://rabbit.erdenetmc.mn:15673/ws");
    client.connect(headers, on_connect, on_error);

    let myInterval = setInterval(() => {
      if (new Date().getSeconds() == 0) {
        console.log("Дундаж утга бодох хэсэг");
    
        const realValuesCopy = { ...realValues };
        const sumCopy = { ...sum };
        const average = {};
    
        let nowTimestamp = Date.now();
    
        for (let [key, obj] of Object.entries(sumCopy)) {
          average[key] = parseFloat(
            (
              (obj.value +
                realValuesCopy[key].value *
                  (nowTimestamp - realValuesCopy[key].timestamp)) /
              (obj.count + (nowTimestamp - realValuesCopy[key].timestamp))
            ).toFixed(2)
          );
          realValuesCopy[key].timestamp = nowTimestamp;
          sumCopy[key] = {
            value: 0,
            count: 0,
          };
        }
        sum = { ...sumCopy };
        realValues = { ...realValuesCopy };
    
        let now = dayjs();
        // console.log(`"${now.format('YYYY-MM-DD HH:mm:ss')}" 1 минутын дундаж SQL серверлүү бичигдлээ`, average["KP3_PII_KOTB_AI1"]);
        // console.log("-----------------------------------------------------------------------------------------------------------------\n")
    
        db_scada.Last_24Hour_AI_Graphic_m1.create({
          ValueDate: now.format("YYYY-MM-DD HH:mm:ss"),
          ...average,
        })
          .then((r) => {
            console.log(
              `"${now.format(
                "YYYY-MM-DD HH:mm:ss"
              )}" 1 минутын дундаж SQL серверлүү бичигдлээ`,
              average["KP3_PII_KOTB_AI1"]
            );
            console.log(
              "...............................................................................................................\n"
            );
          })
          .catch((err) =>
            console.log(err.response ? err.response.data : err.message)
          );
      }
    }, 1000);
    
  } catch (err) {
    console.log(
      "Init функц дотроос алдаа гарлаа ==> Error :",
      err.response ? err.response.data : err.message
    );
    let now = dayjs();
    console.log(now.format("YYYY-MM-DD HH:mm:ss"));
    clearInterval(myInterval);
  }
}

init();
