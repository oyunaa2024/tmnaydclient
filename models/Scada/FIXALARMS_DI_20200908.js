const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FIXALARMS_DI_20200908', {
    LocalTimeDate: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    tag: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    state_desc: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Classification: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'FIXALARMS_DI_20200908',
    schema: 'dbo',
    timestamps: false
  });
};
