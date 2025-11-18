const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('WMILLS', {
    DT: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    },
    WTM1: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    WTM1A: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    WTM2: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    WTM3: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    WTM4: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    WTM5: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    WTM6: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    WTM7: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    WTM8: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    WTZ1: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    WTZ1A: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    WTZ2: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    WTZ3: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    WTZ4: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    WTZ5: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    WTZ6: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    WTZ7: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    WTZ8: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    WALL1: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    WALL1A: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    WALL2: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    WALL3: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    WALL4: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    WALL5: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    WALL6: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    WALL7: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    WALL8: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'WMILLS',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__WMILLS__32146217626711A2",
        unique: true,
        fields: [
          { name: "DT" },
        ]
      },
    ]
  });
};
