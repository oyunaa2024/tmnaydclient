const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AvgHourPower35110', {
    SignalID: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Value: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'AvgHourPower35110',
    schema: 'dbo',
    timestamps: false
  });
};
