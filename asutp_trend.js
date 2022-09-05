const dotenv = require("dotenv");
const axios = require("axios");
const dayjs = require("dayjs");

dotenv.config({ path: "./config/config.env" });
const db_scada = require("./config/db-mssql/scada");


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


const insertTimer = setInterval(() => {
    insertToSql();
}, 60 * 1000);

async function insertToSql() {
    const data = [];
    for (const [tag, value] of Object.entries(asutpAnalogSignalIds)) {
        const res = await axios(`http://localhost:8888/api/v1/signals/asutp/${tag}`);
        data.push({
            ALM_TAGNAME: tag,
            ALM_NATIVETIMELAST: res.data.result.SignalDate.replace("T", " ").substring(0, res.data.result.SignalDate.length - 5),
            ALM_VALUE: res.data.result.CurrentValue.toFixed(2)
        });
    }

   db_scada.Calculated_AI1.bulkCreate(data)
    .then(res => console.log(`-${dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss")}- SQL серверт амжилттай бичигдлээ...`))
    .catch(err =>{
        console.log("SQL серверт бичих үед алдаа гарлаа :", err.message);
        clearInterval(insertTimer);
    });
}
