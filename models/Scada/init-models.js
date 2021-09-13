var DataTypes = require("sequelize").DataTypes;
var _AI15 = require("./AI15");
var _AI1Hour = require("./AI1Hour");
var _AI2hour = require("./AI2hour");
var _Avg30minPower = require("./Avg30minPower");
var _AvgHourPower35110 = require("./AvgHourPower35110");
var _AvgHourTest = require("./AvgHourTest");
var _AvgPara = require("./AvgPara");
var _AvgSignal = require("./AvgSignal");
var _AvgSignal1 = require("./AvgSignal1");
var _AvgSignal2 = require("./AvgSignal2");
var _CTAPI_AI = require("./CTAPI_AI");
var _CTAPI_DI = require("./CTAPI_DI");
var _DCSDayReport = require("./DCSDayReport");
var _DCSDayReportBackUP = require("./DCSDayReportBackUP");
var _ElectroDayReport = require("./ElectroDayReport");
var _EnergoDayReport = require("./EnergoDayReport");
var _EquipOper = require("./EquipOper");
var _FIXALARMS = require("./FIXALARMS");
var _FIXALARMS20201212 = require("./FIXALARMS20201212");
var _FIXALARMS_20190630 = require("./FIXALARMS_20190630");
var _FIXALARMS_20200801 = require("./FIXALARMS_20200801");
var _FIXALARMS_AI = require("./FIXALARMS_AI");
var _FIXALARMS_DI = require("./FIXALARMS_DI");
var _FIXALARMS_DI_20191010 = require("./FIXALARMS_DI_20191010");
var _FIXALARMS_DI_20200908 = require("./FIXALARMS_DI_20200908");
var _FIXALARMS_DI_Back = require("./FIXALARMS_DI_Back");
var _FiderInsertDate = require("./FiderInsertDate");
var _Fix_AI12Hour = require("./Fix_AI12Hour");
var _Fix_AI12Hour123 = require("./Fix_AI12Hour123");
var _Fix_AI12HourRTIP1 = require("./Fix_AI12HourRTIP1");
var _Fix_AI12Hour_Citect = require("./Fix_AI12Hour_Citect");
var _Fix_AI12Hour_test = require("./Fix_AI12Hour_test");
var _Fix_AverageHour = require("./Fix_AverageHour");
var _Fix_AverageHour20210823 = require("./Fix_AverageHour20210823");
var _Fix_AverageHour_20210210 = require("./Fix_AverageHour_20210210");
var _Fix_AverageHour_Citect = require("./Fix_AverageHour_Citect");
var _Fix_AverageHour_update = require("./Fix_AverageHour_update");
var _Fix_AverageSignal = require("./Fix_AverageSignal");
var _Fix_DIArchive = require("./Fix_DIArchive");
var _GPP220_110_35_table = require("./GPP220_110_35_table");
var _GSM_AI = require("./GSM_AI");
var _GSM_AI20210604 = require("./GSM_AI20210604");
var _GSM_AI20210608 = require("./GSM_AI20210608");
var _GSM_AI20210613 = require("./GSM_AI20210613");
var _GSM_AI20210624 = require("./GSM_AI20210624");
var _GSM_AI20210705 = require("./GSM_AI20210705");
var _GSM_AI20210722 = require("./GSM_AI20210722");
var _GSM_AI20210729 = require("./GSM_AI20210729");
var _GSM_AI20210806 = require("./GSM_AI20210806");
var _GSM_AI20210817 = require("./GSM_AI20210817");
var _GSM_AI20210825 = require("./GSM_AI20210825");
var _KP11_AI14_raw = require("./KP11_AI14_raw");
var _LAI24Hour = require("./LAI24Hour");
var _Last_24Hour_AI_Graphic = require("./Last_24Hour_AI_Graphic");
var _Last_24Hour_AI_Graphic_m = require("./Last_24Hour_AI_Graphic_m");
var _MAI10Archive = require("./MAI10Archive");
var _MAI11Archive = require("./MAI11Archive");
var _MAI12Archive = require("./MAI12Archive");
var _MAI7Archive = require("./MAI7Archive");
var _MAI8Archive = require("./MAI8Archive");
var _MAI9Archive = require("./MAI9Archive");
var _MAItestArchive = require("./MAItestArchive");
var _NetSig = require("./NetSig");
var _NetValue = require("./NetValue");
var _OperName = require("./OperName");
var _OperatorLog = require("./OperatorLog");
var _OperatorName = require("./OperatorName");
var _PMaxParameters = require("./PMaxParameters");
var _ParameterHisPower110kB = require("./ParameterHisPower110kB");
var _ParametersHistoryHour = require("./ParametersHistoryHour");
var _ParoprovodStaticValue = require("./ParoprovodStaticValue");
var _Power110KB = require("./Power110KB");
var _Power35KB = require("./Power35KB");
var _PowerLineAvgParameters = require("./PowerLineAvgParameters");
var _PowerLineMaxParameters = require("./PowerLineMaxParameters");
var _PowerSum = require("./PowerSum");
var _Powerline = require("./Powerline");
var _RTUStatus = require("./RTUStatus");
var _S2017 = require("./S2017");
var _Signal = require("./Signal");
var _Signal1 = require("./Signal1");
var _Signal171026 = require("./Signal171026");
var _Signal18920 = require("./Signal18920");
var _Signal20190507 = require("./Signal20190507");
var _Signal20191004 = require("./Signal20191004");
var _Signal2019417 = require("./Signal2019417");
var _SignalName = require("./SignalName");
var _SignalName2 = require("./SignalName2");
var _SignalName2019417 = require("./SignalName2019417");
var _SignalName20200501 = require("./SignalName20200501");
var _TESTMyangaa = require("./TESTMyangaa");
var _Voltage = require("./Voltage");
var _gpp220 = require("./gpp220");
var _para = require("./para");
var _paraold = require("./paraold");
var _signal171025 = require("./signal171025");
var _signaltest = require("./signaltest");
var _test123 = require("./test123");
var _test12345 = require("./test12345");
var _testTmp = require("./testTmp");

