const modbus = require('modbus')
const dotenv = require("dotenv")
const dayjs = require('dayjs')
const { QueryTypes } = require('sequelize');
const Redis = require('ioredis');

const redisClient = new Redis();

dotenv.config({ path: "./config/config.env" });
const db_scada = require("./config/db-mssql/scada");



const ucomDevAranjin = modbus("172.20.10.201", 506, 1);
const Tooluuruud = {
  aranjin: {
    y101: { id: 9000004, name: "Оруулга-1", register: "ir102-103", coefficientI: 3000, coefficientV: 63 },
    y103: { id: 10000018, name: "Эргэлт.усны насос-578", register: "ir104-105", coefficientI: 150, coefficientV: 63 },
    y105: { id: 10000005, name: "МШЦ-8", register: "ir106-107", coefficientI: 1200, coefficientV: 63 },

    y201: { id: 9000003, name: "Оруулга-2", register: "ir202-203", coefficientI: 3000, coefficientV: 63 },
    y203: { id: 10000004, name: "Эргэлт.усны насос-579", register: "ir204-205", coefficientI: 150, coefficientV: 63 },
    y205: { id: 10000003, name: "МПСИ-7", register: "ir206-207", coefficientI: 1200, coefficientV: 63 },

    y301: { id: 9000002, name: "Оруулга-3", register: "ir302-303", coefficientI: 3000, coefficientV: 63 },
    y304: { id: 10000014, name: "Булингын насос-30", register: "ir305-306", coefficientI: 150, coefficientV: 63 },
    y305: { id: 10000015, name: "КТП E-house Тр-1", register: "ir306-307", coefficientI: 150, coefficientV: 63 },
    y306: { id: 10000024, name: "КТП-25 Тр-1", register: "ir307-308", coefficientI: 150, coefficientV: 63 },

    y401: { id: 9000001, name: "Оруулга-4", register: "ir402-403", coefficientI: 3000, coefficientV: 63 },
    y402: { id: 10000008, name: "МШЦ-9", register: "ir403-404", coefficientI: 200, coefficientV: 63 },
    y403: { id: 10000021, name: "Булингын насос-31", register: "ir404-405", coefficientI: 150, coefficientV: 63 },
    y405: { id: 10000011, name: "КТП E-house Тр-2", register: "ir406-407", coefficientI: 150, coefficientV: 63 },
    y406: { id: 10000022, name: "КТП-25 Тр-2", register: "ir407-408", coefficientI: 150, coefficientV: 63 },

    // y102: { id: 524610000017, name: "Нөөц", register: "ir103-104" },
    // y104: { id: 524610000019, name: "Нөөц", register: "ir105-106" },
    // y202: { id: 524610000020, name: "Нөөц", register: "ir203-204" },
    // y204: { id: 524610000016, name: "Нөөц", register: "ir205-206" },
    // y302: { id: 524610000010, name: "Нөөц", register: "ir303-304" },
    // y303: { id: 524610000009, name: "Нөөц", register: "ir304-305" },
    // y404: { id: 524610000006, name: "Нөөц", register: "ir405-406" },
    // y407: { id: 524610000023, name: "Нөөц", register: "ir408-409" },
  }
}

const scheduleFunctionEvery30Minutes = () => {
  // Calculate the time until the next 30-minute mark
  const now = new Date();
  const nextHalfHour = new Date(now);
  nextHalfHour.setMinutes(Math.ceil(now.getMinutes() / 30) * 30);
  nextHalfHour.setSeconds(0);
  nextHalfHour.setMilliseconds(0);

  const delay = nextHalfHour - now;

  // Schedule the function to run after the delay
  setTimeout(() => {

    loadAranjinTooluur();

    setInterval(loadAranjinTooluur, 30 * 60 * 1000);
  }, delay);
}


const loadAranjinTooluur = async () => {

  try {
    const dateTime = dayjs(new Date()).format("YYYY-MM-DD HH:mm");

    for (let yach in Tooluuruud.aranjin) {

      let AK_SUM, RASH_POLN, POK_START_BEFORE, VAL = null;

      const POK_START = await ucomDevAranjin.read(Tooluuruud.aranjin[yach].register) / 100;  //Показания (Тоолуурын дэлгэц дээрх заалт)
      // const POK_START = 391.03;

      redisClient.set(Tooluuruud.aranjin[yach].id, JSON.stringify({ v: POK_START, d: dateTime }));

      const res = await db_scada.sequelize.query(`
        SELECT TOP 1 [POK_START] 
        FROM [TOOLUUR] 
        WHERE N_SH = ${Tooluuruud.aranjin[yach].id} 
        ORDER BY DD_MM_YYYY DESC`, {
        type: QueryTypes.SELECT,
      }); //Tuhain id tai tooluuryn omnoh zaaltiig SQL-ees avna.;

      if (!res.length) {
        POK_START_BEFORE = 0;
      } else {
        POK_START_BEFORE = res[0].POK_START;
      }

      AK_SUM = (POK_START - POK_START_BEFORE).toFixed(4); //Расход по сч хэргэлсэн энерги
      RASH_POLN = (parseFloat(AK_SUM) * Tooluuruud.aranjin[yach].coefficientI * Tooluuruud.aranjin[yach].coefficientV).toFixed(4); //Энергия (Бодит хэргэлсэн энерги)
      VAL = RASH_POLN;



      db_scada.sequelize.query(`
          INSERT INTO [TOOLUUR] (SYB_RNK, N_OB, N_FID, N_GR_TY, N_SH, DD_MM_YYYY ,N_INTER_RAS, VAL, AK_SUM, POK_START, RASH_POLN, IMPULSES)
          VALUES (5, 5, 1, 1, ${Tooluuruud.aranjin[yach].id}, '${dateTime}', NULL, ${VAL}, ${AK_SUM}, ${POK_START}, ${RASH_POLN}, NULL)`, {
        type: QueryTypes.INSERT,
      });

      console.log(`${Tooluuruud.aranjin[yach].id} дугаартай тоолуур амжилттай дуудагдав => ${dateTime}`);
    }

  }
  catch (err) {
    console.log("Аранжин тоолуур дуудах үед алдаа гарлаа:", err.message);
  }

}



loadAranjinTooluur();
scheduleFunctionEvery30Minutes();
