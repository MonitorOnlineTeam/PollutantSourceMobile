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
import { connect } from 'react-redux';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import wholeSituationStyle from '../../config/wholeSituationStyle';
import { LocaleConfig } from 'react-native-calendars';
import { Menu, ActivityIndicator, NavBar } from 'antd-mobile';
import { SCREEN_WIDTH } from '../../config/globalsize';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { Modal } from 'antd-mobile-rn';
import { NavigationActions } from '../../utils';
import Point_All from '../../mockdata/Base/Point_All.json';
import moment from 'moment';
import alarm from '../../mockdata/Workbench/alarm.json';
import earlywarning from '../../mockdata/Workbench/earlywarning.json';
import operation from '../../mockdata/Workbench/operation.json';
import todolist from '../../mockdata/Workbench/todolist.json';
import {
  getPointEnterprise,
  // getEnterprise,
} from '../../mockdata/Base/commonbase';
import {getToken} from '../../dvapack/storage';

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

LocaleConfig.locales['fr'] = {
  monthNames: [
    '一月',
    '二月',
    '三月',
    '四月',
    '五月',
    '六月',
    '七月',
    '八月',
    '九月',
    '十月',
    '十一月',
    '十二月',
  ],
  monthNamesShort: [
    '一月',
    '二月',
    '三月',
    '四月',
    '五月',
    '六月',
    '七月',
    '八月',
    '九月',
    '十月',
    '十一月',
    '十二月',
  ],
  dayNames: [
    '星期天',
    '星期一',
    '星期二',
    '星期三',
    '星期四',
    '星期五',
    '星期六',
  ],
  dayNamesShort: ['日', '一', '二', '三', '四', '五', '六'],
};
let type = 'all',
  _day = { timestamp: new Date().getTime() };
