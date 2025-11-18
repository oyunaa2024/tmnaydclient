const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('alarmipaddr', {
    ipaddr: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    index: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'alarmipaddr',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__alarmipa__1D0A3348CDC4CD1A",
        unique: true,
        fields: [
          { name: "index" },
        ]
      },
    ]
  });
};
