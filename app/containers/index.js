import { StackNavigator } from 'react-navigation';
import { Animated, Easing } from 'react-native';

// import HomeNavigator from './tabView';
import branchOffice from './tabView/branchOffice';
import operationsStaff from './tabView/operationsStaff';
import groupCompany from './tabView/groupCompany';
import MainView from './tabView/MainView';

import system from './tabView/system';
import Detail from './Detail';
import Login from './Login';
import MyPhoneList from './MyPhoneList';
import knowledgebase from './knowledgebase';
import FileDOC from './FileDOC';
import DisplayDOC from './DisplayDOC';
import Todo from './workbench/Todo';
import Alarm from './workbench/Alarm';
import Message from './workbench/Message';
import EarlyWarning from './workbench/EarlyWarning';

import EmergencyTask from './workbench/EmergencyTask';
import WorkPlan from './workbench/WorkPlan';
import TaskManage from './workbench/TaskManage';
import ReserveManage from './workbench/ReserveManage';
import BreakdownList from './workbench/BreakdownList';
import PowerCutList from './workbench/PowerCutList';
import ConsumableManage from './workbench/ConsumableManage';

import RankOfStationByEmissions from './statistical/RankOfStationByEmissions';
import AlarmingNumberStatistics from './statistical/AlarmingNumberStatistics';
import AlarmingDurationStatistics from './statistical/AlarmingDurationStatistics';
import BreakdownNumberStatistics from './statistical/BreakdownNumberStatistics';
import EmissionsPlan from './statistical/EmissionsPlan';
import FailureCauseStatistics from './statistical/FailureCauseStatistics';
import OverdueStatistics from './statistical/OverdueStatistics';
import RankOfBranchOfficeByEmissions from './statistical/RankOfBranchOfficeByEmissions';
import Workmeter from './statistical/Workmeter';

import SingleStationDetail from './datalist/SingleStationDetail';
import HistoricalData from './datalist/HistoricalData';
import _3DStation from './datalist/_3DStation';
import ProcessFlowDiagram from './datalist/ProcessFlowDiagram';
import Alarm_ from './datalist/Alarm';
import EarlyWarning_ from './datalist/EarlyWarning';
import Patrol from './datalist/Patrol';
import Emergency from './datalist/Emergency';
import Breakdown from './datalist/Breakdown';
import HaltProduction from './datalist/HaltProduction';
import SparePart from './datalist/SparePart';
import PowerCut from './datalist/PowerCut';
import QualityControl from './datalist/QualityControl';
import TodoDetail from './workbench/TodoDetail';
import AttentionDetail from './workbench/AttentionDetail';
import AlarmRecord from './AlarmRecord';
import EarlyWarningInfo from './EarlyWarningInfo';
import AlarmInfoData from '../components/DetailedPage/AlarmInfoData';
import TaskAdjustmentList from '../components/DetailedPage/TaskAdjustmentList';
import ExceptionAlarmRecord from '../components/DetailedPage/ExceptionAlarmRecord';
import TransmissionTfficiency from '../components/DetailedPage/TransmissionTfficiency';
import SignIn from '../components/DetailedPage/SignIn';
import ExecutionTasks from '../components/DetailedPage/ExecutionTasks';
import RecordSheet from '../components/DetailedPage/RecordSheet';
import TaskDetails from '../components/DetailedPage/RecordSheet';
import SiteInformation from '../components/DetailedPage/SiteInformation';
import StatisticalAnalysis from '../components/DetailedPage/StatisticalAnalysis';
import OperationCalendar from '../components/DetailedPage/OperationCalendar';
import WeeklyCalendar from '../components/DetailedPage/WeeklyCalendar';
import UserEvaluation from '../components/DetailedPage/UserEvaluation'; 
import ReportAdd from '../components/DetailedPage/ReportAdd'; 

