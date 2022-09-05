const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TableContent', {
    TableID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    RowN: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ParameterID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TableContent',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TableContent",
        unique: true,
        fields: [
          { name: "TableID" },
          { name: "RowN" },
        ]
      },
    ]
  });
};
