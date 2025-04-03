// const dayjs = require("dayjs");
// const utc = require("dayjs/plugin/utc");
// // const modbus = require('modbus')
// const dotenv = require("dotenv")
// const { QueryTypes } = require('sequelize');

// dotenv.config({ path: "./config/config.env" });
// const db_scada = require("./config/db-mssql/scada");
// const db_techno = require("./config/db-mssql/technodb");

// dayjs.extend(utc);

// const Tooluuruud = {
//     aranjin: {
//         // y101: { id: 9000004, name: "Оруулга-1", register: "ir102-103", coefficientI: 3000, coefficientV: 63 },
//         y103: { id: 10000018, name: "Эргэлт.усны насос-578", register: "ir104-105", coefficientI: 150, coefficientV: 63 },
//         y105: { id: 10000005, name: "МШЦ-8", register: "ir106-107", coefficientI: 1200, coefficientV: 63 },

//         y201: { id: 9000003, name: "Оруулга-2", register: "ir202-203", coefficientI: 3000, coefficientV: 63 },
//         y203: { id: 10000004, name: "Эргэлт.усны насос-579", register: "ir204-205", coefficientI: 150, coefficientV: 63 },
//         y205: { id: 10000003, name: "МПСИ-7", register: "ir206-207", coefficientI: 1200, coefficientV: 63 },

//         y301: { id: 9000002, name: "Оруулга-3", register: "ir302-303", coefficientI: 3000, coefficientV: 63 },
//         y304: { id: 10000014, name: "Булингын насос-30", register: "ir305-306", coefficientI: 150, coefficientV: 63 },
//         y305: { id: 10000015, name: "КТП E-house Тр-1", register: "ir306-307", coefficientI: 150, coefficientV: 63 },
//         y306: { id: 10000024, name: "КТП-25 Тр-1", register: "ir307-308", coefficientI: 150, coefficientV: 63 },

//         y401: { id: 9000001, name: "Оруулга-4", register: "ir402-403", coefficientI: 3000, coefficientV: 63 },
//         y402: { id: 10000008, name: "МШЦ-9", register: "ir403-404", coefficientI: 1200, coefficientV: 63 },
//         y403: { id: 10000021, name: "Булингын насос-31", register: "ir404-405", coefficientI: 150, coefficientV: 63 },
//         y405: { id: 10000011, name: "КТП E-house Тр-2", register: "ir406-407", coefficientI: 150, coefficientV: 63 },
//         y406: { id: 10000022, name: "КТП-25 Тр-2", register: "ir407-408", coefficientI: 150, coefficientV: 63 },



//         // y102: { id: 524610000017, name: "Нөөц", register: "ir103-104" },
//         // y104: { id: 524610000019, name: "Нөөц", register: "ir105-106" },
//         // y202: { id: 524610000020, name: "Нөөц", register: "ir203-204" },
//         // y204: { id: 524610000016, name: "Нөөц", register: "ir205-206" },
//         // y302: { id: 524610000010, name: "Нөөц", register: "ir303-304" },
//         // y303: { id: 524610000009, name: "Нөөц", register: "ir304-305" },
//         // y404: { id: 524610000006, name: "Нөөц", register: "ir405-406" },
//         // y407: { id: 524610000023, name: "Нөөц", register: "ir408-409" },
//     }
// }



// const init = async () => {

//     for (let yach in Tooluuruud.aranjin) {
//         let res = await db_scada.sequelize.query(`
//             SELECT TOP 1000 [SYB_RNK]
//            ,[N_OB]
//            ,[N_FID]
//            ,[N_GR_TY]
//            ,[N_SH]
//            ,[DD_MM_YYYY]
//            ,[N_INTER_RAS]
//            ,[VAL]
//            ,[AK_SUM]
//            ,[POK_START]
//            ,[RASH_POLN]
//            ,[IMPULSES]
//        FROM [scada].[dbo].[Tooluur]
//        where n_sh = '${Tooluuruud.aranjin[yach].id}' and DD_MM_YYYY between '2024-12-27' and '2025-01-20 23:00'
//     order by DD_MM_YYYY desc`, {
//             type: QueryTypes.SELECT,
//         });

