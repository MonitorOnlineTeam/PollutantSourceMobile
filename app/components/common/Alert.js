'use strict';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableHighlight,
  Animated,
  Easing,
  Dimensions,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions, createAction } from '../../utils';
import DefinedDatePicker from './DefinedDatePicker';
import { Button } from 'antd-mobile-rn';

import TimerMixin from 'react-timer-mixin';
import { SCREEN_WIDTH, WINDOW_HEIGHT } from '../../config/globalsize';
import { hours } from '../../config/globalconst';
import globalcolor from '../../config/globalcolor';
import { shishi, fenzhong, xiaoshi, ri } from '../../config/globalconst';

const { width, height } = Dimensions.get('window');
const navigatorH = 64; // navigator height
const [aWidth, aHeight] = [width, WINDOW_HEIGHT / 2]; //[300, 214];
const [left, top] = [0, 0];
const [middleLeft, middleTop] = [
  (width - aWidth) / 2,
  (height - aHeight) / 2 - navigatorH,
];

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: width,
    height: height,
    left: left,
    top: top,
  },
  mask: {
    justifyContent: 'center',
    backgroundColor: '#383838',
    opacity: 0.8,
    position: 'absolute',
    width: width,
    height: height,
    left: left,
    top: top,
  },
  tip: {
    width: aWidth,
    height: aHeight,
    left: middleLeft,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tipTitleView: {
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tipTitleText: {
    color: '#999999',
    fontSize: 14,
  },
  tipContentView: {
    width: aWidth,
    borderTopWidth: 0.5,
    borderColor: '#f0f0f0',
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tipText: {
    color: '#e6454a',
    fontSize: 17,
    textAlign: 'center',
  },
  button: {
    height: 45,
    backgroundColor: '#fff',
    //borderColor: '#e6454a',
    //borderWidth: 1,
    //borderRadius: 4,
    alignSelf: 'stretch',
    justifyContent: 'center',
    //marginLeft: 10,
    //marginRight: 10,
  },
  buttonText: {
    fontSize: 17,
    color: '#e6454a',
    textAlign: 'center',
  },
  gap: {
    height: 10,
    width: aWidth,
    backgroundColor: '#383838',
    opacity: 0.8,
  },
});

//console.log('======');
@connect(({ router, datapreview }) => ({
  modalVisible: router.modalVisible,
  searchType: datapreview.searchType,
  seasons: datapreview.seasons,
  value: datapreview.searchDateValue,
}))
export default class Alert extends Component {
  mixins = [TimerMixin]
  parent = {}

  constructor(props) {
    super(props);
    this.state = {
      offset: new Animated.Value(0),
      opacity: new Animated.Value(0),
      title: '',
      choose1: '',
      choose2: '',
      hide: true,
      riButtonColor: 'default',
      xiaoshiButtonColor: 'default',
    };
    console.log(this.state);
    if (this.props.mGetSearchType() == 'ri') {
      this.state = {
        offset: new Animated.Value(0),
        opacity: new Animated.Value(0),
        title: '',
        choose1: '',
        choose2: '',
        hide: true,
        riButtonColor: 'primary',
        xiaoshiButtonColor: 'default',
      };
    } else {
      this.state = {
        offset: new Animated.Value(0),
        opacity: new Animated.Value(0),
        title: '',
        choose1: '',
        choose2: '',
        hide: true,
        riButtonColor: 'default',
        xiaoshiButtonColor: 'primary',
      };
    }
    console.log(this.state);
  }

  render() {
    if (this.state.hide) {
      return <View />;
    } else {
      return (
        <View style={[styles.container]}>
          <TouchableWithoutFeedback
            onPress={() => {
              // this.props.dispatch(createAction('router/setModalVisible')({modalVisible:!this.props.modalVisible,}))
              this.props.mCancelcallback();
            }}
          >
            <Animated.View style={styles.mask} />
          </TouchableWithoutFeedback>

          <Animated.View
            style={[
              styles.tip,
              { marginTop: 15 },
              {
                transform: [
                  {
                    translateY: this.state.offset.interpolate({
                      inputRange: [0, 1],
                      outputRange: [height, height - aHeight - 34],
                    }),
                  },
                ],
              },
            ]}
          >
            {/*<View style={styles.tipTitleView}>
                <Text style={styles.tipTitleText}>{this.state.title}</Text>
                </View>
                <TouchableHighlight style={styles.tipContentView} underlayColor='#f0f0f0' onPress={this.choose.bind(this,this.state.choose1)}>
                <Text style={styles.tipText} >{this.state.choose1}</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.tipContentView} underlayColor='#f0f0f0' onPress={this.choose.bind(this,this.state.choose2)}>
                <Text style={styles.tipText} >{this.state.choose2}</Text>
                </TouchableHighlight>

                <View style={styles.gap}/>

                <TouchableHighlight style={styles.button} underlayColor='#f0f0f0' onPress={this.iknow.bind(this)}>
                <Text style={styles.buttonText}>取消</Text>
            </TouchableHighlight>*/}
            <View
              style={{
                backgroundColor: 'white',
                height: WINDOW_HEIGHT,
                width: SCREEN_WIDTH,
              }}
            >
              <View
                style={{
                  width: SCREEN_WIDTH,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  height: 64,
                  backgroundColor: globalcolor.datepickerTitleColor,
                  borderBottomColor: globalcolor.datepickerTitleBorderColor,
                  borderBottomWidth: 1,
                  borderTopColor: globalcolor.datepickerTitleBorderColor,
                  borderTopWidth: 3,
                }}
              >
                <TouchableOpacity
                  style={[
                    {
                      height: 60,
                      width: 128,
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                    },
                  ]}
                  onPress={this.iknow.bind(this)}
                >
                  <Text
                    style={{
                      color: globalcolor.datepickerGreyText,
                      marginLeft: 8,
                      fontSize: 16,
                    }}
                  >
                    取消
                  </Text>
                </TouchableOpacity>
                <Text
                  style={{
                    color: globalcolor.datepickerGreyText,
                    fontSize: 20,
                  }}
                >
                  选择时间
                </Text>
                <TouchableOpacity
                  style={[
                    {
                      height: 60,
                      width: 128,
                      justifyContent: 'center',
                      alignItems: 'flex-end',
                    },
                  ]}
                  onPress={this.choose.bind(this)}
                >
                  <Text
                    style={{
                      color: globalcolor.datepickerBlueText,
                      marginRight: 8,
                      fontSize: 16,
                    }}
                  >
                    确定
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: SCREEN_WIDTH,
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  height: 64,
                }}
              >
                <Button
                  type={this.state.riButtonColor}
                  onClick={this.riButton.bind(this)}
                >
                  日均
                </Button>
                <Button
                  type={this.state.xiaoshiButtonColor}
                  onClick={this.xiaoshiButton.bind(this)}
                  style={{ marginLeft: 8, marginRight: 8 }}
                >
                  小时
                </Button>
              </View>
              <DefinedDatePicker
                mGetSearchType={() => {
                  return this.props.mGetSearchType();
                }}
                ref="definedDatePicker"
                style={{ width: SCREEN_WIDTH, marginTop: 64 }}
              />
            </View>
          </Animated.View>
        </View>
      );
    }
  }

  componentDidMount() {
    this.show('', '', '', this);
  }

  riButton() {
    // this.props.dispatch(createAction('datapreview/setSearchType')({searchType:'ri'}));
    this.props.mSetSearchType('ri');
    console.log('riButton');
    if (this.props.seasons.length == 4) {
      this.props.seasons.splice(3, 1);
    }
    // this.refs.datePickerInstance.setPickerState('ri')
    this.setState({
      riButtonColor: 'primary',
      xiaoshiButtonColor: 'default',
    });
    console.log(this.state);
  }

  xiaoshiButton() {
    // this.props.dispatch(createAction('datapreview/setSearchType')({searchType:'xiaoshi'}));
    // this.refs.definedDatePicker.setPickerState('xiaoshi')
    this.props.mSetSearchType('xiaoshi');
    console.log(this.props.mGetSearchType());
    if (this.props.seasons.length == 3) {
      this.props.seasons.splice(3, 0, hours);
    }
    this.setState({
      riButtonColor: 'default',
      xiaoshiButtonColor: 'primary',
    });
    console.log(this.state);
  }

  //显示动画
  in() {
    Animated.parallel([
      Animated.timing(this.state.opacity, {
        easing: Easing.linear,
        duration: 500,
        toValue: 0.8,
      }),
      Animated.timing(this.state.offset, {
        easing: Easing.linear,
        duration: 500,
        toValue: 1,
      }),
    ]).start();
  }

  //隐藏动画
  out() {
    Animated.parallel([
      Animated.timing(this.state.opacity, {
        easing: Easing.linear,
        duration: 500,
        toValue: 0,
      }),
      Animated.timing(this.state.offset, {
        easing: Easing.linear,
        duration: 500,
        toValue: 0,
      }),
    ]).start();

    setTimeout(() => this.setState({ hide: true }), 500);
  }

  //取消
  iknow(event) {
    // this.props.dispatch(createAction('router/setModalVisible')({modalVisible:!this.props.modalVisible,}))
    // if(!this.state.hide){
    //   this.out();
    //   this.props.dispatch(NavigationActions.back());

    // }
    this.props.mCancelcallback();
  }

  //选择
  choose(msg) {
    //console.log(msg);
    // if(!this.state.hide){
    //   this.out();
    //   this.parent.setState({sex:msg});
    // }
    console.log(this.props.value);
    let searchDate = '2017-12-14 14:00:00';
    if (this.props.mGetSearchType() == 'ri') {
      searchDate =
        this.props.value[0] +
        '-' +
        this.props.value[1] +
        '-' +
        this.props.value[2] +
        ' ' +
        '00:00:00';
      console.log(this.props.mcallback);
      // let value = this.state.value;
      // value[3] = '0';
      // this.setState({...this.state,value})
      this.props.mcallback(ri, searchDate);
    } else {
      searchDate =
        this.props.value[0] +
        '-' +
        this.props.value[1] +
        '-' +
        this.props.value[2] +
        ' ' +
        this.props.value[3] +
        ':00:00';
      this.props.mcallback(xiaoshi, searchDate);
    }
    // this.props.dispatch(createAction('router/setModalVisible')({modalVisible:!this.props.modalVisible,}))
    this.props.mCancelcallback();
  }

  show(title: string, choose1: string, choose2: string, obj: Object) {
    this.parent = obj;
    if (this.state.hide) {
      this.setState(
        { title: title, choose1: choose1, choose2: choose2, hide: false },
        this.in
      );
    }
  }
}
