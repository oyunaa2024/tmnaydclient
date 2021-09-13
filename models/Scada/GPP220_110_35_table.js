const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GPP220_110_35_table', {
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
    tableName: 'GPP220_110_35_table',
    schema: 'dbo',
    timestamps: false
  });
};
