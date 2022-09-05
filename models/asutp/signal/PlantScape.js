const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PlantScape', {
    SignalID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PointID: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ParameterID: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PlantScape',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_PlantScape_New",
        unique: true,
        fields: [
          { name: "SignalID" },
        ]
      },
    ]
  });
};
