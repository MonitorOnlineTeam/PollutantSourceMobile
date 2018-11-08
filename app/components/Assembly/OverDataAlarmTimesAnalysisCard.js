import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
/*
 * @Description: 数据超标报警次数分析卡片.
 */
export default class OverDataAlarmTimesAnalysisCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ width: '50%', height: 100 }}>
        <TouchableOpacity
          style={{ width: '88%', height: 86, marginLeft: '6%', marginTop: 8 }}
        >
          {
            <View style={{ width: '100%', borderRadius: 5 }}>
              {/* 主块 */}
              <View style={styles.MainView}>
                {/* 标题 */}
                <View style={[styles.RowView]}>
                  <View style={{ height: 26, flexDirection: 'row' }}>
                    <View>
                      <Image
                        style={styles.TitleImgs}
                        tintColor="#A8A5BA"
                        source={require('../../images/yuanhuan.png')}
                      />
                    </View>

                    <View>
                      <Text style={{ fontSize: 12, lineHeight: 26 }}>
                        {this.props.PointName}
                      </Text>
                    </View>
                  </View>
                  <View style={{ height: 26, flexDirection: 'row' }}>
                    <View>
                      <Image
                        style={styles.TitleImg}
                        tintColor="#EE6459"
                        source={require('../../images/chaobiaobaojing.png')}
                      />
                    </View>
                    <View>
                      <Text
                        style={{
                          color: '#A3A3AC',
                          fontSize: 12,
                          lineHeight: 26,
                        }}
                      >
                        超标报警次数
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: 20,
                        color: '#EE6459',
                        textAlign: 'center',
                      }}
                    >
                      {this.props.OverDataAlarmTimes}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          }
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainView: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F1F4F9',
  },
  TitleImg: {
    width: 12,
    height: 12,
    marginRight: 5,
    marginTop: 7,
  },
  TitleImgs: {
    width: 11,
    height: 11,
    marginRight: 5,
    marginTop: 8,
  },
  RowView: {
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
});
