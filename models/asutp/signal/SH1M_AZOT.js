const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SH1M_AZOT', {
    '2000001': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '2000002': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '2000003': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '2000004': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '2000005': {
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
    tableName: 'SH1M_AZOT',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__SH1M_AZO__3214621775F52613",
        unique: true,
        fields: [
          { name: "DT" },
        ]
      },
    ]
  });
};
