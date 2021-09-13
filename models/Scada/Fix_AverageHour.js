const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Fix_AverageHour', {
    ValueDate: {
      type: "SMALLDATETIME",
      allowNull: false
    },
    SignalID: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    ParameterValue: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Fix_AverageHour',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ClusteredIndex-20190529-153001",
        fields: [
          { name: "ValueDate", order: "DESC" },
          { name: "SignalID" },
        ]
      },
      {
        name: "NonClusteredIndex-20190529-153037",
        fields: [
          { name: "ValueDate", order: "DESC" },
          { name: "SignalID" },
        ]
      },
    ]
  });
};
