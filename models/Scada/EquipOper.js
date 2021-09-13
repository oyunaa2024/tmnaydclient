const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EquipOper', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Coun: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    WorkedTime: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'EquipOper',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_EquipOper",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
};
