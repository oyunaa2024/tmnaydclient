const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FIXALARMS_DI_Back', {
    LocalTimeDate: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    tag: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    state: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'FIXALARMS_DI_Back',
    schema: 'dbo',
    timestamps: false
  });
};
