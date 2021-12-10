const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "Last_24Hour_AI_Graphic_m1",
    {
      ValueDate: {
        primaryKey: true,
        type: DataTypes.STRING,
        allowNull: true,
      },
      KP2_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP2_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP2_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP2_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP2_AI5: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP2_AI6: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP2_AI7: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP2_AI8: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP2_AI9: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP2_AI10: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP2_AI11: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP2_AI12: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP2_AI13: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP2_AI14: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP2_AI15: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP2_AI16: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP2_AI17: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP2_AI18: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP2_AI19: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP2_AI20: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP2_AI21: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP2_AI22: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP2_AI23: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP2_AI24: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP2_AI25: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP2_AI26: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP2_AI27: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP2_AI28: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP2_AI29: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP2_AI30: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP2_AI31: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP2_AI32: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP2_AI33: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP2_AI34: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP2_AI35: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP2_AI36: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP2_AI37: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP2_AI38: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP2_AI39: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP2_M60_MSHA1_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP2_M60_MSHA2_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP2_M60_MSHA3_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP2_M60_MSHA5_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP2_M60_MSHA8_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_AI11: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_AI12: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_AI19: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_AI20: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_AI21: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_AI22: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_AI23: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_AI24: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_AI25: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_AI26: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_AI27: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_AI28: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_AI29: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_GOKA_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_GOKA_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_GOKA_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_GOKA_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_GOKA_AI5: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_GOKA_AI6: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_GOKA_AI7: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_GOKA_AI8: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_GOKA_AI9: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_GOKA_AI10: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_GOKB_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_GOKB_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_GOKB_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_GOKB_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_GOKB_AI5: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_GOKB_AI6: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_GOKB_AI7: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_GOKB_AI8: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_GOKB_AI9: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_GOKB_AI10: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_GOKG_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_GOKG_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_GOKG_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_GOKG_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_GOKG_AI5: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_GOKG_AI6: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_GOKG_AI7: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_GOKG_AI8: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_GOKG_AI9: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_GOKG_AI10: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_GOKD_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_GOKD_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_GOKD_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_GOKD_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_GOKD_AI5: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_GOKD_AI6: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_GOKD_AI7: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_GOKD_AI8: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_GOKD_AI9: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_GOKD_AI10: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_KHYLA_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_KHYLA_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_KHYLA_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_KHYLA_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_KHYLA_AI5: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_KHYLA_AI6: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_KHYLA_AI7: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_KHYLA_AI8: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_KHYLA_AI9: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_KHYLA_AI10: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_KHYLB_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_KHYLB_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_KHYLB_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_KHYLB_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_KHYLB_AI5: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_KHYLB_AI6: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_KHYLB_AI7: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_KHYLB_AI8: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_KHYLB_AI9: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_KHYLB_AI10: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_KOTA_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_KOTA_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_KOTA_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_KOTA_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_KOTA_AI5: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_KOTA_AI6: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_KOTA_AI7: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_KOTA_AI8: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_KOTA_AI9: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_KOTA_AI10: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_KOTB_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_KOTB_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_KOTB_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_KOTB_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_KOTB_AI5: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_KOTB_AI6: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_KOTB_AI7: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_KOTB_AI8: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_KOTB_AI9: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_KOTB_AI10: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_KARIERA_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_KARIERA_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_KARIERA_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_KARIERA_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_KARIERA_AI5: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_KARIERA_AI6: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_KARIERA_AI7: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_KARIERA_AI8: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_KARIERA_AI9: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_KARIERA_AI10: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_KARIERB_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_KARIERB_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_KARIERB_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_KARIERB_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_KARIERB_AI5: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_KARIERB_AI6: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_KARIERB_AI7: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_KARIERB_AI8: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_KARIERB_AI9: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_KARIERB_AI10: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_OCHISTA_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_OCHISTA_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_OCHISTA_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_OCHISTA_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_OCHISTA_AI5: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_OCHISTA_AI6: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_OCHISTA_AI7: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_OCHISTA_AI8: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_OCHISTA_AI9: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_OCHISTA_AI10: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_OCHISTB_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_OCHISTB_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_OCHISTB_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_OCHISTB_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_OCHISTB_AI5: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_OCHISTB_AI6: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_OCHISTB_AI7: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_OCHISTB_AI8: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_OCHISTB_AI9: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP3_PII_OCHISTB_AI10: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP4_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP4_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP4_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP4_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP4_AI5: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP4_AI6: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP4_AI7: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP4_AI8: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP4_AI9: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP4_AI10: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP4_AI11: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP4_AI12: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP4_AI13: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP4_AI14: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP4_AI15: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP4_AI16: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP4_MF317_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP4_MF317_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP4_MF317_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP4_MV320_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP4_MF328_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP4_MF328_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP4_MF328_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP4_MV323_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP5_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP5_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP5_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP5_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP5_AI5: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP5_AI6: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP5_AI7: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP5_AI8: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP5_AI9: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP5_AI10: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP5_AI11: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP5_AI12: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP5_AI13: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP5_AI14: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP5_AI15: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP5_AI16: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP5_MVII204_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP5_MVII213_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP5_MVII220_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP5_MVII225_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP5_PII_B5_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP5_PII_B5_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP5_PII_B5_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP5_PII_B5_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP5_PII_B5_AI5: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP5_PII_B5_AI6: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP5_PII_B5_AI7: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP5_PII_B5_AI8: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP5_PII_B5_AI9: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP5_PII_B6_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP5_PII_B6_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP5_PII_B6_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP5_PII_B6_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP5_PII_B6_AI5: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP5_PII_B6_AI6: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP5_PII_B6_AI7: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP5_PII_B6_AI8: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP5_PII_B6_AI9: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP5_PII_B7_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP5_PII_B7_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP5_PII_B7_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP5_PII_B7_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP5_PII_B7_AI5: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP5_PII_B7_AI6: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP5_PII_B7_AI7: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP5_PII_B7_AI8: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP5_PII_B7_AI9: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP5_PII_B8_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP5_PII_B8_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP5_PII_B8_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP5_PII_B8_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP5_PII_B8_AI5: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP5_PII_B8_AI6: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP5_PII_B8_AI7: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP5_PII_B8_AI8: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP5_PII_B8_AI9: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP6_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP6_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP6_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP6_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP6_AI5: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP6_AI6: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP6_AI7: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP6_AI8: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP6_AI9: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP7_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP7_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP7_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP7_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP7_AI5: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP7_AI6: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP7_AI8: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP7_AI9: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP7_AI11: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP7_AI12: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP7_AI13: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP7_AI14: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP7_AI15: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP7_AI16: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP7_AI17: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP7_AI18: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP7_AI19: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP7_AI20: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP7_AI21: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP7_AI22: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP7_AI23: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP7_AI24: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP7_AI25: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP7_AI26: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP7_B1_SEC_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP7_B1_SEC_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP7_B1_SEC_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP7_B1_SEC_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP7_B1_SEC_AI5: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP7_B1_SEC_AI6: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP7_B1_SEC_AI7: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP7_B1_SEC_AI8: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP7_B2_SEC_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP7_B2_SEC_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP7_B2_SEC_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP7_B2_SEC_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP7_B2_SEC_AI5: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP7_B2_SEC_AI6: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP7_B2_SEC_AI7: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP7_B2_SEC_AI8: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI5: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI6: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI7: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI8: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI9: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI10: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI11: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI12: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI13: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI14: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI15: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI16: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI17: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI18: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI19: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI20: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI21: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI22: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI23: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI24: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI25: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI26: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI27: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI28: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI29: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI30: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI31: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI32: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI33: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI34: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI35: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI36: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI37: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI38: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI39: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI40: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI41: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI42: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI43: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI44: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI45: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI46: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI47: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI48: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI49: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI50: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI51: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI52: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI53: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI54: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI55: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI56: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI57: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI58: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI59: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI60: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI61: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI62: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI63: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI64: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI65: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI66: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI67: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI68: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI69: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI70: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI71: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI72: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI73: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI74: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI75: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI76: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI77: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI78: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI79: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI80: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI81: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI82: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI83: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI84: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI85: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI86: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI87: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI88: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI89: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI90: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI91: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI92: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI93: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI94: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI95: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI96: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      HEI7_AI97: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP8_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP8_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP8_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP8_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP8_AI5: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP8_AI6: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP8_AI7: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP8_AI8: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP8_AI9: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP8_AI10: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP8_AI11: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP8_AI12: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP8_AI13: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP8_AI14: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP8_AI15: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP8_AI16: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP8_AI17: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP8_AI18: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP8_AI19: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP9_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP9_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      GSM1_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      GSM2_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP10_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP10_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP10_AI6: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP10_AI7: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP11_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP11_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP11_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP11_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP11_AI5: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP11_AI6: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP11_AI8: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP11_AI9: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP11_AI10: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP11_AI11: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP11_AI12: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP11_AI13: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP11_AI14: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP11_AI15: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP11_AI16: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP11_PII_B1_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP11_PII_B1_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP11_PII_B1_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP11_PII_B1_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP11_PII_B1_AI5: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP11_PII_B1_AI6: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP11_PII_B2_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP11_PII_B2_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP11_PII_B2_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP11_PII_B2_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP11_PII_B2_AI5: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP11_PII_B2_AI6: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP13_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP13_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP13_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP13_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP14_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP14_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP14_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP14_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP14_AI5: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP14_AI6: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP14_AI7: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP14_AI8: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP14_AI9: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP14_AI10: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP14_AI11: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP14_AI12: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP14_AI13: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP14_AI14: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP14_AI15: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP14_AI16: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP14_AI17: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP14_AI18: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP14_AI19: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP14_AI20: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP14_AI21: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP14_AI22: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP15_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP15_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP15_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP15_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP15_AI5: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP15_AI6: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP15_AI7: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP15_AI8: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP16_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP16_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP16_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP16_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP16_AI5: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP16_AI6: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP17_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP17_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP17_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP17_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP17_AI5: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP17_AI6: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP17_AI7: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP17_AI8: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP17_AI9: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP17_AI10: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP17_AI11: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP18_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP18_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP18_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP18_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP18_AI5: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP18_AI6: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP18_AI7: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP18_AI8: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP18_AI9: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP18_AI10: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP18_AI11: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP18_AI12: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP18_AI13: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP18_AI14: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP18_AI15: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP18_AI16: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP18_AI19: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM19_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM19_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM19_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM19_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM19_AI5: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM19_AI6: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM19_AI7: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM19_AI8: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM19_AI9: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM19_AI10: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM19_AI11: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM19_AI12: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM19_AI13: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM19_AI14: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM19_AI15: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM19_AI16: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM19_AI17: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM19_AI18: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM19_AI19: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM19_AI20: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM19_AI21: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM19_AI22: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM19_AI23: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM19_AI24: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM19_AI25: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM19_AI26: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM19_AI27: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM19_AI28: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM19_AI29: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM19_AI30: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM19_AI31: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM19_AI32: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP20_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP20_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP20_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP20_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP20_AI5: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP20_AI6: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP20_AI7: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP20_AI8: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP20_AI9: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP20_AI10: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP20_AI11: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP20_AI12: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP20_AI13: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP25_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP26_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP26_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP26_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP26_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP26_AI5: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP26_AI6: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP26_AI7: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP26_AI8: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP26_AI9: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP28_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP28_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP28_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP28_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP28_AI5: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP28_AI6: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP28_AI7: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP28_AI8: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP28_AI9: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP28_AI10: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP28_AI11: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP28_AI12: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP28_AI13: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP28_AI14: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP28_AI15: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP28_AI16: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP28_AI17: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP28_AI18: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM28_N15_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM28_N15_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM28_N15_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM28_N15_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM28_N16_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM28_N16_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM28_N16_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM28_N16_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM28_N17_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM28_N17_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM28_N17_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM28_N17_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM28_N18_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM28_N18_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM28_N18_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM28_N18_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM28_N19_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM28_N19_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM28_N19_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM28_N19_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM28_N20_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM28_N20_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM28_N20_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM28_N20_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM28_N21_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM28_N21_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM28_N21_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM28_N21_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM28_N22_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM28_N22_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM28_N22_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM28_N22_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM28_N23_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM28_N23_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM28_N23_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM28_N23_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM28_N24_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM28_N24_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM28_N24_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM28_N24_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP29_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP29_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP29_AI5: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP29_AI6: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP29_AI7: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP29_AI8: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP29_AI9: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP29_AI10: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP29_AI11: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP29_AI12: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP29_AI13: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP29_AI14: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP29_PII_B1_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP29_PII_B1_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP29_PII_B1_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP29_PII_B1_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP29_PII_B1_AI5: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP29_PII_B1_AI6: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP29_PII_B1_AI7: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP29_PII_B2_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP29_PII_B2_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP29_PII_B2_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP29_PII_B2_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP29_PII_B2_AI5: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP29_PII_B2_AI6: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP29_PII_B2_AI7: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP30_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP30_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP30_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP30_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP30_AI5: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP30_AI6: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP30_AI7: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP30_AI8: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP30_AI9: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP30_AI10: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP30_AI11: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP30_AI12: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP30_AI13: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP30_AI14: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP30_AI15: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP30_AI16: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP30_PII_B1_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP30_PII_B1_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP30_PII_B1_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP30_PII_B1_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP30_PII_B1_AI5: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP30_PII_B1_AI6: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP30_PII_B1_AI7: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP30_PII_B2_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP30_PII_B2_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP30_PII_B2_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP30_PII_B2_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP30_PII_B2_AI5: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP30_PII_B2_AI6: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP30_PII_B2_AI7: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP31_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP31_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP31_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP31_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP31_AI5: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP31_AI6: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP31_AI7: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP31_AI8: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP31_AI9: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP31_AI10: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP31_AI11: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP31_AI12: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP31_AI13: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP31_AI14: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP31_AI15: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP31_AI16: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP31_PII_B1_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP31_PII_B1_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP31_PII_B1_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP31_PII_B1_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP31_PII_B1_AI5: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP31_PII_B1_AI6: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP31_PII_B1_AI7: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP31_PII_B2_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP31_PII_B2_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP31_PII_B2_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP31_PII_B2_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP31_PII_B2_AI5: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP31_PII_B2_AI6: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP31_PII_B2_AI7: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP32_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP32_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP32_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP32_AI5: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP32_AI15: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP32_AI16: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP32_AI17: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP32_AI18: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP32_AI19: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP32_AI20: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP32_AI21: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP32_AI22: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP32_AI23: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      KP32_AI24: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM601_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM601_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM601_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM601_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM601_AI5: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM601_AI6: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM602_AI1: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM602_AI2: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM602_AI3: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM602_AI4: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      SIM602_AI5: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "Last_24Hour_AI_Graphic_m1",
      schema: "dbo",
      timestamps: false,
    }
  );
};
