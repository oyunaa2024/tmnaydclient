const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TableNKipRo', {
    TableID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    TableName: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TableNKipRo',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TableNKipRo",
        unique: true,
        fields: [
          { name: "TableID" },
        ]
      },
    ]
  });
};
