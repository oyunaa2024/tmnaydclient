const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('asutp2center1', {
    ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    db: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    tab: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    field: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    Name: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    Value: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'asutp2center1',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_asutp2center1",
        unique: true,
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
};
