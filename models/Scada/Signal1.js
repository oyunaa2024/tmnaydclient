const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Signal1', {
    TAGNAME: {
      type: DataTypes.STRING(22),
      allowNull: true
    },
    DESCR: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DESCRRU: {
      type: DataTypes.STRING(100),
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
    tableName: 'Signal1',
    schema: 'dbo',
    timestamps: false
  });
};
