const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CtrlAlarm', {
    TableID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ParameterID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    STDPercent: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'CtrlAlarm',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__CtrlAlar__12DFC7A741EBC7CA",
        unique: true,
        fields: [
          { name: "TableID" },
          { name: "ParameterID" },
        ]
      },
    ]
  });
};
