const dotenv = require("dotenv");
const axios = require("axios");
const Stomp = require("stompjs");
const dayjs = require("dayjs");
const makeID = require("./utils/makeID");
const { headers } = require("./utils/base");
dotenv.config({ path: "./config/config.env" });
const db_scada = require("./config/db-mssql/scada");

const store = {
  KP11_PII_B1_AI1: {
    values: [],
    lastValue: "",
    name: "ЦРП-5 яч1 Ор-1 (МВт.цаг)",
    scale: 1
  },
  KP11_PII_B2_AI1: {
    values: [],
    lastValue: "",
    name: "ЦРП-5 яч31 Ор-2 (МВт.цаг)",
    scale: 1
  },
  KP11_AI12: {
    values: [],
    lastValue: "",
    name: "ЦРП-5 яч5 ЗМЦ Iс (МВт.цаг)",
    scale: 1
  },
  KP11_AI13: {
    values: [],
    lastValue: "",
    name: "ЦРП-5 яч27 ЗМЦ IIс (МВт.цаг)",
    scale: 1
  },
  KP11_AI9: {
    values: [],
    lastValue: "",
    name: "ЦРП-5 яч7 ЦЦ Iс (МВт.цаг)",
    scale: 1
  },
  KP11_AI10: {
    values: [],
    lastValue: "",
    name: "ЦРП-5 яч25 ЦЦ IIс (МВт.цаг)",
    scale: 1
  },
  KP11_AI14: {
    values: [],
    lastValue: "",
    name: "ЦРП-5 яч12 ТП-512 Т2 Эрдмин (МВт.цаг)",
    scale: 1
  },
  KP11_AI15: {
    values: [],
    lastValue: "",
    name: "ЦРП-5 яч18 ТП-512 Т1 Эрдмин (МВт.цаг)",
    scale: 1
  },
  KP5X_UCOM_F301_AI4: {
    values: [],
    lastValue: "",
    name: "L Уровень резеруаре №3",
    scale: 1
  },

  KP3_PII_GOKA_AI1: {
    values: [],
    lastValue: "",
    name: "GOKA P",
    scale: 1
  },
  KP3_PII_GOKB_AI1: {
    values: [],
    lastValue: "",
    name: "GOKB P",
    scale: 1
  },
  KP3_PII_GOKG_AI1: {
    values: [],
    lastValue: "",
    name: "GOKG P",
    scale: 1
  },
  KP3_PII_GOKD_AI1: {
    values: [],
    lastValue: "",
    name: "GOKD P",
    scale: 1
  },

  KP3_PII_KHYLA_AI1: {
    values: [],
    lastValue: "",
    name: "KHYLA P",
    scale: 1
  },
  KP3_PII_KHYLB_AI1: {
    values: [],
    lastValue: "",
    name: "KHYLB P",
    scale: 1
  },

  KP3_PII_OCHISTA_AI1: {
    values: [],
    lastValue: "",
    name: "OCHISTA P",
    scale: 1
  },
  KP3_PII_OCHISTB_AI1: {
    values: [],
    lastValue: "",
    name: "OCHISTB P",
    scale: 1
  },

  KP3_PII_KOTA_AI1: {
    values: [],
    lastValue: "",
    name: "KOTA P",
    scale: 1
  },
  KP3_PII_KOTB_AI1: {
    values: [],
    lastValue: "",
    name: "KOTB P",
    scale: 1
  },
}

const id = makeID(20);

async function init() {
  try {

    const response = await axios(`https://nayd.erdenetmc.mn/service/redis/get.php?${Object.keys(store).map(tag => `tags[]=ELEC_${tag}&`).join("")}`);

    Object.keys(store).forEach((tag, index) => {
      store[tag].values.push({
        ALM_TAGNAME: tag,
        ALM_NATIVETIMELAST: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss.SSS"),
        ALM_VALUE: (JSON.parse(response.data[index]).d * store[tag].scale).toFixed(2)
      });

      store[tag].lastValue = (JSON.parse(response.data[index]).d * store[tag].scale).toFixed(2);
    });

    console.log("Тагууд анхны утгаа авсан...");

    const on_connect = async () => {
      console.log("WebSocket амжилттай холбогдлоо: table_data.js");

      await axios.get(`https://nayd.erdenetmc.mn/service/rmq/bind.php?id=${id}&${Object.keys(store).map(tag => `tags[]=ELEC_${tag}&`).join("")}`);

      client.subscribe("/amq/queue/temp_" + id, (message) => {

        const json = JSON.parse(message.body);
        json.tag = message.headers.destination.substring(message.headers.destination.lastIndexOf("/") + 1);
        json.tag = json.tag.substring(5, json.tag.length).split(".").join("_");

        store[json.tag].values.push({
          ALM_TAGNAME: json.tag,
          ALM_NATIVETIMELAST: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss.SSS"),
          ALM_VALUE: (json.d * store[json.tag].scale).toFixed(2)
        });

        store[json.tag].lastValue = (json.d * store[json.tag].scale).toFixed(2);

      });

    };
    const on_error = (error) => console.log(`${dayjs().format("YYYY-MM-DD HH:mm:ss")} WebSocket дээр алдаа гарлаа: `, error);

    const client = Stomp.overWS("wss://rabbit.erdenetmc.mn:15673/ws");
    client.connect(headers, on_connect, on_error);

    const insertTimer = setInterval(() => {

      // [[...], [...]] -> [... ...]
      // const insertData = [].concat(...Object.keys(store).map(tag => {
      //   if (store[tag].values.length == 0) {
      //     return [{
      //       ALM_TAGNAME: tag,
      //       ALM_NATIVETIMELAST: dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss.SSS"),
      //       ALM_VALUE: store[tag].lastValue
      //     }];
      //   }

      //   return store[tag].values;
      // }));



      // db_scada.Calculated_AI1.bulkCreate(insertData)
      //   .then(res => console.log(`-${dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss")}- SQL серверт амжилттай бичигдлээ...`))
      //   .catch(err => {
      //     console.log("SQL серверт бичих үед алдаа гарлаа :", err.message);
      //     clearInterval(insertTimer);
      //   });


      // Хүснэгтийн бодолтонд оруулах тагийг энд оруулна. Энд оруулсан тагууд FIXALARMS табелрүү орно.
      // [[...], [...]]
      const arr = Object.keys(store).map(tag => {
        if (store[tag].values.length == 0) {
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
        .then(res => console.log("<-- INSERTED TO (FIXALARMS) table_data.js -->", dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss")))
        .catch(err => {
          console.log("FIXALARMS-д бичих үед алдаа гарлаа :", err.message);
          clearInterval(insertTimer);
        });


      Object.keys(store).forEach(tag => store[tag].values.length = 0);


    }, 1000 * 20); // ms * 20

  }
  catch (err) {
    console.log(`${dayjs().format("YYYY-MM-DD HH:mm:ss")} Init функц дотроос алдаа баригдлаа :`, err.message);
  }
}

init();
