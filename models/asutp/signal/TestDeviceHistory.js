const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TestDeviceHistory', {
    SignalID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    SignalDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Value: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TestDeviceHistory',
    schema: 'dbo',
    timestamps: false
  });
};
