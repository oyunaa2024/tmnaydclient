const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('asutp_stat', {
    CompName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    DateTime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    OSVersion: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ApplicationVersion: {
      type: DataTypes.CHAR(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'asutp_stat',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_asutp_stat_",
        unique: true,
        fields: [
          { name: "CompName" },
        ]
      },
    ]
  });
};
