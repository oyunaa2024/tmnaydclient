const Sequelize = require("sequelize");

var technodb = {};

const sequelize = new Sequelize(
    process.env.TECHNODB_DATABASE,
    process.env.TECHNODB__USER,
    process.env.TECHNODB_USER_PASSWORD,
    {
        host: process.env.TECHNODB_HOST,
        port: process.env.TECHNODB_PORT,
        dialect: process.env.TECHNODB_DIALECT,
        dialectOptions: {
            requestTimeout: 30000,
        },
        define: {
            freezeTableName: true,
        },
        pool: {
            max: 20,
            min: 0,
            acquire: 60000,
            idle: 10000,
        },
        operatorAliases: false,
        logging: false
    }
);

const models = [require("../../models/Scada/FIXALARMS")];

models.forEach(model => {
    const seqModel = model(sequelize, Sequelize);
    technodb[seqModel.name] = seqModel;
});

technodb.sequelize = sequelize;
technodb.name = "technodb";

module.exports = technodb;