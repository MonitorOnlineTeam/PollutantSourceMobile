import React, { Component } from 'react';
import {  View, Text, Image,ScrollView,TouchableOpacity} from 'react-native';

import { SCREEN_WIDTH } from '../../config/globalsize';
class Operation extends Component {
  render() {
    return (
      <ScrollView>
              <View style={{ backgroundColor: '#fefefe', width: SCREEN_WIDTH }}>
                <View
                  style={{
                    backgroundColor: '#f4f4f8',
                    borderBottomColor: '#d8d8d8',
                    borderBottomWidth: 1,
                  }}
                >
                  <Text style={{ color: '#6c6c6c', margin: 8 }}>运维信息</Text>
                </View>
                <View
                  style={{
                    padding: 10,
                    paddingTop: 1,
                    borderBottomColor: '#d8d8d8',
                    borderBottomWidth: 1,

                    flexDirection: 'row',
                  }}
                >
                  <View style={{ marginTop: 5 }}>
                    <Text
                      style={{ fontSize: 20, color: '#292929', marginTop: 5 }}
                    />
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ color: '#9f9f9f', fontSize: 15 }}>
                        运维人：
                      </Text>
                      <Text style={{ color: '#717171', fontSize: 15 }}>
                        小王
                      </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ color: '#9f9f9f', fontSize: 15 }}>
                        联系电话：
                      </Text>
                      <Text style={{ color: '#717171', fontSize: 15 }}>
                        18911524678
                      </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ color: '#9f9f9f', fontSize: 15 }}>
                        上次运维时间：
                      </Text>
                      <Text style={{ color: '#717171', fontSize: 15 }}>
                        2018-06-01
                      </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ color: '#9f9f9f', fontSize: 15 }}>
                        距下次运维时间：
                      </Text>
                      <Text style={{ color: '#717171', fontSize: 15 }}>
                        9(天)
                      </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ color: '#9f9f9f', fontSize: 15 }}>
                        是否逾期：
                      </Text>
                      <Text style={{ color: '#717171', fontSize: 15 }}>否</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={{ color: '#9f9f9f', fontSize: 15 }}>
                        逾期时间：
                      </Text>
                      <Text style={{ color: '#717171', fontSize: 15 }}>0</Text>
                    </View>
                  </View>
                </View>
              </View>
              <Text style={{ color: '#6c6c6c', marginLeft: 8, marginTop: 8 }}>
                近期耗材情况(月)
              </Text>

              <View
                style={{
                  backgroundColor: '#ffffff',
                  padding: 10,

                  borderBottomColor: '#d8d8d8',
                  borderBottomWidth: 1,
                  flexDirection: 'row',
                  width: '100%',
                  flexWrap: 'wrap',
                }}
              >
                <View
                  style={{
                    width: '30%',
                    height: 50,
                    backgroundColor: '#f4f4f8',
                    borderRadius: 5,
                    flexDirection: 'row',
                    alignContent: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: 5,
                  }}
                >
                  <Text style={{ color: '#000000', fontSize: 15 }}>皮管：</Text>
                  <Text style={{ color: '#ff8400', fontSize: 20 }}>2个</Text>
                </View>
                <View
                  style={{
                    width: '30%',
                    height: 50,
                    backgroundColor: '#f4f4f8',
                    borderRadius: 5,
                    flexDirection: 'row',
                    alignContent: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: 5,
                  }}
                >
                  <Text style={{ color: '#000000', fontSize: 15 }}>试剂：</Text>
                  <Text style={{ color: '#ff8400', fontSize: 20 }}>1个</Text>
                </View>
                <View
                  style={{
                    width: '30%',
                    height: 50,
                    backgroundColor: '#f4f4f8',
                    borderRadius: 5,
                    flexDirection: 'row',
                    alignContent: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: 5,
                  }}
                >
                  <Text style={{ color: '#000000', fontSize: 15 }}>标气：</Text>
                  <Text style={{ color: '#ff8400', fontSize: 20 }}>3个</Text>
                </View>
              </View>

               <View
                  style={{
                    padding: 10,
                    borderBottomColor: '#dddddd',
                    borderBottomWidth: 1,
                    flexDirection: 'column',
                    width: '100%',
                  }}
                >
                  <TouchableOpacity style={{}}>
                    <View style={{ flexDirection: 'row' }}>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignContent: 'center',
                        }}
                      >
                        <Image
                          style={{
                            marginLeft: 2,
                            justifyContent: 'center',
                            width: 25,
                            height: 25,
                          }}
                          tintColor="#ff414e"
                          source={require('../../images/bpbj.png')}
                        />
                      </View>
                      <View style={{ marginLeft: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                          <Text style={{ color: '#292929', fontSize: 15 }}>
                          备品备件{' '}
                          </Text>
                          <Text
                            style={{
                              color: '#6c6c6c',
                              fontSize: 12,
                              justifyContent: 'center',
                            }}
                          >
                            -2018年6月27日 10:10{' '}
                          </Text>
                        </View>

                        <Text style={{ color: '#6c6c6c', fontSize: 13 }}>
                          皮管即将到期
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>

                <View
                  style={{
                    padding: 10,
                    borderBottomColor: '#dddddd',
                    borderBottomWidth: 1,
                    flexDirection: 'column',
                    width: '100%',
                  }}
                >
                  <TouchableOpacity style={{}}>
                    <View style={{ flexDirection: 'row' }}>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignContent: 'center',
                        }}
                      >
                        <Image
                          style={{
                            marginLeft: 2,
                            justifyContent: 'center',
                            width: 25,
                            height: 25,
                          }}
                          tintColor="#ff414e"
                          source={require('../../images/ywjh.png')}
                        />
                      </View>
                      <View style={{ marginLeft: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                          <Text style={{ color: '#292929', fontSize: 15 }}>
                          运维计划{' '}
                          </Text>
                          <Text
                            style={{
                              color: '#6c6c6c',
                              fontSize: 12,
                              justifyContent: 'center',
                            }}
                          >
                            -2018年6月27日 10:10{' '}
                          </Text>
                        </View>

                        <Text style={{ color: '#6c6c6c', fontSize: 13 }}>
                          执行情况：执行完成20%
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>

                 <View
                  style={{
                    padding: 10,
                    borderBottomColor: '#dddddd',
                    borderBottomWidth: 1,
                    flexDirection: 'column',
                    width: '100%',
                  }}
                >
                  <TouchableOpacity style={{}}>
                    <View style={{ flexDirection: 'row' }}>
                      <View
                        style={{
                          justifyContent: 'center',
                          alignContent: 'center',
                        }}
                      >
                        <Image
                          style={{
                            marginLeft: 2,
                            justifyContent: 'center',
                            width: 25,
                            height: 25,
                          }}
                          tintColor="#ff414e"
                          source={require('../../images/yjrw.png')}
                        />
                      </View>
                      <View style={{ marginLeft: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                          <Text style={{ color: '#292929', fontSize: 15 }}>
                          应急任务{' '}
                          </Text>
                          <Text
                            style={{
                              color: '#6c6c6c',
                              fontSize: 12,
                              justifyContent: 'center',
                            }}
                          >
                            -2018年6月27日 10:10{' '}
                          </Text>
                        </View>

                        <Text style={{ color: '#6c6c6c', fontSize: 13 }}>
                          执行情况：执行完成20%
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
                
                
            </ScrollView>
    );
  }
}

export default Operation;
