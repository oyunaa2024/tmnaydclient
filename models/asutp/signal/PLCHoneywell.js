const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PLCHoneywell', {
    LocationID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    BackupStatus: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    BackupSyncStatus: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Link1Status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Link2Status: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CPURedundancyState: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DT: {
      type: "SMALLDATETIME",
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PLCHoneywell',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__PLCHoney__E7FEA4779A78FA42",
        unique: true,
        fields: [
          { name: "LocationID" },
        ]
      },
    ]
  });
};
