// import liraries
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import { Grid, Tabs, NoticeBar, Badge, WhiteSpace, List } from 'antd-mobile-rn';
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
const Item = List.Item;
const Brief = Item.Brief;
@connect()
class AlarmList extends Component {
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
    this.state = {
      extra: <Text style={{ color: 'red', flex: 0.5 }}>报警次数：8</Text>,
    };
  }
  async componentWillMount() {}
  render() {
    // const tabs = [
    //   { title: '应急任务' },
    //   { title: '例行任务' },
    //   { title: '报警信息' },
    //   { title: '预警信息' },
    // ];
    // const tabs = [
    //   { title: '任务审核' },
    //   { title: '任务调整' },
    //   { title: '报警信息' },
    //   { title: '逾期提醒' },
    // ];

    return (
      <ScrollView style={{ flex: 1, backgroundColor: '#f5f5f9' }}>
        <List renderHeader={() => 'basic'}>
          <Item extra={this.state.extra} arrow="horizontal" multipleLine={true}>
            锅炉小号烟囱1<Brief>法电供热</Brief>
          </Item>
          <Item extra={this.state.extra} arrow="horizontal" multipleLine={true}>
            锅炉小号烟囱2<Brief>法电供热</Brief>
          </Item>
          <Item extra={this.state.extra} arrow="horizontal" multipleLine={true}>
            锅炉小号烟囱3<Brief>法电供热</Brief>
          </Item>
          <Item extra={this.state.extra} arrow="horizontal" multipleLine={true}>
            锅炉小号烟囱4<Brief>法电供热</Brief>
          </Item>
          <Item extra={this.state.extra} arrow="horizontal" multipleLine={true}>
            锅炉小号烟囱5<Brief>法电供热</Brief>
          </Item>
          <Item extra={this.state.extra} arrow="horizontal" multipleLine={true}>
            锅炉小号烟囱6<Brief>法电供热</Brief>
          </Item>
          <Item extra={this.state.extra} arrow="horizontal" multipleLine={true}>
            锅炉小号烟囱7<Brief>法电供热</Brief>
          </Item>
          <Item extra={this.state.extra} arrow="horizontal" multipleLine={true}>
            锅炉小号烟囱8<Brief>法电供热</Brief>
          </Item>
        </List>
      </ScrollView>
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
