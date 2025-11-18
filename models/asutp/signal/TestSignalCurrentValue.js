const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TestSignalCurrentValue', {
    SignalID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SignalDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    CurrentValue: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TestSignalCurrentValue',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__TestSignalCurrentValue",
        unique: true,
        fields: [
          { name: "SignalID" },
        ]
      },
    ]
  });
};
