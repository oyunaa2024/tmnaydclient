const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Avg30minPower', {
    ALM_TAGNAME: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    AVG_VALUE: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    BET_DATE: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Avg30minPower',
    schema: 'dbo',
    timestamps: false
  });
};
