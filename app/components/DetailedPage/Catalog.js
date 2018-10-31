//功能模块
import AlarmInfo from './AlarmInfo'; //报警信息（运维人员）
import AlarmInfoData from './AlarmInfoData'; //报警详细信息（运维人员）
import EarlyWarningInfo from './EarlyWarningInfo'; //预警信息（运维人员）
import RecordSheet from './RecordSheet'; //记录表（运维人员）
import ExecutionTasks from './ExecutionTasks'; //执行任务（运维人员）
import SignIn from './SignIn'; //签到（运维人员）
import SiteInformation from './SiteInformation'; //站点信息（运维人员）
//运维主管
import WeeklyCalendar from './WeeklyCalendar'; //人员周历（运维主管）
import OperationCalendar from './OperationCalendar'; //运维日历（运维主管）
import OperationStatus from './OperationStatus'; //运维状况（运维主管）
import RecordSheetAuditing from './RecordSheetAuditing'; //记录表核审核（运维主管）
import StatisticalAnalysis from './StatisticalAnalysis'; //统计分析（运维主管）
import UserEvaluation from './UserEvaluation'; //用户评价（运维主管）
import TaskAudit from './TaskAudit'; //任务审核-
import TaskAdjustment from './TaskAdjustment'; //任务调整-
import ChargeAlarmInfo from './ChargeAlarmInfo'; //报警信息-
import OverdueReminding from './OverdueReminding'; //逾期提醒-
//企业
import TaskAuditList from './TaskAuditList'; //报警列表-超标报警-
import TaskAdjustmentList from './TaskAdjustmentList'; //超标报警记录-
import ExceptionAlarmRecord from './ExceptionAlarmRecord'; //异常报警记录-
import TransmissionTfficiency from './TransmissionTfficiency'; //传输有效率列表-
import SeverityAnalysisOfDataExceedingStandard from './SeverityAnalysisOfDataExceedingStandard'; //数据超标严重程度分析-
import OverDataAlarmTimesAnalysis from './OverDataAlarmTimesAnalysis'; //数据超标报警次数分析-
import NormalOperationTimeOfEquipment from './NormalOperationTimeOfEquipment'; //设备正常运行时间分析-
import AbnormalAlarmFrequency from './AbnormalAlarmFrequency'; //异常报警频次分析-
import RoutineOperationTimes from './RoutineOperationTimes'; //例行运维频次分析-
import ReportAdd from './ReportAdd'; //报备添加-
//环保局
import RealTimeMap from './RealTimeMap'; //地图一览- 
import RealTimeVideo from './RealTimeVideo'; //实时视频- 
//工作台配置
import MainView from '../../containers/tabView/MainView';
//路由配置
import index from '../../containers/index';
