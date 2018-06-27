// import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import wholeSituationStyle from '../../config/wholeSituationStyle';
import { Button } from '../../components';
import { NavigationActions } from '../../utils';
import TopSelector from '../../components/common/TopSelector';
import PollutantBar from '../../components/common/PollutantBar';
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
@connect()
class DataList extends Component {
  static navigationOptions = {
    // header: null,
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
      <Icon name={'list-ul'} size={20} style={{color:focused ? tintColor : 'gray'}}/>
    ),
  }

  gotoDetail = () => {
    // this.props.dispatch(NavigationActions.navigate({ routeName: 'Detail' }));
    this.props.dispatch(NavigationActions.navigate({ routeName: 'SingleStationDetail' }));
    // this.props.dispatch(NavigationActions.reset({
    //   index: 0,
    //   actions: [NavigationActions.navigate({ routeName: 'SingleStationDetail' })],
    // }));
  }

  render() {
    return (
      <View style={styles.container}>
        <TopSelector  ref={ref => this._topSelector = ref} showDatePicker={()=>{}}/>
        <PollutantBar />
        <Text onPress={this.gotoDetail}>
          DataList 监控总览 以列表形式显示所有数据，可以调整显示数据的时间类型（实时、分钟、小时、日），切换污染物类型
        </Text>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
  },
});

// make this component available to the app
export default DataList;
