const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('KSITempH', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DT: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    },
    T1: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    T2: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    T3: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    T4: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    T5: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    T6: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    T7: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    T8: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    T9: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    T10: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    T11: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    T12: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'KSITempH',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "idx_Nonclustered_KSITempH_DT",
        fields: [
          { name: "DT" },
        ]
      },
      {
        name: "PK__KSITemp",
        unique: true,
        fields: [
          { name: "ID" },
          { name: "DT" },
        ]
      },
    ]
  });
};
