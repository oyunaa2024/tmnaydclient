var DataTypes = require("sequelize").DataTypes;
var _AlarmAnalogSignals = require("./AlarmAnalogSignals");
var _AlarmDiscreteSignals = require("./AlarmDiscreteSignals");
var _AlarmTemperatureFail = require("./AlarmTemperatureFail");
var _AlarmTemperaturePrepareFail = require("./AlarmTemperaturePrepareFail");
var _BlockType = require("./BlockType");
var _BubbleAnalyzerC = require("./BubbleAnalyzerC");
var _BubbleAnalyzerH = require("./BubbleAnalyzerH");
var _CTRL_QUALITY = require("./CTRL_QUALITY");
var _ConnStateMill = require("./ConnStateMill");
var _CtrlAlarm = require("./CtrlAlarm");
var _Device = require("./Device");
var _DeviceCurrent = require("./DeviceCurrent");
var _DeviceHistory = require("./DeviceHistory");
var _DeviceType = require("./DeviceType");
var _KSI3States = require("./KSI3States");
var _KSI3StatesNames = require("./KSI3StatesNames");
var _KSITempC = require("./KSITempC");
var _KSITempH = require("./KSITempH");
var _KSITempKadr = require("./KSITempKadr");
var _KadrContent = require("./KadrContent");
var _Location = require("./Location");
var _Material = require("./Material");
var _Measurement = require("./Measurement");
var _MeasurementUnit = require("./MeasurementUnit");
var _Mill = require("./Mill");
var _OreDistribution = require("./OreDistribution");
var _OutIn = require("./OutIn");
var _PID_DTO = require("./PID_DTO");
var _PID_KSI = require("./PID_KSI");
var _PID_MILL = require("./PID_MILL");
var _PID_MO = require("./PID_MO");
var _PID_PNS = require("./PID_PNS");
var _PID_RO = require("./PID_RO");
var _PID_SEC1 = require("./PID_SEC1");
var _PID_SEC2 = require("./PID_SEC2");
var _PID_SEC3 = require("./PID_SEC3");
var _PID_SEC4 = require("./PID_SEC4");
var _PID_SEC5 = require("./PID_SEC5");
var _PID_SEC6 = require("./PID_SEC6");
var _PID_TEST = require("./PID_TEST");
var _PKS = require("./PKS");
var _PLCHoneywell = require("./PLCHoneywell");
var _Panel = require("./Panel");
var _PanelContentsConstant = require("./PanelContentsConstant");
var _PanelContentsGraph = require("./PanelContentsGraph");
var _PanelLocation = require("./PanelLocation");
var _PanelWork = require("./PanelWork");
var _Parameter = require("./Parameter");
var _PlantScape = require("./PlantScape");
var _Reagent = require("./Reagent");
var _ReagentConsumption = require("./ReagentConsumption");
var _SAG_Sec3_Tag = require("./SAG_Sec3_Tag");
var _SH1M_AZOT = require("./SH1M_AZOT");
var _SH1M_DTO = require("./SH1M_DTO");
var _SH1M_KSI = require("./SH1M_KSI");
var _SH1M_MILL = require("./SH1M_MILL");
var _SH1M_MO = require("./SH1M_MO");
var _SH1M_PNS = require("./SH1M_PNS");
var _SH1M_RO = require("./SH1M_RO");
var _SH1M_SEC1 = require("./SH1M_SEC1");
var _SH1M_SEC2 = require("./SH1M_SEC2");
var _SH1M_SEC3 = require("./SH1M_SEC3");
var _SH1M_SEC4 = require("./SH1M_SEC4");
var _SH1M_SEC5 = require("./SH1M_SEC5");
var _SH1M_SEC6 = require("./SH1M_SEC6");
var _SH1M_TEST = require("./SH1M_TEST");
var _SiemensID = require("./SiemensID");
var _Signal = require("./Signal");
var _SignalCurrentValue = require("./SignalCurrentValue");
var _TESTKSI1M = require("./TESTKSI1M");
var _TableContent = require("./TableContent");
var _TableContentTemperature = require("./TableContentTemperature");
var _TableN = require("./TableN");
var _TableNKipRo = require("./TableNKipRo");
var _TableTemperature = require("./TableTemperature");
var _TestDeviceCurrent = require("./TestDeviceCurrent");
var _TestDeviceHistory = require("./TestDeviceHistory");
var _TestPitram = require("./TestPitram");
var _TestSignalCurrentValue = require("./TestSignalCurrentValue");
var _WMILLS = require("./WMILLS");
var _alarmipaddr = require("./alarmipaddr");
var _asutp2center1 = require("./asutp2center1");
var _asutp_stat = require("./asutp_stat");
var _captured_columns = require("./captured_columns");
var _change_tables = require("./change_tables");
var _ctrldata = require("./ctrldata");
var _ddl_history = require("./ddl_history");
var _index_columns = require("./index_columns");
var _lsn_time_mapping = require("./lsn_time_mapping");
var _mill2pks2 = require("./mill2pks2");
var _open_pit = require("./open_pit");
var _pid_dto_CT = require("./pid_dto_CT");
var _pid_ksi_CT = require("./pid_ksi_CT");
var _pid_mill_CT = require("./pid_mill_CT");
var _pid_mo_CT = require("./pid_mo_CT");
var _pid_pns_CT = require("./pid_pns_CT");
var _pid_ro_CT = require("./pid_ro_CT");
var _pid_sec1_CT = require("./pid_sec1_CT");
var _pid_sec2_CT = require("./pid_sec2_CT");
var _pid_sec3_CT = require("./pid_sec3_CT");
var _pid_sec4_CT = require("./pid_sec4_CT");
var _pid_sec5_CT = require("./pid_sec5_CT");
var _pid_sec6_CT = require("./pid_sec6_CT");
var _systranschemas = require("./systranschemas");
var _test_col = require("./test_col");

