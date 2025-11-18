const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AlarmDiscreteSignals', {
    TableID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'AlarmDiscreteSignals',
    schema: 'dbo',
    timestamps: false
  });
};
