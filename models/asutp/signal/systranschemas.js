const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('systranschemas', {
    tabid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    startlsn: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    endlsn: {
      type: DataTypes.BLOB,
      allowNull: false
    },
    typeid: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'systranschemas',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "uncsystranschemas",
        unique: true,
        fields: [
          { name: "startlsn" },
        ]
      },
    ]
  });
};
