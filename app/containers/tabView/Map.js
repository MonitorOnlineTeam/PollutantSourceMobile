// import liraries
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { connect } from 'react-redux';
import { MapView, Marker } from 'react-native-amap3d';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Iconi from 'react-native-vector-icons/dist/Ionicons';
import { SegmentedControl } from 'antd-mobile-rn';

import wholeSituationStyle from '../../config/wholeSituationStyle';
import { SCREEN_WIDTH } from '../../config/globalsize';
import {
  getPointEnterprise,
  getEnterprise,
} from '../../mockdata/Base/commonbase';
import { NavigationActions } from '../../utils';
import markersInfo from '../../mockdata/OverView/markersInfo.json';
import SuspensionLoadingComponent from '../../components/common/SuspensionLoadingComponent';
import FlashPoint from '../../components/map/FlashPoint';
import Button from '../../components/common/Button';
/*
 * Copyright (c) 2018 SDL.All Rights Reserved
 *
 * @Script: Map.js
 * @Author: houxf
 * @Email: houxfmark3955@163.com
 * @Create At: 2018-06-20 14:39:35
 * @Last Modified By: houxfmark3955@163.com
 * @Last Modified At: 2018-07-06 17:37:46
 * @Description: 地图一览.
 */

// create a component
let loading = false,
  lastClickTime = 0;
