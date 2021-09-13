const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AvgSignal', {
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
    }
  }, {
    sequelize,
    tableName: 'AvgSignal',
    schema: 'dbo',
    timestamps: false
  });
};
