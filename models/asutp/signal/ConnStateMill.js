const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ConnStateMill', {
    ConnStateDate: {
      type: "SMALLDATETIME",
      allowNull: true
    },
    M1A: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    M1: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    M2: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    M3: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    M4: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    M5: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    M6: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    M7: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    M8: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    MMC1: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    MMC2: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    MMC3: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    Rezervuar: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    Thread: {
      type: DataTypes.TINYINT,
      allowNull: true
    },
    IPAddress: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    Nagnet: {
      type: DataTypes.TINYINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'ConnStateMill',
    schema: 'dbo',
    timestamps: false
  });
};
