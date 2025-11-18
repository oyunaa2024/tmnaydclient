const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Signal', {
    SignalID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    LocationID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DeviceTypeID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DeviceNumber: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    MeasurementID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    MeasurementUnitID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    MaterialID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    AnalogDiscreteID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    OutInID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    SetPointID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    SignalName: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    SignalNameRu: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    SignalNameMn: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    MinimumValue: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    MaximumValue: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    TechnologyMin: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    TechnologyMax: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    IncreaseMaxRate: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    DecreaseMaxRate: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    IncreaseAlarm: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DecreaseAlarm: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    TechnologyMinAlarm: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    TechnologyMaxAlarm: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    AlarmOne: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    AlarmZero: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    AlarmSignalID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Active: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Signal',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "idx_Nonclustered_Signal_SignalName",
        fields: [
          { name: "SignalName" },
        ]
      },
      {
        name: "NCI_LOCID",
        fields: [
          { name: "LocationID" },
        ]
      },
      {
        name: "PK_Signal",
        unique: true,
        fields: [
          { name: "SignalID" },
        ]
      },
    ]
  });
};
