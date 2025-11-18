const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('OreDistribution', {
    DT: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    },
    M1A: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    M1: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    M2: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    M3: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    M4: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    M5: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    M6: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    M7: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    M8: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    MMC1: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    MMC2: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    MMC3: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    UserID: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'OreDistribution',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_OreDistribution",
        unique: true,
        fields: [
          { name: "DT" },
        ]
      },
    ]
  });
};
