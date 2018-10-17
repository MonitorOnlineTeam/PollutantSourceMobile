import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { NavigationActions } from '../../utils';
import {
  Calendar,
  LocaleConfig,
} from 'react-native-calendars';
import OperationCalendarCard from "../Assembly/OperationCalendarCard";
import StatePoint from "../Assembly/StatePoint";
import { DatePicker, List } from 'antd-mobile-rn';
import { WhiteSpace, WingBlank } from 'antd-mobile-rn';
LocaleConfig.locales['fr'] = {
  monthNames: [
    '一月',
    '二月',
    '三月',
    '四月',
    '五月',
    '六月',
    '七月',
    '八月',
    '九月',
    '十月',
    '十一月',
    '十二月',
  ],
  monthNamesShort: [
    '一月',
    '二月',
    '三月',
    '四月',
    '五月',
    '六月',
    '七月',
    '八月',
    '九月',
    '十月',
    '十一月',
    '十二月',
  ],
  dayNames: [
    '星期天',
    '星期一',
    '星期二',
    '星期三',
    '星期四',
    '星期五',
    '星期六',
  ],
  dayNamesShort: ['日', '一', '二', '三', '四', '五', '六'],
};
LocaleConfig.defaultLocale = 'fr';
/*
 * @Description: 运维日历.
 */
export default class OperationCalendar extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: '运维日历',
    tabBarLable: '运维日历',
    headerBackTitle: null,
    headerTintColor: '#FFF',
    headerStyle: { backgroundColor: '#1895EF' },
    headerTitleStyle: { alignSelf: 'center' },
    headerLeft: (
      <Text
        onPress={() => {
          navigation.dispatch(NavigationActions.back());
        }}
        style={{ marginLeft: 8, width: 32, height: 32, textAlign: 'center' }}
      >
        <Icon name={'angle-left'} size={32} style={{ color: '#FFFFFF' }} />
      </Text>
    ),
  })
  constructor(props) {
    super(props);
    this.state = {
      value: undefined,
    };
  }
  onChange = value => {
    this.setState({ value });
  }
  render() {
    const data = [{ taskType: "例行任务", name: "小王", outName: "发电", taskState: "逾期" },
    { taskType: "例行任务", name: "小王", outName: "发电", taskState: "逾期" },
    { taskType: "例行任务", name: "小王", outName: "发电", taskState: "逾期" },
    { taskType: "例行任务", name: "小王", outName: "发电", taskState: "逾期" }];
    return (
      <ScrollView>
        {/* 标头 */}
        <View
          style={[
            styles.MainView,
            { flexDirection: 'column', alignItems: 'center',    },
          ]}
        >
 
         <StatePoint   stateType={[{color:"#2196F3",val:"计划"},{color:"#F7B507",val:"异常"},,{color:"#00C34C",val:"正常"}]}>

         </StatePoint>

          <TouchableOpacity style={{ width: '100%', height: 50 }}>
            <List style={{}}>
              <DatePicker
                value={this.state.value}
                mode="month"
                minDate={new Date(1918, 7, 6)}
                maxDate={new Date(2026, 11, 3)}
                onChange={this.onChange}
                format="YYYY-MM"
              >
                <List.Item arrow="down">时间</List.Item>
              </DatePicker>
            </List>
          </TouchableOpacity>
        </View>
        {/* 日历框 */}
        <View style={[styles.MainView, styles.MainViewbg]}>
          <Calendar
            style={{}}
            markingType={'custom'}
            markedDates={{
              '2018-09-28': {
                customStyles: {
                  container: {
                    backgroundColor: '#26C439',
                    elevation: 2,
                  },
                  text: {
                    color: '#FFFFFF',
                  },
                },
              },
              '2018-09-29': {
                customStyles: {
                  container: {
                    backgroundColor: '#F7B507',
                    elevation: 2,
                  },
                  text: {
                    color: '#FFFFFF',
                  },
                },
              },
              '2018-09-05': {
                customStyles: {
                  container: {
                    backgroundColor: '#2196F3',
                    elevation: 2,
                  },
                  text: {
                    color: '#FFFFFF',
                  },
                },
              },
            }}
          />
        </View>
        {
          data.map((item, key) => {


            return (
              <OperationCalendarCard key={key} taskType={item.taskState} name={item.name} outName={item.outName} taskState={item.taskType} >

              </OperationCalendarCard>);

          })


        }
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  MainView: {
    width: '96%',

    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 1,
    borderRadius: 6,
    alignSelf: 'center',
    marginTop: 7,
  },
  MainViews: {
    width: '96%',
    backgroundColor: '#FFFFFF',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    borderRadius: 6,
    alignSelf: 'center',
    marginTop: 6,
    marginBottom: 5,
    shadowColor: '#E3E3E3',
    shadowOffset: { w: 0, h: 50 },
    shadowRadius: 3,
    shadowOpacity: 0.1,
    elevation: 1,
  },
  MainViewbg: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#E3E3E3',
    shadowOffset: { w: 0, h: 50 },
    shadowRadius: 3,
    shadowOpacity: 0.1,
    elevation: 1,
  },
  flexStyle: {
    height: 90,
    borderRadius: 6,
    width: '30%',
    backgroundColor: '#FFFFFF',
    shadowOffset: { w: 0, h: 50 },
    shadowRadius: 3,
    shadowOpacity: 0.1,
    elevation: 1,
  },
  flexStyle: {
    flex: 1,
  },
  TitleImg: {
    width: 13,
    height: 13,
  },
  TitleText: {
    color: '#3F3F3F',
    fontSize: 14,
  },
  ContentText: {
    fontSize: 13,
    color: '#7E7E7E',
    lineHeight: 24,
  },
  SpecificView: {
    marginLeft: 30,
  },
  RowView: {
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