//         console.log(res.length)


//         for (let i = 0; i < res.length; i++) {

//             // console.log(res[i])
//             const date = dayjs(res[i]["DD_MM_YYYY"]).utc().format().split("T")[0];
//             const time = dayjs(res[i]["DD_MM_YYYY"]).utc().format().split("T")[1].slice(0, -4);

//             console.log(`${date} ${time}`);
//             const now = dayjs(`${date} ${time}`);

//             let d1 = dayjs(now.format("YYYY-MM-DD"));
//             let df1 = now.diff(d1, "minute");

//             // console.log(df1)
//             Math.floor(df1 / 30) == 0 ? console.log(48) : console.log(Math.floor(df1 / 30));

//             const N_INTER_RAS = Math.floor(df1 / 30) == 0 ? 48 : Math.floor(df1 / 30)

//             await db_scada.sequelize.query(`
//                UPDATE Tooluur
//                SET N_INTER_RAS = ${res[i]["N_INTER_RAS"] == 48 ? 1 : res[i]["N_INTER_RAS"] + 1}
//                WHERE n_sh = '${Tooluuruud.aranjin[yach].id}' and DD_MM_YYYY = '${date} ${time}'`);



//             //select SYB_RNK, N_OB, N_FID, N_GR_TY, N_SH, TO_CHAR(dd_mm_yyyy, 'yyyy-mm-dd'), N_INTER_RAS, KOL_DB, KOL, VAL, STAT, MIN_0, MIN_1, INTERV, AK_SUM, POK_START, RASH_POLN, IMPULSES

//             // await db_techno.sequelize.query(`
//             //    exec Sp_InsertLast72Hour_v112 
//             //      ${res[i]["SYB_RNK"]}, ${res[i]["N_OB"]} ,${res[i]["N_FID"]} , ${res[i]["N_GR_TY"]}, ${res[i]["N_SH"]} , '${date + " " + time}', ${res[i]["N_INTER_RAS"]} , 1, 1, ${res[i]["VAL"]}, 0, 0, 1, 30, ${res[i]["AK_SUM"]},  ${res[i]["POK_START"]}, ${res[i]["RASH_POLN"]}, 0 
//             //  `);
//             // await db_techno.sequelize.query(`
//             //    INSERT INTO  BUF_V_INT (SYB_RNK, N_OB, N_FID, N_GR_TY, N_SH, DD_MM_YYYY ,N_INTER_RAS, VAL, POK_START, IMPULSES)
//             //    VALUES  (5, 5 ,1 , 1, ${res[i]["N_SH"]} , '${date + " " + time}', ${res[i]["N_INTER_RAS"]}, ${res[i]["VAL"]}, ${res[i]["POK_START"]},0) 
//             //  `);

//             console.log(`--${res[i]["N_SH"]}-- ${date} ${time} success... ${res[i]["N_INTER_RAS"]}`);
//         }
//     }
// }

// init();

