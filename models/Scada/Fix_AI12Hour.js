const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Fix_AI12Hour', {
    SignalID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
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
      type: DataTypes.FLOAT,
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
    tableName: 'Fix_AI12Hour',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ClusteredIndex-20201216-100536",
        fields: [
          { name: "SignalID" },
          { name: "ALM_NATIVETIMELAST", order: "DESC" },
          { name: "ALM_TAGNAME" },
        ]
      },
    ]
  });
};
