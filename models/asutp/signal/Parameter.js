const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Parameter', {
    LocationID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ParameterID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    AnalogDiscrete: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    ShortName: {
      type: DataTypes.STRING(55),
      allowNull: false
    },
    ShortNameRu: {
      type: DataTypes.STRING(55),
      allowNull: true
    },
    ShortNameMn: {
      type: DataTypes.STRING(55),
      allowNull: true
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
    },
    OutPutID2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PIDCheck: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Parameter',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_Parameter",
        unique: true,
        fields: [
          { name: "LocationID" },
          { name: "ParameterID" },
        ]
      },
    ]
  });
};
