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
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Iconi from 'react-native-vector-icons/dist/Ionicons';
import ImagePicker from 'react-native-image-picker';
import JPushModule from 'jpush-react-native';

import wholeSituationStyle from '../../config/wholeSituationStyle';
import { Button } from '../../components';
import { NavigationActions } from '../../utils';
import TopSelector from '../../components/common/TopSelector';
import PollutantBar from '../../components/common/PollutantBar';
import globalcolor from '../../config/globalcolor';
import moment from 'moment';
import LabelHeadView from '../../components/common/LabelHeadView';
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
      <Icon
        name={'list-ul'}
        size={20}
        style={{ color: focused ? tintColor : 'gray' }}
      />
    ),
  }

  constructor(props) {
    super(props);

    this.state = {
      imageSrc: '',
      cityNameLst: [],
    };

    getAllData('hour').then(value => {
      this.setState({
        cityNameLst: value,
      });
    });
  }
  _contentViewScroll = e => {
    var offsetY = e.nativeEvent.contentOffset.y; //滑动距离
    var contentSizeHeight = e.nativeEvent.contentSize.height; //scrollView contentSize高度
    var oriageScrollHeight = e.nativeEvent.layoutMeasurement.height; //scrollView高度
    if (offsetY + oriageScrollHeight >= contentSizeHeight) {
      console.log('上传滑动到底部事件');
    }
  }

  gotoDetail = () => {
    // this.props.dispatch(NavigationActions.navigate({ routeName: 'Detail' }));
    this.props.dispatch(
      NavigationActions.navigate({ routeName: 'SingleStationDetail' })
    );
    // this.props.dispatch(NavigationActions.reset({
    //   index: 0,
    //   actions: [NavigationActions.navigate({ routeName: 'SingleStationDetail' })],
    // }));
  }

  //选择图片
  selectPhotoTapped() {
    const options = {
      title: '选择图片',
      cancelButtonTitle: '取消',
      takePhotoButtonTitle: '拍照',
      chooseFromLibraryButtonTitle: '选择照片',
      customButtons: [
        // {name: 'fb', title: 'Choose Photo from Facebook'},
      ],
      cameraType: 'back',
      mediaType: 'photo',
      videoQuality: 'high',
      durationLimit: 10,
      maxWidth: 300,
      maxHeight: 300,
      quality: 0.8,
      angle: 0,
      allowsEditing: false,
      noData: false,
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = { uri: response.uri };

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source,
          imageSrc: response.uri,
        });
      }
    });
  }
  _onRefresh = () => {
    getAllData('hour').then(value => {
      this.setState({
        cityNameLst: value,
      });
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <TopSelector
          ref={ref => (this._topSelector = ref)}
          showDatePicker={() => {}}
        />

        <View style={[{ width: SCREEN_WIDTH, flex: 1 }]}>
          <View
            style={[{ width: SCREEN_WIDTH, height: 33, flexDirection: 'row' }]}
          >
            <View style={[styles.oneLabel, styles.myBorderBottom]}>
              <View
                style={[{ justifyContent: 'center', alignItems: 'center' }]}
              >
                <Text style={[{ fontSize: little_font_size }]}>监测点</Text>
              </View>
              <TouchableOpacity
                style={{
                  marginLeft: 4,
                  width: 32,
                  height: 24,
                  justifyContent: 'center',
                }}
                onPress={() => {
                  this.props.dispatch(
                    createAction('datapreview/setState')({
                      groupSelectorVisible: true,
                    })
                  );
                }}
              >
                <Iconi
                  name={'md-arrow-dropdown'}
                  size={24}
                  style={[{ color: globalcolor.titleBlue }]}
                />
              </TouchableOpacity>
            </View>
            <ScrollView
              ref={ref => (this.titleScrollView = ref)}
              style={[{ width: SCREEN_WIDTH * 2 / 3, height: 33 }]}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              scrollEnabled={false}
            >
              <LabelHeadView />
            </ScrollView>
          </View>

          <ScrollView
            style={[{ height: 80, width: SCREEN_WIDTH }]}
            refreshControl={
              <RefreshControl
                refreshing={false}
                onRefresh={this._onRefresh}
                tintColor="#716b6a"
                title="Loading..."
                titleColor="#716b6a"
                colors={['#ff0000', '#00ff00', '#0000ff']}
                progressBackgroundColor="#ffff00"
              />
            }
            onMomentumScrollEnd={this._contentViewScroll}
            showsVerticalScrollIndicator={false}
          >
            <View style={[styles.listContent, {}]}>
              <View style={[{ height: 33 + 20, width: SCREEN_WIDTH / 3 }]}>
                {this.state.cityNameLst.map(item => {
                  return (
                    <TouchableOpacity
                      key={item.key}
                      onPress={() => {
                        console.log('onPress');
                      }}
                      style={[
                        {
                          width: SCREEN_WIDTH / 3,
                          height: 60,
                          justifyContent: 'center',
                          alignItems: 'flex-start',
                          paddingLeft: 5,
                          backgroundColor: 'white',
                        },
                        styles.myBorderBottom,
                      ]}
                    >
                      <View
                        style={{ flexDirection: 'row', alignItems: 'center' }}
                      >
                        <View
                          style={[
                            {
                              width: little_font_size2,
                              height: little_font_size2,
                              borderRadius: 5,
                              backgroundColor: '#5BC142',
                              marginRight: 5,
                            },
                          ]}
                        />
                        <Text
                          style={[
                            {
                              fontSize: little_font_size,
                              width: SCREEN_WIDTH / 3 - little_font_size2,
                            },
                          ]}
                        >
                          {item.entName}
                        </Text>
                      </View>

                      {item.entName === '大唐集团' ? (
                        <View
                          style={{
                            height: 15,
                            backgroundColor: '#ffe4e1',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            marginTop: 1,
                            borderWidth: 1,
                            borderColor: '#ff4500',
                            borderRadius: 3,
                          }}
                        >
                          <Text
                            style={[
                              {
                                fontSize: 10,
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#ff4500',
                              },
                            ]}
                          >
                            维护
                          </Text>
                        </View>
                      ) : (
                        <View />
                      )}
                    </TouchableOpacity>
                  );
                })}
              </View>

              <ScrollView
                onScroll={event => {
                  this.titleScrollView.scrollTo({
                    x: event.nativeEvent.contentOffset.x,
                    animated: false,
                  });
                }}
                scrollEventThrottle={10}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                horizontal={true}
                style={[styles.HorizontalList, { height: 1000 }]}
              >
                <View
                  style={[
                    {
                      height: this.state.cityNameLst
                        ? 33 + this.state.cityNameLst.length * 40
                        : 33,
                      width: this.state.cityNameLst
                        ? SCREEN_WIDTH / 3 * this.state.cityNameLst.length
                        : 0,
                      backgroundColor: 'white',
                    },
                  ]}
                >
                  {this.state.cityNameLst.map(item => {
                    return (
                      <TouchableOpacity
                        key={item.key}
                        style={[
                          {
                            height: 60,
                            width:
                              SCREEN_WIDTH / 3 * this.state.cityNameLst.length,
                            flexDirection: 'row',
                          },
                          styles.myBorderBottom,
                        ]}
                      >
                        <Text
                          key={item.key}
                          style={[
                            {
                              width: SCREEN_WIDTH / 3,
                              height: 39,
                              textAlign: 'center',
                              lineHeight: 40,
                              color:
                                item.Colors && item.Colors[_key]
                                  ? item.Colors[_key]
                                  : 'black',
                            },
                          ]}
                        >
                          {item.monitorTime}
                        </Text>
                        {item.MonitoringDatasi.PollutantDatas.map(zcc => {
                          return (
                            <Text
                              key={zcc.PollutantCode}
                              style={[
                                {
                                  width: SCREEN_WIDTH / 3,
                                  height: 39,
                                  textAlign: 'center',
                                  lineHeight: 40,
                                  color:
                                    item.Colors && item.Colors[_key]
                                      ? item.Colors[_key]
                                      : 'black',
                                },
                              ]}
                            >
                              {zcc.Concentration}
                            </Text>
                          );
                        })}
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </ScrollView>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}
const getAllData = async dataType => {
  let datalist = [];
  const getdata = await getAllConcentration({ dataType: dataType });
  getdata.map(item => {
    let data = {
      key: item.DGIMN,
      entpointName: item.EntName + '-' + item.PointName,
      monitorTime:
        item.MonitoringDatas.length === 0
          ? moment().format('YYYY-MM-DD HH:mm:ss')
          : item.MonitoringDatas[0].MonitoringTime,
      entName: item.EntName,
      pointName: item.PointName,
      industry: item.IndustryTypeCode,
      dgimn: item.DGIMN,
      control: item.AttentionCode,
      dataType: dataType,
      MonitoringDatasi: item.MonitoringDatas[0],
    };
    if (item.MonitoringDatas.length > 0) {
      item.MonitoringDatas[0].PollutantDatas.map(wry => {
        data[wry.PollutantCode] = wry.Concentration + ',' + wry.PollutantCode;
        data[wry.PollutantCode + '-' + 'PollutantName'] = wry.PollutantName;
        data[wry.PollutantCode + '-' + 'PollutantCode'] = wry.PollutantCode;
        data[wry.PollutantCode + '-' + 'IsExceed'] = wry.IsExceed; // 是否超标
        data[wry.PollutantCode + '-' + 'ExceedValue'] = wry.ExceedValue; // 超标倍数
        data[wry.PollutantCode + '-' + 'IsException'] = wry.IsException; // 是否异常
        data[wry.PollutantCode + '-' + 'ExceptionText'] = wry.ExceptionText; // 异常类型
        data[wry.PollutantCode + '-' + 'Standard'] = wry.Standard; // 标准值
      });
    }
    datalist.push(data);
  });
  console.log(datalist);
  return datalist;
};
// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
  },
  listContent: {
    width: SCREEN_WIDTH,
    flexDirection: 'row',
  },
  oneLabel: {
    width: SCREEN_WIDTH / 3,
    height: 32,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  HorizontalList: {
    width: SCREEN_WIDTH * 2 / 3,
  },
  myBorderBottom: {
    borderBottomColor: globalcolor.borderLightGreyColor,
    borderBottomWidth: 1,
    borderLeftColor: globalcolor.borderLightGreyColor,
    borderLeftWidth: 1,
  },
});

// make this component available to the app
export default DataList;
