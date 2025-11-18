const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ctrldata', {
    name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    SignalDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    alarmtime: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ctrldata',
    schema: 'dbo',
    timestamps: false
  });
};
