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
import { Grid, Tabs, NoticeBar } from 'antd-mobile-rn';
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
import globalcolor from '../../config/globalcolor';
import AlarmInfo from '../../components/DetailedPage/AlarmInfo';
import EarlyWarningInfo from '../../components/DetailedPage/EarlyWarningInfo';
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
    headerStyle: { backgroundColor: '#1895EF', height: 40 },
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
    const tabs = [
      { title: '应急任务' },
      { title: '例行任务' },
      { title: '报警信息' },
      { title: '预警信息' },
    ];

    return (
      <View style={{ flex: 1, backgroundColor: '#F1F4F9' }}>
        <StatusBar backgroundColor={'#1895EF'} barStyle={'light-content'} />
        <View
          style={[
            {
              backgroundColor: '#1895EF',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              width: SCREEN_WIDTH,
              height: 48,
            },
          ]}
        >
          <Text style={[{ color: globalcolor.white, fontSize: 20 }]}>
            {'工作台'}
          </Text>
        </View>
        <Tabs tabs={tabs} initialPage={2}>
          <View style={style} />
          <View style={style} />
          <View style={style}>
            <AlarmInfo />
          </View>
          <View style={style}>
            <EarlyWarningInfo />
          </View>
          <TouchableOpacity
            onPress={event => {
              this.props.dispatch(
                NavigationActions.navigate({
                  routeName: 'DataListEnterprise',
                })
              );
            }}
          >
            <Text>hahahhah hahahhah hdhhdhdh hhdhdhdhhd</Text>
            <Text>hahahhah hahahhah hdhhdhdh hhdhdhdhhd</Text>
            <Text>hahahhah hahahhah hdhhdhdh hhdhdhdhhd</Text>
            <Text>hahahhah hahahhah hdhhdhdh hhdhdhdhhd</Text>
            <Text>hahahhah hahahhah hdhhdhdh hhdhdhdhhd</Text>
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
  flex: 1,
  backgroundColor: '#F1F4F9',
};
// make this component available to the app
export default Workbench;
