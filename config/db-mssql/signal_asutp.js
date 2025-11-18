const Sequelize = require("sequelize");

var db_signal_asutp = {};

const sequelize = new Sequelize(
  process.env.ASUTP_SIGNAL_DATABASE,
  process.env.ASUTP_SIGNAL_USER,
  process.env.ASUTP_SIGNAL_USER_PASSWORD,
  {
    host: process.env.ASUTP_SIGNAL_HOST,
    port: process.env.ASUTP_SIGNAL_PORT,
    dialect: process.env.ASUTP_SIGNAL_DIALECT,
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

const models = [
  require("../../models/asutp/signal/Signal")
];

models.forEach((model) => {
  const seqModel = model(sequelize, Sequelize);
  db_signal_asutp[seqModel.name] = seqModel;
});

db_signal_asutp.sequelize = sequelize;
db_signal_asutp.name = "db_signal_asutp";

module.exports = db_signal_asutp;
