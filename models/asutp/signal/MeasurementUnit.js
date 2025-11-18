const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MeasurementUnit', {
    MeasurementUnitID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Description: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Description_ru: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Description_mn: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MeasurementUnitDesc: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'MeasurementUnit',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_MeasurementUnit",
        unique: true,
        fields: [
          { name: "MeasurementUnitID" },
        ]
      },
    ]
  });
};
