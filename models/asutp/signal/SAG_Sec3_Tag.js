const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SAG_Sec3_Tag', {
    SignalID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ValueID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ItemID: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    SignalType: {
      type: DataTypes.SMALLINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'SAG_Sec3_Tag',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_WinCC",
        unique: true,
        fields: [
          { name: "SignalID" },
          { name: "ValueID" },
          { name: "ItemID" },
        ]
      },
    ]
  });
};
