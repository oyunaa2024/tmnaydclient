const Sequelize = require("sequelize");

var db_test = {};

const sequelize = new Sequelize(
    process.env.TEST_DATABASE,
    process.env.TEST_USER,
    process.env.TEST_USER_PASSWORD,
    {
        host: process.env.TEST_HOST,
        port: process.env.TEST_PORT,
        dialect: process.env.TEST_DIALECT,
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

// const models = [
//     require("../../models/Scada/Last_24Hour_AI_Graphic_m"),
//     require("../../models/Scada/Last_24Hour_AI_Graphic_m1"),
//     require("../../models/Scada/Calculated_AI1"),
//     require("../../models/Scada/FIXALARMS"),
// ];

// models.forEach(model => {
//     const seqModel = model(sequelize, Sequelize);
//     db_test[seqModel.name] = seqModel;
// });

db_test.sequelize = sequelize;
db_test.name = "db_test";

module.exports = db_test;