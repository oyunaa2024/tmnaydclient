const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('NetValue', {
    KP_IP: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    Value: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    DTime: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'NetValue',
    schema: 'dbo',
    timestamps: false
  });
};
