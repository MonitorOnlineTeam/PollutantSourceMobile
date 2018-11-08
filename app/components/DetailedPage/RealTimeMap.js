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
import { SegmentedControl, Modal, WhiteSpace, WingBlank } from 'antd-mobile-rn';
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
import { getToken } from '../../dvapack/storage';
import Point_AllJson from '../../mockdata/Base/Point_All.json';
const Allpoints = [
  {
    PointCode: '09b3cff7-e6bb-44c2-a6df-8417ac304fef',
    PointName: '脱硫入口1',
    DGIMN: 'lywjfd03',
    Longitude: '111.176239',
    Latitude: '34.768430',
    RegionCode: '410323000',
    PollutantType: '2',
    DevicePassword: '123456',
    OutputType: '1',
  },
  {
    PointCode: '1ec14916-bfe8-4ae8-8b17-61600523a5d4',
    PointName: '脱硫入口2',
    DGIMN: 'dtrlsmx001005',
    Longitude: '111.176752',
    Latitude: '34.768181',
    RegionCode: '411201000',
    PollutantType: '2',
    DevicePassword: '123456',
    OutputType: '1',
  },
  {
    PointCode: '20c94e1b-dcf3-4188-90c8-56b48e6d6733',
    PointName: '脱硫入口3',
    DGIMN: 'dtrlsmx001006',
    Longitude: '111.176732',
    Latitude: '34.768507',
    RegionCode: '411201000',
    PollutantType: '2',
    DevicePassword: '123456',
    OutputType: '1',
  },
  {
    PointCode: '3c68c84b-9cc6-495c-a481-7f3a624bdfd1',
    PointName: '脱硫入口4',
    DGIMN: 'dtrlsmx001008',
    Longitude: '111.176288',
    Latitude: '34.768613',
    RegionCode: '411201000',
    PollutantType: '2',
    DevicePassword: '123456',
    OutputType: '1',
  },
  {
    PointCode: '3e766935-822c-417d-9f49-53cc328276a0',
    PointName: '脱硫入口5',
    DGIMN: 'dtrlsmx001009',
    Longitude: '111.176208',
    Latitude: '34.768710',
    RegionCode: '411201000',
    PollutantType: '2',
    DevicePassword: '123456',
    OutputType: '0',
  },
  {
    PointCode: '4f071a2d-fbc2-4967-a4f7-bb44a550dc0c',
    PointName: '脱硫入口6',
    DGIMN: 'dtrlsmx0010010',
    Longitude: '111.176406',
    Latitude: '34.768529',
    RegionCode: '411201000',
    PollutantType: '2',
    DevicePassword: '123456',
    OutputType: '0',
  },
  {
    PointCode: 'ec53e13f-3717-497e-9bbd-8105be7918b3',
    PointName: '脱硫入口7',
    DGIMN: 'dtrlsmx001007',
    Longitude: '111.175897',
    Latitude: '34.768587',
    RegionCode: '411201000',
    PollutantType: '2',
    DevicePassword: '123456',
    OutputType: '1',
  },
  {
    PointCode: '9bb8fa7a-8398-4f0e-b40f-ed2d3bed0f77',
    PointName: '供热烟囱小号1',
    DGIMN: 'dtrlsmx001004',
    Longitude: '111.176439',
    Latitude: '34.768430',
    RegionCode: '411201000',
    PollutantType: '2',
    DevicePassword: '123456',
    OutputType: '0',
  },
  {
    PointCode: 'b678b58a-e490-4eab-add8-1409e489c180',
    PointName: '供热烟囱小号2',
    DGIMN: 'dtrlsmx001003',
    Longitude: '111.176616',
    Latitude: '34.768302',
    RegionCode: '411201000',
    PollutantType: '2',
    DevicePassword: '123456',
    OutputType: '0',
  },
  {
    PointCode: '019a1c86-5f38-4846-8042-2a4809f64fe8',
    PointName: '供热烟囱小号3',
    DGIMN: 'bjldgn01',
    Longitude: '111.176439',
    Latitude: '34.768230',
    RegionCode: '110117000',
    PollutantType: '2',
    DevicePassword: '123456',
    OutputType: '0',
  },
  {
    PointCode: 'db4743df-b908-458a-b603-0eb4c6a7fd07',
    PointName: '供热烟囱小号4',
    DGIMN: 'dtrlsmx001002',
    Longitude: '111.176895',
    Latitude: '34.768368',
    RegionCode: '411201000',
    PollutantType: '2',
    DevicePassword: '123456',
    OutputType: '0',
  },
];
const AllpointsContent = [
  {
    PointName: '脱硫入口1',
    DGIMN: 'bjldgn01',
    TransmissionEfficiency: '90%',
    DateTimes: '2018-10-29 08:00:00',
    eryanghualiu: '37/20',
    danyanghuawu: '87/20',
    yanchen: '56/23',
  },
  {
    PointName: '脱硫入口2',
    DGIMN: 'bjldgn01',
    TransmissionEfficiency: '90%',
    DateTimes: '2018-10-29 08:00:00',
    eryanghualiu: '37/20',
    danyanghuawu: '87/20',
    yanchen: '56/23',
  },
  {
    PointName: '脱硫入口3',
    DGIMN: 'bjldgn01',
    TransmissionEfficiency: '90%',
    DateTimes: '2018-10-29 08:00:00',
    eryanghualiu: '37/20',
    danyanghuawu: '87/20',
    yanchen: '56/23',
  },
  {
    PointName: '脱硫入口4',
    DGIMN: 'bjldgn01',
    TransmissionEfficiency: '90%',
    DateTimes: '2018-10-29 08:00:00',
    eryanghualiu: '37/20',
    danyanghuawu: '87/20',
    yanchen: '56/23',
  },
  {
    PointName: '脱硫入口5',
    DGIMN: 'bjldgn01',
    TransmissionEfficiency: '90%',
    DateTimes: '2018-10-29 08:00:00',
    eryanghualiu: '37/20',
    danyanghuawu: '87/20',
    yanchen: '56/23',
  },
  {
    PointName: '脱硫入口6',
    DGIMN: 'bjldgn01',
    TransmissionEfficiency: '90%',
    DateTimes: '2018-10-29 08:00:00',
    eryanghualiu: '37/20',
    danyanghuawu: '87/20',
    yanchen: '56/23',
  },
  {
    PointName: '脱硫入口7',
    DGIMN: 'bjldgn01',
    TransmissionEfficiency: '90%',
    DateTimes: '2018-10-29 08:00:00',
    eryanghualiu: '37/20',
    danyanghuawu: '87/20',
    yanchen: '56/23',
  },
  {
    PointName: '供热烟囱小号1',
    DGIMN: 'bjldgn01',
    TransmissionEfficiency: '90%',
    DateTimes: '2018-10-29 08:00:00',
    eryanghualiu: '37/20',
    danyanghuawu: '87/20',
    yanchen: '56/23',
  },
  {
    PointName: '供热烟囱小号2',
    DGIMN: 'bjldgn01',
    TransmissionEfficiency: '90%',
    DateTimes: '2018-10-29 08:00:00',
    eryanghualiu: '37/20',
    danyanghuawu: '87/20',
    yanchen: '56/23',
  },
  {
    PointName: '供热烟囱小号3',
    DGIMN: 'bjldgn01',
    TransmissionEfficiency: '90%',
    DateTimes: '2018-10-29 08:00:00',
    eryanghualiu: '37/20',
    danyanghuawu: '87/20',
    yanchen: '56/23',
  },
  {
    PointName: '供热烟囱小号4',
    DGIMN: 'bjldgn01',
    TransmissionEfficiency: '90%',
    DateTimes: '2018-10-29 08:00:00',
    eryanghualiu: '37/20',
    danyanghuawu: '87/20',
    yanchen: '56/23',
  },
];
// create a component
let loading = false,
  lastClickTime = 0;
