const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TableTemperature', {
    TableID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TableName: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TableNameRu: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TableNameMn: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TableTemperature',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TableTemperature",
        unique: true,
        fields: [
          { name: "TableID" },
        ]
      },
    ]
  });
};
