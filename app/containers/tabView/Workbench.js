// import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';

import wholeSituationStyle from '../../config/wholeSituationStyle';
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

// create a component
@connect()
class Workbench extends Component {
  static navigationOptions = {
    header: null,
    title: '工作台',
    tabBarLabel: '工作台',
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

  render() {
    return (
      <View style={styles.container}>
        <Text>Workbench</Text>
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
export default Workbench;
