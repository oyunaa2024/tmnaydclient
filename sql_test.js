const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });

const db_scada = require("./config/db-mssql/scada");

// db_scada.Calculated_AI1.create({
//         ALM_TAGNAME: "TEST1_TAG",
//         ALM_NATIVETIMELAST: "2022-07-21 15:22:23.987",
//         ALM_VALUE: "1000",
//     }).then(res => console.log("success...")).catch(err => console.log(err.message));
db_scada.Calculated_AI1.bulkCreate([
    {
    ALM_TAGNAME: 'RP10_BBOD3',
    ALM_NATIVETIMELAST: '2022-07-21 16:24:18.748',
    ALM_VALUE: '164.50'
  },
  {
    ALM_TAGNAME: 'RP10_BBOD3',
    ALM_NATIVETIMELAST: '2022-07-21 16:24:18.749',
    ALM_VALUE: '53.45'
  },
  {
    ALM_TAGNAME: 'RP10_BBOD3',
    ALM_NATIVETIMELAST: '2022-07-21 16:24:18.750',
    ALM_VALUE: '53.45'
  },
  {
    ALM_TAGNAME: 'RP10_BBOD3',
    ALM_NATIVETIMELAST: '2022-07-21 16:24:18.751',
    ALM_VALUE: '53.45'
  },
]).then(res => console.log("success...")).catch(err => console.log(err.message));
