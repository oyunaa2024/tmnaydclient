const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ddl_history', {
    source_object_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    object_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    required_column_update: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    ddl_command: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ddl_lsn: {
      type: DataTypes.BLOB,
      allowNull: false,
      primaryKey: true
    },
    ddl_time: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ddl_history',
    schema: 'cdc',
    timestamps: false,
    indexes: [
      {
        name: "ddl_history_clustered_idx",
        unique: true,
        fields: [
          { name: "object_id" },
          { name: "ddl_lsn" },
        ]
      },
    ]
  });
};
