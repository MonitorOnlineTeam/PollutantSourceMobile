import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { SCREEN_WIDTH } from '../../config/globalsize';
import { NavigationActions } from '../../utils';
import { connect } from 'react-redux';
import ChargeAlarmInfoCard from '../Assembly/ChargeAlarmInfoCard';
/*
 * @Description: 任务审核.
 */
@connect()
export default class ChargeAlarmInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const persons = [
      {
        name: '大唐集团-脱硫入口1',
        AlarmTime: '2018年10月8日 16:20:27',
        LastAlarmTime: '2018年10月8日 16:20:27',
        operationperson: '成云',
        phone: '15811322089',
      },
      {
        name: '大唐集团-脱硫入口2',
        AlarmTime: '2018年10月8日 16:20:27',
        LastAlarmTime: '2018年10月8日 16:20:27',
        operationperson: '成云',
        phone: '15811322089',
      },
      {
        name: '大唐集团-脱硫入口3',
        AlarmTime: '2018年10月8日 16:20:27',
        LastAlarmTime: '2018年10月8日 16:20:27',
        operationperson: '成云',
        phone: '15811322089',
      },
      {
        name: '大唐集团-脱硫入口4',
        AlarmTime: '2018年10月8日 16:20:27',
        LastAlarmTime: '2018年10月8日 16:20:27',
        operationperson: '成云',
        phone: '15811322089',
      },
      {
        name: '大唐集团-脱硫入口5',
        AlarmTime: '2018年10月8日 16:20:27',
        LastAlarmTime: '2018年10月8日 16:20:27',
        operationperson: '成云',
        phone: '15811322089',
      },
      {
        name: '大唐集团-脱硫入口6',
        AlarmTime: '2018年10月8日 16:20:27',
        LastAlarmTime: '2018年10月8日 16:20:27',
        operationperson: '成云',
        phone: '15811322089',
      },
      {
        name: '大唐集团-脱硫入口7',
        AlarmTime: '2018年10月8日 16:20:27',
        LastAlarmTime: '2018年10月8日 16:20:27',
        operationperson: '成云',
        phone: '15811322089',
      },
      {
        name: '大唐集团-脱硫入口8',
        AlarmTime: '2018年10月8日 16:20:27',
        LastAlarmTime: '2018年10月8日 16:20:27',
        operationperson: '成云',
        phone: '15811322089',
      },
      {
        name: '大唐集团-脱硫入口9',
        AlarmTime: '2018年10月8日 16:20:27',
        LastAlarmTime: '2018年10月8日 16:20:27',
        operationperson: '成云',
        phone: '15811322089',
      },
      {
        name: '大唐集团-脱硫入口10',
        AlarmTime: '2018年10月8日 16:20:27',
        LastAlarmTime: '2018年10月8日 16:20:27',
        operationperson: '成云',
        phone: '15811322089',
      },
    ];
    // const thiss = this;
    return (
      <View style={{ backgroundColor: '#F1F4F9', width: SCREEN_WIDTH }}>
        <ScrollView>
          {/* 主模块 */}
          {persons.map((item, key) => {
            return (
              // <TouchableOpacity
              //   key={key}
              //   onPress={event => {
              //     this.props.dispatch(
              //       NavigationActions.navigate({
              //         routeName: 'AlarmInfoData',
              //       })
              //     );
              //   }}
              // >

              <ChargeAlarmInfoCard
                name={item.name}
                AlarmTime={item.AlarmTime}
                LastAlarmTime={item.LastAlarmTime}
                key={key}
                operationperson={item.operationperson}
                phone={item.phone}
              />

              // </TouchableOpacity>
            );
          })}
          {/*--------------重复样式---美丽的分割线结束-----------------  */}
        </ScrollView>
      </View>
    );
  }
}
