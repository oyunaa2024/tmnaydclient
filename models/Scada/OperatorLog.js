const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OperatorLog', {
    Oper_name: {
      type: DataTypes.CHAR(25),
      allowNull: true
    },
    Controltag: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    Datetime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Cvalue: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    Logon: {
      type: DataTypes.CHAR(14),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'OperatorLog',
    schema: 'dbo',
    timestamps: false
  });
};
