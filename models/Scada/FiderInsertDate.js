const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FiderInsertDate', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true
    },
    SignalID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    InsertDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'FiderInsertDate',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__FiderIns__3A6230650E590B2F",
        unique: true,
        fields: [
          { name: "SignalID" },
        ]
      },
    ]
  });
};
