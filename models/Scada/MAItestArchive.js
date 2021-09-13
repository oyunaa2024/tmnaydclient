const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MAItestArchive', {
    SignalID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    DAY: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    ALM_NATIVETIMELAST: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ALM_VALUE: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'MAItestArchive',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ClusteredIndex-20190719-142843",
        fields: [
          { name: "SignalID" },
          { name: "ALM_NATIVETIMELAST" },
        ]
      },
    ]
  });
};
