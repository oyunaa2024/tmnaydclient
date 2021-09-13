const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('test12345', {
    SignalID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ALM_NATIVETIMELAST: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ALM_VALUE: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'test12345',
    schema: 'dbo',
    timestamps: false
  });
};
