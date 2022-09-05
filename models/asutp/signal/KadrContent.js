const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('KadrContent', {
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
    LocationID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ParameterID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'KadrContent',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_KadrContent",
        unique: true,
        fields: [
          { name: "TableID" },
          { name: "RowN" },
        ]
      },
    ]
  });
};
