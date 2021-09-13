const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AvgSignal1', {
    SignalID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    avgFilter: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    avgSort: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CalcGroup: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    NickName: {
      type: DataTypes.STRING(40),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'AvgSignal1',
    schema: 'dbo',
    timestamps: false
  });
};