@connect()
class Map extends Component {
  static navigationOptions = {
    header: null,
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
      _this.setState({
        points: data,
      });
    });
    getEnterprise().then(function(data) {
      _this.setState({
        enterprise: data,
      });
    });
    this.state = {
      points: [],
      enterprise: [],
      showEnterprise: true,
      zoomLevel: 5,
      mapCoordinateLatitude: 40.33491,
      mapCoordinateLongitude: 115.32684,
      special: 'monitor',
      selectMapLegend: '',
    };
  }

  _logStatusChangeCompleteEvent = ({ nativeEvent }) => {
    if (nativeEvent.zoomLevel > 8) {
      if (this.state.showEnterprise === true) {
        this.setState({
          showEnterprise: false,
        });
        loading = true;
        let _this = this;
        setTimeout(function() {
          loading = false;
          _this.setState({
            showEnterprise: false,
          });
        }, 1000);
      }
    } else {
      if (this.state.showEnterprise === false) {
        this.setState({
          showEnterprise: true,
        });
        loading = true;
        let _this = this;
        setTimeout(function() {
          loading = false;
          _this.setState({
            showEnterprise: true,
          });
        }, 1000);
      }
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
          width={!this.state.showEnterprise ? 1 : 0}
          color="#FF33FF"
          coordinates={_CoordinateSet}
        />
      );
    });
    return polylines;
  }

  _drawPolygon = () => {
    let polygons = [];
    this.state.enterprise.map((item, key) => {
      let _CoordinateSet = [];
      let CoordinateSet_ = JSON.parse(item.CoordinateSet);
      CoordinateSet_[0][0].map((item1, key1) => {
        _CoordinateSet.push({
          latitude: item1[1],
          longitude: item1[0],
        });
      });

      polygons.push(
        <MapView.Polygon
          key={key + '' + CoordinateSet_[0][0].length}
          strokeWidth={1}
          strokeColor="rgba(255,51,255, 0.2)"
          fillColor="rgba(23,145,252, 0.35)"
          coordinates={_CoordinateSet}
        />
      );
    });

    return polygons;
  }

  _drawPoint = () => {
    let markers = [];
    this.state.points.map((item, key) => {
      let imageName = this._getIconName(item);
      let ImageView;
      switch (imageName) {
        case 'gisnormal':
          ImageView = (
            <Image
              style={[styles.pointStyle]}
              source={require('../../images/gisnormal.png')}
            />
          );
          break;
        case 'gisexception':
          ImageView = (
            <Image
              style={[styles.pointStyle]}
              source={require('../../images/gisexception.png')}
            />
          );
          break;
        case 'gisfault':
          ImageView = (
            <Image
              style={[styles.pointStyle]}
              source={require('../../images/gisfault.png')}
            />
          );
          break;
        case 'gisoperation':
          ImageView = (
            <Image
              style={[styles.pointStyle]}
              source={require('../../images/gisoperation.png')}
            />
          );
          break;
        case 'gisover':
          //  ImageView = <FlashPoint ><Image style={[styles.pointStyle]} source={require('../../images/gisover.png')} /></FlashPoint>
          ImageView = (
            <Image
              style={[styles.pointStyle]}
              source={require('../../images/gisover.png')}
            />
          );
          break;
        case 'gisoverdue':
          ImageView = (
            <Image
              style={[styles.pointStyle]}
              source={require('../../images/gisoverdue.png')}
            />
          );
          break;
        case 'gisquality':
          ImageView = (
            <Image
              style={[styles.pointStyle]}
              source={require('../../images/gisquality.png')}
            />
          );
          break;
        case 'gisunline':
          break;
      }

      if (this.state.selectMapLegend === '') {
        if (imageName !== 'gisnormal') {
          markers.push(
            <MapView.Marker
              style={{ height: 20, width: 20 }}
              infoWindowDisabled={true}
              key={key}
              /* image={imageName} */
              /* icon={() => ImageView} */
              gif={['gisover', 'gisfault', 'gisexception']}
              coordinate={{
                latitude: parseFloat(item.Latitude, 10),
                longitude: parseFloat(item.Longitude, 10),
              }}
              onPress={() => {
                // this.props.dispatch(NavigationActions.navigate({ routeName: 'Detail' }));
                this.props.dispatch(
                  NavigationActions.navigate({
                    routeName: 'SingleStationDetail',
                  })
                );
              }}
            />
          );
        } else {
          markers.push(
            <MapView.Marker
              style={{ height: 20, width: 20 }}
              infoWindowDisabled={true}
              key={key}
              image={imageName}
              /* icon={() => ImageView} */
              /* gif={['gisover','gisfault','gisexception']} */
              coordinate={{
                latitude: parseFloat(item.Latitude, 10),
                longitude: parseFloat(item.Longitude, 10),
              }}
              onPress={() => {
                // this.props.dispatch(NavigationActions.navigate({ routeName: 'Detail' }));
                this.props.dispatch(
                  NavigationActions.navigate({
                    routeName: 'SingleStationDetail',
                  })
                );
              }}
            />
          );
        }
      } else {
        //假数据逻辑
        if (
          ((this.state.selectMapLegend === '正常' ||
            this.state.selectMapLegend === '一级') &&
            imageName === 'gisnormal') ||
          ((this.state.selectMapLegend === '超标' ||
            this.state.selectMapLegend === '二级') &&
            imageName === 'gisover') ||
          ((this.state.selectMapLegend === '离线' ||
            this.state.selectMapLegend === '三级') &&
            imageName === 'gisunline') ||
          ((this.state.selectMapLegend === '异常' ||
            this.state.selectMapLegend === '停产' ||
            this.state.selectMapLegend === '四级') &&
            imageName === 'gisexception') ||
          ((this.state.selectMapLegend === '运维' ||
            this.state.selectMapLegend === '故障') &&
            imageName === 'gisoperation') ||
          (this.state.selectMapLegend === '质控' && imageName === 'gisquality')
        ) {
          if (imageName !== 'gisnormal') {
            markers.push(
              <MapView.Marker
                style={{ height: 20, width: 20 }}
                infoWindowDisabled={true}
                key={key}
                /* image={imageName} */
                /* icon={() => ImageView} */
                gif={['gisover', 'gisfault', 'gisexception']}
                coordinate={{
                  latitude: parseFloat(item.Latitude, 10),
                  longitude: parseFloat(item.Longitude, 10),
                }}
                onPress={() => {
                  // this.props.dispatch(NavigationActions.navigate({ routeName: 'Detail' }));
                  this.props.dispatch(
                    NavigationActions.navigate({
                      routeName: 'SingleStationDetail',
                    })
                  );
                }}
              />
            );
          } else {
            markers.push(
              <MapView.Marker
                style={{ height: 20, width: 20 }}
                infoWindowDisabled={true}
                key={key}
                image={imageName}
                /* icon={() => ImageView} */
                /* gif={['gisover','gisfault','gisexception']} */
                coordinate={{
                  latitude: parseFloat(item.Latitude, 10),
                  longitude: parseFloat(item.Longitude, 10),
                }}
                onPress={() => {
                  // this.props.dispatch(NavigationActions.navigate({ routeName: 'Detail' }));
                  this.props.dispatch(
                    NavigationActions.navigate({
                      routeName: 'SingleStationDetail',
                    })
                  );
                }}
              />
            );
          }
        }
      }
    });
    return markers;
  }
  _getIconName = extData => {
    let _name = 'gisnormal';
    if (this.state.special === 'monitor') {
      if (
        extData.DGIMN === 'bjldgn01' ||
        extData.DGIMN === 'dtgjhh11102' ||
        extData.DGIMN === 'dtgrjx110'
      ) {
        _name = 'gisover';
      } else if (
        extData.DGIMN === 'dtgrjx103' ||
        extData.DGIMN === 'lywjfd03'
      ) {
        _name = 'gisexception';
      } else {
        _name = 'gisnormal';
      }
    } else if (this.state.special === 'operation') {
      if (
        extData.DGIMN === 'bjldgn01' ||
        extData.DGIMN === 'dtgjhh11102' ||
        extData.DGIMN === 'dtgrjx110'
      ) {
        _name = 'gisexception';
      } else if (
        extData.DGIMN === 'dtgrjx103' ||
        extData.DGIMN === 'lywjfd03'
      ) {
        _name = 'gisoperation';
      } else {
        _name = 'gisnormal';
      }
    } else if (this.state.special === 'sewage') {
      if (
        extData.DGIMN === 'bjldgn01' ||
        extData.DGIMN === 'dtgjhh11102' ||
        extData.DGIMN === 'dtgrjx110'
      ) {
        _name = 'gisover';
      } else if (
        extData.DGIMN === 'dtgrjx103' ||
        extData.DGIMN === 'lywjfd03'
      ) {
        _name = 'gisexception';
      } else {
        _name = 'gisnormal';
      }
    } else {
      if (
        extData.DGIMN === 'bjldgn01' ||
        extData.DGIMN === 'dtgjhh11102' ||
        extData.DGIMN === 'dtgrjx110' ||
        extData.DGIMN === 'dtgrjx103' ||
        extData.DGIMN === 'lywjfd03'
      ) {
        _name = 'gisquality';
      } else {
        _name = 'gisnormal';
      }
    }
    return _name;
  }
  /**
 * icon={()=>{
          return <Image source={require('../../images/gisnormal.png')} style={[{height:16,width:16}]} />
        }}
 */
  _showEnterpriseFun = () => {
    let markers = [];
    this.state.enterprise.map((item, key) => {
      let count = 0,
        imageName,
        arrayCount;
      if (this.state.special === 'monitor') {
        arrayCount = [
          {
            defaultValue: '正常',
            count: 0,
            bgcolor: '#79C403',
          },
          {
            defaultValue: '超标',
            count: 0,
            bgcolor: '#F40000',
          },
          {
            defaultValue: '离线',
            count: 0,
            bgcolor: '#A8A6A5',
          },
          {
            defaultValue: '异常',
            count: 0,
            bgcolor: '#FADE00',
          },
        ];
      } else if (this.state.special === 'operation') {
        arrayCount = [
          {
            defaultValue: '正常',
            count: 0,
            bgcolor: '#79C403',
          },
          {
            defaultValue: '运维',
            count: 0,
            bgcolor: '#F29C26',
          },
          {
            defaultValue: '逾期',
            count: 0,
            bgcolor: '#970258',
          },
          {
            defaultValue: '故障',
            count: 0,
            bgcolor: '#F8AD00',
          },
          {
            defaultValue: '停产',
            count: 0,
            bgcolor: '#FADE00',
          },
        ];
      } else if (this.state.special === 'sewage') {
        arrayCount = [
          {
            defaultValue: '一级',
            count: 0,
            bgcolor: '#79C403',
          },
          {
            defaultValue: '二级',
            count: 0,
            bgcolor: '#F40000',
          },
          {
            defaultValue: '三级',
            count: 0,
            bgcolor: '#A8A6A5',
          },
          {
            defaultValue: '四级',
            count: 0,
            bgcolor: '#FADE00',
          },
        ];
      } else {
        arrayCount = [
          {
            defaultValue: '正常',
            count: 0,
            bgcolor: '#79C403',
          },
          {
            defaultValue: '质控',
            count: 0,
            bgcolor: '#3F8AA0',
          },
        ];
      }
      this.state.points.map(point => {
        if (point.EntCode === item.EntCode) {
          count++;
          imageName = this._getIconName(point);
          if (this.state.special === 'monitor') {
            if (imageName === 'gisnormal') {
              //正常
              arrayCount[0].count = arrayCount[0].count + 1;
            } else if (imageName === 'gisover') {
              //超标
              arrayCount[1].count = arrayCount[1].count + 1;
            } else if (imageName === 'gisunline') {
              //离线
              arrayCount[2].count = arrayCount[2].count + 1;
            } else if (imageName === 'gisexception') {
              //异常
              arrayCount[3].count = arrayCount[3].count + 1;
            }
          } else if (this.state.special === 'operation') {
            if (imageName === 'gisnormal') {
              //正常
              arrayCount[0].count = arrayCount[0].count + 1;
            } else if (imageName === 'gisexception') {
              //停产
              arrayCount[4].count = arrayCount[4].count + 1;
            } else if (imageName === 'gisoperation') {
              //运维
              arrayCount[1].count = arrayCount[1].count + 1;
            } else if (imageName === 'gisoperation') {
              //故障
              arrayCount[3].count = arrayCount[3].count + 1;
            } else if (imageName === 'gisoverdue') {
              //逾期
              arrayCount[2].count = arrayCount[2].count + 1;
            }
          } else if (this.state.special === 'sewage') {
            if (imageName === 'gisnormal') {
              //正常
              arrayCount[0].count = arrayCount[0].count + 1;
            } else if (imageName === 'gisover') {
              //二级
              arrayCount[1].count = arrayCount[1].count + 1;
            } else if (imageName === 'gisunline') {
              //三级
              arrayCount[2].count = arrayCount[2].count + 1;
            } else if (imageName === 'gisexception') {
              //四级
              arrayCount[3].count = arrayCount[3].count + 1;
            }
          } else {
            if (imageName === 'gisnormal') {
              //正常
              arrayCount[0].count = arrayCount[0].count + 1;
            } else if (imageName === 'gisquality') {
              //质控
              arrayCount[1].count = arrayCount[1].count + 1;
            }
          }
        }
      });

      markers.push(
        <Marker
          color="red"
          key={key}
          infoWindowDisabled={true}
          coordinate={{
            latitude: parseFloat(item.Latitude, 10),
            longitude: parseFloat(item.Longitude, 10),
          }}
          onPress={() => {
            if (Platform.OS === 'android') {
              this.setState({
                zoomLevel: 17,
              });
              this.setState({
                mapCoordinateLatitude: parseFloat(item.Latitude, 10),
                mapCoordinateLongitude: parseFloat(item.Longitude, 10),
              });
            } else {
              this.setState({
                mapCoordinateLatitude: parseFloat(item.Latitude, 10),
                mapCoordinateLongitude: parseFloat(item.Longitude, 10),
              });
              this.setState({
                zoomLevel: 15,
              });
            }
          }}
          icon={() => {
            if (arrayCount[0].count !== count) {
              return (
                <TouchableOpacity
                  activeOpacity={0.9}
                  style={[
                    {
                      borderRadius: 4,
                      backgroundColor: 'white',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minHeight: 24,
                      minWidth: 40,
                      borderColor: 'white',
                      borderWidth:2,
                      borderColor:'red',
                    },
                  ]}
                >
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        borderBottomColor: 'grey',
                        borderBottomWidth: 0.5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 4,
                      }}
                    >
                      <Text
                        style={[
                          { marginLeft: 8, marginRight: 2, marginBottom: 2 },
                        ]}
                      >
                        <Iconi
                          name={'ios-notifications'}
                          size={20}
                          style={{ color: 'red' }}
                        />
                      </Text>
                      <Text>
                        {item.EntName.length > 4
                          ? item.EntName.slice(0, 4)
                          : item.EntName}
                      </Text>
                      <Text style={[{ marginRight: 8 }]}>（{count}）</Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginRight: 8,
                        marginLeft: 8,
                        marginBottom: 4,
                      }}
                    >
                      {arrayCount.map((item, key) => {
                        return (
                          <Text
                            key={this.state.special + key}
                            style={[
                              styles.countBackground,
                              { backgroundColor: item.bgcolor },
                            ]}
                          >
                            {item.count}
                          </Text>
                        );
                      })}
                    </View>
                  </View>
                </TouchableOpacity>
              );
            } else {
              return (
                <TouchableOpacity
                  activeOpacity={0.9}
                  style={[
                    {
                      borderRadius: 4,
                      backgroundColor: 'white',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minHeight: 24,
                      minWidth: 40,
                      borderColor: 'white',
                    },
                  ]}
                >
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        borderBottomColor: 'grey',
                        borderBottomWidth: 0.5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 4,
                      }}
                    >
                      <Text
                        style={[
                          { marginLeft: 8, marginRight: 2, marginBottom: 2 },
                        ]}
                      >
                        <Iconi
                          name={'ios-home-outline'}
                          size={20}
                          style={{ color: 'gray' }}
                        />
                      </Text>
                      <Text>
                        {item.EntName.length > 4
                          ? item.EntName.slice(0, 4)
                          : item.EntName}
                      </Text>
                      <Text style={[{ marginRight: 8 }]}>（{count}）</Text>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginRight: 8,
                        marginLeft: 8,
                        marginBottom: 4,
                      }}
                    >
                      {arrayCount.map((item, key) => {
                        return (
                          <Text
                            key={this.state.special + key}
                            style={[
                              styles.countBackground,
                              { backgroundColor: item.bgcolor },
                            ]}
                          >
                            {item.count}
                          </Text>
                        );
                      })}
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }
          }}
        />
      );
    });
    return markers;
  }

  SegmentedChange = e => {
    switch (e.nativeEvent.selectedSegmentIndex) {
      case 0:
        this.setState({ special: 'monitor' });
        break;
      case 1:
        this.setState({ special: 'operation' });
        break;
      case 2:
        this.setState({ special: 'sewage' });
        break;
      case 3:
        this.setState({ special: 'quality' });
        break;
    }
  }

  SegmentedValueChange = value => {}

  _renderMapLegend = () => {
    let maplegends = markersInfo.maplegend[0]; //monitor,operation,quality,sewage
    let currentMaplegend;
    if (this.state.special === 'monitor') {
      currentMaplegend = maplegends.monitor;
    } else if (this.state.special === 'operation') {
      currentMaplegend = maplegends.operation;
    } else if (this.state.special === 'quality') {
      currentMaplegend = maplegends.quality;
    } else if (this.state.special === 'sewage') {
      currentMaplegend = maplegends.sewage;
    } else {
      currentMaplegend = maplegends.monitor;
    }
    return (
      <View
        style={[
          {
            flexDirection: 'row',
            backgroundColor: 'white',
            position: 'absolute',
            bottom: 0,
            left: 0,
            borderBottomLeftRadius: 4,
            borderBottomRightRadius: 4,
            borderTopLeftRadius: 4,
            borderTopRightRadius: 4,
            borderWidth: 1,
            borderColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}
      >
        {currentMaplegend.map((item, key) => {
          if (key === 0) {
            return (
              <View
                key={key}
                style={[
                  styles.tabSize,
                  {
                    borderBottomLeftRadius: 2,
                    borderTopLeftRadius: 2,
                    backgroundColor: item.bgcolor,
                  },
                ]}
              >
                <Text>
                  <Iconi
                    name={'ios-checkmark-outline'}
                    size={
                      item.defaultValue === this.state.selectMapLegend ? 20 : 0
                    }
                    style={{ color: 'white' }}
                  />
                </Text>
                <Text
                  onPress={() => {
                    loading = false;
                    this._selectMapLegend(item);
                  }}
                  style={[styles.textStyle]}
                >
                  {item.defaultValue}
                </Text>
              </View>
            );
          } else if (key == maplegends.monitor.length - 1) {
            return (
              <View
                key={key}
                style={[
                  styles.tabSize,
                  {
                    borderTopRightRadius: 2,
                    borderLeftWidth: 1,
                    borderLeftColor: 'white',
                    borderBottomRightRadius: 2,
                    backgroundColor: item.bgcolor,
                  },
                ]}
              >
                <Text>
                  <Iconi
                    name={'ios-checkmark-outline'}
                    size={
                      item.defaultValue === this.state.selectMapLegend ? 20 : 0
                    }
                    style={{ color: 'white' }}
                  />
                </Text>
                <Text
                  onPress={() => {
                    this._selectMapLegend(item);
                  }}
                  style={[styles.textStyle]}
                >
                  {item.defaultValue}
                </Text>
              </View>
            );
          } else {
            return (
              <View
                key={key}
                style={[
                  styles.tabSize,
                  {
                    borderLeftWidth: 1,
                    borderLeftColor: 'white',
                    backgroundColor: item.bgcolor,
                  },
                ]}
              >
                <Text>
                  <Iconi
                    name={'ios-checkmark-outline'}
                    size={
                      item.defaultValue === this.state.selectMapLegend ? 20 : 0
                    }
                    style={{ color: 'white' }}
                  />
                </Text>
                <Text
                  onPress={() => {
                    this._selectMapLegend(item);
                  }}
                  style={[styles.textStyle]}
                >
                  {item.defaultValue}
                </Text>
              </View>
            );
          }
        })}
      </View>
    );
  }

  _selectMapLegend = item => {
    let time = new Date().getTime();
    if (time - lastClickTime > 1000) {
      if (item.defaultValue !== this.state.selectMapLegend) {
        this.setState({
          selectMapLegend: item.defaultValue,
        });
      } else {
        this.setState({
          selectMapLegend: '',
        });
      }
      if (Platform.OS === 'android') {
        this.setState({
          zoomLevel: 4,
        });
        this.setState({
          mapCoordinateLatitude: 43.540557,
          mapCoordinateLongitude: 113.293493,
        });
      } else {
        this.setState({
          mapCoordinateLatitude: 43.540557,
          mapCoordinateLongitude: 113.293493,
        });
        this.setState({
          zoomLevel: 4,
        });
      }
    }
    lastClickTime = time;
  }

  componentWillMount() {
    // loading = false;
  }
  coomponentDidMount() {
    // loading = true;
  }

  render() {
    return (
      <View style={[styles.container]}>
        <StatusBar barStyle="dark-content" style={[{ height: 24 }]} />
        {loading ? <SuspensionLoadingComponent /> : null}
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
          showsLabels={false}
        >
          {this.state.enterprise !== null &&
          this.state.enterprise.length > 0 &&
          (!this.state.showEnterprise || this.state.selectMapLegend !== '')
            ? this._drawPolygon()
            : null}
          {this.state.points !== null &&
          this.state.points.length > 0 &&
          (!this.state.showEnterprise || this.state.selectMapLegend !== '')
            ? this._drawPoint()
            : null}
          {this.state.enterprise !== null &&
          this.state.enterprise.length > 0 &&
          (this.state.showEnterprise && this.state.selectMapLegend === '')
            ? this._showEnterpriseFun()
            : null}
        </MapView>
        {/*<View style={[{flexDirection:'row',backgroundColor:'white',
          position:'absolute',bottom:32,left:24,
          borderBottomLeftRadius:4,
          borderBottomRightRadius:4,
          borderTopLeftRadius:4,
          borderTopRightRadius:4,
          borderWidth:1,
          borderColor:'white',
          justifyContent:'center',
          alignItems:'center'
          }]}>
          <Text style={[styles.tabSize,{borderBottomLeftRadius:2,
            borderTopLeftRadius:2,backgroundColor:'#6fc425'}]}>正常</Text>
          <Text style={[styles.tabSize,{borderLeftWidth:1
            ,borderLeftColor:'white',backgroundColor:'#ff0000'}]}>超标</Text>
          <Text style={[styles.tabSize,{borderLeftWidth:1,borderLeftColor:'white'
          ,borderRightColor:'white',borderRightWidth:1,backgroundColor:'#a8a6a5'}]}>离线</Text>
          <Text style={[styles.tabSize,{borderTopRightRadius:2,
            borderBottomRightRadius:2,backgroundColor:'#fedf00'}]}>异常</Text>
        </View>*/}
        {this._renderMapLegend()}
        <SegmentedControl
          style={{
            position: 'absolute',
            top: 16,
            left: 16,
            backgroundColor: 'white',
            height: 32,
            width: 200,
          }}
          values={['监控', '运维', '排污', '质控']}
          onChange={this.SegmentedChange}
          onValueChange={this.SegmentedValueChange}
        />
        <Button
          style={[
            {
              height: 32,
              width: 50,
              position: 'absolute',
              top: 16,
              right: 16,
              backgroundColor: 'white',
            },
          ]}
          text="全国"
          textStyle={{ fontSize: 12 }}
          onPress={() => {
            loading = false;
            let time = new Date().getTime();
            if (time - lastClickTime > 1000) {
              if (Platform.OS === 'android') {
                this.setState({
                  zoomLevel: this.state.zoomLevel === 4 ? 4.1 : 4,
                });
                this.setState({
                  mapCoordinateLatitude: 43.540557,
                  mapCoordinateLongitude: 113.293493,
                });
              } else {
                this.setState({
                  mapCoordinateLatitude: 43.540557,
                  mapCoordinateLongitude: 113.293493,
                });
                this.setState({
                  zoomLevel: 4,
                });
              }
            } else {
              // console.log('不能连续切换');
            }
            lastClickTime = time;
          }}
        />
      </View>
    );
  }
}

/*

{
            this.renderMarkers()
          }

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

*/

// define your styles
const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    flex: 1,
    // backgroundColor: '#2c3e50',
  },
  countBackground: {
    height: 16,
    width: 16,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    margin: 2,
    textAlign: 'center',
    color: 'white',
    fontSize: 12,
  },
  tabSize: {
    height: 24,
    minWidth: 48,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    textAlign: 'center',
    lineHeight: 24,
    color: 'white',
  },
  pointStyle: {
    height: 16,
    width: 16,
    borderRadius: 8,
  },
});

// make this component available to the app
// pod install --verbose --no-repo-update 显示pod install进度
export default Map;
