const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SiemensID', {
    SignalID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ItemID: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    SignalType: {
      type: DataTypes.SMALLINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'SiemensID',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SiemensID",
        unique: true,
        fields: [
          { name: "SignalID" },
        ]
      },
    ]
  });
};
