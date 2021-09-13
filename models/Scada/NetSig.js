const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NetSig', {
    KPName: {
      type: DataTypes.CHAR(5),
      allowNull: true
    },
    KPDescr: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    KP_IP: {
      type: DataTypes.CHAR(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'NetSig',
    schema: 'dbo',
    timestamps: false
  });
};
