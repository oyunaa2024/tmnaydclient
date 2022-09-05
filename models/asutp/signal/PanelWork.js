const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PanelWork', {
    PanelNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PanelName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    AsutpTime: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PanelWork',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_PanelWork",
        unique: true,
        fields: [
          { name: "PanelNumber" },
        ]
      },
    ]
  });
};
