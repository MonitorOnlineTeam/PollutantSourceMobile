import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { SCREEN_WIDTH } from '../../config/globalsize';
import { NavigationActions } from '../../utils';
import { connect } from 'react-redux';
import TaskAdjustmentCard from '../Assembly/TaskAdjustmentCard';
/*
 * @Description: 任务审核.
 */
@connect()
export default class TaskAdjustment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const persons = [
      {
        name: '大唐集团-脱硫入口',
        time: '2018年10月8日 16:20:27',
        operationperson: '成云',
        phone: '15811322089',
      },
      {
        name: '大唐集团-锅炉小号烟囱',
        time: '2018年10月8日 16:20:27',
        operationperson: '成云',
        phone: '15811322089',
      },
      {
        name: '大唐集团-废气排口1',
        time: '2018年10月8日 16:20:27',
        operationperson: '成云',
        phone: '15811322089',
      },
      {
        name: '大唐集团-废气排口3',
        time: '2018年10月8日 16:20:27',
        operationperson: '成云',
        phone: '15811322089',
      },
      {
        name: '大唐集团-废气排口4',
        time: '2018年10月8日 16:20:27',
        operationperson: '成云',
        phone: '15811322089',
      },
      {
        name: '大唐集团-废气排口5',
        time: '2018年10月8日 16:20:27',
        operationperson: '成云',
        phone: '15811322089',
      },
      {
        name: '大唐集团-废气排口6',
        time: '2018年10月8日 16:20:27',
        operationperson: '成云',
        phone: '15811322089',
      },
      {
        name: '大唐集团-废气排口7',
        time: '2018年10月8日 16:20:27',
        operationperson: '成云',
        phone: '15811322089',
      },
      {
        name: '大唐集团-废气排口8',
        time: '2018年10月8日 16:20:27',
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

              <TaskAdjustmentCard
                name={item.name}
                dateTime={item.time}
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
