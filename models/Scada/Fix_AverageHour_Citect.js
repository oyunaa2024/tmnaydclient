const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Fix_AverageHour_Citect', {
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
    tableName: 'Fix_AverageHour_Citect',
    schema: 'dbo',
    timestamps: false
  });
};
