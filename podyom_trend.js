const dotenv = require("dotenv");
const axios = require("axios");
const Stomp = require("stompjs");
const dayjs = require("dayjs");
const makeID = require("./utils/makeID");
const { headers } = require("./utils/base");
dotenv.config({ path: "./config/config.env" });
const db_scada = require("./config/db-mssql/scada");

const store = {
  SIM31_N1_DBD28: {
    values: [],
    lastValue: "",
    name: "УӨС-IV Давление всаса насос-1",
    scale: 1
  },
  SIM31_N1_DBD32: {
    values: [],
    lastValue: "",
    name: "УӨС-IV Давление напора насос-1",
    scale: 1
  },
  SIM31_N1_DBD24: {
    values: [],
    lastValue: "",
    name: "УӨС-IV Актив мошность насос-1",
    scale: 1
  },
  SIM31_N2_DBD28: {
    values: [],
    lastValue: "",
    name: "УӨС-IV Давление всаса насос-2",
    scale: 1
  },
  SIM31_N2_DBD32: {
    values: [],
    lastValue: "",
    name: "УӨС-IV Давление напора насос-2",
    scale: 1
  },
  SIM31_N2_DBD24: {
    values: [],
    lastValue: "",
    name: "УӨС-IV Актив мошность насос-2",
    scale: 1
  },
  SIM31_N3_DBD28: {
    values: [],
    lastValue: "",
    name: "УӨС-IV Давление всаса насос-3",
    scale: 1
  },
  SIM31_N3_DBD32: {
    values: [],
    lastValue: "",
    name: "УӨС-IV Давление напора насос-3",
    scale: 1
  },
  SIM31_N3_DBD24: {
    values: [],
    lastValue: "",
    name: "УӨС-IV Актив мошность насос-3",
    scale: 1
  },
  SIM31_N4_DBD28: {
    values: [],
    lastValue: "",
    name: "УӨС-IV Давление всаса насос-4",
    scale: 1
  },
  SIM31_N4_DBD32: {
    values: [],
    lastValue: "",
    name: "УӨС-IV Давление напора насос-4",
    scale: 1
  },
  SIM31_N4_DBD24: {
    values: [],
    lastValue: "",
    name: "УӨС-IV Актив мошность насос-4",
    scale: 1
  },
  SIM31_N5_DBD28: {
    values: [],
    lastValue: "",
    name: "УӨС-IV Давление всаса насос-5",
    scale: 1
  },
  SIM31_N5_DBD32: {
    values: [],
    lastValue: "",
    name: "УӨС-IV Давление напора насос-5",
    scale: 1
  },
  SIM31_N5_DBD24: {
    values: [],
    lastValue: "",
    name: "УӨС-IV Актив мошность насос-5",
    scale: 1
  },
  SIM31_N4_DBD36: {
    values: [],
    lastValue: "",
    name: "Давление коллектора, насос - 4",
    scale: 1
  },
  SIM31_N1_DBD36: {
    values: [],
    lastValue: "",
    name: "Давление коллектора насос-1",
    scale: 1
  },
  SIM30_N1_DBD28: {
    values: [],
    lastValue: "",
    name: "УӨС-III Давление всаса насос-1",
    scale: 1
  },
  SIM30_N1_DBD32: {
    values: [],
    lastValue: "",
    name: "УӨС-III Давление напора насос-1",
    scale: 1
  },
  SIM30_N1_DBD24: {
    values: [],
    lastValue: "",
    name: "УӨС-III Актив мошность насос-1",
    scale: 1
  },
  SIM30_N2_DBD28: {
    values: [],
    lastValue: "",
    name: "УӨС-III Давление всаса насос-2",
    scale: 1
  },
  SIM30_N2_DBD32: {
    values: [],
    lastValue: "",
    name: "УӨС-III Давление напора насос-2",
    scale: 1
  },
  SIM30_N2_DBD24: {
    values: [],
    lastValue: "",
    name: "УӨС-III Актив мошность насос-2",
    scale: 1
  },
  SIM30_N3_DBD28: {
    values: [],
    lastValue: "",
    name: "УӨС-III Давление всаса насос-3",
    scale: 1
  },
  SIM30_N3_DBD32: {
    values: [],
    lastValue: "",
    name: "УӨС-III Давление напора насос-3",
    scale: 1
  },
  SIM30_N3_DBD24: {
    values: [],
    lastValue: "",
    name: "УӨС-III Актив мошность насос-3",
    scale: 1
  },
  SIM30_N4_DBD28: {
    values: [],
    lastValue: "",
    name: "УӨС-III Давление всаса насос-4",
    scale: 1
  },
  SIM30_N4_DBD32: {
    values: [],
    lastValue: "",
    name: "УӨС-III Давление напора насос-4",
    scale: 1
  },
  SIM30_N4_DBD24: {
    values: [],
    lastValue: "",
    name: "УӨС-III Актив мошность насос-4",
    scale: 1
  },
  SIM30_N5_DBD28: {
    values: [],
    lastValue: "",
    name: "УӨС-III Давление всаса насос-5",
    scale: 1
  },
  SIM30_N5_DBD32: {
    values: [],
    lastValue: "",
    name: "УӨС-III Давление напора насос-5",
    scale: 1
  },
  SIM30_N5_DBD24: {
    values: [],
    lastValue: "",
    name: "УӨС-III Актив мошность насос-5",
    scale: 1
  },
  SIM30_N4_DBD36: {
    values: [],
    lastValue: "",
    name: "Давление коллектора, насос - 4",
    scale: 1
  },
  SIM30_N1_DBD36: {
    values: [],
    lastValue: "",
    name: "Давление коллектора насос-1",
    scale: 1
  },
  SIM29_N1_DBD28: {
    values: [],
    lastValue: "",
    name: "УӨС-II Давление всаса насос-1",
    scale: 1
  },
  SIM29_N1_DBD32: {
    values: [],
    lastValue: "",
    name: "УӨС-II Давление напора насос-1",
    scale: 1
  },
  SIM29_N1_DBD24: {
    values: [],
    lastValue: "",
    name: "УӨС-II Актив мошность насос-1",
    scale: 1
  },
  SIM29_N2_DBD28: {
    values: [],
    lastValue: "",
    name: "УӨС-II Давление всаса насос-2",
    scale: 1
  },
  SIM29_N2_DBD32: {
    values: [],
    lastValue: "",
    name: "УӨС-II Давление напора насос-2",
    scale: 1
  },
  SIM29_N2_DBD24: {
    values: [],
    lastValue: "",
    name: "УӨС-II Актив мошность насос-2",
    scale: 1
  },
  SIM29_N3_DBD28: {
    values: [],
    lastValue: "",
    name: "УӨС-II Давление всаса насос-3",
    scale: 1
  },
  SIM29_N3_DBD32: {
    values: [],
    lastValue: "",
    name: "УӨС-II Давление напора насос-3",
    scale: 1
  },
  SIM29_N3_DBD24: {
    values: [],
    lastValue: "",
    name: "УӨС-II Актив мошность насос-3",
    scale: 1
  },
  SIM29_N4_DBD28: {
    values: [],
    lastValue: "",
    name: "УӨС-II Давление всаса насос-4",
    scale: 1
  },
  SIM29_N4_DBD32: {
    values: [],
    lastValue: "",
    name: "УӨС-II Давление напора насос-4",
    scale: 1
  },
  SIM29_N4_DBD24: {
    values: [],
    lastValue: "",
    name: "УӨС-II Актив мошность насос-4",
    scale: 1
  },
  SIM29_N5_DBD28: {
    values: [],
    lastValue: "",
    name: "УӨС-II Давление всаса насос-5",
    scale: 1
  },
  SIM29_N5_DBD32: {
    values: [],
    lastValue: "",
    name: "УӨС-II Давление напора насос-5",
    scale: 1
  },
  SIM29_N5_DBD24: {
    values: [],
    lastValue: "",
    name: "УӨС-II Актив мошность насос-5",
    scale: 1
  },
  SIM29_N4_DBD36: {
    values: [],
    lastValue: "",
    name: "Давление коллектора, насос - 4",
    scale: 1
  },
  SIM29_N1_DBD36: {
    values: [],
    lastValue: "",
    name: "Давление коллектора насос-1",
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
      console.log("WebSocket амжилттай холбогдлоо: podyom_trend.js");

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
      const arr = ['SIM31_N1_DBD24'].map(tag => {
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


    }, 1000 * 35); // ms * 35

  }
  catch (err) {
    console.log(`${dayjs().format("YYYY-MM-DD HH:mm:ss")} Init функц дотроос алдаа баригдлаа :`, err.message);
  }
}

init();
