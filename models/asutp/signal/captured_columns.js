const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('captured_columns', {
    object_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    column_name: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    column_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    column_type: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    column_ordinal: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    is_computed: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    masking_function: {
      type: DataTypes.STRING(4000),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'captured_columns',
    schema: 'cdc',
    timestamps: false,
    indexes: [
      {
        name: "captured_columns_clustered_idx",
        unique: true,
        fields: [
          { name: "object_id" },
          { name: "column_ordinal" },
        ]
      },
    ]
  });
};
