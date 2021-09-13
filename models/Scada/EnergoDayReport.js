const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EnergoDayReport', {
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
      type: DataTypes.STRING(500),
      allowNull: true,
      defaultValue: "(N-"
    }
  }, {
    sequelize,
    tableName: 'EnergoDayReport',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ClusteredIndex-20200305-132516",
        fields: [
          { name: "ValueDate" },
        ]
      },
    ]
  });
};
