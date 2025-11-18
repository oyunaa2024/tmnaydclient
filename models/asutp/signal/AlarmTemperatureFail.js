const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AlarmTemperatureFail', {
    TableID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'AlarmTemperatureFail',
    schema: 'dbo',
    timestamps: false
  });
};