LocaleConfig.defaultLocale = 'fr';
// create a component
const stateButtonWidth = SCREEN_WIDTH / 5;
const data = alarm;
let _this;
let pointEnterprise;
@connect()
class Workbench extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: '工作台',
    tabBarLable: '工作台',
    headerBackTitle: null,
    headerTintColor: '#000',
    headerStyle: { backgroundColor: '#fff' },
    headerRight: (
      <TouchableOpacity
        style={{ width: 30 }}
        onPress={() => {
          Modal.operation([
            {
              text: '全部',
              onPress: () => {
                type = 'all';
                _this.setState({ items: {} });
                _this.loadItems(_day);
              },
            },
            {
              text: '待办',
              onPress: () => {
                _this.setState({ items: {} });
                type = 'todolist';
                // = {
                //   items:{}
                // };

                setTimeout(() => {
                  _this.loadItems(_day);
                }, 1000);
              },
            },
            {
              text: '消息',
              onPress: () => {
                type = 'opertation';
                _this.setState({ items: {} });
                setTimeout(() => {
                  _this.loadItems(_day);
                }, 1000);
              },
            },
            {
              text: '报警',
              onPress: () => {
                type = 'alarm';
                _this.setState({ items: {} });
                setTimeout(() => {
                  _this.loadItems(_day);
                }, 1000);
              },
            },
            {
              text: '预警',
              onPress: () => {
                type = 'earlywarning';
                _this.setState({ items: {} });
                setTimeout(() => {
                  _this.loadItems(_day);
                }, 1000);
              },
            },
          ]);
        }}
      >
        <Icon name={'align-justify'} size={20} style={{ color: 'gray' }} />
      </TouchableOpacity>
    ),

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
    let user = getToken();
    pointEnterprise = getPointEnterprise(user.User_Account);
    _this = this;
    this.state = {
      items: {},
    };
  }
  getalarm = (day, i) => {
    const time = day.timestamp + i * 24 * 60 * 60 * 1000;
    const strTime = this.timeToString(time);
    // const date = new Date(time);
    if (!this.state.items[strTime]) {
      this.state.items[strTime] = [];
    }

    alarm.map((item, key) => {
      const date = moment(item.date).format('YYYY-MM-DD');
      if (date === strTime) {
        // Point_All.map((pointitem, pointkey) => {
        pointEnterprise.map((pointitem, pointkey) => {
          if (pointitem.DGIMN == item.DGIMN) {
            const alarmtype = '';
            if (item.alarmtype === 1) {
              alarmtype = '限值报警';
            } else if (item.alarmtype === 2) {
              alarmtype = '零值报警';
            } else if (item.alarmtype === 3) {
              alarmtype = '连续值报警';
            } else if (item.alarmtype === 4) {
              alarmtype = '离线报警';
            } else if (item.alarmtype === 5) {
              alarmtype = '设备报警';
            } else if (item.alarmtype === 6) {
              alarmtype = '其他报警';
            }

            this.state.items[strTime].push({
              type: 'alarm',
              name: pointitem.Abbreviation+' '+pointitem.PointName,
              marked: true,
              date: item.date,
              poll: item.PollutantName,
              alarmtype: alarmtype,
              cnt: item.cnt,
              standard: item.standard,
              Strength: item.Strength,
            });
          }
        });
      }
    });
  }
  getoperation = (day, i) => {
    const time = day.timestamp + i * 24 * 60 * 60 * 1000;
    const strTime = this.timeToString(time);
    // const date = new Date(time);
    if (!this.state.items[strTime]) {
      this.state.items[strTime] = [];
    }
    operation.map((item, key) => {
      const date = moment(item.date).format('YYYY-MM-DD');
      if (date === strTime) {
        // Point_All.map((pointitem, pointkey) => {
        pointEnterprise.map((pointitem, pointkey) => {
          if (pointitem.DGIMN == item.DGIMN) {
            const operationaction = '';
            if (item.operationaction === 1) {
              operationaction = '例行运维';
            } else if (item.operationaction === 2) {
              operationaction = '应急运维';
            } else if (item.operationaction === 3) {
              operationaction = '运维审核';
            } else if (item.operationaction === 4) {
              operationaction = '备件更换';
            } else if (item.operationaction === 5) {
              operationaction = '备件过期';
            } else if (item.operationaction === 6) {
              operationaction = '运维催办';
            }

            this.state.items[strTime].push({
              type: 'operation',
              name: pointitem.Abbreviation+' '+pointitem.PointName,
              marked: true,
              date: item.date,
              operationaction: operationaction,
            });
          }
        });
      }
    });
  }

  getearlywarning = (day, i) => {
    const time = day.timestamp + i * 24 * 60 * 60 * 1000;
    const strTime = this.timeToString(time);
    // const date = new Date(time);
    if (!this.state.items[strTime]) {
      this.state.items[strTime] = [];
    }
    earlywarning.map((item, key) => {
      const date = moment(item.date).format('YYYY-MM-DD');
      if (date === strTime) {
        // Point_All.map((pointitem, pointkey) => {
        pointEnterprise.map((pointitem, pointkey) => {
          if (pointitem.DGIMN == item.DGIMN) {
            const earlytype = '';
            if (item.earlytype === 1) {
              earlytype = '参数预警';
            } else {
              earlytype = '对比预警';
            }

            this.state.items[strTime].push({
              type: 'early',
              name: pointitem.Abbreviation+' '+pointitem.PointName,
              marked: true,
              date: item.date,
              poll: item.PollutantName,
              earlytype: earlytype,
              standard: item.standard,
              Strength: item.Strength,
            });
          }
        });
      }
    });
  }
  gettodolist = (day, i) => {
    const time = day.timestamp + i * 24 * 60 * 60 * 1000;
    const strTime = this.timeToString(time);
    // const date = new Date(time);
    if (!this.state.items[strTime]) {
      this.state.items[strTime] = [];
    }
    todolist.map((item, key) => {
      const date = moment(item.date).format('YYYY-MM-DD');
      if (date === strTime) {
        // Point_All.map((pointitem, pointkey) => {
        pointEnterprise.map((pointitem, pointkey) => {
          if (pointitem.DGIMN == item.DGIMN) {
            const operationaction = '';
            if (item.operationaction === 1) {
              operationaction = '例行运维';
            } else if (item.operationaction === 2) {
              operationaction = '应急运维';
            } else if (item.operationaction === 3) {
              operationaction = '运维审核';
            } else if (item.operationaction === 4) {
              operationaction = '备件更换';
            } else if (item.operationaction === 5) {
              operationaction = '备件过期';
            } else if (item.operationaction === 6) {
              operationaction = '运维催办';
            }

            this.state.items[strTime].push({
              type: 'todolist',
              name: pointitem.Abbreviation+' '+pointitem.PointName,
              marked: true,
              date: item.date,
              operationaction: operationaction,
            });
          }
        });
      }
    });
  }
  loadItems(day) {
    for (let i = -15; i < 50; i++) {
      const time = day.timestamp + i * 24 * 60 * 60 * 1000;
      const strTime = this.timeToString(time);
      this.state.items[strTime] = [];
    }

    if (type === 'all') {
      for (let i = -15; i < 50; i++) {
        this.getalarm(day, i);
        this.getearlywarning(day, i);
        this.getoperation(day, i);
        this.gettodolist(day, i);
      }
    }
    if (type === 'opertation') {
      for (let i = -15; i < 50; i++) {
        this.getoperation(day, i);
      }
    }
    if (type === 'alarm') {
      for (let i = -15; i < 50; i++) {
        this.getalarm(day, i);
      }
    }
    if (type === 'earlywarning') {
      for (let i = -15; i < 50; i++) {
        this.getearlywarning(day, i);
      }
    }
    if (type === 'todolist') {
      for (let i = -15; i < 50; i++) {
        this.gettodolist(day, i);
      }
    }
    console.log('1111');
    console.log(this.state.items);

    // const newitem = {
    //   '2018-07-02': [{ name: '', height: 500, marked: true }],
    //   '2018-07-03': [{ name: '', height: 500, marked: true }],
    //   '2018-07-04': []
    // };

    const newItems = {};
    Object.keys(this.state.items).forEach(key => {
      newItems[key] = this.state.items[key];
    });
    this.setState({
      items: newItems,
    });

    // console.log(`Load Items for ${day.year}-${day.month}`);
  }
  phoneList = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'TodoDetail' }));
  }
  renderItem(item) {
    if (item.type === 'alarm') {
      return (
        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              backgroundColor: 'white',
              flex: 1,
              borderRadius: 10,
              padding: 10,
              marginRight: 10,
              marginTop: 17,
              paddingBottom: 20,
            }}
          >
            <View style={{ flexDirection: 'row', padding: 5 }}>
              <Image
                source={require('../../images/gzbj.png')}
                style={{ width: 19, height: 19 }}
                tintColor="#ff414e"
              />
              <Text
                style={{
                  alignSelf: 'center',
                  alignItems: 'center',
                  color: '#ff414e',
                  fontSize: 15,
                }}
              >
                {item.name}
              </Text>
            </View>
            <View
              style={{ flexDirection: 'row', marginTop: 3, marginLeft: 21 }}
            >
              <Text style={{ color: '#797979', fontSize: 14 }}>时间:</Text>
              <Text style={{ color: '#252525', fontSize: 14 }}>
                {' '}
                {item.date}
              </Text>
            </View>
            <View
              style={{ flexDirection: 'row', marginTop: 3, marginLeft: 21 }}
            >
              <Text style={{ color: '#797979', fontSize: 14 }}>污染物：</Text>
              <Text style={{ color: '#252525', fontSize: 14 }}>
                {' '}
                {item.poll}
              </Text>
            </View>
            <View
              style={{ flexDirection: 'row', marginTop: 3, marginLeft: 21 }}
            >
              <Text style={{ color: '#797979', fontSize: 14 }}>报警次数：</Text>
              <Text style={{ color: '#252525', fontSize: 14 }}>
                {' '}
                {item.cnt}次
              </Text>
            </View>
            <View
              style={{ flexDirection: 'row', marginTop: 3, marginLeft: 21 }}
            >
              <Text style={{ color: '#797979', fontSize: 14 }}>报警类型：</Text>
              <Text style={{ color: '#252525', fontSize: 14 }}>
                {' '}
                {item.alarmtype}
              </Text>
            </View>

            <View
              style={{ flexDirection: 'row', marginTop: 3, marginLeft: 21 }}
            >
              <Text style={{ color: '#797979', fontSize: 14 }}>标准值：</Text>
              <Text style={{ color: '#252525', fontSize: 14 }}>
                {' '}
                {item.standard}
              </Text>
            </View>
            <View
              style={{ flexDirection: 'row', marginTop: 3, marginLeft: 21 }}
            >
              <Text style={{ color: '#797979', fontSize: 14 }}>值：</Text>
              <Text style={{ color: '#252525', fontSize: 14 }}>
                {' '}
                {item.Strength}
              </Text>
            </View>

            <TouchableOpacity
              style={{
                borderTopColor: '#f5f5f5',
                borderTopWidth: 1,
                marginTop: 10,
              }}
              onPress={this.phoneList}
            >
              <View
                style={{ flexDirection: 'row', marginTop: 10, marginLeft: 21 }}
              >
                <Text style={{ color: '#d2d2d2' }}>详情信息</Text>
                <Image
                  source={require('../../images/sjt.png')}
                  tintColor="#d2d2d2"
                  style={{
                    width: 15,
                    height: 15,
                    alignItems: 'center',
                    alignSelf: 'center',
                    marginLeft: 5,
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
    if (item.type === 'early') {
      return (
        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              backgroundColor: 'white',
              flex: 1,
              borderRadius: 10,
              padding: 10,
              marginRight: 10,
              marginTop: 17,
              paddingBottom: 20,
            }}
          >
            <View style={{ flexDirection: 'row', padding: 5 }}>
              <Image
                source={require('../../images/gzyj.png')}
                style={{ width: 15, height: 15, alignSelf: 'center' }}
                tintColor="#faaa00"
              />
              <Text
                style={{
                  alignSelf: 'center',
                  alignItems: 'center',
                  color: '#faaa00',
                  fontSize: 15,
                  marginLeft: 5,
                }}
              >
                {item.name}
              </Text>
            </View>
            <View
              style={{ flexDirection: 'row', marginTop: 3, marginLeft: 21 }}
            >
              <Text style={{ color: '#797979', fontSize: 14 }}>时间:</Text>
              <Text style={{ color: '#252525', fontSize: 14 }}>
                {' '}
                {item.date}
              </Text>
            </View>
            <View
              style={{ flexDirection: 'row', marginTop: 3, marginLeft: 21 }}
            >
              <Text style={{ color: '#797979', fontSize: 14 }}>污染物：</Text>
              <Text style={{ color: '#252525', fontSize: 14 }}>
                {' '}
                {item.poll}
              </Text>
            </View>
            <View
              style={{ flexDirection: 'row', marginTop: 3, marginLeft: 21 }}
            >
              <Text style={{ color: '#797979', fontSize: 14 }}>预警类型</Text>
              <Text style={{ color: '#252525', fontSize: 14 }}>
                {' '}
                {item.earlytype}
              </Text>
            </View>
            <View
              style={{ flexDirection: 'row', marginTop: 3, marginLeft: 21 }}
            >
              <Text style={{ color: '#797979', fontSize: 14 }}>标准值：</Text>
              <Text style={{ color: '#252525', fontSize: 14 }}>
                {' '}
                {item.standard}
              </Text>
            </View>
            <View
              style={{ flexDirection: 'row', marginTop: 3, marginLeft: 21 }}
            >
              <Text style={{ color: '#797979', fontSize: 14 }}>值：</Text>
              <Text style={{ color: '#252525', fontSize: 14 }}>
                {' '}
                {item.Strength}
              </Text>
            </View>

            <TouchableOpacity
              style={{
                borderTopColor: '#f5f5f5',
                borderTopWidth: 1,
                marginTop: 10,
              }}
              onPress={this.phoneList}
            >
              <View
                style={{ flexDirection: 'row', marginTop: 10, marginLeft: 21 }}
              >
                <Text style={{ color: '#d2d2d2' }}>详情信息</Text>
                <Image
                  source={require('../../images/sjt.png')}
                  tintColor="#d2d2d2"
                  style={{
                    width: 15,
                    height: 15,
                    alignItems: 'center',
                    alignSelf: 'center',
                    marginLeft: 5,
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else if (item.type === 'operation') {
      return (
        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              backgroundColor: 'white',
              flex: 1,
              borderRadius: 10,
              padding: 10,
              marginRight: 10,
              marginTop: 17,
              paddingBottom: 20,
            }}
          >
            <View style={{ flexDirection: 'row', padding: 5 }}>
              <Image
                source={require('../../images/gzxx.png')}
                style={{ width: 15, height: 15, alignSelf: 'center' }}
                tintColor="#2ebf83"
              />
              <Text
                style={{
                  alignSelf: 'center',
                  alignItems: 'center',
                  color: '#2ebf83',
                  fontSize: 15,
                  marginLeft: 5,
                }}
              >
                {item.name}
              </Text>
            </View>
            <View
              style={{ flexDirection: 'row', marginTop: 3, marginLeft: 21 }}
            >
              <Text style={{ color: '#797979', fontSize: 14 }}>时间:</Text>
              <Text style={{ color: '#252525', fontSize: 14 }}>
                {' '}
                {item.date}
              </Text>
            </View>
            <View
              style={{ flexDirection: 'row', marginTop: 3, marginLeft: 21 }}
            >
              <Text style={{ color: '#797979', fontSize: 14 }}>运维活动:</Text>
              <Text style={{ color: '#252525', fontSize: 14 }}>
                {' '}
                {item.operationaction}
              </Text>
            </View>
            <TouchableOpacity
              style={{
                borderTopColor: '#f5f5f5',
                borderTopWidth: 1,
                marginTop: 10,
              }}
              onPress={this.phoneList}
            >
              <View
                style={{ flexDirection: 'row', marginTop: 10, marginLeft: 21 }}
              >
                <Text style={{ color: '#d2d2d2' }}>详情信息</Text>
                <Image
                  source={require('../../images/sjt.png')}
                  tintColor="#d2d2d2"
                  style={{
                    width: 15,
                    height: 15,
                    alignItems: 'center',
                    alignSelf: 'center',
                    marginLeft: 5,
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      return (
        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              backgroundColor: 'white',
              flex: 1,
              borderRadius: 10,
              padding: 10,
              marginRight: 10,
              marginTop: 17,
              paddingBottom: 20,
            }}
          >
            <View style={{ flexDirection: 'row', padding: 5 }}>
              <Image
                source={require('../../images/gzdb.png')}
                style={{ width: 15, height: 15, alignSelf: 'center' }}
                tintColor="#00a9bd"
              />
              <Text
                style={{
                  alignSelf: 'center',
                  alignItems: 'center',
                  color: '#00a9bd',
                  fontSize: 15,
                  marginLeft: 5,
                }}
              >
                {item.name}
              </Text>
            </View>
            <View
              style={{ flexDirection: 'row', marginTop: 3, marginLeft: 21 }}
            >
              <Text style={{ color: '#797979', fontSize: 14 }}>时间:</Text>
              <Text style={{ color: '#252525', fontSize: 14 }}>
                {' '}
                {item.date}
              </Text>
            </View>
            <View
              style={{ flexDirection: 'row', marginTop: 3, marginLeft: 21 }}
            >
              <Text style={{ color: '#797979', fontSize: 14 }}>运维活动:</Text>
              <Text style={{ color: '#252525', fontSize: 14 }}>
                {' '}
                {item.operationaction}
              </Text>
            </View>
            <TouchableOpacity
              style={{
                borderTopColor: '#f5f5f5',
                borderTopWidth: 1,
                marginTop: 10,
              }}
              onPress={this.phoneList}
            >
              <View
                style={{ flexDirection: 'row', marginTop: 10, marginLeft: 21 }}
              >
                <Text style={{ color: '#d2d2d2' }}>详情信息</Text>
                <Image
                  source={require('../../images/sjt.png')}
                  tintColor="#d2d2d2"
                  style={{
                    width: 15,
                    height: 15,
                    alignItems: 'center',
                    alignSelf: 'center',
                    marginLeft: 5,
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }

  renderEmptyDate() {
    return (
      <View
        style={{
          alignContent: 'center',
          alignSelf: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            borderRadius: 100,
            backgroundColor: '#eaeaea',
            padding: 5,
            marginTop: 50,
          }}
        >
          <Text
            style={{
              alignContent: 'center',
              color: '#b7b7b7',
              alignSelf: 'center',
              alignItems: 'center',
              fontSize: 11,
            }}
          >
            暂无数据
          </Text>
        </View>
      </View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }
  render() {
    return (
      <View style={styles.container}>
        <Agenda
          items={this.state.items}
          loadItemsForMonth={this.loadItems.bind(this)}
          selected={Date.Date}
          renderItem={this.renderItem.bind(this)}
          renderEmptyDate={this.renderEmptyDate.bind(this)}
          rowHasChanged={this.rowHasChanged.bind(this)}
          style={{ width: '100%' }}
          onDayChange={day => {
            _day = day;
          }}
          // markingType={'period'
          // markedDates={{
          //    '2018-07-03': {textColor: '#666'},
          //    '2017-05-09': {textColor: '#666'},
          //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
          //    '2017-05-21': {startingDay: true, color: 'blue'},
          //    '2017-05-22': {endingDay: true, color: 'gray'},
          //    '2017-05-24': {startingDay: true, color: 'gray'},
          //    '2017-05-25': {color: 'gray'},
          //    '2017-05-26': {endingDay: true, color: 'gray'}}}
          //  monthFormat={'yyyy'}
          // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
          //renderDayrenderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
        />
      </View>
    );
  }
}
{
  /*<View style={styles.container}>
        <StatusBar barStyle="dark-content" style={[{height:24}]}/>
        <View style={[{flexDirection:'row',height:stateButtonWidth*2
        ,backgroundColor:'black',width:SCREEN_WIDTH,
        justifyContent:'center',alignItems:'center',}]}>
          {
            this.state.stateArray.map((item,key)=>{
              return <TouchableOpacity key={item.id} style={[{marginLeft:4,marginRight:4}]}
                onPress={item.fun}>
                <View style={[
                  {width:stateButtonWidth,height:stateButtonWidth,
                    justifyContent:'center',alignItems:'center',
                  backgroundColor:item.id==='todo'?'lightblue':
                  item.id==='earlywarning'?'orange':
                  item.id==='message'?'yellow':
                  item.id==='alarm'?'red':'white',}]}>
                  <Text style={[{color:'white'}]}>{item.title}</Text>
                  <Text style={[{color:'white'}]}>{item.count}</Text>
                </View>
              </TouchableOpacity>;
            })
          }
        </View>
        <View style={[{
          width:SCREEN_WIDTH,
          flex:1,flexDirection:'row',
          flexWrap:'wrap',
          paddingLeft:stateButtonWidth/3,
          paddingRight:stateButtonWidth/3,
        }]}>
          {
            this.state.functionArray.map((item,key)=>{
              return <TouchableOpacity key={item.id}
                onPress={item.fun}
                style={[
                {marginLeft:stateButtonWidth/48,
                  marginRight:stateButtonWidth/48,
                marginTop:stateButtonWidth/3}]}>
              <View style={[
                {width:stateButtonWidth,height:stateButtonWidth,
                  justifyContent:'center',alignItems:'center',
                backgroundColor:'red',}]}>
                <Text style={[{color:'white'}]}>{item.title}</Text>
              </View>
            </TouchableOpacity>;
            })
          }
        </View>
        </View>*/
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  item: {},
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
});

// make this component available to the app
export default Workbench;
