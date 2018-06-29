// import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'react-native-amap3d';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import wholeSituationStyle from '../../config/wholeSituationStyle';
import { SCREEN_WIDTH } from '../../config/globalsize';
/*
 * Copyright (c) 2018 SDL.All Rights Reserved
 *
 * @Script: Map.js
 * @Author: houxf
 * @Email: houxfmark3955@163.com
 * @Create At: 2018-06-20 14:39:35
 * @Last Modified By: houxfmark3955@163.com
 * @Last Modified At: 2018-06-27 10:33:31
 * @Description: 地图一览.
 */

// create a component
@connect()
class Map extends Component {
  static navigationOptions = {
    // header: null,
    title: '地图一览',
    tabBarLabel: '地图一览',
    tabBarIcon: ({ focused, tintColor }) => (
      // <Image
      //   style={[
      //     wholeSituationStyle.icon,
      //     { tintColor: focused ? tintColor : 'gray' },
      //   ]}
      //   source={require('../../images/person.png')}
      // />
      <Icon
        name={'map'}
        size={20}
        style={{ color: focused ? tintColor : 'gray' }}
      />
    ),
  }

  render() {
    return (
      <View style={[styles.container]}>
        <StatusBar barStyle="dark-content" style={[{ height: 24 }]} />
        <MapView
          style={[styles.container]}
          coordinate={{
            latitude: 39.91095,
            longitude: 116.37296,
          }}
        />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#2c3e50',
  },
});

// make this component available to the app
// pod install --verbose --no-repo-update 显示pod install进度
export default Map;
