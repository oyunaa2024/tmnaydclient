const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TestPitram', {
    LocalEventTime: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PrimaryToken: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    tonne: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    KCI_AM_CODE: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CU: {
      type: DataTypes.DOUBLE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TestPitram',
    schema: 'dbo',
    timestamps: false
  });
};
