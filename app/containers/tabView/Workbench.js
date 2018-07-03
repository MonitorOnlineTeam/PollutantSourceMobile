// import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import wholeSituationStyle from '../../config/wholeSituationStyle';
import { LocaleConfig } from 'react-native-calendars';
import { Menu, ActivityIndicator, NavBar } from 'antd-mobile';
/*
 * Copyright (c) 2018 SDL.All Rights Reserved
 *
 * @Script: Workbench.js
 * @Author: houxf
 * @Email: houxfmark3955@163.com
 * @Create At: 2018-06-20 14:21:47
 * @Last Modified By: houxfmark3955@163.com
 * @Last Modified At: 2018-06-20 15:12:26
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
  dayNamesShort: ['一', '二', '三', '四', '五', '六', '日'],
};

LocaleConfig.defaultLocale = 'fr';
// create a component
@connect()
class Workbench extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: '工作台',
    tabBarLable: '工作台',
    headerBackTitle: null,
    headerTintColor: '#000',
    headerStyle: { backgroundColor: '#fff' },
    //  headerRight: (
    //    <TouchableOpacity
    //      style={{ width: 30 }}
    //      onPress={() => {
    //        navigation.dispatch(NavigationActions.navigate({ routeName: 'QRCodeScreen' }))
    //      }}
    //    >
    //      <Icon name="ios-qr-scanner" size={28} color="#fff" />
    //    </TouchableOpacity>
    //  ),
    //  headerLeft: (
    //    <TouchableOpacity
    //      style={{ width: 30, marginLeft: 10 }}
    //      onPress={() => {
    //        navigation.dispatch(NavigationActions.navigate({ routeName: 'Search' }))
    //      }}
    //    >
    //      <Icon name="ios-search" size={28} color="#fff" />
    //    </TouchableOpacity>
    //  ),
    tabBarIcon: ({ focused, tintColor }) => (
      <Image
        style={[
          wholeSituationStyle.icon,
          { tintColor: focused ? tintColor : 'gray' },
        ]}
        source={require('../../images/person.png')}
      />
    ),
  })
  constructor(props) {
    super(props);
    this.state = {
      items: {},
    };
  }

  loadItems(day) {
    setTimeout(() => {
      // for (let i = -15; i < 85; i++) {
      //   const time = day.timestamp + i * 24 * 60 * 60 * 1000;
      //   const strTime = this.timeToString(time);
      //   if (!this.state.items[strTime]) {
      //     this.state.items[strTime] = [];
      //     const numItems = Math.floor(Math.random() * 5);
      //     for (let j = 0; j < numItems; j++) {
      //       this.state.items[strTime].push({
      //         name: 'Item for ' + strTime,
      //         height: Math.max(50, Math.floor(Math.random() * 150))
      //       });
      //     }
      //   }
      // }
      // console.log("1111");
      // console.log(this.state.items);
      const newitem = {
        '2018-07-03': [{ name: 'i111111111', height: 50, marked: true }],
      };
      const newItems = {};
      Object.keys(newitem).forEach(key => {
        newItems[key] = newitem[key];
      });
      this.setState({
        items: newItems,
      });
    }, 1000);
    // console.log(`Load Items for ${day.year}-${day.month}`);
  }

  renderItem(item) {
    return (
      <View style={[styles.item, { height: item.height }]}>
        <Text>{item.name}</Text>
      </View>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}>
        <Text>这是空的日期。</Text>
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
          selected={Date.date}
          renderItem={this.renderItem.bind(this)}
          renderEmptyDate={this.renderEmptyDate.bind(this)}
          rowHasChanged={this.rowHasChanged.bind(this)}
          style={{ width: '100%' }}
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

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
});

// make this component available to the app
export default Workbench;
