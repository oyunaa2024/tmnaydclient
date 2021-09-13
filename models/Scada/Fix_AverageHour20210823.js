const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Fix_AverageHour20210823', {
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
    tableName: 'Fix_AverageHour20210823',
    schema: 'dbo',
    timestamps: false
  });
};
