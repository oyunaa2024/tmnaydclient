const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FIXALARMS_DI', {
    LocalTimeDate: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    tag: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    state_desc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Classification: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'FIXALARMS_DI',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_FIXALARMS_DI",
        unique: true,
        fields: [
          { name: "LocalTimeDate" },
          { name: "tag" },
        ]
      },
    ]
  });
};
