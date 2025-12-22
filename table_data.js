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
  KP11_PII_B1_AI3: {
    values: [],
    lastValue: "",
    name: "ЦРП-5 яч1 Бүрэн чадал Ic (МВа)",
    scale: 1
  },
  KP11_PII_B1_AI2: {
    values: [],
    lastValue: "",
    name: "ЦРП-5 яч1 Хуурмаг чадал Ic (МВар)",
    scale: 1
  },
  KP11_PII_B1_AI6: {
    values: [],
    lastValue: "",
    name: "ЦРП-5 яч1 Гүйдэл Фаз А Ic (А)",
    scale: 1
  },
  KP11_PII_B1_AI7: {
    values: [],
    lastValue: "",
    name: "ЦРП-5 яч1 Давтамж Ic (Гц)",
    scale: 1
  },
  KP11_PII_B1_AI4: {
    values: [],
    lastValue: "",
    name: "ЦРП-5 яч1 Cosf Ic (Гц)",
    scale: 1
  },
  KP11_PII_B1_AI5: {
    values: [],
    lastValue: "",
    name: "ЦРП-5 яч1 Хүчдэл Ic (В)",
    scale: 1
  },
  KP11_PII_B2_AI1: {
    values: [],
    lastValue: "",
    name: "ЦРП-5 яч31 Ор-2 (МВт.цаг)",
    scale: 1
  },
  KP11_PII_B2_AI3: {
    values: [],
    lastValue: "",
    name: "ЦРП-5 яч1 Бүрэн чадал IIc (МВа)",
    scale: 1
  },
  KP11_PII_B2_AI2: {
    values: [],
    lastValue: "",
    name: "ЦРП-5 яч1 Хуурмаг чадал IIc (МВар)",
    scale: 1
  },
  KP11_PII_B2_AI6: {
    values: [],
    lastValue: "",
    name: "ЦРП-5 яч1 Гүйдэл Фаз А IIc (А)",
    scale: 1
  },
  KP11_PII_B2_AI7: {
    values: [],
    lastValue: "",
    name: "ЦРП-5 яч1 Давтамж IIc (Гц)",
    scale: 1
  },
  KP11_PII_B2_AI4: {
    values: [],
    lastValue: "",
    name: "ЦРП-5 яч1 Cosf IIc (Гц)",
    scale: 1
  },
  KP11_PII_B2_AI5: {
    values: [],
    lastValue: "",
    name: "ЦРП-5 яч1 Хүчдэл IIc (В)",
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
  KP4_AI7: {
    values: [],
    lastValue: "",
    name: " АТБ Т-1-ийн чадал (МВт.цаг)",
    scale: 1
  },
  KP4_AI8: {
    values: [],
    lastValue: "",
    name: " АТБ Т-2-ийн чадал (МВт.цаг)",
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
  KP3_PII_GOKA_AI6: {
    values: [],
    lastValue: "",
    name: "GOKA S",
    scale: 1
  },
  KP3_PII_GOKA_AI5: {
    values: [],
    lastValue: "",
    name: "GOKA Q",
    scale: 1
  },
  KP3_PII_GOKA_AI2: {
    values: [],
    lastValue: "",
    name: "GOKA Cos",
    scale: 1
  },
  KP3_PII_GOKA_AI3: {
    values: [],
    lastValue: "",
    name: "GOKA I",
    scale: 1
  },
  KP3_PII_GOKA_AI10: {
    values: [],
    lastValue: "",
    name: "GOKA U",
    scale: 1
  },
  KP3_PII_GOKB_AI1: {
    values: [],
    lastValue: "",
    name: "GOKB P",
    scale: 1
  },
    KP3_PII_GOKB_AI6: {
    values: [],
    lastValue: "",
    name: "GOKB S",
    scale: 1
  },
  KP3_PII_GOKB_AI5: {
    values: [],
    lastValue: "",
    name: "GOKB Q",
    scale: 1
  },
  KP3_PII_GOKB_AI2: {
    values: [],
    lastValue: "",
    name: "GOKB Cos",
    scale: 1
  },
  KP3_PII_GOKB_AI3: {
    values: [],
    lastValue: "",
    name: "GOKB I",
    scale: 1
  },
  KP3_PII_GOKB_AI10: {
    values: [],
    lastValue: "",
    name: "GOKB U",
    scale: 1
  },
  KP3_PII_GOKG_AI1: {
    values: [],
    lastValue: "",
    name: "GOKG P",
    scale: 1
  },
  KP3_PII_GOKG_AI6: {
    values: [],
    lastValue: "",
    name: "GOKG S",
    scale: 1
  },
  KP3_PII_GOKG_AI5: {
    values: [],
    lastValue: "",
    name: "GOKG Q",
    scale: 1
  },
  KP3_PII_GOKG_AI2: {
    values: [],
    lastValue: "",
    name: "GOKG Cos",
    scale: 1
  },
  KP3_PII_GOKG_AI3: {
    values: [],
    lastValue: "",
    name: "GOKG I",
    scale: 1
  },
  KP3_PII_GOKG_AI10: {
    values: [],
    lastValue: "",
    name: "GOKG U",
    scale: 1
  },
  KP3_PII_GOKD_AI1: {
    values: [],
    lastValue: "",
    name: "GOKD P",
    scale: 1
  },
  KP3_PII_GOKD_AI6: {
    values: [],
    lastValue: "",
    name: "GOKD S",
    scale: 1
  },
  KP3_PII_GOKD_AI5: {
    values: [],
    lastValue: "",
    name: "GOKD Q",
    scale: 1
  },
  KP3_PII_GOKD_AI2: {
    values: [],
    lastValue: "",
    name: "GOKD Cos",
    scale: 1
  },
  KP3_PII_GOKD_AI3: {
    values: [],
    lastValue: "",
    name: "GOKD I",
    scale: 1
  },
  KP3_PII_GOKD_AI10: {
    values: [],
    lastValue: "",
    name: "GOKD U",
    scale: 1
  },

  KP3_PII_KHYLA_AI1: {
    values: [],
    lastValue: "",
    name: "KHYLA P",
    scale: 1
  },
  KP3_PII_KHYLA_AI6: {
    values: [],
    lastValue: "",
    name: "KHYLA S",
    scale: 1
  },
  KP3_PII_KHYLA_AI5: {
    values: [],
    lastValue: "",
    name: "KHYLA Q",
    scale: 1
  },
  KP3_PII_KHYLA_AI2: {
    values: [],
    lastValue: "",
    name: "KHYLA Cos",
    scale: 1
  },
  KP3_PII_KHYLA_AI3: {
    values: [],
    lastValue: "",
    name: "KHYLA I",
    scale: 1
  },
  KP3_PII_KHYLA_AI10: {
    values: [],
    lastValue: "",
    name: "KHYLA U",
    scale: 1
  },
  KP3_PII_KHYLB_AI1: {
    values: [],
    lastValue: "",
    name: "KHYLB P",
    scale: 1
  },
  KP3_PII_KHYLB_AI6: {
    values: [],
    lastValue: "",
    name: "KHYLB S",
    scale: 1
  },
  KP3_PII_KHYLB_AI5: {
    values: [],
    lastValue: "",
    name: "KHYLB Q",
    scale: 1
  },
  KP3_PII_KHYLB_AI2: {
    values: [],
    lastValue: "",
    name: "KHYLB Cos",
    scale: 1
  },
  KP3_PII_KHYLB_AI3: {
    values: [],
    lastValue: "",
    name: "KHYLB I",
    scale: 1
  },
  KP3_PII_KHYLB_AI10: {
    values: [],
    lastValue: "",
    name: "KHYLB U",
    scale: 1
  },

  KP3_PII_OCHISTA_AI1: {
    values: [],
    lastValue: "",
    name: "OCHISTA P",
    scale: 1
  },
  KP3_PII_OCHISTA_AI6: {
    values: [],
    lastValue: "",
    name: "GOCHISTA S",
    scale: 1
  },
  KP3_PII_OCHISTA_AI5: {
    values: [],
    lastValue: "",
    name: "OCHISTA Q",
    scale: 1
  },
  KP3_PII_OCHISTA_AI2: {
    values: [],
    lastValue: "",
    name: "OCHISTA Cos",
    scale: 1
  },
  KP3_PII_OCHISTA_AI3: {
    values: [],
    lastValue: "",
    name: "KOCHISTA I",
    scale: 1
  },
  KP3_PII_OCHISTA_AI10: {
    values: [],
    lastValue: "",
    name: "OCHISTA U",
    scale: 1
  },
  KP3_PII_OCHISTB_AI1: {
    values: [],
    lastValue: "",
    name: "OCHISTB P",
    scale: 1
  },
  KP3_PII_OCHISTB_AI6: {
    values: [],
    lastValue: "",
    name: "OCHISTB S",
    scale: 1
  },
  KP3_PII_OCHISTB_AI5: {
    values: [],
    lastValue: "",
    name: "OCHISTB Q",
    scale: 1
  },
  KP3_PII_OCHISTB_AI2: {
    values: [],
    lastValue: "",
    name: "OCHISTB Cos",
    scale: 1
  },
  KP3_PII_OCHISTB_AI3: {
    values: [],
    lastValue: "",
    name: "KOCHISTB I",
    scale: 1
  },
  KP3_PII_OCHISTB_AI10: {
    values: [],
    lastValue: "",
    name: "OCHISTB U",
    scale: 1
  },

  KP3_PII_KOTA_AI1: {
    values: [],
    lastValue: "",
    name: "KOTA P",
    scale: 1
  },
  KP3_PII_KOTA_AI6: {
    values: [],
    lastValue: "",
    name: "KOTA S",
    scale: 1
  },
  KP3_PII_KOTA_AI5: {
    values: [],
    lastValue: "",
    name: "KOTA Q",
    scale: 1
  },
  KP3_PII_KOTA_AI2: {
    values: [],
    lastValue: "",
    name: "KOTA Cos",
    scale: 1
  },
  KP3_PII_KOTA_AI3: {
    values: [],
    lastValue: "",
    name: "KOTA I",
    scale: 1
  },
  KP3_PII_KOTA_AI10: {
    values: [],
    lastValue: "",
    name: "KOTA U",
    scale: 1
  },
  KP3_PII_KOTB_AI1: {
    values: [],
    lastValue: "",
    name: "KOTB P",
    scale: 1
  },
  KP3_PII_KOTB_AI6: {
    values: [],
    lastValue: "",
    name: "KOTB S",
    scale: 1
  },
  KP3_PII_KOTB_AI5: {
    values: [],
    lastValue: "",
    name: "KOTB Q",
    scale: 1
  },
  KP3_PII_KOTB_AI2: {
    values: [],
    lastValue: "",
    name: "KOTB Cos",
    scale: 1
  },
  KP3_PII_KOTB_AI3: {
    values: [],
    lastValue: "",
    name: "KOTB I",
    scale: 1
  },
  KP3_PII_KOTB_AI10: {
    values: [],
    lastValue: "",
    name: "KOTB U",
    scale: 1
  },

  KP3_PII_KARIERA_AI1: {
    values: [],
    lastValue: "",
    name: "KARIERA P",
    scale: 1
  },
  KP3_PII_KARIERA_AI6: {
    values: [],
    lastValue: "",
    name: "KARIERA S",
    scale: 1
  },
  KP3_PII_KARIERA_AI5: {
    values: [],
    lastValue: "",
    name: "KARIERA Q",
    scale: 1
  },
  KP3_PII_KARIERA_AI2: {
    values: [],
    lastValue: "",
    name: "KARIERA Cos",
    scale: 1
  },
  KP3_PII_KARIERA_AI3: {
    values: [],
    lastValue: "",
    name: "KOTA I",
    scale: 1
  },
  KP3_PII_KARIERA_AI10: {
    values: [],
    lastValue: "",
    name: "KARIERA U",
    scale: 1
  },
  KP3_PII_KARIERB_AI1: {
    values: [],
    lastValue: "",
    name: "KARIERB P",
    scale: 1
  },
  KP3_PII_KARIERB_AI6: {
    values: [],
    lastValue: "",
    name: "KARIERB S",
    scale: 1
  },
  KP3_PII_KARIERB_AI5: {
    values: [],
    lastValue: "",
    name: "KARIERB Q",
    scale: 1
  },
  KP3_PII_KARIERB_AI2: {
    values: [],
    lastValue: "",
    name: "KARIERB Cos",
    scale: 1
  },
  KP3_PII_KARIERB_AI3: {
    values: [],
    lastValue: "",
    name: "KOTB I",
    scale: 1
  },
  KP3_PII_KARIERB_AI10: {
    values: [],
    lastValue: "",
    name: "KARIERB U",
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
