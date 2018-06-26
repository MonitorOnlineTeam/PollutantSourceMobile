// import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';

import wholeSituationStyle from '../../config/wholeSituationStyle';
import { Button } from '../../components';
import { NavigationActions } from '../../utils';
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
    header: null,
    title: '数据一览',
    tabBarLabel: '数据一览',
    tabBarIcon: ({ focused, tintColor }) => (
      <Image
        style={[
          wholeSituationStyle.icon,
          { tintColor: focused ? tintColor : 'gray' },
        ]}
        source={require('../../images/person.png')}
      />
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
        <Text>DataList</Text>
        <Button text="Goto Detail" onPress={this.gotoDetail} />
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
});

// make this component available to the app
export default DataList;
