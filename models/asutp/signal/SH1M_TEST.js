const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SH1M_TEST', {
    '1800001': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '1810001': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '1820001': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    DT: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'SH1M_TEST',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SH1M_TEST",
        unique: true,
        fields: [
          { name: "DT" },
        ]
      },
    ]
  });
};
