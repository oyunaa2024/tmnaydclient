const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ElectroDayReport', {
    ValueDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    InsertDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Value: {
      type: DataTypes.STRING(3000),
      allowNull: true,
      defaultValue: "(N-"
    }
  }, {
    sequelize,
    tableName: 'ElectroDayReport',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ClusteredIndex-20200414-142114",
        fields: [
          { name: "ValueDate" },
        ]
      },
    ]
  });
};
