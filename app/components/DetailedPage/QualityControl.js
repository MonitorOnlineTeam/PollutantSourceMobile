import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

import { SCREEN_WIDTH } from '../../config/globalsize';
class QualityControl extends Component {
  render() {
    return (
      <View>
        <ScrollView>
          <View style={{ backgroundColor: '#fefefe', width: SCREEN_WIDTH }}>
            <View
              style={{
                backgroundColor: '#f4f4f8',
                borderBottomColor: '#d8d8d8',
                borderBottomWidth: 1,
              }}
            >
              <Text style={{ color: '#6c6c6c', margin: 8 }}>
                近期质控情况(月)
              </Text>
            </View>
            <View
              style={{
                padding: 10,
                paddingTop: 1,
                borderBottomColor: '#d8d8d8',
                borderBottomWidth: 1,
                marginLeft: 5,
                marginRight: 5,
                flexDirection: 'row',
              }}
            >
              <View style={{ marginTop: 5 }}>
                <Text style={{ fontSize: 20, color: '#17A05E', marginTop: 5 }}>
                  零点偏差：-0.5
                </Text>
                <Text style={{ fontSize: 20, color: '#17A05E', marginTop: 5 }}>
                  量程偏差：0.5
                </Text>
                <Text style={{ color: '#b9b9b9' }}>应质控：9次</Text>
                <Text style={{ color: '#b9b9b9' }}>实质控：9次</Text>
                <Text style={{ color: '#b9b9b9' }}>上次质控：2018-6-1</Text>
                <Text style={{ color: '#b9b9b9' }}>下次质控时间:2018-6-2</Text>
                <Text style={{ color: '#b9b9b9' }}>平均质控时间：10分钟</Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  justifyContent: 'flex-end',
                }}
              />
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
                    tintColor="#39DEB9"
                    source={require('../../images/zkjl.png')}
                  />
                </View>
                <View style={{ marginLeft: 10 }}>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: '#292929', fontSize: 15 }}>
                      质控记录{' '}
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
                    最近的记录
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
                    tintColor="#39DEB9"
                    source={require('../../images/zkjh.png')}
                  />
                </View>
                <View style={{ marginLeft: 10 }}>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: '#292929', fontSize: 15 }}>
                      质控计划{' '}
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
                    最近质控计划
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default QualityControl;
