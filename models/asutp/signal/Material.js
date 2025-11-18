const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Material', {
    MaterialID: {
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
    DescriptionLong: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DescriptionLong_ru: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DescriptionLong_mn: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Reagent: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    Active: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Material',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Material",
        unique: true,
        fields: [
          { name: "MaterialID" },
        ]
      },
    ]
  });
};
