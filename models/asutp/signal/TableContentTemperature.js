const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TableContentTemperature', {
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
    tableName: 'TableContentTemperature',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TableContentS1",
        unique: true,
        fields: [
          { name: "TableID" },
          { name: "RowN" },
        ]
      },
    ]
  });
};
