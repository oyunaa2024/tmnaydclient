const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DCSDayReportBackUP', {
    valuedate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    insertdate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Value: {
      type: DataTypes.STRING(500),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'DCSDayReportBackUP',
    schema: 'dbo',
    timestamps: false
  });
};
