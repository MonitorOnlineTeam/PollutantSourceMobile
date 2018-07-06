// import liraries
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'react-native-amap3d';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import wholeSituationStyle from '../../config/wholeSituationStyle';
import { SCREEN_WIDTH } from '../../config/globalsize';
import {
  getPointEnterprise,
  getEnterprise,
} from '../../mockdata/Base/commonbase';
/*
 * Copyright (c) 2018 SDL.All Rights Reserved
 *
 * @Script: Map.js
 * @Author: houxf
 * @Email: houxfmark3955@163.com
 * @Create At: 2018-06-20 14:39:35
 * @Last Modified By: houxfmark3955@163.com
 * @Last Modified At: 2018-07-03 13:36:09
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

  constructor(props) {
    super(props);

    let points, enterprise, _this;
    _this = this;
    getPointEnterprise().then(function(data) {
      console.log(data);
      _this.setState({
        points: data,
      });
    });
    getEnterprise().then(function(data) {
      console.log(data);
      _this.setState({
        enterprise: data,
      });
    });
    // console.log(points);
    // console.log(enterprise);
    this.state = {
      points: [],
      enterprise: [],
      showEnterprise: true,
      zoomLevel: 5,
      mapCoordinateLatitude: 40.33491,
      mapCoordinateLongitude: 115.32684,
    };
  }

  _logStatusChangeCompleteEvent = ({ nativeEvent }) => {
    console.log('onStatusChangeComplete', nativeEvent);
    if (nativeEvent.zoomLevel > 8) {
      this.setState({
        showEnterprise: false,
      });
    } else {
      this.setState({
        showEnterprise: true,
      });
    }
  }

  _drawPolyline = () => {
    let polylines = [];
    this.state.enterprise.map((item, key) => {
      let _CoordinateSet = [];
      let CoordinateSet_ = JSON.parse(item.CoordinateSet);
      CoordinateSet_[0][0].map((item1, key1) => {
        _CoordinateSet.push({
          latitude: item1[1],
          longitude: item1[0],
        });
      });
      _CoordinateSet.push({
        latitude: CoordinateSet_[0][0][0][1],
        longitude: CoordinateSet_[0][0][0][0],
      });
      polylines.push(
        <MapView.Polyline
          key={key + '' + CoordinateSet_[0][0].length}
          width={2}
          color="rgba(255, 0, 0, 0.5)"
          coordinates={_CoordinateSet}
        />
      );
    });
    // console.log(polylines); 15.5
    return polylines;
  }

  _drawPoint = () => {
    let markers = [];
    this.state.points.map((item, key) => {
      // console.log(item);
      markers.push(
        <MapView.Marker
          color="green"
          key={key}
          coordinate={{
            latitude: parseFloat(item.Latitude, 10),
            longitude: parseFloat(item.Longitude, 10),
          }}
        >
          <TouchableOpacity activeOpacity={0.9} onPress={() => {}}>
            <View style={styles.customInfoWindow}>
              <Text>自定义信息窗口</Text>
              <Text>{item.EntName}</Text>
            </View>
          </TouchableOpacity>
        </MapView.Marker>
      );
    });
    return markers;
  }

  _showEnterpriseFun = () => {
    let markers = [];
    console.log(this.state.enterprise);
    this.state.enterprise.map((item, key) => {
      let count = 0;
      this.state.points.map(point => {
        if (point.EntCode === item.EntCode) {
          count++;
        }
      });

      markers.push(
        <MapView.Marker
          color="red"
          key={key}
          infoWindowDisabled={true}
          coordinate={{
            latitude: parseFloat(item.Latitude, 10),
            longitude: parseFloat(item.Longitude, 10),
          }}
          onPress={() => {
            console.log('onPress13');
            console.log(
              'latitude:' +
                parseFloat(item.Latitude, 10) +
                ',longitude:' +
                parseFloat(item.Longitude, 10)
            );
            
            this.setState({
              mapCoordinateLatitude: parseFloat(item.Latitude, 10),
              mapCoordinateLongitude: parseFloat(item.Longitude, 10),
            });
            this.setState({
              zoomLevel: this.state.zoomLevel === 15 ? 15.1 : 15,
            });
          }}
          icon={() => (
            <TouchableOpacity
              activeOpacity={0.9}
              style={[
                {
                  borderRadius: 4,
                  backgroundColor:
                    item.status == 0
                      ? '#B0B0B1'
                      : item.status == 1
                        ? '#5BC142'
                        : item.status == 2
                          ? '#E00B0B'
                          : item.status == 3 ||
                            item.status == 4 ||
                            item.status == 5
                            ? '#B9C303'
                            : '#B0B0B1',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: 24,
                  minWidth: 40,
                  borderColor:
                    item.status == 0
                      ? '#B0B0B1'
                      : item.status == 1
                        ? '#5BC142'
                        : item.status == 2
                          ? '#E00B0B'
                          : item.status == 3 ||
                            item.status == 4 ||
                            item.status == 5
                            ? '#B9C303'
                            : '#5BC142',
                },
              ]}
            >
              <View style={{ flexDirection: 'row' }}>
                <Text>{item.EntName}</Text>
                <Text>[{count}]</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      );
    });
    return markers;
  }

  render() {
    console.log(this.state.mapCoordinateLatitude);
    return (
      <View style={[styles.container]}>
        <StatusBar barStyle="dark-content" style={[{ height: 24 }]} />
        <MapView
          coordinate={{
            latitude: this.state.mapCoordinateLatitude,
            longitude: this.state.mapCoordinateLongitude,
          }}
          zoomLevel={this.state.zoomLevel}
          style={[styles.container]}
          onStatusChangeComplete={this._logStatusChangeCompleteEvent}
          tiltEnabled={false}
          rotateEnabled={false}
          showsCompass={false}
          showsScale={false}
        >
          {this.state.enterprise !== null &&
          this.state.enterprise.length > 0 &&
          !this.state.showEnterprise
            ? this._drawPolyline()
            : null}
          {this.state.points !== null &&
          this.state.points.length > 0 &&
          !this.state.showEnterprise
            ? this._drawPoint()
            : null}
          {this.state.enterprise !== null &&
          this.state.enterprise.length > 0 &&
          this.state.showEnterprise
            ? this._showEnterpriseFun()
            : null}
        </MapView>
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
