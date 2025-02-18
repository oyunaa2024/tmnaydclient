const dotenv = require("dotenv");
const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
const { QueryTypes } = require('sequelize');

dotenv.config({ path: "./config/config.env" });
const db_test = require("./config/db-mssql/test");
const db_metrolog = require("./config/db-mssql/metrolog");

dayjs.extend(utc);

console.log(dayjs().format("YYYY-MM-DD HH:mm:ss"));

const init = async () => {

    for (let i = 1; i <= 169; i++) {
        const res = await db_metrolog.sequelize.query(`
            exec _sp_2019plan_report_hh_1_1 @depId=${i}, @god=2025`, {
            type: QueryTypes.SELECT,
        });



        if (res.length > 0) {

            console.log("DepID => ", i);

            for (let k = 0; k < res.length; k++) {
                await db_test.sequelize.query(`
                    INSERT INTO Metrolog_Plan_2025 (f1 ,f2, f3, f4, f5, f6, f7, f8, f9, f10, 
                                    f11, f12, f13, f14, f15, f16, f17, f18, f19, f20, 
                                    f21, f22, f23, f24, f25, f26, f27, f28, f29, f30)
                    VALUES (
                    ${res[k].f1 == null ? null : `N'${res[k].f1}'`}, 
                    ${res[k].f2 == null ? null : `N'${res[k].f2}'`}, 
                    ${res[k].f3 == null ? null : `N'${res[k].f3}'`}, 
                    ${res[k].f4 == null ? null : `N'${res[k].f4}'`}, 
                    ${res[k].f5 == null ? null : `N'${res[k].f5}'`}, 
                    ${res[k].f6 == null ? null : `N'${res[k].f6}'`}, 
                    ${res[k].f7 == null ? null : `N'${res[k].f7}'`}, 
                    ${res[k].f8 == null ? null : `N'${res[k].f8}'`}, 
                    ${res[k].f9 == null ? null : `N'${res[k].f9}'`}, 
                    ${res[k].f10 == null ? null : `N'${res[k].f10}'`}, 
                    ${res[k].f11 == null ? null : `N'${res[k].f11}'`}, 
                    ${res[k].f12 == null ? null : `N'${res[k].f12}'`}, 
                    ${res[k].f13 == null ? null : `N'${res[k].f13}'`}, 
                    ${res[k].f14 == null ? null : `N'${res[k].f14}'`}, 
                    ${res[k].f15 == null ? null : `N'${res[k].f15}'`}, 
                    ${res[k].f16 == null ? null : `N'${res[k].f16}'`}, 
                    ${res[k].f17 == null ? null : `N'${res[k].f17}'`}, 
                    ${res[k].f18 == null ? null : `N'${res[k].f18}'`}, 
                    ${res[k].f19 == null ? null : `N'${res[k].f19}'`}, 
                    ${res[k].f20 == null ? null : `N'${res[k].f20}'`}, 
                    ${res[k].f21 == null ? null : `N'${res[k].f21}'`}, 
                    ${res[k].f22 == null ? null : `N'${res[k].f22}'`}, 
                    ${res[k].f23 == null ? null : `N'${res[k].f23}'`}, 
                    ${res[k].f24 == null ? null : `N'${res[k].f24}'`}, 
                    ${res[k].f25 == null ? null : `N'${res[k].f25}'`}, 
                    ${res[k].f26 == null ? null : `N'${res[k].f26}'`}, 
                    ${res[k].f27 == null ? null : `N'${res[k].f27}'`}, 
                    ${res[k].f28 == null ? null : `N'${res[k].f28}'`}, 
                    ${res[k].f29 == null ? null : res[k].f29}, 
                    ${res[k].f30 == null ? null : res[k].f30}
                    );
            `, {
                    type: QueryTypes.INSERT,
                });
                console.log(k + 1, res[k].f1, res[k].f2, res[k].f4)
            }


        }
    }
}



init();




// const db_test = require("./config/db-mssql/scada");

// const result = await req.db_test.sequelize.query(
//   `select ValueDate,${attr} FROM [Last_24Hour_AI_Graphic_m1] where ValueDate between :startDateTime and :endDateTime order by ValueDate`,
// );

// db_test.FIXALARMS.bulkCreate([
//     {
//     ALM_NATIVETIMEIN: '2022-07-21 16:24:18.748',
//     ALM_NATIVETIMELAST: '2022-07-21 16:24:18.748',
//     ALM_TAGNAME: 'KP5X_ABB_T2_AI260',
//     ALM_VALUE: '164.50',
//     ALM_MSGTYPE: 'ALARM',
//     ALM_ALMSTATUS: 'RATE',
//   },
//     {
//     ALM_NATIVETIMEIN: '2022-07-21 16:24:18.749',
//     ALM_NATIVETIMELAST: '2022-07-21 16:24:18.749',
//     ALM_TAGNAME: 'KP5X_ABB_T2_AI260',
//     ALM_VALUE: '177.2',
//     ALM_MSGTYPE: 'ALARM',
//     ALM_ALMSTATUS: 'RATE',
//   },
// ]).then(res => console.log("success...")).catch(err => console.log(err.message));


// db_test.Calculated_AI1.bulkCreate([
//     {
//     ALM_TAGNAME: 'RP10_BBOD3',
//     ALM_NATIVETIMELAST: '2022-07-21 16:24:18.748',
//     ALM_VALUE: '164.50'
//   },
//   {
//     ALM_TAGNAME: 'RP10_BBOD3',
//     ALM_NATIVETIMELAST: '2022-07-21 16:24:18.749',
//     ALM_VALUE: '53.45'
//   },
//   {
//     ALM_TAGNAME: 'RP10_BBOD3',
//     ALM_NATIVETIMELAST: '2022-07-21 16:24:18.750',
//     ALM_VALUE: '53.45'
//   },
//   {
//     ALM_TAGNAME: 'RP10_BBOD3',
//     ALM_NATIVETIMELAST: '2022-07-21 16:24:18.751',
//     ALM_VALUE: '53.45'
//   },
// ]).then(res => console.log("success...")).catch(err => console.log(err.message));
