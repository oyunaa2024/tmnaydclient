const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('BlockType', {
    BlockType: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    BlockPins: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'BlockType',
    schema: 'dbo',
    timestamps: false
  });
};
