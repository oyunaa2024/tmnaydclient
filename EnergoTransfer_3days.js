const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
// const modbus = require('modbus')
const dotenv = require("dotenv")
const { QueryTypes } = require('sequelize');

dotenv.config({ path: "./config/config.env" });
const db_scada = require("./config/db-mssql/scada");
const db_techno = require("./config/db-mssql/technodb");

dayjs.extend(utc);

const Tooluuruud = {
    aranjin: {
        y101: { id: 9000004, name: "Оруулга-1", register: "ir102-103", coefficientI: 3000, coefficientV: 63 },
        // y103: { id: 10000018, name: "Эргэлт.усны насос-578", register: "ir104-105", coefficientI: 150, coefficientV: 63 },
        // y105: { id: 10000005, name: "МШЦ-8", register: "ir106-107", coefficientI: 1200, coefficientV: 63 },

        // y201: { id: 9000003, name: "Оруулга-2", register: "ir202-203", coefficientI: 3000, coefficientV: 63 },
        // y203: { id: 10000004, name: "Эргэлт.усны насос-579", register: "ir204-205", coefficientI: 150, coefficientV: 63 },
        // y205: { id: 10000003, name: "МПСИ-7", register: "ir206-207", coefficientI: 1200, coefficientV: 63 },

        // y301: { id: 9000002, name: "Оруулга-3", register: "ir302-303", coefficientI: 3000, coefficientV: 63 },
        // y304: { id: 10000014, name: "Булингын насос-30", register: "ir305-306", coefficientI: 150, coefficientV: 63 },
        // y305: { id: 10000015, name: "КТП E-house Тр-1", register: "ir306-307", coefficientI: 150, coefficientV: 63 },
        // y306: { id: 10000024, name: "КТП-25 Тр-1", register: "ir307-308", coefficientI: 150, coefficientV: 63 },

        // y401: { id: 9000001, name: "Оруулга-4", register: "ir402-403", coefficientI: 3000, coefficientV: 63 },
        // y402: { id: 10000008, name: "МШЦ-9", register: "ir403-404", coefficientI: 1200, coefficientV: 63 },
        // y403: { id: 10000021, name: "Булингын насос-31", register: "ir404-405", coefficientI: 150, coefficientV: 63 },
        // y405: { id: 10000011, name: "КТП E-house Тр-2", register: "ir406-407", coefficientI: 150, coefficientV: 63 },
        // y406: { id: 10000022, name: "КТП-25 Тр-2", register: "ir407-408", coefficientI: 150, coefficientV: 63 },

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


const init = async () => {

    for (let yach in Tooluuruud.aranjin) {
        let res = await db_scada.sequelize.query(`
            SELECT TOP 10 [SYB_RNK]
           ,[N_OB]
           ,[N_FID]
           ,[N_GR_TY]
           ,[N_SH]
           ,[DD_MM_YYYY]
           ,[N_INTER_RAS]
           ,[VAL]
           ,[AK_SUM]
           ,[POK_START]
           ,[RASH_POLN]
           ,[IMPULSES]
       FROM [scada].[dbo].[Tooluur]
       where n_sh = '${Tooluuruud.aranjin[yach].id}' and DD_MM_YYYY between '2024-12-27' and '2025-01-10 23:00'
       order by DD_MM_YYYY desc`, {
            type: QueryTypes.SELECT,
        });

        console.log(res.length)


        for (let i = 0; i < res.length; i++) {

            // console.log(res[i])
            const date = dayjs(res[i]["DD_MM_YYYY"]).utc().format().split("T")[0];
            const time = dayjs(res[i]["DD_MM_YYYY"]).utc().format().split("T")[1].slice(0, -4);


            //select SYB_RNK, N_OB, N_FID, N_GR_TY, N_SH, TO_CHAR(dd_mm_yyyy, 'yyyy-mm-dd'), N_INTER_RAS, KOL_DB, KOL, VAL, STAT, MIN_0, MIN_1, INTERV, AK_SUM, POK_START, RASH_POLN, IMPULSES

            await db_techno.sequelize.query(`
               exec Sp_InsertLast72Hour_v112 
                 ${res[i]["SYB_RNK"]}, ${res[i]["N_OB"]} ,${res[i]["N_FID"]} , ${res[i]["N_GR_TY"]}, ${res[i]["N_SH"]} , '${date + " " + time}', ${res[i]["N_INTER_RAS"]} , 1, 1, ${res[i]["VAL"]}, 0, 0, 1, 30, ${res[i]["AK_SUM"]},  ${res[i]["POK_START"]}, ${res[i]["RASH_POLN"]}, 0 
             `);
            // await db_techno.sequelize.query(`
            //    INSERT INTO  BUF_V_INT (SYB_RNK, N_OB, N_FID, N_GR_TY, N_SH, DD_MM_YYYY ,N_INTER_RAS, VAL, POK_START, IMPULSES)
            //    VALUES  (5, 5 ,1 , 1, ${res[i]["N_SH"]} , '${date + " " + time}', ${res[i]["N_INTER_RAS"]}, ${res[i]["VAL"]}, ${res[i]["POK_START"]},0) 
            //  `);

            console.log(`--${res[i]["N_SH"]}-- ${date} ${time} success... ${res[i]["N_INTER_RAS"]}`);
        }
    }
}

init();