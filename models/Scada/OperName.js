const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OperName', {
    Oper_name: {
      type: DataTypes.CHAR(25),
      allowNull: true
    },
    Oper_pass: {
      type: DataTypes.CHAR(25),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'OperName',
    schema: 'dbo',
    timestamps: false
  });
};
