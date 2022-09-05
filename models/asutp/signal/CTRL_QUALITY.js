const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CTRL_QUALITY', {
    SID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DT: {
      type: DataTypes.DATE,
      allowNull: false
    },
    STD: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    M_PV: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    M_SP: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    MAXIMUM: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'CTRL_QUALITY',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__CTRL_QUA__CA1959703C8838E4",
        unique: true,
        fields: [
          { name: "SID" },
        ]
      },
    ]
  });
};
