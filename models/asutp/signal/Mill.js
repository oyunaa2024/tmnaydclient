const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Mill', {
    ParameterID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    AnalogDiscreteID: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    ShortName: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    CurrentID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    SetPointID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    OutPutID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Status1ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Status2ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CheckRange: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Mill',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Mill",
        unique: true,
        fields: [
          { name: "ParameterID" },
        ]
      },
    ]
  });
};
