const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Reagent', {
    SignalID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    MaterialID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    LocationID: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Reagent',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PK_Reagent",
        unique: true,
        fields: [
          { name: "SignalID" },
        ]
      },
    ]
  });
};
