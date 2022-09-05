const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PKS', {
    SignalID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    PointID: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ParameterID: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    BlockType: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'PKS',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_PKS",
        unique: true,
        fields: [
          { name: "SignalID" },
        ]
      },
    ]
  });
};
