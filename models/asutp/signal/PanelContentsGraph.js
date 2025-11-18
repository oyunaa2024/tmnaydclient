const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PanelContentsGraph', {
    GraphID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PanelName: {
      type: DataTypes.CHAR(50),
      allowNull: false
    },
    RowN: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Point: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    GraphType: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    CreatedAt: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    CreatedBy: {
      type: DataTypes.CHAR(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PanelContentsGraph',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_PanelContentsGraph",
        unique: true,
        fields: [
          { name: "GraphID" },
        ]
      },
    ]
  });
};
