import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import { SCREEN_WIDTH } from '../../config/globalsize';
import globalcolor from '../../config/globalcolor';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { createAction, NavigationActions } from '../../utils';
import { WhiteSpace, WingBlank } from 'antd-mobile-rn';

/*
 * @Description: 我的.
 */
export default class My extends Component {
  static navigationOptions = {
    // header: null,
    title: '我',
    tabBarLabel: '我',
    tabBarIcon: ({ focused, tintColor }) => (
      // <Image
      //   style={[
      //     wholeSituationStyle.icon,
      //     { tintColor: focused ? tintColor : 'gray' },
      //   ]}
      //   source={require('../../images/person.png')}
      // />
      <Icon
        name={'address-card'}
        size={20}
        style={{ color: focused ? tintColor : 'gray' }}
      />
    ),
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <StatusBar backgroundColor={'#1895EF'} barStyle={'light-content'} />
        <View
          style={[
            {
              backgroundColor: '#1895EF',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              width: SCREEN_WIDTH,
              height: 48,
            },
          ]}
        >
          <Text style={[{ color: globalcolor.white, fontSize: 20 }]}>
            {'监控总览'}
          </Text>
        </View>
        <ScrollView>
          {
            <View style={{ backgroundColor: '#F1F4F9', width: SCREEN_WIDTH }}>
              {/* 主模块 */}
              <View style={[styles.MainView, styles.UserView]}>
                <Image
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: 100,
                    margin: 3,
                  }}
                  source={require('../../images/userlogo.jpg')}
                />
                <Text style={{ fontSize: 18, color: '#2f2f2f', margin: 3 }}>
                  成云
                </Text>
                <Text style={{ fontSize: 13, margin: 3, color: '#B5B5B5' }}>
                  175564223641
                </Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: 50,
                    height: 30,
                    borderColor: '#4BB3F0',
                    borderWidth: 1,
                    width: '30%',
                    justifyContent: 'center',
                    margin: 3,
                  }}
                >
                  <Text
                    style={{
                      color: '#4BB3F0',
                      alignSelf: 'center',
                      justifyContent: 'center',
                      fontSize: 14,
                    }}
                  >
                    设置
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.MainView}>
                {/* 账号与安全 */}
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 10,
                  }}
                >
                  <WingBlank size="sm" />
                  <Image
                    style={{ width: 15, height: 15 }}
                    tintColor="#03BA00"
                    source={require('../../images/zhyaq.png')}
                  />

                  <WingBlank size="sm" />

                  <Text style={{ flex: 1, fontSize: 14, color: '#000000' }}>
                    账号与安全
                  </Text>
                  <Image
                    style={{ width: 15, height: 15 }}
                    tintColor="#000"
                    source={require('../../images/yjt.png')}
                  />

                  <WingBlank size="sm" />
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '90%',
                    alignSelf: 'center',
                    borderBottomColor: '#E3E3E3',
                    borderBottomWidth: 0.8,
                  }}
                />

                {/* 意见反馈 */}
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 10,
                  }}
                >
                  <WingBlank size="sm" />
                  <Image
                    style={{ width: 15, height: 15 }}
                    tintColor="#00A8FE"
                    source={require('../../images/yjfk.png')}
                  />
                  <WingBlank size="sm" />
                  <Text style={{ flex: 1, fontSize: 14, color: '#000000' }}>
                    意见反馈
                  </Text>
                  <Image
                    style={{ width: 15, height: 15 }}
                    tintColor="#000"
                    source={require('../../images/yjt.png')}
                  />
                  <WingBlank size="sm" />
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '90%',
                    alignSelf: 'center',
                    borderBottomColor: '#E3E3E3',
                    borderBottomWidth: 0.8,
                  }}
                />
                {/* 资源中心 */}
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 10,
                  }}
                >
                  <WingBlank size="sm" />
                  <Image
                    style={{ width: 15, height: 15 }}
                    tintColor="#FD4FA4"
                    source={require('../../images/zyzx.png')}
                  />
                  <WingBlank size="sm" />
                  <Text style={{ flex: 1, fontSize: 14, color: '#000000' }}>
                    资源中心
                  </Text>
                  <Image
                    style={{ width: 15, height: 15 }}
                    tintColor="#000"
                    source={require('../../images/yjt.png')}
                  />

                  <WingBlank size="sm" />
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '90%',
                    alignSelf: 'center',
                    borderBottomColor: '#E3E3E3',
                    borderBottomWidth: 0.8,
                  }}
                />
                {/* 推送设置 */}
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 10,
                  }}
                >
                  <WingBlank size="sm" />
                  <Image
                    style={{ width: 15, height: 15 }}
                    tintColor="#FF7F02"
                    source={require('../../images/tssz.png')}
                  />

                  <WingBlank size="sm" />

                  <Text style={{ flex: 1, fontSize: 14, color: '#000000' }}>
                    推送设置
                  </Text>
                  <Image
                    style={{ width: 15, height: 15 }}
                    tintColor="#000"
                    source={require('../../images/yjt.png')}
                  />

                  <WingBlank size="sm" />
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '90%',
                    alignSelf: 'center',
                    borderBottomColor: '#E3E3E3',
                    borderBottomWidth: 0.8,
                  }}
                />
                {/* 检查更新 */}
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 10,
                  }}
                >
                  <WingBlank size="sm" />
                  <Image
                    style={{ width: 15, height: 15 }}
                    tintColor="#1BD3F0"
                    source={require('../../images/gx.png')}
                  />

                  <WingBlank size="sm" />

                  <Text style={{ flex: 1, fontSize: 14, color: '#000000' }}>
                    检查更新
                  </Text>
                  <Text style={{ fontSize: 12, color: '#B5B5B5' }}>
                    版本1.0
                  </Text>

                  <WingBlank size="sm" />
                </TouchableOpacity>
                <View
                  style={{
                    flexDirection: 'row',
                    width: '90%',
                    alignSelf: 'center',
                  }}
                />
              </View>
              <WhiteSpace />
              <TouchableOpacity
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: 90,
                  height: 35,
                  width: '90%',
                  alignSelf: 'center',
                  justifyContent: 'center',
                  borderColor: '#E3E3E3',
                  borderWidth: 0.8,
                }}
              >
                <Text
                  style={{
                    color: '#000000',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    fontSize: 16,
                  }}
                >
                  切换账号
                </Text>
              </TouchableOpacity>
              <WhiteSpace />
              <TouchableOpacity
                style={{
                  backgroundColor: '#4BB3F0',
                  borderRadius: 90,
                  height: 35,
                  width: '90%',
                  alignSelf: 'center',
                  justifyContent: 'center',
                  marginBottom: '3%',
                }}
              >
                <Text
                  style={{
                    color: '#FFFFFF',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    fontSize: 16,
                  }}
                >
                  退出登录
                </Text>
              </TouchableOpacity>
            </View>
          }
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainView: {
    width: '96%',
    backgroundColor: '#FFFFFF',
    paddingTop: 5,
    paddingBottom: 5,

    borderRadius: 6,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 3,
    shadowColor: '#E3E3E3',
    shadowOffset: { w: 0, h: 50 },
    shadowRadius: 3,
    shadowOpacity: 0.1,
    elevation: 1,
  },

  UserView: {
    alignItems: 'center',
  },
});
