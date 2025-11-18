const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AlarmAnalogSignals', {
    TableID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CV: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    V: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'AlarmAnalogSignals',
    schema: 'dbo',
    timestamps: false
  });
};
