const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SH1M_PNS', {
    '1500001': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '1500008': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '1500009': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '1500010': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '1500013': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '1500014': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '1500015': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '1500016': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '1500017': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '1500018': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '1500019': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '1500020': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '1500021': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '1500022': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '1500023': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '1500024': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '1500025': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '1500026': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '1500027': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '1500028': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '1500029': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '1500030': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '1500062': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '1500063': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '1500064': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '1500071': {
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
    tableName: 'SH1M_PNS',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__SH1M_PNS",
        unique: true,
        fields: [
          { name: "DT" },
        ]
      },
    ]
  });
};
