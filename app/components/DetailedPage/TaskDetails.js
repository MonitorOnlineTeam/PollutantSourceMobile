import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SCREEN_WIDTH } from '../../config/globalsize';
/*
 * @Description: 任务详情模块.
 */
export default class TaskDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // 任务详情模块
  render() {
    return (
      <View>
        {/* 主模块 */}
        <View style={[styles.MainView, styles.MainPadding]}>
          {/* 内容 */}
          <View style={styles.ContentView}>
            <Text style={styles.TitleText}>任务单号：</Text>
            <Text style={styles.ContentText}>96658688955</Text>
          </View>

          <View style={styles.ContentView}>
          <Text style={styles.TitleText}>排口：</Text>
            <Text style={styles.ContentText}>废气排口</Text>
           
          </View>

          {/*--------重复样式---------美丽的分割线-----------------  */}
          <View style={styles.ContentView}>
            <Text style={styles.TitleText}>企业：</Text>
            <Text style={styles.ContentText}>
              大唐集团（三门峡）城市供热有限公司
            </Text>
          </View>
          <View style={styles.ContentView}>
            <Text style={styles.TitleText}>城市：</Text>
            <Text style={styles.ContentText}>三门峡</Text>
          </View>
          <View style={styles.ContentView}>
            <Text style={styles.TitleText}>创建人：</Text>
            <Text style={styles.ContentText}>成云</Text>
          </View>
          <View style={styles.ContentView}>
            <Text style={styles.TitleText}>创建时间：</Text>
            <Text style={styles.ContentText}>2018-08-01 10:00:00</Text>
          </View>
          {/*--------------重复样式---美丽的分割线结束-----------------  */}
          <View style={styles.ContentView}>
            <Text style={styles.TitleText}>任务内容：</Text>
            <Text
              style={{
                color: '#9F9F9F',
                fontSize: 13,
                letterSpacing: 0.1,
                flexShrink: 1,
                lineHeight: 23,
              }}
            >
              烟气分析仪型号CEMS16066656464发生 故障报警，开始时间2018-7-24
              11:10:00，结束时间2018-7-24
              16:18：00；烟气分析仪型号烟气分析仪型号CEMS16066656464发生连续值报警
              开始时间2018-7-24 11:10:00，结束时间 2018-7-24 16:18:00
            </Text>
          </View>
        </View>
        {/* 第二模块 */}
        <ScrollView style={styles.MainView}>
          <View style={styles.ScrollTitleView}>
            <Text style={styles.ScrollTitleText}>设备类型</Text>
            <Text style={styles.ScrollTitleText}>设备品牌</Text>
            <Text style={styles.ScrollTitleText}>设备编号</Text>
            <Text style={styles.ScrollTitleText}>设备型号</Text>
          </View>

          <View style={styles.ScrollContentView}>
            <Text style={styles.ScrollContentText}>烟气分析仪</Text>
            <Text style={styles.ScrollContentText}>雪地龙</Text>
            <Text style={styles.ScrollContentText}>NO2017-714010</Text>
            <Text style={styles.ScrollContentText}>CEMS1608080</Text>
          </View>
          <View style={styles.ScrollContentView}>
            <Text style={styles.ScrollContentText}>烟气分析仪</Text>
            <Text style={styles.ScrollContentText}>雪地龙</Text>
            <Text style={styles.ScrollContentText}>NO2017-714010</Text>
            <Text style={styles.ScrollContentText}>CEMS1608080</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainView: {
    flexDirection: 'column',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: SCREEN_WIDTH - 20,
    backgroundColor: '#FFFFFF',
    marginTop: '2%',
    marginBottom: '2%',
    borderRadius: 5,
    shadowColor: '#E3E3E3',
    shadowOffset: { w: 0, h: 50 },
    shadowRadius: 3,
    shadowOpacity: 0.1,
    elevation: 1,
  },
  MainPadding: {
    padding: '3%',
  },
  ContentView: {
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 6,
    marginRight: 5,
  },
  TitleText: {
    color: '#9F9F9F',
    fontSize: 13,
  },
  ContentText: {
    color: '#404040',
    fontSize: 13,
  },
  ScrollTitleView: {
    flexDirection: 'row',
    padding: '2%',
    backgroundColor: '#9b9b9b',
    borderRadius: 5,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius:0,
  },
  ScrollTitleText: {
    flex: 1,
    fontSize: 13,
    color:"#FFFFFF"
  },
  ScrollContentView: {
    flexDirection: 'row',
    padding: '2%',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    borderTopWidth: 1,
    borderTopColor: '#E0E4E7',
  },
  ScrollContentText: {
    flex: 1,
    fontSize: 11,
  },
});
