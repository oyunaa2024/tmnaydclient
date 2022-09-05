const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('open_pit', {
    DateTimeZveno: {
      type: DataTypes.DATE,
      allowNull: true
    },
    newShift: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    loader: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    gorizont: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    block: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    pland: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    fakt: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'open_pit',
    schema: 'dbo',
    timestamps: false
  });
};
