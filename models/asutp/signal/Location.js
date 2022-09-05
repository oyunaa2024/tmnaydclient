const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Location', {
    LocationID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Description_: {
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
    Name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DescriptionLong: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    DescriptionLong_ru: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DescriptionLong_mn: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    REDUNDANCE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Active: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    HistoryTableName: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Location',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Location",
        unique: true,
        fields: [
          { name: "LocationID" },
        ]
      },
    ]
  });
};
