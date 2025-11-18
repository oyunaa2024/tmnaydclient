const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DeviceCurrent', {
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
    tableName: 'DeviceCurrent',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_DeviceCurrent",
        unique: true,
        fields: [
          { name: "SignalID" },
        ]
      },
    ]
  });
};
