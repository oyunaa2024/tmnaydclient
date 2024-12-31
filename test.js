const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
const modbus = require('modbus')
const dotenv = require("dotenv")
const { QueryTypes } = require('sequelize');

dotenv.config({ path: "./config/config.env" });
const db_scada = require("./config/db-mssql/scada");
const db_techno = require("./config/db-mssql/technodb");

dayjs.extend(utc);



const init = async () => {

    let res = await db_scada.sequelize.query(`
       SELECT TOP 1000 [SYB_RNK]
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
  where n_sh = '10000022' and DD_MM_YYYY between '2024-12-27' and '2024-12-31 23:00'
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

        console.log(`--${res[i]["N_SH"]}-- ${date} ${time} success... ${res[i]["N_INTER_RAS"]}`);


    }




}

init();












// let now = dayjs();


// console.log(Math.floor(df1 / 30) + 1)
// console.log(df2)