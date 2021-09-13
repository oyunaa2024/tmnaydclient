const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('RTUStatus', {
    KPName: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    KPDescr: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    Total: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Active: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Status: {
      type: DataTypes.CHAR(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'RTUStatus',
    schema: 'dbo',
    timestamps: false
  });
};
