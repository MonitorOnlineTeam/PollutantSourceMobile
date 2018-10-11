import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { SCREEN_WIDTH } from '../../config/globalsize';
import { NavigationActions } from '../../utils';
import { connect } from 'react-redux';
import AlarmInfoCard from '../Assembly/AlarmInfoCard';
/*
 * @Description: 报警信息.
 */
@connect()
export default class AlarmInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const persons = [
      {
        name: '大唐集团-废气排口1',
        time: '2018年10月8日 16:20:27',
        content: '气态分析仪故障',
      },
      {
        name: '大唐集团-废气排口1',
        time: '2018年10月8日 16:20:27',
        content: '气态分析仪故障',
      },
      {
        name: '大唐集团-废气排口1',
        time: '2018年10月8日 16:20:27',
        content: '气态分析仪故障',
      },
      {
        name: '大唐集团-废气排口1',
        time: '2018年10月8日 16:20:27',
        content: '气态分析仪故障',
      },
      {
        name: '大唐集团-废气排口1',
        time: '2018年10月8日 16:20:27',
        content: '气态分析仪故障',
      },
      {
        name: '大唐集团-废气排口1',
        time: '2018年10月8日 16:20:27',
        content: '气态分析仪故障',
      },
      {
        name: '大唐集团-废气排口1',
        time: '2018年10月8日 16:20:27',
        content: '气态分析仪故障',
      },
      {
        name: '大唐集团-废气排口1',
        time: '2018年10月8日 16:20:27',
        content: '气态分析仪故障',
      },
      {
        name: '大唐集团-废气排口1',
        time: '2018年10月8日 16:20:27',
        content: '气态分析仪故障',
      },
    ];
    // const thiss = this;
    return (
      <View style={{ backgroundColor: '#F1F4F9', width: SCREEN_WIDTH }}>
        <ScrollView>
          {/* 主模块 */}
          {persons.map((item, key) => {
            return (
              <TouchableOpacity
                key={key}
                onPress={event => {
                  this.props.dispatch(
                    NavigationActions.navigate({
                      routeName: 'AlarmInfoData',
                    })
                  );
                }}
              >
                {
                  <AlarmInfoCard
                    title={item.name}
                    dateTime={item.time}
                    contentText={item.content}
                  />
                }
              </TouchableOpacity>
            );
          })}
        
        </ScrollView>
      </View>
    );
  }
}