@connect()
class RealTimeMap extends Component {
  static navigationOptions = {
    header: null,
    title: '地图一览',
    tabBarLabel: '地图一览',
    tabBarIcon: ({ focused, tintColor }) => (
      <Icon
        name={'RealTimeMap'}
        size={20}
        style={{ color: focused ? tintColor : 'gray' }}
      />
    ),
  }

  constructor(props) {
    super(props);

    let points, enterprise, _this;
    _this = this;
    let user = getToken();
    getEnterprise().then(function(data) {
      if (user.User_Account === 'lisonggui') {
        _this.setState({
          enterprise: data,
          zoomLevel: 18,
          mapCoordinateLatitude: parseFloat(data[0].Latitude),
          mapCoordinateLongitude: parseFloat(data[0].Longitude),
        });
      } else {
        _this.setState({
          enterprise: data,
        });
      }
    });
    this.state = {
      points: [], //points,
      enterprise: [],
      showEnterprise: true,
      zoomLevel: 18.5,
      mapCoordinateLatitude: 34.768587,
      mapCoordinateLongitude: 111.176407,
      special: 'monitor',
      selectMapLegend: '',
      visible2: false,
      PointContentList: [],
      PointName: '',
      DGIMN: '',
      TransmissionEfficiency: '',
      DateTimes: '',
      eryanghualiu: '',
      danyanghuawu: '',
      yanchen: '',
    };
  }

