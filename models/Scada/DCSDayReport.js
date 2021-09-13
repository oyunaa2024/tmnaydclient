const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DCSDayReport', {
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
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'DCSDayReport',
    schema: 'dbo',
    timestamps: false
  });
};
