const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FIXALARMS_AI', {
    ALM_TAGNAME: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    ALM_NATIVETIMELAST: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ALM_VALUE: {
      type: DataTypes.CHAR(40),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'FIXALARMS_AI',
    schema: 'dbo',
    timestamps: false
  });
};
