const dotenv = require("dotenv");
const dayjs = require("dayjs")
dotenv.config({ path: "./config/config.env" });


console.log(dayjs().format("YYYY-MM-DD HH:mm:ss"))

// const db_scada = require("./config/db-mssql/scada");

// const result = await req.db_scada.sequelize.query(
//   `select ValueDate,${attr} FROM [Last_24Hour_AI_Graphic_m1] where ValueDate between :startDateTime and :endDateTime order by ValueDate`,
// );

// db_scada.FIXALARMS.bulkCreate([
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


// db_scada.Calculated_AI1.bulkCreate([
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
