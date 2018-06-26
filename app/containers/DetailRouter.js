import { StackNavigator } from 'react-navigation';
import { Animated, Easing } from 'react-native';

import Detail from './Detail';
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
import AlarmingTimeStatistics from './statistical/AlarmingTimeStatistics';
import BreakdownTimeStatistics from './statistical/BreakdownTimeStatistics';
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


export default StackNavigator(
    {
      Detail: { screen: Detail },
  
      Todo: { screen: Todo },
      EarlyWarning: { screen: EarlyWarning },
      Alarm: { screen: Alarm },
      Message: { screen: Message },
  
      EmergencyTask: { screen: EmergencyTask },
      WorkPlan: { screen: WorkPlan },
      TaskManage: { screen: TaskManage },
      ReserveManage: { screen: ReserveManage },
      BreakdownList: { screen: BreakdownList },
      PowerCutList: { screen: PowerCutList },
      ConsumableManage: { screen: ConsumableManage },
  
      RankOfStationByEmissions:{ screen:RankOfStationByEmissions},
      AlarmingNumberStatistics:{ screen:AlarmingNumberStatistics},
      AlarmingTimeStatistics:{ screen:AlarmingTimeStatistics},
      BreakdownTimeStatistics:{ screen:BreakdownTimeStatistics},
      EmissionsPlan:{ screen:EmissionsPlan},
      FailureCauseStatistics:{ screen:FailureCauseStatistics},
      OverdueStatistics:{ screen:OverdueStatistics},
      RankOfBranchOfficeByEmissions:{ screen:RankOfBranchOfficeByEmissions},
      Workmeter:{ screen:Workmeter},
  
      SingleStationDetail:{ screen:SingleStationDetail},
      HistoricalData:{ screen:HistoricalData},
      _3DStation:{ screen:_3DStation},
      ProcessFlowDiagram:{ screen:ProcessFlowDiagram},
      Alarm_:{ screen:Alarm_},
      EarlyWarning_:{ screen:EarlyWarning_},
      Patrol:{ screen:Patrol},
      Emergency:{ screen:Emergency},
      Breakdown:{ screen:Breakdown},
      HaltProduction:{ screen:HaltProduction},
      SparePart:{ screen:SparePart},
      PowerCut:{ screen:PowerCut},
      QualityControl:{ screen:QualityControl},
    },
    {
      lazyLoad: true,
    //   headerMode: 'none',
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