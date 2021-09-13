const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ParametersHistoryHour', {
    ValueDate: {
      type: "SMALLDATETIME",
      allowNull: false,
      primaryKey: true
    },
    ParameterID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    ParameterValue: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ParametersHistoryHour',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_ParametersHistoryHour",
        unique: true,
        fields: [
          { name: "ValueDate" },
          { name: "ParameterID" },
        ]
      },
    ]
  });
};