// const MainNavigator = StackNavigator(
//   {
//     // HomeNavigator: { screen: HomeNavigator },
//     branchOffice: { screen: branchOffice },
//     operationsStaff: { screen: operationsStaff },
//     groupCompany: { screen: groupCompany },
//     system: { screen: system },
//     Detail: { screen: Detail },
//   },
//   {
//     headerMode: 'float',
//   }
// );

export default StackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
      },
    },
    // Main: { screen: MainNavigator },
    branchOffice: { screen: branchOffice },
    operationsStaff: { screen: operationsStaff },
    groupCompany: { screen: groupCompany },
    system: { screen: system },
    MainView: { screen: MainView },
    Detail: { screen: Detail },
    AlarmInfoData: { screen: AlarmInfoData },
    TaskAdjustmentList: { screen: TaskAdjustmentList },
    ExceptionAlarmRecord: { screen: ExceptionAlarmRecord },
    Todo: { screen: Todo },
    EarlyWarning: { screen: EarlyWarning },
    Alarm: { screen: Alarm },
    Message: { screen: Message },
    TodoDetail: { screen: TodoDetail },
    AttentionDetail: { screen: AttentionDetail },
    AlarmRecord: { screen: AlarmRecord },
    EmergencyTask: { screen: EmergencyTask },
    WorkPlan: { screen: WorkPlan },
    TaskManage: { screen: TaskManage },
    ReserveManage: { screen: ReserveManage },
    BreakdownList: { screen: BreakdownList },
    PowerCutList: { screen: PowerCutList },
    ConsumableManage: { screen: ConsumableManage },

    RankOfStationByEmissions: { screen: RankOfStationByEmissions },
    AlarmingNumberStatistics: { screen: AlarmingNumberStatistics },
    AlarmingDurationStatistics: { screen: AlarmingDurationStatistics },
    BreakdownNumberStatistics: { screen: BreakdownNumberStatistics },
    EmissionsPlan: { screen: EmissionsPlan },
    FailureCauseStatistics: { screen: FailureCauseStatistics },
    OverdueStatistics: { screen: OverdueStatistics },
    RankOfBranchOfficeByEmissions: { screen: RankOfBranchOfficeByEmissions },
    Workmeter: { screen: Workmeter },
    SignIn: { screen: SignIn },
    SiteInformation: { screen: SiteInformation },
    StatisticalAnalysis: { screen: StatisticalAnalysis },
    OperationCalendar: { screen: OperationCalendar },
    WeeklyCalendar: { screen: WeeklyCalendar },
    ExecutionTasks: { screen: ExecutionTasks },
    RecordSheet: { screen: RecordSheet },
    TaskDetails: { screen: TaskDetails },
    UserEvaluation: { screen: UserEvaluation },

    SingleStationDetail: { screen: SingleStationDetail },
    HistoricalData: { screen: HistoricalData },
    _3DStation: { screen: _3DStation },
    ProcessFlowDiagram: { screen: ProcessFlowDiagram },
    Alarm_: { screen: Alarm_ },
    EarlyWarning_: { screen: EarlyWarning_ },
    Patrol: { screen: Patrol },
    Emergency: { screen: Emergency },
    Breakdown: { screen: Breakdown },
    HaltProduction: { screen: HaltProduction },
    SparePart: { screen: SparePart },
    PowerCut: { screen: PowerCut },
    TransmissionTfficiency: { screen: TransmissionTfficiency },
    ReportAdd: { screen: ReportAdd },
    QualityControl: { screen: QualityControl },
    // DetailRouter:{ screen:DetailRouter},

    MyPhoneList: { screen: MyPhoneList },
    knowledgebase: { screen: knowledgebase },
    FileDOC: { screen: FileDOC },
    DisplayDOC: { screen: DisplayDOC },
    EarlyWarningInfo: { screen: EarlyWarningInfo },
  },
  {
    lazyLoad: true,
    // headerMode: 'none',
    mode: 'modal',
    navigationOptions: {
      gesturesEnabled: false,
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const height = layout.initHeight;
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });

        return { opacity, transform: [{ translateY }] };
      },
    }),
  }
);
