const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('change_tables', {
    object_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    version: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    source_object_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    capture_instance: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    start_lsn: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    end_lsn: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    supports_net_changes: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    has_drop_pending: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    role_name: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    index_name: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    filegroup_name: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    create_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    partition_switch: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'change_tables',
    schema: 'cdc',
    timestamps: false,
    indexes: [
      {
        name: "change_tables_clustered_idx",
        unique: true,
        fields: [
          { name: "object_id" },
        ]
      },
      {
        name: "change_tables_unique_idx",
        unique: true,
        fields: [
          { name: "capture_instance" },
        ]
      },
      {
        name: "source_object_id_idx",
        fields: [
          { name: "source_object_id" },
        ]
      },
    ]
  });
};
