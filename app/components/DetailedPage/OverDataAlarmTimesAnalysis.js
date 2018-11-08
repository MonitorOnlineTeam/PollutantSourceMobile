import React, { Component } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import {
  Grid,
  Tabs,
  NoticeBar,
  Badge,
  List,
  WingBlank,
  WhiteSpace,
} from 'antd-mobile-rn';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { SCREEN_WIDTH } from '../../config/globalsize';
import { NavigationActions } from '../../utils';
import { connect } from 'react-redux';
import OverDataAlarmTimesAnalysisCard from '../Assembly/OverDataAlarmTimesAnalysisCard';
/*
 * @Description: 数据超标报警次数分析.
 */
@connect()
export default class OverDataAlarmTimesAnalysis extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const OverDataAlarmTimesAnalysisData = [
      {
        PointName: '锅炉1号',
        OverDataAlarmTimes: '20',
      },
      {
        PointName: '锅炉2号',
        OverDataAlarmTimes: '20',
      },
      {
        PointName: '锅炉3号',
        OverDataAlarmTimes: '20',
      },
      {
        PointName: '锅炉4号',
        OverDataAlarmTimes: '20',
      },
      {
        PointName: '锅炉5号',
        OverDataAlarmTimes: '20',
      },
      {
        PointName: '锅炉6号',
        OverDataAlarmTimes: '20',
      },
      {
        PointName: '锅炉7号',
        OverDataAlarmTimes: '20',
      },
      {
        PointName: '锅炉8号',
        OverDataAlarmTimes: '20',
      },
      {
        PointName: '锅炉1号',
        OverDataAlarmTimes: '20',
      },
      {
        PointName: '锅炉2号',
        OverDataAlarmTimes: '20',
      },
      {
        PointName: '锅炉3号',
        OverDataAlarmTimes: '20',
      },
      {
        PointName: '锅炉4号',
        OverDataAlarmTimes: '20',
      },
      {
        PointName: '锅炉5号',
        OverDataAlarmTimes: '20',
      },
      {
        PointName: '锅炉6号',
        OverDataAlarmTimes: '20',
      },
      {
        PointName: '锅炉7号',
        OverDataAlarmTimes: '20',
      },
      {
        PointName: '锅炉8号',
        OverDataAlarmTimes: '20',
      },
    ];
    return (
      <View style={{ backgroundColor: '#F1F4F9', width: '100%' }}>
        <ScrollView style={{ width: '100%' }}>
          {/* 主模块 */}
          <View
            style={{
              width: SCREEN_WIDTH,
              height: Math.ceil(OverDataAlarmTimesAnalysisData / 2) * 150,
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}
          >
            {OverDataAlarmTimesAnalysisData.map((item, key) => {
              return (
                <OverDataAlarmTimesAnalysisCard
                  key={key}
                  PointName={item.PointName}
                  OverDataAlarmTimes={item.OverDataAlarmTimes}
                />
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}
