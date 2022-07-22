const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Calculated_AI1', {
    id: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    ALM_TAGNAME: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    ALM_NATIVETIMELAST: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ALM_VALUE: {
      type: DataTypes.CHAR(40),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Calculated_AI1',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Calculat__3213E83F967C040B",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
