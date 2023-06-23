const Sequelize = require("sequelize");

var db_scada = {};

const sequelize = new Sequelize(
    process.env.SCADA_DATABASE,
    process.env.SCADA_USER,
    process.env.SCADA_USER_PASSWORD,
    {
        host: process.env.SCADA_HOST,
        port: process.env.SCADA_PORT,
        dialect: process.env.SCADA_DIALECT,
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
        logging: true
    }
);

const models = [
    require("../../models/Scada/Last_24Hour_AI_Graphic_m"),
    require("../../models/Scada/Last_24Hour_AI_Graphic_m1"),
    require("../../models/Scada/Calculated_AI1"),
    require("../../models/Scada/FIXALARMS"),
];

models.forEach(model => {
    const seqModel = model(sequelize, Sequelize);
    db_scada[seqModel.name] = seqModel;
});

db_scada.sequelize = sequelize;
db_scada.name = "db_scada";

module.exports = db_scada;