function initModels(sequelize) {
  var AlarmAnalogSignals = _AlarmAnalogSignals(sequelize, DataTypes);
  var AlarmDiscreteSignals = _AlarmDiscreteSignals(sequelize, DataTypes);
  var AlarmTemperatureFail = _AlarmTemperatureFail(sequelize, DataTypes);
  var AlarmTemperaturePrepareFail = _AlarmTemperaturePrepareFail(sequelize, DataTypes);
  var BlockType = _BlockType(sequelize, DataTypes);
  var BubbleAnalyzerC = _BubbleAnalyzerC(sequelize, DataTypes);
  var BubbleAnalyzerH = _BubbleAnalyzerH(sequelize, DataTypes);
  var CTRL_QUALITY = _CTRL_QUALITY(sequelize, DataTypes);
  var ConnStateMill = _ConnStateMill(sequelize, DataTypes);
  var CtrlAlarm = _CtrlAlarm(sequelize, DataTypes);
  var Device = _Device(sequelize, DataTypes);
  var DeviceCurrent = _DeviceCurrent(sequelize, DataTypes);
  var DeviceHistory = _DeviceHistory(sequelize, DataTypes);
  var DeviceType = _DeviceType(sequelize, DataTypes);
  var KSI3States = _KSI3States(sequelize, DataTypes);
  var KSI3StatesNames = _KSI3StatesNames(sequelize, DataTypes);
  var KSITempC = _KSITempC(sequelize, DataTypes);
  var KSITempH = _KSITempH(sequelize, DataTypes);
  var KSITempKadr = _KSITempKadr(sequelize, DataTypes);
  var KadrContent = _KadrContent(sequelize, DataTypes);
  var Location = _Location(sequelize, DataTypes);
  var Material = _Material(sequelize, DataTypes);
  var Measurement = _Measurement(sequelize, DataTypes);
  var MeasurementUnit = _MeasurementUnit(sequelize, DataTypes);
  var Mill = _Mill(sequelize, DataTypes);
  var OreDistribution = _OreDistribution(sequelize, DataTypes);
  var OutIn = _OutIn(sequelize, DataTypes);
  var PID_DTO = _PID_DTO(sequelize, DataTypes);
  var PID_KSI = _PID_KSI(sequelize, DataTypes);
  var PID_MILL = _PID_MILL(sequelize, DataTypes);
  var PID_MO = _PID_MO(sequelize, DataTypes);
  var PID_PNS = _PID_PNS(sequelize, DataTypes);
  var PID_RO = _PID_RO(sequelize, DataTypes);
  var PID_SEC1 = _PID_SEC1(sequelize, DataTypes);
  var PID_SEC2 = _PID_SEC2(sequelize, DataTypes);
  var PID_SEC3 = _PID_SEC3(sequelize, DataTypes);
  var PID_SEC4 = _PID_SEC4(sequelize, DataTypes);
  var PID_SEC5 = _PID_SEC5(sequelize, DataTypes);
  var PID_SEC6 = _PID_SEC6(sequelize, DataTypes);
  var PID_TEST = _PID_TEST(sequelize, DataTypes);
  var PKS = _PKS(sequelize, DataTypes);
  var PLCHoneywell = _PLCHoneywell(sequelize, DataTypes);
  var Panel = _Panel(sequelize, DataTypes);
  var PanelContentsConstant = _PanelContentsConstant(sequelize, DataTypes);
  var PanelContentsGraph = _PanelContentsGraph(sequelize, DataTypes);
  var PanelLocation = _PanelLocation(sequelize, DataTypes);
  var PanelWork = _PanelWork(sequelize, DataTypes);
  var Parameter = _Parameter(sequelize, DataTypes);
  var PlantScape = _PlantScape(sequelize, DataTypes);
  var Reagent = _Reagent(sequelize, DataTypes);
  var ReagentConsumption = _ReagentConsumption(sequelize, DataTypes);
  var SAG_Sec3_Tag = _SAG_Sec3_Tag(sequelize, DataTypes);
  var SH1M_AZOT = _SH1M_AZOT(sequelize, DataTypes);
  var SH1M_DTO = _SH1M_DTO(sequelize, DataTypes);
  var SH1M_KSI = _SH1M_KSI(sequelize, DataTypes);
  var SH1M_MILL = _SH1M_MILL(sequelize, DataTypes);
  var SH1M_MO = _SH1M_MO(sequelize, DataTypes);
  var SH1M_PNS = _SH1M_PNS(sequelize, DataTypes);
  var SH1M_RO = _SH1M_RO(sequelize, DataTypes);
  var SH1M_SEC1 = _SH1M_SEC1(sequelize, DataTypes);
  var SH1M_SEC2 = _SH1M_SEC2(sequelize, DataTypes);
  var SH1M_SEC3 = _SH1M_SEC3(sequelize, DataTypes);
  var SH1M_SEC4 = _SH1M_SEC4(sequelize, DataTypes);
  var SH1M_SEC5 = _SH1M_SEC5(sequelize, DataTypes);
  var SH1M_SEC6 = _SH1M_SEC6(sequelize, DataTypes);
  var SH1M_TEST = _SH1M_TEST(sequelize, DataTypes);
  var SiemensID = _SiemensID(sequelize, DataTypes);
  var Signal = _Signal(sequelize, DataTypes);
  var SignalCurrentValue = _SignalCurrentValue(sequelize, DataTypes);
  var TESTKSI1M = _TESTKSI1M(sequelize, DataTypes);
  var TableContent = _TableContent(sequelize, DataTypes);
  var TableContentTemperature = _TableContentTemperature(sequelize, DataTypes);
  var TableN = _TableN(sequelize, DataTypes);
  var TableNKipRo = _TableNKipRo(sequelize, DataTypes);
  var TableTemperature = _TableTemperature(sequelize, DataTypes);
  var TestDeviceCurrent = _TestDeviceCurrent(sequelize, DataTypes);
  var TestDeviceHistory = _TestDeviceHistory(sequelize, DataTypes);
  var TestPitram = _TestPitram(sequelize, DataTypes);
  var TestSignalCurrentValue = _TestSignalCurrentValue(sequelize, DataTypes);
  var WMILLS = _WMILLS(sequelize, DataTypes);
  var alarmipaddr = _alarmipaddr(sequelize, DataTypes);
  var asutp2center1 = _asutp2center1(sequelize, DataTypes);
  var asutp_stat = _asutp_stat(sequelize, DataTypes);
  var captured_columns = _captured_columns(sequelize, DataTypes);
  var change_tables = _change_tables(sequelize, DataTypes);
  var ctrldata = _ctrldata(sequelize, DataTypes);
  var ddl_history = _ddl_history(sequelize, DataTypes);
  var index_columns = _index_columns(sequelize, DataTypes);
  var lsn_time_mapping = _lsn_time_mapping(sequelize, DataTypes);
  var mill2pks2 = _mill2pks2(sequelize, DataTypes);
  var open_pit = _open_pit(sequelize, DataTypes);
  var pid_dto_CT = _pid_dto_CT(sequelize, DataTypes);
  var pid_ksi_CT = _pid_ksi_CT(sequelize, DataTypes);
  var pid_mill_CT = _pid_mill_CT(sequelize, DataTypes);
  var pid_mo_CT = _pid_mo_CT(sequelize, DataTypes);
  var pid_pns_CT = _pid_pns_CT(sequelize, DataTypes);
  var pid_ro_CT = _pid_ro_CT(sequelize, DataTypes);
  var pid_sec1_CT = _pid_sec1_CT(sequelize, DataTypes);
  var pid_sec2_CT = _pid_sec2_CT(sequelize, DataTypes);
  var pid_sec3_CT = _pid_sec3_CT(sequelize, DataTypes);
  var pid_sec4_CT = _pid_sec4_CT(sequelize, DataTypes);
  var pid_sec5_CT = _pid_sec5_CT(sequelize, DataTypes);
  var pid_sec6_CT = _pid_sec6_CT(sequelize, DataTypes);
  var systranschemas = _systranschemas(sequelize, DataTypes);
  var test_col = _test_col(sequelize, DataTypes);


  return {
    AlarmAnalogSignals,
    AlarmDiscreteSignals,
    AlarmTemperatureFail,
    AlarmTemperaturePrepareFail,
    BlockType,
    BubbleAnalyzerC,
    BubbleAnalyzerH,
    CTRL_QUALITY,
    ConnStateMill,
    CtrlAlarm,
    Device,
    DeviceCurrent,
    DeviceHistory,
    DeviceType,
    KSI3States,
    KSI3StatesNames,
    KSITempC,
    KSITempH,
    KSITempKadr,
    KadrContent,
    Location,
    Material,
    Measurement,
    MeasurementUnit,
    Mill,
    OreDistribution,
    OutIn,
    PID_DTO,
    PID_KSI,
    PID_MILL,
    PID_MO,
    PID_PNS,
    PID_RO,
    PID_SEC1,
    PID_SEC2,
    PID_SEC3,
    PID_SEC4,
    PID_SEC5,
    PID_SEC6,
    PID_TEST,
    PKS,
    PLCHoneywell,
    Panel,
    PanelContentsConstant,
    PanelContentsGraph,
    PanelLocation,
    PanelWork,
    Parameter,
    PlantScape,
    Reagent,
    ReagentConsumption,
    SAG_Sec3_Tag,
    SH1M_AZOT,
    SH1M_DTO,
    SH1M_KSI,
    SH1M_MILL,
    SH1M_MO,
    SH1M_PNS,
    SH1M_RO,
    SH1M_SEC1,
    SH1M_SEC2,
    SH1M_SEC3,
    SH1M_SEC4,
    SH1M_SEC5,
    SH1M_SEC6,
    SH1M_TEST,
    SiemensID,
    Signal,
    SignalCurrentValue,
    TESTKSI1M,
    TableContent,
    TableContentTemperature,
    TableN,
    TableNKipRo,
    TableTemperature,
    TestDeviceCurrent,
    TestDeviceHistory,
    TestPitram,
    TestSignalCurrentValue,
    WMILLS,
    alarmipaddr,
    asutp2center1,
    asutp_stat,
    captured_columns,
    change_tables,
    ctrldata,
    ddl_history,
    index_columns,
    lsn_time_mapping,
    mill2pks2,
    open_pit,
    pid_dto_CT,
    pid_ksi_CT,
    pid_mill_CT,
    pid_mo_CT,
    pid_pns_CT,
    pid_ro_CT,
    pid_sec1_CT,
    pid_sec2_CT,
    pid_sec3_CT,
    pid_sec4_CT,
    pid_sec5_CT,
    pid_sec6_CT,
    systranschemas,
    test_col,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
