const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pid_sec6_CT', {
    __$start_lsn: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    __$end_lsn: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    __$seqval: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    __$operation: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    __$update_mask: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    DT: {
      type: "SMALLDATETIME",
      allowNull: true
    },
    SignalID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    POINTID: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PARAMETERID: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    MODE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    K: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    T1: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    T2: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    __$command_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pid_sec6_CT',
    schema: 'cdc',
    timestamps: false,
    indexes: [
      {
        name: "pid_sec6_CT_clustered_idx",
        unique: true,
        fields: [
          { name: "__$start_lsn" },
          { name: "__$command_id" },
          { name: "__$seqval" },
          { name: "__$operation" },
        ]
      },
      {
        name: "pid_sec6_CT_idx",
        unique: true,
        fields: [
          { name: "SignalID" },
          { name: "__$start_lsn" },
          { name: "__$command_id" },
          { name: "__$seqval" },
          { name: "__$operation" },
        ]
      },
    ]
  });
};
