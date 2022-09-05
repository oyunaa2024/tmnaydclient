const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TableN', {
    TableID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TableName: {
      type: DataTypes.STRING(50),
      allowNull: false
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
    tableName: 'TableN',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TableN",
        unique: true,
        fields: [
          { name: "TableID" },
        ]
      },
    ]
  });
};
