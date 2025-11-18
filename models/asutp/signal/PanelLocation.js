const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PanelLocation', {
    Number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PanelName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Location: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PanelLocation',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_PanelLocation",
        unique: true,
        fields: [
          { name: "Number" },
        ]
      },
    ]
  });
};
