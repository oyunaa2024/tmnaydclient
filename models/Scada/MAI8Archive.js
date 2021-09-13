const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MAI8Archive', {
    SignalID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DAY: {
      type: DataTypes.TINYINT,
      allowNull: true
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
    tableName: 'MAI8Archive',
    schema: 'dbo',
    timestamps: false
  });
};
