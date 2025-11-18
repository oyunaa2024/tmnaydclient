const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PID_SEC1', {
    DT: {
      type: "SMALLDATETIME",
      allowNull: true
    },
    SignalID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    POINTID: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    PARAMETERID: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    MODE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    K: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    T1: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    T2: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PID_SEC1',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__PID_SEC1",
        unique: true,
        fields: [
          { name: "SignalID" },
        ]
      },
    ]
  });
};
