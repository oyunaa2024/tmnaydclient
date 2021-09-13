const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AvgPara', {
    Id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    Date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TPara1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PPara1: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    QPara1: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    TPara2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PPara2: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    QPara2: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    QPTB1: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    QPTB2: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    QOB1: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    QOB2: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    QTep: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    QCPara1: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    QCPara2: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'AvgPara',
    schema: 'dbo',
    timestamps: false
  });
};
