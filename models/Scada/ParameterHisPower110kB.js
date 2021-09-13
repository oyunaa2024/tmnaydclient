const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ParameterHisPower110kB', {
    date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    gokA: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    gokB: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    rp1b1: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    rp1b2: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    rp1b3: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    rp1b4: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    rp2b5: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    rp2b6: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    rp2b7: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    rp2b8: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    rp3b1: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    rp3b2: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    rp3ATP1: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    rp3ATP2: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    gokg: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    gokd: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    rp9b1: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    rp9b2: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    rp9b3: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    rp9b4: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    rp5b5: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    rp5b6: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    khyla: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    khylb: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    crp1b1: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    crp1b2: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    crp2b1: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    crp2b2: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    crp3b1: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    crp3b2: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    crp4b1: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    crp4b2: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ParameterHisPower110kB',
    schema: 'dbo',
    timestamps: false
  });
};
