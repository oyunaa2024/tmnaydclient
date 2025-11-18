const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('index_columns', {
    object_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    column_name: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    index_ordinal: {
      type: DataTypes.TINYINT,
      allowNull: false,
      primaryKey: true
    },
    column_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'index_columns',
    schema: 'cdc',
    timestamps: false,
    indexes: [
      {
        name: "index_columns_clustered_idx",
        unique: true,
        fields: [
          { name: "object_id" },
          { name: "index_ordinal" },
          { name: "column_id" },
        ]
      },
    ]
  });
};
