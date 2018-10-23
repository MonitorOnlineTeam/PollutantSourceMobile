import React, { Component } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import { SCREEN_WIDTH } from '../../config/globalsize';
import { NavigationActions } from '../../utils';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import ExceptionAlarmRecordCard from '../Assembly/ExceptionAlarmRecordCard';
import { WhiteSpace, WingBlank, Checkbox } from 'antd-mobile-rn';
/*
 * @Description: 异常报警记录.
 */
@connect()
export default class ExceptionAlarmRecord extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: '异常报警记录',
    tabBarLable: '异常报警记录',
    headerBackTitle: null,
    headerTintColor: '#FFF',
    headerStyle: { backgroundColor: '#1895EF' },
    tabBarIcon: ({ focused, tintColor }) => (
      <Icon
        name={'clipboard'}
        size={20}
        style={{ color: focused ? tintColor : 'gray' }}
      />
    ),
  })
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const persons = [
      {
        key: '1',
        AlarmTime: '2018-10-12 08:00:01',
        Pollutant: '二氧化硫',
        AlarmType: '超标报警',
        AlarmState: '未接触',
        AlarmContinueTime: '10',
        Discription:
          '北京绿都供暖有限公司-废气排口于2018-10-12 08:00:00 二氧化硫超标7次（1级7次），首次超标时间2018-10-12 07:00:00，超标值214.882（<200为正常）',
        Color: 'rgb(74,198,162)',
        OperationPerson: '刘惠宁',
      },
      {
        key: '2',
        AlarmTime: '2018-10-12 08:00:02',
        Pollutant: '二氧化硫',
        AlarmType: '超标报警',
        AlarmState: '未接触',
        AlarmContinueTime: '10',
        Discription:
          '北京绿都供暖有限公司-废气排口于2018-10-12 08:00:00 二氧化硫超标7次（1级7次），首次超标时间2018-10-12 07:00:00，超标值214.882（<200为正常）',
        Color: 'rgb(239,120,114)',
        OperationPerson: '刘惠宁',
      },
      {
        key: '3',
        AlarmTime: '2018-10-12 08:00:03',
        Pollutant: '二氧化硫',
        AlarmType: '超标报警',
        AlarmState: '未接触',
        AlarmContinueTime: '10',
        Discription:
          '北京绿都供暖有限公司-废气排口于2018-10-12 08:00:00 二氧化硫超标7次（1级7次），首次超标时间2018-10-12 07:00:00，超标值214.882（<200为正常）',
        Color: 'rgb(141,122,212)',
        OperationPerson: '刘惠宁',
      },
      {
        key: '4',
        AlarmTime: '2018-10-12 08:00:04',
        Pollutant: '二氧化硫',
        AlarmType: '超标报警',
        AlarmState: '未接触',
        AlarmContinueTime: '10',
        Discription:
          '北京绿都供暖有限公司-废气排口于2018-10-12 08:00:00 二氧化硫超标7次（1级7次），首次超标时间2018-10-12 07:00:00，超标值214.882（<200为正常）',
        Color: 'rgb(74,198,162)',
        OperationPerson: '成云',
      },
      {
        key: '5',
        AlarmTime: '2018-10-12 08:00:05',
        Pollutant: '二氧化硫',
        AlarmType: '超标报警',
        AlarmState: '未接触',
        AlarmContinueTime: '10',
        Discription:
          '北京绿都供暖有限公司-废气排口于2018-10-12 08:00:00 二氧化硫超标7次（1级7次），首次超标时间2018-10-12 07:00:00，超标值214.882（<200为正常）',
        Color: 'rgb(239,120,114)',
        OperationPerson: '成云',
      },
      {
        key: '6',
        AlarmTime: '2018-10-12 08:00:06',
        Pollutant: '二氧化硫',
        AlarmType: '超标报警',
        AlarmState: '未接触',
        AlarmContinueTime: '10',
        Discription:
          '北京绿都供暖有限公司-废气排口于2018-10-12 08:00:00 二氧化硫超标7次（1级7次），首次超标时间2018-10-12 07:00:00，超标值214.882（<200为正常）',
        Color: 'rgb(141,122,212)',
        OperationPerson: '成云',
      },
    ];
    return (
      <View
        style={{
          backgroundColor: '#F1F4F9',
          width: SCREEN_WIDTH,
          height: '100%',
        }}
      >
        <ScrollView>
          {/* 主模块 */}
          {persons.map((item, key) => {
            return (
              <View key={key}>
                <WhiteSpace />
                <ExceptionAlarmRecordCard
                  key={key}
                  AlarmTime={item.AlarmTime}
                  Pollutant={item.Pollutant}
                  AlarmType={item.AlarmType}
                  AlarmState={item.AlarmState}
                  AlarmContinueTime={item.AlarmContinueTime}
                  Discription={item.Discription}
                  color={item.Color}
                  OperationPerson={item.OperationPerson}
                />
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainView: {
    width: '60%',
    height: 40,
    marginLeft: '20%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    flexDirection: 'row',
    marginTop: '2%',
  },
  TitleText: {
    width: '30%',
    paddingTop: '2%',
  },
  TitleTexts: {
    textAlign: 'center',
    fontSize: 10,
  },
});
