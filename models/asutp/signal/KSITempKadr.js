const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('KSITempKadr', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    FieldNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Name_ru: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Name_mn: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Tattention: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Talarm: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Tavaria: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'KSITempKadr',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__KSITempK__D4F94B06C940B621",
        unique: true,
        fields: [
          { name: "ID" },
          { name: "FieldNumber" },
        ]
      },
    ]
  });
};
