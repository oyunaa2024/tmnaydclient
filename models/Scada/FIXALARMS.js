const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FIXALARMS', {
    ALM_NATIVETIMEIN: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ALM_NATIVETIMELAST: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ALM_TAGNAME: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    ALM_VALUE: {
      type: DataTypes.CHAR(40),
      allowNull: true
    },
    ALM_UNIT: {
      type: DataTypes.CHAR(13),
      allowNull: true
    },
    ALM_MSGTYPE: {
      type: DataTypes.CHAR(11),
      allowNull: true
    },
    ALM_ALMSTATUS: {
      type: DataTypes.CHAR(9),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'FIXALARMS',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ClusteredIndex-20190701-172249",
        fields: [
          { name: "ALM_NATIVETIMELAST", order: "DESC" },
          { name: "ALM_TAGNAME" },
        ]
      },
    ]
  });
};