// { "signalId": 111000012, "valueDate": "2025-02-18 00:00", "value": 0.08 },
// { "signalId": 111000012, "valueDate": "2025-02-18 01:00", "value": 0.06 },
// { "signalId": 111000012, "valueDate": "2025-02-18 02:00", "value": 0.1 },
// { "signalId": 111000012, "valueDate": "2025-02-18 03:00", "value": 0.06 },
// { "signalId": 111000012, "valueDate": "2025-02-18 04:00", "value": 0.06 },
// { "signalId": 111000012, "valueDate": "2025-02-18 05:00", "value": 0.06 },
// { "signalId": 111000012, "valueDate": "2025-02-18 06:00", "value": 0.08 },
// { "signalId": 111000012, "valueDate": "2025-02-18 07:00", "value": 0.11 },
// { "signalId": 111000012, "valueDate": "2025-02-18 08:00", "value": 0.19 }
// { "signalId": 111000012, "valueDate": "2025-02-18 09:00", "value": 0.09 },
// { "signalId": 111000012, "valueDate": "2025-02-18 10:00", "value": 0.09 },
// { "signalId": 111000012, "valueDate": "2025-02-18 11:00", "value": 0.1 },
// { "signalId": 111000012, "valueDate": "2025-02-18 12:00", "value": 0.16 },
// { "signalId": 111000012, "valueDate": "2025-02-18 13:00", "value": 0.12 },
// { "signalId": 111000012, "valueDate": "2025-02-18 14:00", "value": 0.09 },
// { "signalId": 111000012, "valueDate": "2025-02-18 15:00", "value": 0.09 },
// { "signalId": 111000012, "valueDate": "2025-02-18 16:00", "value": 0.09 },
// { "signalId": 111000012, "valueDate": "2025-02-18 17:00", "value": 0.08 },
// { "signalId": 111000012, "valueDate": "2025-02-18 18:00", "value": 0.06 },
// { "signalId": 111000012, "valueDate": "2025-02-18 19:00", "value": 0.04 },
// { "signalId": 111000012, "valueDate": "2025-02-18 20:00", "value": 0.17 },
// { "signalId": 111000012, "valueDate": "2025-02-18 21:00", "value": 0.29 },
// { "signalId": 111000012, "valueDate": "2025-02-18 22:00", "value": 0.3 },
// { "signalId": 111000012, "valueDate": "2025-02-18 23:00", "value": 0.32 }

