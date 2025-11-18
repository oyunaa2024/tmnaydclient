const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SH1M_RO', {
    '800001': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '800002': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '800003': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '800004': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '800005': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '800006': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '800007': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '800008': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '800009': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '800010': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '800011': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '800012': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '800013': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '800014': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '800015': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '800016': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '800017': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '800018': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '800019': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '800020': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '800021': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '800022': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '800023': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '800024': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '800025': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '800026': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '800027': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '800028': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '800029': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '800030': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '800031': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '800032': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '800033': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '800034': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '800035': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '810001': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '810002': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '810003': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '810004': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '810005': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '810006': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '810007': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '810008': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '810009': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '810010': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '810011': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '810012': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '810013': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '810014': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '810015': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '810016': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '810017': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '810032': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '820001': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '820002': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '820003': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '820004': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '820005': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '820006': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '820007': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '820032': {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    '899999': {
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
    tableName: 'SH1M_RO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__SH1M_RO",
        unique: true,
        fields: [
          { name: "DT" },
        ]
      },
    ]
  });
};
