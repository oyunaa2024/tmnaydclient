const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mill2pks2', {
    s_point: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    s_param: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    d_point: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    },
    d_param: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'mill2pks2',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_mill2pks2",
        unique: true,
        fields: [
          { name: "s_point" },
          { name: "s_param" },
          { name: "d_point" },
          { name: "d_param" },
        ]
      },
    ]
  });
};
