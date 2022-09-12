const dotenv = require("dotenv");
const axios = require("axios");
const dayjs = require("dayjs");
const utc = require('dayjs/plugin/utc');
dayjs.extend(utc)

dotenv.config({ path: "./config/config.env" });
const db_scada = require("./config/db-mssql/scada");
const db_signal_asutp = require("./config/db-mssql/signal_asutp");


const asutpAnalogSignalIds = {
    700031:{
        values:[],
        lastValue: "",
    },
    700014:{
        values:[],
        lastValue: "",
    },
    700048:{
        values:[],
        lastValue: "",
    },
    700065:{
        values:[],
        lastValue: "",
    },
    700082:{
        values:[],
        lastValue: "",
    },
    700099:{
        values:[],
        lastValue: "",
    },
    700116:{
        values:[],
        lastValue: "",
    },
    700133:{
        values:[],
        lastValue: "",
    },
    700150:{
        values:[],
        lastValue: "",
    },
    700019:{
        values:[],
        lastValue: "",
    },
    700001:{
        values:[],
        lastValue: "",
    },
    700036:{
        values:[],
        lastValue: "",
    },
    700053:{
        values:[],
        lastValue: "",
    },
    700070:{
        values:[],
        lastValue: "",
    },
    700087:{
        values:[],
        lastValue: "",
    },
    700104:{
        values:[],
        lastValue: "",
    },
    700121:{
        values:[],
        lastValue: "",
    },
    700138:{
        values:[],
        lastValue: "",
    },
    300401:{
        values:[],
        lastValue: "",
    },
    300343:{
        values:[],
        lastValue: "",
    },
    300345:{
        values:[],
        lastValue: "",
    },
    300344:{
        values:[],
        lastValue: "",
    },
    300346:{
        values:[],
        lastValue: "",
    },
    300410:{
        values:[],
        lastValue: "",
    },
    300411:{
        values:[],
        lastValue: "",
    },
    300425:{
        values:[],
        lastValue: "",
    },
    300426:{
        values:[],
        lastValue: "",
    },
    300332:{
        values:[],
        lastValue: "",
    },
    300334:{
        values:[],
        lastValue: "",
    }
};
// 300331 300332
// 300333 300334


////const insertTimer = setInterval(() => {
    insertToSql();
//}, 60 * 1000);

async function insertToSql() {
    const data = [];
    let res, alm_value, alm_nativetimelast;

    for (const [tag, value] of Object.entries(asutpAnalogSignalIds)) {

        res = await db_signal_asutp.sequelize.query(`exec [Sp_DeviceAsutpASelectLastValueByID] ${tag}`);
        alm_value = res[0][0].CurrentValue == 65535 ? 0 : res[0][0].CurrentValue;
        alm_nativetimelast = dayjs.utc(res[0][0].SignalDate).format("YYYY-MM-DD HH:mm:ss");

        if(tag == "300332"){
            res = await db_signal_asutp.sequelize.query(`exec [Sp_DeviceAsutpASelectLastValueByID] 300331`);
            alm_value = alm_value + res[0][0].CurrentValue == 65535 ? 0 : res[0][0].CurrentValue;
        }
        else if(tag == "300334") {
            res = await db_signal_asutp.sequelize.query(`exec [Sp_DeviceAsutpASelectLastValueByID] 300333`);
            alm_value = alm_value + res[0][0].CurrentValue == 65535 ? 0 : res[0][0].CurrentValue;
        }

        data.push({
            ALM_TAGNAME: tag,
            ALM_NATIVETIMELAST: alm_nativetimelast,
            ALM_VALUE: (alm_value).toFixed(3)
        });
    }

   db_scada.Calculated_AI1.bulkCreate(data)
    .then(res => console.log(`-${dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss")}- SQL серверт амжилттай бичигдлээ...`))
    .catch(err =>{
        console.log("SQL серверт бичих үед алдаа гарлаа :", err.message);
        clearInterval(insertTimer);
    });
}