function initModels(sequelize) {
  var AI15 = _AI15(sequelize, DataTypes);
  var AI1Hour = _AI1Hour(sequelize, DataTypes);
  var AI2hour = _AI2hour(sequelize, DataTypes);
  var Avg30minPower = _Avg30minPower(sequelize, DataTypes);
  var AvgHourPower35110 = _AvgHourPower35110(sequelize, DataTypes);
  var AvgHourTest = _AvgHourTest(sequelize, DataTypes);
  var AvgPara = _AvgPara(sequelize, DataTypes);
  var AvgSignal = _AvgSignal(sequelize, DataTypes);
  var AvgSignal1 = _AvgSignal1(sequelize, DataTypes);
  var AvgSignal2 = _AvgSignal2(sequelize, DataTypes);
  var CTAPI_AI = _CTAPI_AI(sequelize, DataTypes);
  var CTAPI_DI = _CTAPI_DI(sequelize, DataTypes);
  var DCSDayReport = _DCSDayReport(sequelize, DataTypes);
  var DCSDayReportBackUP = _DCSDayReportBackUP(sequelize, DataTypes);
  var ElectroDayReport = _ElectroDayReport(sequelize, DataTypes);
  var EnergoDayReport = _EnergoDayReport(sequelize, DataTypes);
  var EquipOper = _EquipOper(sequelize, DataTypes);
  var FIXALARMS = _FIXALARMS(sequelize, DataTypes);
  var FIXALARMS20201212 = _FIXALARMS20201212(sequelize, DataTypes);
  var FIXALARMS_20190630 = _FIXALARMS_20190630(sequelize, DataTypes);
  var FIXALARMS_20200801 = _FIXALARMS_20200801(sequelize, DataTypes);
  var FIXALARMS_AI = _FIXALARMS_AI(sequelize, DataTypes);
  var FIXALARMS_DI = _FIXALARMS_DI(sequelize, DataTypes);
  var FIXALARMS_DI_20191010 = _FIXALARMS_DI_20191010(sequelize, DataTypes);
  var FIXALARMS_DI_20200908 = _FIXALARMS_DI_20200908(sequelize, DataTypes);
  var FIXALARMS_DI_Back = _FIXALARMS_DI_Back(sequelize, DataTypes);
  var FiderInsertDate = _FiderInsertDate(sequelize, DataTypes);
  var Fix_AI12Hour = _Fix_AI12Hour(sequelize, DataTypes);
  var Fix_AI12Hour123 = _Fix_AI12Hour123(sequelize, DataTypes);
  var Fix_AI12HourRTIP1 = _Fix_AI12HourRTIP1(sequelize, DataTypes);
  var Fix_AI12Hour_Citect = _Fix_AI12Hour_Citect(sequelize, DataTypes);
  var Fix_AI12Hour_test = _Fix_AI12Hour_test(sequelize, DataTypes);
  var Fix_AverageHour = _Fix_AverageHour(sequelize, DataTypes);
  var Fix_AverageHour20210823 = _Fix_AverageHour20210823(sequelize, DataTypes);
  var Fix_AverageHour_20210210 = _Fix_AverageHour_20210210(sequelize, DataTypes);
  var Fix_AverageHour_Citect = _Fix_AverageHour_Citect(sequelize, DataTypes);
  var Fix_AverageHour_update = _Fix_AverageHour_update(sequelize, DataTypes);
  var Fix_AverageSignal = _Fix_AverageSignal(sequelize, DataTypes);
  var Fix_DIArchive = _Fix_DIArchive(sequelize, DataTypes);
  var GPP220_110_35_table = _GPP220_110_35_table(sequelize, DataTypes);
  var GSM_AI = _GSM_AI(sequelize, DataTypes);
  var GSM_AI20210604 = _GSM_AI20210604(sequelize, DataTypes);
  var GSM_AI20210608 = _GSM_AI20210608(sequelize, DataTypes);
  var GSM_AI20210613 = _GSM_AI20210613(sequelize, DataTypes);
  var GSM_AI20210624 = _GSM_AI20210624(sequelize, DataTypes);
  var GSM_AI20210705 = _GSM_AI20210705(sequelize, DataTypes);
  var GSM_AI20210722 = _GSM_AI20210722(sequelize, DataTypes);
  var GSM_AI20210729 = _GSM_AI20210729(sequelize, DataTypes);
  var GSM_AI20210806 = _GSM_AI20210806(sequelize, DataTypes);
  var GSM_AI20210817 = _GSM_AI20210817(sequelize, DataTypes);
  var GSM_AI20210825 = _GSM_AI20210825(sequelize, DataTypes);
  var KP11_AI14_raw = _KP11_AI14_raw(sequelize, DataTypes);
  var LAI24Hour = _LAI24Hour(sequelize, DataTypes);
  var Last_24Hour_AI_Graphic = _Last_24Hour_AI_Graphic(sequelize, DataTypes);
  var Last_24Hour_AI_Graphic_m = _Last_24Hour_AI_Graphic_m(sequelize, DataTypes);
  var MAI10Archive = _MAI10Archive(sequelize, DataTypes);
  var MAI11Archive = _MAI11Archive(sequelize, DataTypes);
  var MAI12Archive = _MAI12Archive(sequelize, DataTypes);
  var MAI7Archive = _MAI7Archive(sequelize, DataTypes);
  var MAI8Archive = _MAI8Archive(sequelize, DataTypes);
  var MAI9Archive = _MAI9Archive(sequelize, DataTypes);
  var MAItestArchive = _MAItestArchive(sequelize, DataTypes);
  var NetSig = _NetSig(sequelize, DataTypes);
  var NetValue = _NetValue(sequelize, DataTypes);
  var OperName = _OperName(sequelize, DataTypes);
  var OperatorLog = _OperatorLog(sequelize, DataTypes);
  var OperatorName = _OperatorName(sequelize, DataTypes);
  var PMaxParameters = _PMaxParameters(sequelize, DataTypes);
  var ParameterHisPower110kB = _ParameterHisPower110kB(sequelize, DataTypes);
  var ParametersHistoryHour = _ParametersHistoryHour(sequelize, DataTypes);
  var ParoprovodStaticValue = _ParoprovodStaticValue(sequelize, DataTypes);
  var Power110KB = _Power110KB(sequelize, DataTypes);
  var Power35KB = _Power35KB(sequelize, DataTypes);
  var PowerLineAvgParameters = _PowerLineAvgParameters(sequelize, DataTypes);
  var PowerLineMaxParameters = _PowerLineMaxParameters(sequelize, DataTypes);
  var PowerSum = _PowerSum(sequelize, DataTypes);
  var Powerline = _Powerline(sequelize, DataTypes);
  var RTUStatus = _RTUStatus(sequelize, DataTypes);
  var S2017 = _S2017(sequelize, DataTypes);
  var Signal = _Signal(sequelize, DataTypes);
  var Signal1 = _Signal1(sequelize, DataTypes);
  var Signal171026 = _Signal171026(sequelize, DataTypes);
  var Signal18920 = _Signal18920(sequelize, DataTypes);
  var Signal20190507 = _Signal20190507(sequelize, DataTypes);
  var Signal20191004 = _Signal20191004(sequelize, DataTypes);
  var Signal2019417 = _Signal2019417(sequelize, DataTypes);
  var SignalName = _SignalName(sequelize, DataTypes);
  var SignalName2 = _SignalName2(sequelize, DataTypes);
  var SignalName2019417 = _SignalName2019417(sequelize, DataTypes);
  var SignalName20200501 = _SignalName20200501(sequelize, DataTypes);
  var TESTMyangaa = _TESTMyangaa(sequelize, DataTypes);
  var Voltage = _Voltage(sequelize, DataTypes);
  var gpp220 = _gpp220(sequelize, DataTypes);
  var para = _para(sequelize, DataTypes);
  var paraold = _paraold(sequelize, DataTypes);
  var signal171025 = _signal171025(sequelize, DataTypes);
  var signaltest = _signaltest(sequelize, DataTypes);
  var test123 = _test123(sequelize, DataTypes);
  var test12345 = _test12345(sequelize, DataTypes);
  var testTmp = _testTmp(sequelize, DataTypes);


  return {
    AI15,
    AI1Hour,
    AI2hour,
    Avg30minPower,
    AvgHourPower35110,
    AvgHourTest,
    AvgPara,
    AvgSignal,
    AvgSignal1,
    AvgSignal2,
    CTAPI_AI,
    CTAPI_DI,
    DCSDayReport,
    DCSDayReportBackUP,
    ElectroDayReport,
    EnergoDayReport,
    EquipOper,
    FIXALARMS,
    FIXALARMS20201212,
    FIXALARMS_20190630,
    FIXALARMS_20200801,
    FIXALARMS_AI,
    FIXALARMS_DI,
    FIXALARMS_DI_20191010,
    FIXALARMS_DI_20200908,
    FIXALARMS_DI_Back,
    FiderInsertDate,
    Fix_AI12Hour,
    Fix_AI12Hour123,
    Fix_AI12HourRTIP1,
    Fix_AI12Hour_Citect,
    Fix_AI12Hour_test,
    Fix_AverageHour,
    Fix_AverageHour20210823,
    Fix_AverageHour_20210210,
    Fix_AverageHour_Citect,
    Fix_AverageHour_update,
    Fix_AverageSignal,
    Fix_DIArchive,
    GPP220_110_35_table,
    GSM_AI,
    GSM_AI20210604,
    GSM_AI20210608,
    GSM_AI20210613,
    GSM_AI20210624,
    GSM_AI20210705,
    GSM_AI20210722,
    GSM_AI20210729,
    GSM_AI20210806,
    GSM_AI20210817,
    GSM_AI20210825,
    KP11_AI14_raw,
    LAI24Hour,
    Last_24Hour_AI_Graphic,
    Last_24Hour_AI_Graphic_m,
    MAI10Archive,
    MAI11Archive,
    MAI12Archive,
    MAI7Archive,
    MAI8Archive,
    MAI9Archive,
    MAItestArchive,
    NetSig,
    NetValue,
    OperName,
    OperatorLog,
    OperatorName,
    PMaxParameters,
    ParameterHisPower110kB,
    ParametersHistoryHour,
    ParoprovodStaticValue,
    Power110KB,
    Power35KB,
    PowerLineAvgParameters,
    PowerLineMaxParameters,
    PowerSum,
    Powerline,
    RTUStatus,
    S2017,
    Signal,
    Signal1,
    Signal171026,
    Signal18920,
    Signal20190507,
    Signal20191004,
    Signal2019417,
    SignalName,
    SignalName2,
    SignalName2019417,
    SignalName20200501,
    TESTMyangaa,
    Voltage,
    gpp220,
    para,
    paraold,
    signal171025,
    signaltest,
    test123,
    test12345,
    testTmp,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
