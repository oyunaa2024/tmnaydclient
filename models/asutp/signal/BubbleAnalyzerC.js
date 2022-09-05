const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('BubbleAnalyzerC', {
    num1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    num2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    num3: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    num4: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    num5: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    num6: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    num7: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    size1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    size2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    size3: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    size4: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    size5: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    size6: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    size7: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    speed: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    life: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    r: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    g: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    b: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dt: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'BubbleAnalyzerC',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__BubbleAn__D13250DCB8724E27",
        unique: true,
        fields: [
          { name: "dt" },
          { name: "id" },
        ]
      },
    ]
  });
};
