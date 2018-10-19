import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { SCREEN_WIDTH } from '../../config/globalsize';
import { NavigationActions } from '../../utils';
import { connect } from 'react-redux';
import OverdueRemindingCard from '../Assembly/OverdueRemindingCard';
/*
 * @Description: 任务审核.
 */
@connect()
export default class OverdueReminding extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const persons = [
      {
        name:'大唐集团-废气排口1',
        time: '2018年10月8日 16:20:27',
        overdays:'3天',
        operationperson: '成云',
        phone: '15811322089',
      },
      {
        name:'大唐集团-废气排口2',
        time: '2018年10月8日 16:20:27',
        overdays:'3天',
        operationperson: '成云',
        phone: '15811322089',
      },
      {
        name:'大唐集团-废气排口3',
        time: '2018年10月8日 16:20:27',
        overdays:'3天',
        operationperson: '成云',
        phone: '15811322089',
      },
      {
        name:'大唐集团-废气排口4',
        time: '2018年10月8日 16:20:27',
        overdays:'3天',
        operationperson: '成云',
        phone: '15811322089',
      },
      {
        name:'大唐集团-废气排口5',
        time: '2018年10月8日 16:20:27',
        overdays:'3天',
        operationperson: '成云',
        phone: '15811322089',
      },
      {
        name:'大唐集团-废气排口6',
        time: '2018年10月8日 16:20:27',
        overdays:'3天',
        operationperson: '成云',
        phone: '15811322089',
      },
      {
        name:'大唐集团-废气排口7',
        time: '2018年10月8日 16:20:27',
        overdays:'3天',
        operationperson: '成云',
        phone: '15811322089',
      },
      {
        name:'大唐集团-废气排口8',
        time: '2018年10月8日 16:20:27',
        overdays:'3天',
        operationperson: '成云',
        phone: '15811322089',
      },
      {
        name:'大唐集团-废气排口9',
        time: '2018年10月8日 16:20:27',
        overdays:'3天',
        operationperson: '成云',
        phone: '15811322089',
      },
      {
        name:'大唐集团-废气排口10',
        time: '2018年10月8日 16:20:27',
        overdays:'3天',
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

              <OverdueRemindingCard
                name={item.name}
                dateTime={item.time}
                overdays={item.overdays}
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
