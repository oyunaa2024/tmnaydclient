const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Panel', {
    Namber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PanelName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    TableID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    TableName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    OreView: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    IntervalView: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Panel',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Panel",
        unique: true,
        fields: [
          { name: "Namber" },
        ]
      },
    ]
  });
};