const axios = require("axios");
// 0.05	0.02	0.03	0.03	0.03	0.03	0.03	0.02	0.01	0.05	0.1	0.09	0.05
// 0.25	0.19	0.13	0.11	0.17	0.29	0.34	0.3	0.39	0.47	0.51	0.47	0.44
const data = [

    // { "signalId": 21000015, "valueDate": "2025-02-18 10:00", "value": 9.96 },
    // { "signalId": 21000015, "valueDate": "2025-02-18 11:00", "value": 9.7 },
    // { "signalId": 21000015, "valueDate": "2025-02-18 12:00", "value": 9.74 },
    // { "signalId": 21000015, "valueDate": "2025-02-18 13:00", "value": 9.76 },
    // { "signalId": 21000015, "valueDate": "2025-02-18 14:00", "value": 9.79 },

    // { "signalId": 21000016, "valueDate": "2025-02-18 10:00", "value": 5.24 },
    // { "signalId": 21000016, "valueDate": "2025-02-18 11:00", "value": 5.23 },
    // { "signalId": 21000016, "valueDate": "2025-02-18 12:00", "value": 5.23 },
    // { "signalId": 21000016, "valueDate": "2025-02-18 13:00", "value": 5.22 },
    // { "signalId": 21000016, "valueDate": "2025-02-18 14:00", "value": 5.2 },


    // { "signalId": 21000030, "valueDate": "2025-02-18 10:00", "value": 2.37 },
    // { "signalId": 21000030, "valueDate": "2025-02-18 11:00", "value": 2.39 },
    // { "signalId": 21000030, "valueDate": "2025-02-18 12:00", "value": 2.42 },
    // { "signalId": 21000030, "valueDate": "2025-02-18 13:00", "value": 2.45 },
    // { "signalId": 21000030, "valueDate": "2025-02-18 14:00", "value": 2.5 },

    // { "signalId": 21000031, "valueDate": "2025-02-18 10:00", "value": 7.97 },
    // { "signalId": 21000031, "valueDate": "2025-02-18 11:00", "value": 7.98 },
    // { "signalId": 21000031, "valueDate": "2025-02-18 12:00", "value": 8 },
    // { "signalId": 21000031, "valueDate": "2025-02-18 13:00", "value": 8.12 },
    // { "signalId": 21000031, "valueDate": "2025-02-18 14:00", "value": 8.12 },

    // { "signalId": 21000032, "valueDate": "2025-02-18 10:00", "value": 4.54 },
    // { "signalId": 21000032, "valueDate": "2025-02-18 11:00", "value": 4.53 },
    // { "signalId": 21000032, "valueDate": "2025-02-18 12:00", "value": 4.53 },
    // { "signalId": 21000032, "valueDate": "2025-02-18 13:00", "value": 4.52 },
    // { "signalId": 21000032, "valueDate": "2025-02-18 14:00", "value": 4.52 },

    // { "signalId": 21000033, "valueDate": "2025-02-18 10:00", "value": 6.94 },
    // { "signalId": 21000033, "valueDate": "2025-02-18 11:00", "value": 6.97 },
    // { "signalId": 21000033, "valueDate": "2025-02-18 12:00", "value": 6.98 },
    // { "signalId": 21000033, "valueDate": "2025-02-18 13:00", "value": 7 },
    // { "signalId": 21000033, "valueDate": "2025-02-18 14:00", "value": 7 },

    // { "signalId": 21000034, "valueDate": "2025-02-18 10:00", "value": 5.69 },
    // { "signalId": 21000034, "valueDate": "2025-02-18 11:00", "value": 5.70 },
    // { "signalId": 21000034, "valueDate": "2025-02-18 12:00", "value": 5.71 },
    // { "signalId": 21000034, "valueDate": "2025-02-18 13:00", "value": 5.71 },
    // { "signalId": 21000034, "valueDate": "2025-02-18 14:00", "value": 5.71 },

    // { "signalId": 21000035, "valueDate": "2025-02-18 10:00", "value": 5.99 },
    // { "signalId": 21000035, "valueDate": "2025-02-18 11:00", "value": 5.98 },
    // { "signalId": 21000035, "valueDate": "2025-02-18 12:00", "value": 5.97 },
    // { "signalId": 21000035, "valueDate": "2025-02-18 13:00", "value": 5.95 },
    // { "signalId": 21000035, "valueDate": "2025-02-18 14:00", "value": 5.95 },

    // { "signalId": 21000013, "valueDate": "2025-02-18 10:00", "value": 2.49 },
    // { "signalId": 21000013, "valueDate": "2025-02-18 11:00", "value": 2.5 },
    // { "signalId": 21000013, "valueDate": "2025-02-18 12:00", "value": 2.52 },
    // { "signalId": 21000013, "valueDate": "2025-02-18 13:00", "value": 2.53 },
    // { "signalId": 21000013, "valueDate": "2025-02-18 14:00", "value": 2.57 },

    // { "signalId": 21000014, "valueDate": "2025-02-18 10:00", "value": 2.16 },
    // { "signalId": 21000014, "valueDate": "2025-02-18 11:00", "value": 2.15 },
    // { "signalId": 21000014, "valueDate": "2025-02-18 12:00", "value": 2.16 },
    // { "signalId": 21000014, "valueDate": "2025-02-18 13:00", "value": 2.15 },
    // { "signalId": 21000014, "valueDate": "2025-02-18 14:00", "value": 2.15 },


    // { "signalId": 41000007, "valueDate": "2025-02-18 10:00", "value": 0.14 },
    // { "signalId": 41000007, "valueDate": "2025-02-18 11:00", "value": 0.13 },
    // { "signalId": 41000007, "valueDate": "2025-02-18 12:00", "value": 0.14 },
    // { "signalId": 41000007, "valueDate": "2025-02-18 13:00", "value": 0.13 },
    // { "signalId": 41000007, "valueDate": "2025-02-18 14:00", "value": 0.14 },


    // { "signalId": 41000008, "valueDate": "2025-02-18 10:00", "value": 0.11 },
    // { "signalId": 41000008, "valueDate": "2025-02-18 11:00", "value": 0.09 },
    // { "signalId": 41000008, "valueDate": "2025-02-18 12:00", "value": 0.08 },
    // { "signalId": 41000008, "valueDate": "2025-02-18 13:00", "value": 0.05 },
    // { "signalId": 41000008, "valueDate": "2025-02-18 14:00", "value": 0.05 },


    // { "signalId": 51000013, "valueDate": "2025-02-18 10:00", "value": 5.18 },
    // { "signalId": 51000013, "valueDate": "2025-02-18 11:00", "value": 5.16 },
    // { "signalId": 51000013, "valueDate": "2025-02-18 12:00", "value": 5.15 },
    // { "signalId": 51000013, "valueDate": "2025-02-18 13:00", "value": 5.12 },
    // { "signalId": 51000013, "valueDate": "2025-02-18 14:00", "value": 5.11 },


    // { "signalId": 51000010, "valueDate": "2025-02-18 10:00", "value": 5.37 },
    // { "signalId": 51000010, "valueDate": "2025-02-18 11:00", "value": 5.35 },
    // { "signalId": 51000010, "valueDate": "2025-02-18 12:00", "value": 5.34 },
    // { "signalId": 51000010, "valueDate": "2025-02-18 13:00", "value": 5.32 },
    // { "signalId": 51000010, "valueDate": "2025-02-18 14:00", "value": 5.32 },


    // { "signalId": 51000011, "valueDate": "2025-02-18 10:00", "value": 6.4 },
    // { "signalId": 51000011, "valueDate": "2025-02-18 11:00", "value": 6.39 },
    // { "signalId": 51000011, "valueDate": "2025-02-18 12:00", "value": 6.38 },
    // { "signalId": 51000011, "valueDate": "2025-02-18 13:00", "value": 6.39 },
    // { "signalId": 51000011, "valueDate": "2025-02-18 14:00", "value": 6.38 },


    // { "signalId": 51000012, "valueDate": "2025-02-18 10:00", "value": 6.06 },
    // { "signalId": 51000012, "valueDate": "2025-02-18 11:00", "value": 6.07 },
    // { "signalId": 51000012, "valueDate": "2025-02-18 12:00", "value": 6.06 },
    // { "signalId": 51000012, "valueDate": "2025-02-18 13:00", "value": 6.07 },
    // { "signalId": 51000012, "valueDate": "2025-02-18 14:00", "value": 6.06 },


    // { "signalId": 52000501, "valueDate": "2025-02-18 10:00", "value": 2.72 },
    // { "signalId": 52000501, "valueDate": "2025-02-18 11:00", "value": 2.71 },
    // { "signalId": 52000501, "valueDate": "2025-02-18 12:00", "value": 2.72 },
    // { "signalId": 52000501, "valueDate": "2025-02-18 13:00", "value": 2.71 },
    // { "signalId": 52000501, "valueDate": "2025-02-18 14:00", "value": 2.72 },


    // { "signalId": 52000601, "valueDate": "2025-02-18 10:00", "value": 4.52 },
    // { "signalId": 52000601, "valueDate": "2025-02-18 11:00", "value": 4.51 },
    // { "signalId": 52000601, "valueDate": "2025-02-18 12:00", "value": 4.52 },
    // { "signalId": 52000601, "valueDate": "2025-02-18 13:00", "value": 4.51 },
    // { "signalId": 52000601, "valueDate": "2025-02-18 14:00", "value": 4.52 },

    // { "signalId": 52000701, "valueDate": "2025-02-18 10:00", "value": 4.26 },
    // { "signalId": 52000701, "valueDate": "2025-02-18 11:00", "value": 4.25 },
    // { "signalId": 52000701, "valueDate": "2025-02-18 12:00", "value": 4.24 },
    // { "signalId": 52000701, "valueDate": "2025-02-18 13:00", "value": 4.20 },
    // { "signalId": 52000701, "valueDate": "2025-02-18 14:00", "value": 4.20 },

    // { "signalId": 52000801, "valueDate": "2025-02-18 10:00", "value": 2.82 },
    // { "signalId": 52000801, "valueDate": "2025-02-18 11:00", "value": 2.81 },
    // { "signalId": 52000801, "valueDate": "2025-02-18 12:00", "value": 2.78 },
    // { "signalId": 52000801, "valueDate": "2025-02-18 13:00", "value": 2.76 },
    // { "signalId": 52000801, "valueDate": "2025-02-18 14:00", "value": 2.76 },

    // { "signalId": 181000005, "valueDate": "2025-02-18 10:00", "value": 1.95 },
    // { "signalId": 181000005, "valueDate": "2025-02-18 11:00", "value": 1.98 },
    // { "signalId": 181000005, "valueDate": "2025-02-18 12:00", "value": 2.01 },
    // { "signalId": 181000005, "valueDate": "2025-02-18 13:00", "value": 2.03 },
    // { "signalId": 181000005, "valueDate": "2025-02-18 14:00", "value": 2.05 },

    // { "signalId": 181000006, "valueDate": "2025-02-18 10:00", "value": 1.83 },
    // { "signalId": 181000006, "valueDate": "2025-02-18 11:00", "value": 1.83 },
    // { "signalId": 181000006, "valueDate": "2025-02-18 12:00", "value": 1.84 },
    // { "signalId": 181000006, "valueDate": "2025-02-18 13:00", "value": 1.85 },
    // { "signalId": 181000006, "valueDate": "2025-02-18 14:00", "value": 1.85 },

    // { "signalId": 181000011, "valueDate": "2025-02-18 10:00", "value": 1.62 },
    // { "signalId": 181000011, "valueDate": "2025-02-18 11:00", "value": 1.61 },
    // { "signalId": 181000011, "valueDate": "2025-02-18 12:00", "value": 1.61 },
    // { "signalId": 181000011, "valueDate": "2025-02-18 13:00", "value": 1.62 },
    // { "signalId": 181000011, "valueDate": "2025-02-18 14:00", "value": 1.62 },

    // { "signalId": 181000012, "valueDate": "2025-02-18 10:00", "value": 1.92 },
    // { "signalId": 181000012, "valueDate": "2025-02-18 11:00", "value": 1.91 },
    // { "signalId": 181000012, "valueDate": "2025-02-18 12:00", "value": 1.92 },
    // { "signalId": 181000012, "valueDate": "2025-02-18 13:00", "value": 1.92 },
    // { "signalId": 181000012, "valueDate": "2025-02-18 14:00", "value": 1.91 },

    // { "signalId": 21000036, "valueDate": "2025-02-18 10:00", "value": 0.11 },
    // { "signalId": 21000036, "valueDate": "2025-02-18 11:00", "value": 0.10 },
    // { "signalId": 21000036, "valueDate": "2025-02-18 12:00", "value": 0.09 },
    // { "signalId": 21000036, "valueDate": "2025-02-18 13:00", "value": 0.09 },
    // { "signalId": 21000036, "valueDate": "2025-02-18 14:00", "value": 0.08 },

    // { "signalId": 21000037, "valueDate": "2025-02-18 10:00", "value": 0.2 },
    // { "signalId": 21000037, "valueDate": "2025-02-18 11:00", "value": 0.19 },
    // { "signalId": 21000037, "valueDate": "2025-02-18 12:00", "value": 0.18 },
    // { "signalId": 21000037, "valueDate": "2025-02-18 13:00", "value": 0.16 },
    // { "signalId": 21000037, "valueDate": "2025-02-18 14:00", "value": 0.17 },

    // { "signalId": 21000009, "valueDate": "2025-02-18 10:00", "value": 0.14 },
    // { "signalId": 21000009, "valueDate": "2025-02-18 11:00", "value": 0.15 },
    // { "signalId": 21000009, "valueDate": "2025-02-18 12:00", "value": 0.16 },
    // { "signalId": 21000009, "valueDate": "2025-02-18 13:00", "value": 0.17 },
    // { "signalId": 21000009, "valueDate": "2025-02-18 14:00", "value": 0.18 },

    // { "signalId": 21000010, "valueDate": "2025-02-18 10:00", "value": 0.17 },
    // { "signalId": 21000010, "valueDate": "2025-02-18 11:00", "value": 0.16 },
    // { "signalId": 21000010, "valueDate": "2025-02-18 12:00", "value": 0.15 },
    // { "signalId": 21000010, "valueDate": "2025-02-18 13:00", "value": 0.17 },
    // { "signalId": 21000010, "valueDate": "2025-02-18 14:00", "value": 0.16 },

    // { "signalId": 21000011, "valueDate": "2025-02-18 10:00", "value": 0.24 },
    // { "signalId": 21000011, "valueDate": "2025-02-18 11:00", "value": 0.28 },
    // { "signalId": 21000011, "valueDate": "2025-02-18 12:00", "value": 0.31 },
    // { "signalId": 21000011, "valueDate": "2025-02-18 13:00", "value": 0.34 },
    // { "signalId": 21000011, "valueDate": "2025-02-18 14:00", "value": 0.36 },

    // { "signalId": 21000012, "valueDate": "2025-02-18 10:00", "value": 0.31 },
    // { "signalId": 21000012, "valueDate": "2025-02-18 11:00", "value": 0.35 },
    // { "signalId": 21000012, "valueDate": "2025-02-18 12:00", "value": 0.36 },
    // { "signalId": 21000012, "valueDate": "2025-02-18 13:00", "value": 0.4 },
    // { "signalId": 21000012, "valueDate": "2025-02-18 14:00", "value": 0.43 },

    // { "signalId": 21000039, "valueDate": "2025-02-18 10:00", "value": 0.05 },
    // { "signalId": 21000039, "valueDate": "2025-02-18 11:00", "value": 0.04 },
    // { "signalId": 21000039, "valueDate": "2025-02-18 12:00", "value": 0.03 },
    // { "signalId": 21000039, "valueDate": "2025-02-18 13:00", "value": 0.04 },
    // { "signalId": 21000039, "valueDate": "2025-02-18 14:00", "value": 0.03 },

    { "signalId": 281000017, "valueDate": "2025-02-17 10:00", "value": 0.87 },
    { "signalId": 281000017, "valueDate": "2025-02-17 11:00", "value": 0.86 },
    { "signalId": 281000017, "valueDate": "2025-02-17 12:00", "value": 0.87 },
    { "signalId": 281000017, "valueDate": "2025-02-17 13:00", "value": 0.86 },
    { "signalId": 281000017, "valueDate": "2025-02-17 14:00", "value": 0.86 },
    { "signalId": 281000017, "valueDate": "2025-02-17 15:00", "value": 0.87 },
    { "signalId": 281000017, "valueDate": "2025-02-17 16:00", "value": 0.88 },

    { "signalId": 281000018, "valueDate": "2025-02-17 10:00", "value": 0.54 },
    { "signalId": 281000018, "valueDate": "2025-02-17 11:00", "value": 0.53 },
    { "signalId": 281000018, "valueDate": "2025-02-17 12:00", "value": 0.53 },
    { "signalId": 281000018, "valueDate": "2025-02-17 13:00", "value": 0.54 },
    { "signalId": 281000018, "valueDate": "2025-02-17 14:00", "value": 0.53 },
    { "signalId": 281000018, "valueDate": "2025-02-17 15:00", "value": 0.52 },
    { "signalId": 281000018, "valueDate": "2025-02-17 16:00", "value": 0.52 },

    { "signalId": 292000101, "valueDate": "2025-02-17 10:00", "value": 1.77 },
    { "signalId": 292000101, "valueDate": "2025-02-17 11:00", "value": 1.76 },
    { "signalId": 292000101, "valueDate": "2025-02-17 12:00", "value": 1.75 },
    { "signalId": 292000101, "valueDate": "2025-02-17 13:00", "value": 1.75 },
    { "signalId": 292000101, "valueDate": "2025-02-17 14:00", "value": 1.76 },
    { "signalId": 292000101, "valueDate": "2025-02-17 15:00", "value": 1.73 },
    { "signalId": 292000101, "valueDate": "2025-02-17 16:00", "value": 1.74 },

    { "signalId": 292000201, "valueDate": "2025-02-17 10:00", "value": 0.25 },
    { "signalId": 292000201, "valueDate": "2025-02-17 11:00", "value": 0.24 },
    { "signalId": 292000201, "valueDate": "2025-02-17 12:00", "value": 0.24 },
    { "signalId": 292000201, "valueDate": "2025-02-17 13:00", "value": 0.23 },
    { "signalId": 292000201, "valueDate": "2025-02-17 14:00", "value": 0.24 },
    { "signalId": 292000201, "valueDate": "2025-02-17 15:00", "value": 0.24 },
    { "signalId": 292000201, "valueDate": "2025-02-17 16:00", "value": 0.23 },

    { "signalId": 302000101, "valueDate": "2025-02-17 10:00", "value": 0.14 },
    { "signalId": 302000101, "valueDate": "2025-02-17 11:00", "value": 0.14 },
    { "signalId": 302000101, "valueDate": "2025-02-17 12:00", "value": 0.14 },
    { "signalId": 302000101, "valueDate": "2025-02-17 13:00", "value": 0.14 },
    { "signalId": 302000101, "valueDate": "2025-02-17 14:00", "value": 0.14 },
    { "signalId": 302000101, "valueDate": "2025-02-17 15:00", "value": 0.14 },
    { "signalId": 302000101, "valueDate": "2025-02-17 16:00", "value": 0.14 },

    { "signalId": 302000201, "valueDate": "2025-02-17 10:00", "value": 1.57 },
    { "signalId": 302000201, "valueDate": "2025-02-17 11:00", "value": 1.58 },
    { "signalId": 302000201, "valueDate": "2025-02-17 12:00", "value": 1.57 },
    { "signalId": 302000201, "valueDate": "2025-02-17 13:00", "value": 1.58 },
    { "signalId": 302000201, "valueDate": "2025-02-17 14:00", "value": 1.58 },
    { "signalId": 302000201, "valueDate": "2025-02-17 15:00", "value": 1.57 },
    { "signalId": 302000201, "valueDate": "2025-02-17 16:00", "value": 1.58 },

    { "signalId": 312000201, "valueDate": "2025-02-17 10:00", "value": 0.1 },
    { "signalId": 312000201, "valueDate": "2025-02-17 11:00", "value": 0.09 },
    { "signalId": 312000201, "valueDate": "2025-02-17 12:00", "value": 0.08 },
    { "signalId": 312000201, "valueDate": "2025-02-17 13:00", "value": 0.07 },
    { "signalId": 312000201, "valueDate": "2025-02-17 14:00", "value": 0.06 },
    { "signalId": 312000201, "valueDate": "2025-02-17 15:00", "value": 0.06 },
    { "signalId": 312000201, "valueDate": "2025-02-17 16:00", "value": 0.05 },

    { "signalId": 312000101, "valueDate": "2025-02-17 10:00", "value": 1.54 },
    { "signalId": 312000101, "valueDate": "2025-02-17 11:00", "value": 1.55 },
    { "signalId": 312000101, "valueDate": "2025-02-17 12:00", "value": 1.54 },
    { "signalId": 312000101, "valueDate": "2025-02-17 13:00", "value": 1.54 },
    { "signalId": 312000101, "valueDate": "2025-02-17 14:00", "value": 1.55 },
    { "signalId": 312000101, "valueDate": "2025-02-17 15:00", "value": 1.54 },
    { "signalId": 312000101, "valueDate": "2025-02-17 16:00", "value": 1.55 },

]

for (let i = 0; i < data.length; i++) {
    axios.post("https://tmservice.erdenetmc.mn/api/v1/tables/hour", data[i])
}
