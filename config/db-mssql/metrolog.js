const Sequelize = require("sequelize");

var db_metrolog = {};

const sequelize = new Sequelize(
  process.env.METROLOG_DATABASE,
  process.env.METROLOG_USER,
  process.env.METROLOG_USER_PASSWORD,
  {
    host: process.env.METROLOG_HOST,
    port: process.env.METROLOG_PORT,
    dialect: process.env.METROLOG_DIALECT,
    define: {
      freezeTableName: true,
    },
    pool: {
      max: 10,
      min: 0,
      acquire: 60000,
      idle: 10000,
    },

    operatorAliases: false,
    logging: false
  }
);

// const models = [
//   require("../../models/sequelize/operative/AlarmsLast"),
// ];

// models.forEach((model) => {
//   const seqModel = model(sequelize, Sequelize);
//   db_metrolog[seqModel.name] = seqModel;
// });

db_metrolog.sequelize = sequelize;
db_metrolog.name = "db_metrolog";

module.exports = db_metrolog;
