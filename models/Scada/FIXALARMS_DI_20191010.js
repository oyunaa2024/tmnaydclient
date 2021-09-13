const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FIXALARMS_DI_20191010', {
    LocalTimeDate: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    tag: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    state: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'FIXALARMS_DI_20191010',
    schema: 'dbo',
    timestamps: false
  });
};
