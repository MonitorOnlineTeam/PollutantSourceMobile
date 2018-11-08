// import liraries
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  TouchableWithoutFeedback,
  RefreshControl,
  Animated,
  StatusBar,
  InteractionManager,
} from 'react-native';
import { WhiteSpace, WingBlank } from 'antd-mobile-rn';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Iconi from 'react-native-vector-icons/dist/Ionicons';
import ImagePicker from 'react-native-image-picker';
import JPushModule from 'jpush-react-native';
import Icon1 from 'react-native-vector-icons/Ionicons';
import wholeSituationStyle from '../../config/wholeSituationStyle';
import { Button } from '../../components';
import { NavigationActions, createAction } from '../../utils';
import TopSelector from '../../components/common/TopSelector';
import PollutantBar from '../../components/common/PollutantBar';
import globalcolor from '../../config/globalcolor';
import moment from 'moment';
import LabelHeadView from '../../components/common/LabelHeadView';
import Alert from '../../components/common/Alert';
import GroupList from '../../components/common/GroupList';
import TableEnt from '../../components/DetailedPage/TableEnt';
import TableOther from '../../components/DetailedPage/TableOther';

import {
  getAllConcentration,
  defaultPollutantCodes,
} from '../../mockdata/Base/commonbase';

import {
  SCREEN_WIDTH,
  little_font_size,
  SCREEN_HEIGHT,
  little_font_size2,
  WINDOW_HEIGHT,
} from '../../config/globalsize';
/*
 * @Script: Map.js018 SDL.All Rights Reserved
 *
 * @Script: DataList.js
 * @Author: houxf
 * @Last Modified By: houxfmark3955@163.com
 * @Last Modified At: 2018-06-20 15:10:45
 * @Last Modified By: houxfmark3955@163.com
 * @Last Modified At: 2018-06-20 15:10:18
 * @Description: 数据列表.
 */

// create a component
@connect(({ router, datapreview }) => ({
  modalVisible: router.modalVisible,
  pullToRefreshing: datapreview.pullToRefreshing,
  YValues: datapreview.YValues,
}))
class DataList extends Component {
  static navigationOptions = {
    tabBarLabel: '监控总览',
    title: '监控总览',
    tabBarLabel: '监控总览',
    tabBarIcon: ({ focused, tintColor }) => (
      // <Image
      //   style={[
      //     wholeSituationStyle.icon,
      //     { tintColor: focused ? tintColor : 'gray' },
      //   ]}
      //   source={require('../../images/person.png')}
      // />
      <Icon
        name={'list-ul'}
        size={20}
        style={{ color: focused ? tintColor : 'gray' }}
      />
    ),
  }

  render() {
    return (
      <View style={{ backgroundColor: '#F1F4F9', height: '100%' }}>
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
            {'监控总览'}
          </Text>
        </View>
        <View style={styles.MainView}>
          <TouchableOpacity
            style={{
              borderBottomColor: '#E3E3E3',
              borderBottomWidth: 1,
              padding: 7,
            }}
          >
            <Text style={{ textAlign: 'center', color: '#9F9F9F' }}>
              2018-9-18 16:00:00
            </Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.StateView}>
              <View
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 50,
                  backgroundColor: '#FEB40C',
                  margin: 5,
                }}
              />
              <Text style={styles.StateText}>故障</Text>
            </View>

            <View style={styles.StateView}>
              <View
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 50,
                  backgroundColor: '#FF4F4F',
                  margin: 5,
                }}
              />
              <Text style={styles.StateText}>报警</Text>
            </View>
            <View style={styles.StateView}>
              <View
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 50,
                  backgroundColor: '#BBC1CF',
                  margin: 5,
                }}
              />
              <Text style={styles.StateText}>停产</Text>
            </View>
            <View style={styles.StateView}>
              <View
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 50,
                  backgroundColor: '#26C439',
                  margin: 5,
                }}
              />
              <Text style={styles.StateText}>正常</Text>
            </View>
          </View>
        </View>
        {/* 数据一览表格 */}
        <View style={[styles.viewH]}>
          {/*        
         <TableEnt></TableEnt>
  <WhiteSpace></WhiteSpace> */}
          <TableOther />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  viewH: {
    height: '80%',
  },
  MainView: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: SCREEN_WIDTH - 20,
    backgroundColor: '#FFFFFF',
    marginTop: '2%',
    marginBottom: '2%',
    borderRadius: 5,
    shadowColor: '#E3E3E3',
    shadowOffset: { w: 0, h: 50 },
    shadowRadius: 3,
    shadowOpacity: 0.1,
    elevation: 1,
  },
  MainPadding: {
    padding: '3%',
  },
  ContentView: {
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 6,
    marginRight: 5,
  },
  TitleText: {
    color: '#9F9F9F',
    fontSize: 13,
  },
  ContentText: {
    color: '#404040',
    fontSize: 13,
  },
  ScrollTitleView: {
    flexDirection: 'row',
    padding: '3%',
    backgroundColor: '#F5FAFE',
    borderRadius: 5,
  },
  ScrollTitleText: {
    flex: 1,
    fontSize: 13,
  },
  ScrollContentView: {
    flexDirection: 'row',
    padding: '2%',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    borderTopWidth: 1,
    borderTopColor: '#E0E4E7',
  },
  ScrollContentText: {
    flex: 1,
    fontSize: 11,
  },
  StateView: {
    flex: 1,
    flexDirection: 'row',
    padding: 6,
    justifyContent: 'center',
  },
  StateText: {
    fontSize: 14,
    lineHeight: 20,
  },
});
// make this component available to the app
export default DataList;
