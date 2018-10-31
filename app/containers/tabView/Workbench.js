// import liraries
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { Grid, Tabs, NoticeBar, Badge, WhiteSpace } from 'antd-mobile-rn';
import { connect } from 'react-redux';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import wholeSituationStyle from '../../config/wholeSituationStyle';
import { LocaleConfig } from 'react-native-calendars';
import { Menu, ActivityIndicator, NavBar } from 'antd-mobile-rn';
import { SCREEN_WIDTH } from '../../config/globalsize';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { Modal } from 'antd-mobile-rn';
import { NavigationActions } from '../../utils';
import { loadStorage } from '../../dvapack/storage';
import {
  getPointEnterprise,
  // getEnterprise,
} from '../../mockdata/Base/commonbase';

import AlarmInfo from '../../components/DetailedPage/AlarmInfo';
import EarlyWarningInfo from '../../components/DetailedPage/EarlyWarningInfo';
import TaskAudit from '../../components/DetailedPage/TaskAudit';
import TaskAdjustment from '../../components/DetailedPage/TaskAdjustment';
import ChargeAlarmInfo from '../../components/DetailedPage/ChargeAlarmInfo';
import OverdueReminding from '../../components/DetailedPage/OverdueReminding';
/*
 * Copyright (c) 2018 SDL.All Rights Reserved
 *
 * @Script: Workbench.js
 * @Author: houxf
 * @Email: houxfmark3955@163.com
 * @Create At: 2018-06-20 14:21:47
 * @Last Modified By: houxfmark3955@163.com
 * @Last Modified At: 2018-06-27 11:18:53
 * @Description: 工作台.
 */
@connect()
class Workbench extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: '工作台',
    tabBarLable: '工作台',
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
  async componentWillMount() {}
  render() {
    // const tabs = [
    //   { title: '应急任务' },
    //   { title: '例行任务' },
    //   { title: '报警信息' },
    //   { title: '预警信息' },
    // ];
    const tabs = [
      { title: '任务审核1' },
      { title: '任务调整' },
      { title: '报警信息' },
      { title: '逾期提醒' },
    ];

    return (
      // <View style={{ flex: 1, backgroundColor: '#F1F4F9' }}>
      //   <StatusBar backgroundColor={'#1895EF'} barStyle={'light-content'} />
      //   <Tabs tabs={tabs} initialPage={2}>
      //     <View style={style} />
      //     <View style={style} />
      //     <View style={style}>
      //       <AlarmInfo />
      //     </View>react
      //     <View style={style}>
      //       <EarlyWarningInfo />
      //     </View>
      //   </Tabs>
      // </View>
      <View style={{ flex: 1, backgroundColor: '#F1F4F9' }}>
        <StatusBar backgroundColor={'#1895EF'} barStyle={'light-content'} />
        <Tabs tabs={tabs} initialPage={0}>
        <TouchableOpacity
               
                onPress={event => {
                  this.props.dispatch(
                    NavigationActions.navigate({
                      routeName: 'DataListEnterprise',
                    })
                  );
                }}
              >
                <Text>
                  hahahhah
                  hahahhah
                  hdhhdhdh
                  hhdhdhdhhd

                </Text>
                <Text>
                  hahahhah
                  hahahhah
                  hdhhdhdh
                  hhdhdhdhhd

                </Text>
                <Text>
                  hahahhah
                  hahahhah
                  hdhhdhdh
                  hhdhdhdhhd

                </Text>
                <Text>
                  hahahhah
                  hahahhah
                  hdhhdhdh
                  hhdhdhdhhd

                </Text>
                <Text>
                  hahahhah
                  hahahhah
                  hdhhdhdh
                  hhdhdhdhhd

                </Text>
              </TouchableOpacity>
        </Tabs>
      </View>
    );
  }
}
const style = {
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',

  backgroundColor: '#F1F4F9',
};
// make this component available to the app
export default Workbench;
