const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Measurement', {
    MeasurementID: {
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
    tableName: 'Measurement',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Measurement",
        unique: true,
        fields: [
          { name: "MeasurementID" },
        ]
      },
    ]
  });
};