  onClose2 = () => {
    this.setState({
      visible2: false,
    });
  }
  PointContent = items => {
    debugger;

    let PointContents = [];
    AllpointsContent.map((item, key) => {
      if (item.PointName === items.PointName) {
        PointContents.push({
          PointName: item.PointName,
          DGIMN: item.DGIMN,
          TransmissionEfficiency: item.TransmissionEfficiency,
          DateTimes: item.DateTimes,
          eryanghualiu: item.eryanghualiu,
          danyanghuawu: item.danyanghuawu,
          yanchen: item.yanchen,
        });
      }
    });
    this.setState({ PointContentList: PointContents, visible2: true });
  }
  _drawPoint = () => {
    let markers = [];
    markers.push(
      <MapView.Polygon
        key={1}
        strokeWidth={2}
        strokeColor="#70A9E9"
        fillColor="#ACCAF7"
        coordinates={[
          {
            latitude: 34.769027,
            longitude: 111.175897,
          },
          {
            latitude: 34.768528,
            longitude: 111.177165,
          },
          {
            latitude: 34.768042,
            longitude: 111.176836,
          },
          {
            latitude: 34.768557,
            longitude: 111.175587,
          },
          {
            latitude: 34.769027,
            longitude: 111.175897,
          },
        ]}
      />
    );

    Allpoints.map((item, key) => {
      let imageName = this._getIconName(item);
      console.log(imageName);
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

      ImageView = (
        <Iconi name={'ios-notifications'} size={24} style={{ color: 'red' }} />
      );
      if (this.state.selectMapLegend === '') {
        markers.push(
          <MapView.Marker
            style={{ height: 20, width: 20 }}
            infoWindowDisabled={true}
            key={key}
            image={imageName}
            coordinate={{
              latitude: parseFloat(item.Latitude, 10),
              longitude: parseFloat(item.Longitude, 10),
            }}
            onPress={() => {
              this.PointContent(item);
            }}
          />
        );
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
                gif={['gisover', 'gisfault', 'gisexception']} ///////////////////////////////////////////???????????????????????????
                coordinate={{
                  latitude: parseFloat(item.Latitude, 10),
                  longitude: parseFloat(item.Longitude, 10),
                }}
                onPress={() => {
                  this.PointContent(item);
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
                coordinate={{
                  latitude: parseFloat(item.Latitude, 10),
                  longitude: parseFloat(item.Longitude, 10),
                }}
                onPress={() => {
                  this.PointContent(item);
                }}
              />
            );
          }
        }
      }
    });
    debugger;
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
      } else if (
        extData.DGIMN === 'dtrlsmx001007' ||
        extData.DGIMN === 'lywjfd03'
      ) {
        _name = 'gisunline';
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
  _renderMapLegend = () => {
    let maplegends = markersInfo.maplegend[0];
    let currentMaplegend;
    if (this.state.special === 'monitor') {
      currentMaplegend = maplegends.states;
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
            marginRight: 6,
            position: 'absolute',
            bottom: '20%',
            right: 0,
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}
      >
        {currentMaplegend.map((item, key) => {
          return (
            <View
              key={key}
              style={{
                flexDirection: 'row',
                backgroundColor: 'white',
                marginTop: 4,
                borderRadius: 3,
              }}
            >
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: 5,
                  marginRight: 3,
                }}
              >
                <Text
                  style={{
                    width: 8,
                    height: 8,
                    lineHeight: 20,
                    backgroundColor: item.bgcolor,
                  }}
                />
              </View>
              <View style={{ marginRight: 6 }}>
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
            </View>
          );
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

  render() {
    return (
      <View style={[styles.container]}>
        {loading ? <SuspensionLoadingComponent /> : null}
        <MapView
          //中心经纬度
          coordinate={{
            latitude: this.state.mapCoordinateLatitude,
            longitude: this.state.mapCoordinateLongitude,
          }}
          //缩放级别
          zoomLevel={this.state.zoomLevel}
          style={[styles.container]}
          //地图状态变化结束事件
          //   onStatusChangeComplete={this._logStatusChangeCompleteEvent}
          tiltEnabled={false}
          rotateEnabled={false}
          showsCompass={false}
          showsScale={false}
          showsLabels={false}
        >
          {this._drawPoint()}
          <Modal
            popup
            visible={this.state.visible2}
            animationType="slide-up"
            onClose={this.onClose2}
            closable={true}
            maskClosable={true}
            style={{
              width: '95%',
              marginLeft: '2.5%',
              marginBottom: 7,
              borderRadius: 5,
            }}
          >
            <View style={{ width: '100%', height: '100%' }}>
              <View
                style={{
                  width: '90%',
                  height: 50,
                  marginLeft: '5%',
                  justifyContent: 'center',
                  borderBottomWidth: 1,
                  borderBottomColor: '#DEE7EF',
                }}
              >
                <View
                  style={{
                    width: '100%',
                    height: '100%',
                    flexDirection: 'row',
                  }}
                >
                  <View style={{ flexDirection: 'row', flex: 1 }}>
                    <View
                      style={{
                        alignContent: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Image
                        style={{
                          width: 18,
                          height: 18,
                        }}
                        source={require('../../images/points.png')}
                      />
                    </View>

                    <View
                      style={{
                        alignContent: 'center',
                        justifyContent: 'center',
                        marginLeft: 5,
                      }}
                    >
                      <Text style={{ fontSize: 16, lineHeight: 50 }}>
                        {this.state.PointContentList
                          ? this.state.PointContentList[0]
                            ? this.state.PointContentList[0].PointName
                            : ''
                          : ''}
                      </Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <View
                      style={{
                        alignContent: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Image
                        style={{
                          width: 18,
                          height: 18,
                        }}
                        source={require('../../images/chaunshu.png')}
                      />
                    </View>

                    <View
                      style={{
                        alignContent: 'center',
                        justifyContent: 'center',
                        marginLeft: 5,
                      }}
                    >
                      <Text style={{ fontSize: 13, lineHeight: 50 }}>
                        传输有效率:{' '}
                        {this.state.PointContentList
                          ? this.state.PointContentList[0]
                            ? this.state.PointContentList[0]
                                .TransmissionEfficiency
                            : ''
                          : ''}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View
                style={{
                  width: '90%',
                  height: 50,
                  marginLeft: '5%',
                  justifyContent: 'center',
                  borderBottomWidth: 1,
                  borderBottomColor: '#DEE7EF',
                }}
              >
                <View
                  style={{
                    width: '100%',
                    height: '100%',
                    flexDirection: 'row',
                  }}
                >
                  <View style={{ flexDirection: 'row', flex: 1 }}>
                    <View
                      style={{
                        alignContent: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Image
                        style={{
                          width: 18,
                          height: 18,
                        }}
                        source={require('../../images/biaozhun.png')}
                      />
                    </View>
                    <View
                      style={{
                        alignContent: 'center',
                        justifyContent: 'center',
                        marginLeft: 5,
                      }}
                    >
                      <Text style={{ fontSize: 13, lineHeight: 20 }}>
                        浓度/标准值
                      </Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <View
                      style={{
                        alignContent: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Image
                        style={{
                          width: 18,
                          height: 18,
                        }}
                        source={require('../../images/shijian.png')}
                      />
                    </View>

                    <View
                      style={{
                        alignContent: 'center',
                        justifyContent: 'center',
                        marginLeft: 5,
                      }}
                    >
                      <Text style={{ fontSize: 13, lineHeight: 20 }}>
                        时间:{' '}
                        {this.state.PointContentList
                          ? this.state.PointContentList[0]
                            ? this.state.PointContentList[0].DateTimes
                            : ''
                          : ''}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View
                style={{
                  width: '90%',
                  height: 65,
                  marginLeft: '5%',
                  justifyContent: 'center',
                  flexDirection: 'row',
                }}
              >
                <View
                  style={{
                    width: '33.3%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <View
                    style={{ alignContent: 'center', justifyContent: 'center' }}
                  >
                    <Text style={{ fontSize: 13 }}>SO2(mg/m³)</Text>
                  </View>
                  <View
                    style={{ alignContent: 'center', justifyContent: 'center' }}
                  >
                    <Text style={{ fontSize: 13, lineHeight: 30 }}>
                      {this.state.PointContentList
                        ? this.state.PointContentList[0]
                          ? this.state.PointContentList[0].eryanghualiu
                          : ''
                        : ''}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    width: '33.3%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <View
                    style={{ alignContent: 'center', justifyContent: 'center' }}
                  >
                    <Text style={{ fontSize: 13 }}>NOx(mg/m³)</Text>
                  </View>
                  <View
                    style={{ alignContent: 'center', justifyContent: 'center' }}
                  >
                    <Text style={{ fontSize: 13, lineHeight: 30 }}>
                      {this.state.PointContentList
                        ? this.state.PointContentList[0]
                          ? this.state.PointContentList[0].danyanghuawu
                          : ''
                        : ''}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    width: '33.3%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <View
                    style={{ alignContent: 'center', justifyContent: 'center' }}
                  >
                    <Text style={{ fontSize: 13 }}>烟尘(mg/m³)</Text>
                  </View>
                  <View
                    style={{ alignContent: 'center', justifyContent: 'center' }}
                  >
                    <Text style={{ fontSize: 13, lineHeight: 30 }}>
                      {this.state.PointContentList
                        ? this.state.PointContentList[0]
                          ? this.state.PointContentList[0].yanchen
                          : ''
                        : ''}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </Modal>
        </MapView>
        {this._renderMapLegend()}
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
                  mapCoordinateLatitude: 34.267,
                  mapCoordinateLongitude: 108.9,
                });
              } else {
                this.setState({
                  mapCoordinateLatitude: 34.267,
                  mapCoordinateLongitude: 108.9,
                });
                this.setState({
                  zoomLevel: 4,
                });
              }
            } else {
            }
            lastClickTime = time;
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    flex: 1,
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
    height: 20,
    minWidth: 48,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  textStyle: {
    textAlign: 'center',
    lineHeight: 20,
    fontSize: 12,
  },
  pointStyle: {
    height: 16,
    width: 16,
    borderRadius: 8,
  },
});
export default RealTimeMap;
