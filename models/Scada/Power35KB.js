const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Power35KB', {
    ID: {
      type: DataTypes.BIGINT,
      allowNull: false,
      autoIncrement: true
    },
    Date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    OchistA: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    OchistB: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    crp6B1: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    crp6B2: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    crp7B1: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    crp7B2: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    crp10B1: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    crp10B2: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    crp10B3: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    crp10N4: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    kotA: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    kotB: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    crp1B1: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    crp1B2: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    crp1TG1: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    crp1TG2: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    crp5B1: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    crp5RMC1c: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    crp5RMC2c: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    crp5RpLit1c: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    crp5RpLit2c: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Erdmin1: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Erdmin2: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    crp7GG1: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    crp7GG2: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    crp5b2: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    crp1fe31: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    crp1fe43: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    KotABate: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    KotBBate: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    crp1B1Bate: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    crp1B2Bate: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Power35KB',
    schema: 'dbo',
    timestamps: false
  });
};
