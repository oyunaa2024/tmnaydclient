const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Power110KB', {
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
    },
    ABKT1: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ABKT2: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ATPT1: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    ATPT2: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    BMTC: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    POT1: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    POT2: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    PCOT1: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    PCOT2: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    PCOT3: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    RP1C1: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    RP1C2: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    RP1C3: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    RP1C4: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    RP2C5: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    RP2C6: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    RP2C7: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    RP2C8: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    RP5B2: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    RP5B4: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    MPSI5SD1SD2: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    MSHTS6SD1SD2: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Power110KB',
    schema: 'dbo',
    timestamps: false
  });
};
