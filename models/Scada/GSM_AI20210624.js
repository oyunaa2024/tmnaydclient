const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GSM_AI20210624', {
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
    tableName: 'GSM_AI20210624',
    schema: 'dbo',
    timestamps: false
  });
};
