const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('KSI3States', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DT: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    },
    MS: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    STATE: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Action: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'KSI3States',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__KSI3Stat__5135AA0671D65FF6",
        unique: true,
        fields: [
          { name: "ID" },
          { name: "DT" },
        ]
      },
    ]
  });
};
