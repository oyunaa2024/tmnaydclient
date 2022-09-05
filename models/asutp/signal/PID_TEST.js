const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PID_TEST', {
    DT: {
      type: "SMALLDATETIME",
      allowNull: true
    },
    SignalID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PointID: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ParameterID: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Mode: {
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
    tableName: 'PID_TEST',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_PID_TEST",
        unique: true,
        fields: [
          { name: "SignalID" },
        ]
      },
    ]
  });
};
