const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('test_col', {
    '100': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '101': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '102': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '103': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '104': {
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
    tableName: 'test_col',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_test_col",
        unique: true,
        fields: [
          { name: "DT" },
        ]
      },
    ]
  });
};
