const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DeviceHistory', {
    SignalID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SignalDate: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    },
    Value: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'DeviceHistory',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_DeviceHistory",
        unique: true,
        fields: [
          { name: "SignalID" },
          { name: "SignalDate" },
        ]
      },
    ]
  });
};
