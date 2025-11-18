const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PanelContentsConstant', {
    ConstantID: {
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
    LocationID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ParameterID: {
      type: DataTypes.INTEGER,
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
    tableName: 'PanelContentsConstant',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_PanelContentsConstant",
        unique: true,
        fields: [
          { name: "ConstantID" },
        ]
      },
    ]
  });
};
