const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('KSI3StatesNames', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'KSI3StatesNames',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__KSI3Stat__3214EC27FC0A3E69",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
};
