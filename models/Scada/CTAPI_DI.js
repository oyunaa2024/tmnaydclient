const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CTAPI_DI', {
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
    }
  }, {
    sequelize,
    tableName: 'CTAPI_DI',
    schema: 'dbo',
    timestamps: false
  });
};
