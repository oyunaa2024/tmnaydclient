const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TestDeviceCurrent', {
    SignalID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SignalDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Value: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TestDeviceCurrent',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TestDeviceCurrent",
        unique: true,
        fields: [
          { name: "SignalID" },
        ]
      },
    ]
  });
};
