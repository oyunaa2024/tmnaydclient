const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AlarmTemperaturePrepareFail', {
    TableID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'AlarmTemperaturePrepareFail',
    schema: 'dbo',
    timestamps: false
  });
};
