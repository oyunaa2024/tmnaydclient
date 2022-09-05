const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SignalCurrentValue', {
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
    tableName: 'SignalCurrentValue',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__SignalCu__3A6230651432410E",
        unique: true,
        fields: [
          { name: "SignalID" },
        ]
      },
    ]
  });
};
