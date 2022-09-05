const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lsn_time_mapping', {
    start_lsn: {
      type: DataTypes.BLOB,
      allowNull: false,
      primaryKey: true
    },
    tran_begin_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tran_end_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tran_id: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    tran_begin_lsn: {
      type: DataTypes.BLOB,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'lsn_time_mapping',
    schema: 'cdc',
    timestamps: false,
    indexes: [
      {
        name: "lsn_time_mapping_clustered_idx",
        unique: true,
        fields: [
          { name: "start_lsn" },
        ]
      },
      {
        name: "lsn_time_mapping_nonunique_idx",
        fields: [
          { name: "tran_end_time" },
        ]
      },
    ]
  });
};
