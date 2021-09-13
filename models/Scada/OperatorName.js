const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OperatorName', {
    ID: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Password: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TSexID: {
      type: DataTypes.SMALLINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'OperatorName',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_OperatorName",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
};
