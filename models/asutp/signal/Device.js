const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Device', {
    DeviceID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DeviceTypeID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DeviceModel: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Device',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Device",
        unique: true,
        fields: [
          { name: "DeviceID" },
        ]
      },
    ]
  });
};
