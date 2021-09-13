const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('testTmp', {
    ALM_NATIVETIMELAST: {
      type: DataTypes.DATE,
      allowNull: true
    },
    alm_value: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'testTmp',
    schema: 'dbo',
    timestamps: false
  });
};
