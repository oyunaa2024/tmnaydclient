const dotenv = require("dotenv");
const axios = require("axios");
const Stomp = require("stompjs");
const dayjs = require("dayjs");
const makeID = require("./utils/makeID");
const { headers } = require("./utils/base");
dotenv.config({ path: "./config/config.env" });
const db_scada = require("./config/db-mssql/scada");

const store = {
  OVT2_UCOM_T1_AI1: {
    values: [],
    lastValue: "",
    name: "T-1 35кВ гүйдэл А фаз",
    scale: 1
  },
  OVT2_UCOM_T1_AI2: {
    values: [],
    lastValue: "",
    name: "T-1 35кВ гүйдэл B фаз",
    scale: 1
  },
  OVT2_UCOM_T1_AI3: {
    values: [],
    lastValue: "",
    name: "T-1 35кВ гүйдэл C фаз",
    scale: 1
  },
  OVT2_UCOM_T1_AI4: {
    values: [],
    lastValue: "",
    name: "T-1 Тосны температур",
    scale: 1
  },
  OVT2_UCOM_T1_AI5: {
    values: [],
    lastValue: "",
    name: "T-1 РПН",
    scale: 1
  },
  OVT2_UCOM_T2_AI1: {
    values: [],
    lastValue: "",
    name: "T-2 35кВ гүйдэл А фаз",
    scale: 1
  },
  OVT2_UCOM_T2_AI2: {
    values: [],
    lastValue: "",
    name: "T-2 35кВ гүйдэл B фаз",
    scale: 1
  },
  OVT2_UCOM_T2_AI3: {
    values: [],
    lastValue: "",
    name: "T-2 35кВ гүйдэл C фаз",
    scale: 1
  },
  OVT2_UCOM_T2_AI4: {
    values: [],
    lastValue: "",
    name: "T-2 Тосны температур",
    scale: 1
  },
  OVT2_UCOM_T2_AI5: {
    values: [],
    lastValue: "",
    name: "T-2 РПН",
    scale: 1
  },
  OVT2_UCOM_F16_AI1: {
    values: [],
    lastValue: "",
    name: "Оруулга-1 хүчдэл",
    scale: 1
  },
  OVT2_UCOM_F18_AI12: {
    values: [],
    lastValue: "",
    name: "Оруулга-1 чадал",
    scale: 1
  },
  OVT2_UCOM_F15_AI1: {
    values: [],
    lastValue: "",
    name: "Оруулга-2 хүчдэл",
    scale: 1
  },
  OVT2_UCOM_F17_AI12: {
    values: [],
    lastValue: "",
    name: "Оруулга-1 чадал",
    scale: 1
  },
  OVT2_UCOM_F11_AI4: {
    values: [],
    lastValue: "",
    name: "Фидер-11 чадал",
    scale: 1
  },
  OVT2_UCOM_F12_AI4: {
    values: [],
    lastValue: "",
    name: "Фидер-12 чадал",
    scale: 1
  },
  OVT2_UCOM_F13_AI4: {
    values: [],
    lastValue: "",
    name: "Фидер-13 чадал",
    scale: 1
  },
  OVT2_UCOM_F10_AI4: {
    values: [],
    lastValue: "",
    name: "Фидер-10 чадал",
    scale: 1
  },
  OVT2_UCOM_F8_AI4: {
    values: [],
    lastValue: "",
    name: "Фидер-8 чадал",
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
      console.log("WebSocket амжилттай холбогдлоо: aranjin_trend.js");

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
      const insertData = [].concat(...Object.keys(store).map(tag => {
        if (store[tag].values.length == 0) {
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
        .catch(err => {
          console.log("SQL серверт бичих үед алдаа гарлаа :", err.message);
          clearInterval(insertTimer);
        });


      // Хүснэгтийн бодолтонд оруулах тагийг энд оруулна. Энд оруулсан тагууд FIXALARMS табелрүү орно.
      // [[...], [...]]
      const arr = ['OVT2_UCOM_F17_AI12', 'OVT2_UCOM_F18_AI12', 'OVT2_UCOM_F15_AI1', 'OVT2_UCOM_F16_AI1', 'OVT2_UCOM_T2_AI4', 'OVT2_UCOM_T1_AI4'].map(tag => {
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
        .then(res => console.log("<-- INSERTED TO (FIXALARMS) -->", dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss")))
        .catch(err => {
          console.log("FIXALARMS-д бичих үед алдаа гарлаа :", err.message);
          clearInterval(insertTimer);
        });


      Object.keys(store).forEach(tag => store[tag].values.length = 0);


    }, 1000 * 30); // ms * 30

  }
  catch (err) {
    console.log(`${dayjs().format("YYYY-MM-DD HH:mm:ss")} Init функц дотроос алдаа баригдлаа :`, err.message);
  }
}

init();
