const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PowerLineMaxParameters', {
    SignalID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Descrru: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    ParametersValue: {
      type: DataTypes.CHAR(40),
      allowNull: true
    },
    ValueDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ReadDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'PowerLineMaxParameters',
    schema: 'dbo',
    timestamps: false
  });
};
