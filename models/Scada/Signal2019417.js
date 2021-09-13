const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Signal2019417', {
    TAGNAME: {
      type: DataTypes.CHAR(22),
      allowNull: false
    },
    DESCR: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    DESCRRU: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    FENAME: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    KPNAME: {
      type: DataTypes.CHAR(4),
      allowNull: true
    },
    AvgAI: {
      type: DataTypes.CHAR(4),
      allowNull: true
    },
    ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TYPE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RANGE: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    SeTYPE: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    ALARMTYPE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SCALE: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    TP: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Voltage: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    SigHI: {
      type: DataTypes.CHAR(5),
      allowNull: true
    },
    TAGNAMERU: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    SubStation: {
      type: DataTypes.CHAR(12),
      allowNull: true
    },
    orderby: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    avgFilter: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    avgSort: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    KadrType: {
      type: DataTypes.CHAR(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Signal2019417',
    schema: 'dbo',
    timestamps: false
  });
};
