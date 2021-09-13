const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SignalName20200501', {
    SignalID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Tagname: {
      type: DataTypes.STRING(22),
      allowNull: true
    },
    Substation: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    Descrru: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    Fename: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Type: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    GroupID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Scale: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Tp: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Tagnameru: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ID: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    VSort: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SignalName20200501',
    schema: 'dbo',
    timestamps: false
  });
};
