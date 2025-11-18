const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DeviceType', {
    DeviceTypeID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Description: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Description_ru: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Description_mn: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'DeviceType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_DeviceType",
        unique: true,
        fields: [
          { name: "DeviceTypeID" },
        ]
      },
    ]
  });
};
