import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Accordion } from 'antd-mobile-rn';
import { SCREEN_WIDTH } from '../../config/globalsize';
import CenterButton from '../Assembly/CenterButton';
/*
 * @Description: 记录表.
 */
@connect()
export default class RecordSheet extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: '气态分析仪运行状况检查记录表',
    tabBarLable: '气态分析仪运行状况检查记录表',
    headerBackTitle: null,
    headerTintColor: '#FFF',
    headerStyle: { backgroundColor: '#1895EF' },
    headerTitleStyle: { alignSelf: 'center' },
  })
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ backgroundColor: '#F1F4F9', height: '99%' }}>
        <ScrollView style={{ height: '85%', marginBottom: '3%' }}>
          {/* 手风琴模块 */}
          <View style={styles.MainView}>
            <Accordion onChange={this.onChange} defaultActiveKey="2">
              <Accordion.Panel header="参数对比测试仪">
                <View>
                  <View style={styles.ContentView}>
                    <Text style={styles.TitleText}>对比测试仪原理：</Text>
                    <Text style={styles.ContentText}>加热取样法</Text>
                  </View>
                  <View style={styles.ContentView}>
                    <Text style={styles.TitleText}>CEMS分析仪原理：</Text>
                    <Text style={styles.ContentText}>激光散射法</Text>
                  </View>
                  <View style={styles.ContentView}>
                    <Text style={styles.TitleText}>参比三次均值：</Text>
                    <Text style={styles.ContentText}>17.920</Text>
                  </View>
                  <View style={styles.ContentView}>
                    <Text style={styles.TitleText}>CEMS测定均值：</Text>
                    <Text style={styles.ContentText}>18.999</Text>
                  </View>
                  <View style={styles.ContentView}>
                    <Text style={styles.TitleText}>公式：</Text>
                    <Text style={styles.ContentText}>绝对误差</Text>
                  </View>
                  <View style={styles.ContentView}>
                    <Text style={styles.TitleText}>计算结果：</Text>
                    <Text style={styles.ContentText}>1</Text>
                  </View>
                  <View style={styles.ContentView}>
                    <Text style={styles.TitleText}>评价结果</Text>
                    <Text style={styles.ContentText}>10</Text>
                  </View>
                </View>
              </Accordion.Panel>
            </Accordion>
          </View>

          <View style={styles.MainView}>
            <Accordion onChange={this.onChange} defaultActiveKey="2">
              <Accordion.Panel header="SO2校准">
                <View>
                  <View style={styles.ContentView}>
                    <Text style={styles.TitleText}>对比测试仪原理：</Text>
                    <Text style={styles.ContentText}>加热取样法</Text>
                  </View>
                  <View style={styles.ContentView}>
                    <Text style={styles.TitleText}>CEMS分析仪原理：</Text>
                    <Text style={styles.ContentText}>激光散射法</Text>
                  </View>
                  <View style={styles.ContentView}>
                    <Text style={styles.TitleText}>参比三次均值：</Text>
                    <Text style={styles.ContentText}>17.920</Text>
                  </View>
                  <View style={styles.ContentView}>
                    <Text style={styles.TitleText}>CEMS测定均值：</Text>
                    <Text style={styles.ContentText}>18.999</Text>
                  </View>
                  <View style={styles.ContentView}>
                    <Text style={styles.TitleText}>公式：</Text>
                    <Text style={styles.ContentText}>绝对误差</Text>
                  </View>
                  <View style={styles.ContentView}>
                    <Text style={styles.TitleText}>计算结果：</Text>
                    <Text style={styles.ContentText}>1</Text>
                  </View>
                  <View style={styles.ContentView}>
                    <Text style={styles.TitleText}>评价结果</Text>
                    <Text style={styles.ContentText}>10</Text>
                  </View>
                </View>
              </Accordion.Panel>
            </Accordion>
          </View>
          <View style={styles.MainView}>
            <Accordion onChange={this.onChange} defaultActiveKey="2">
              <Accordion.Panel header="SO2校准">
                <View>
                  <View style={styles.ContentView}>
                    <Text style={styles.TitleText}>对比测试仪原理：</Text>
                    <Text style={styles.ContentText}>加热取样法</Text>
                  </View>
                  <View style={styles.ContentView}>
                    <Text style={styles.TitleText}>CEMS分析仪原理：</Text>
                    <Text style={styles.ContentText}>激光散射法</Text>
                  </View>
                  <View style={styles.ContentView}>
                    <Text style={styles.TitleText}>参比三次均值：</Text>
                    <Text style={styles.ContentText}>17.920</Text>
                  </View>
                  <View style={styles.ContentView}>
                    <Text style={styles.TitleText}>CEMS测定均值：</Text>
                    <Text style={styles.ContentText}>18.999</Text>
                  </View>
                  <View style={styles.ContentView}>
                    <Text style={styles.TitleText}>公式：</Text>
                    <Text style={styles.ContentText}>绝对误差</Text>
                  </View>
                  <View style={styles.ContentView}>
                    <Text style={styles.TitleText}>计算结果：</Text>
                    <Text style={styles.ContentText}>1</Text>
                  </View>
                  <View style={styles.ContentView}>
                    <Text style={styles.TitleText}>评价结果</Text>
                    <Text style={styles.ContentText}>10</Text>
                  </View>
                </View>
              </Accordion.Panel>
            </Accordion>
          </View>
        </ScrollView>
        {/* 提交按钮 */}
        <CenterButton
          title={'单据提交'}
          click={() => {
            this.props.navigation.dispatch(
              NavigationActions.navigate({
                routeName: 'RecordSheet',
              })
            );
          }}
          bgColor={'#2196F3'}
          TColor={'#FFFFFF'}
          bwidth={1}
          bColor={'#2196F3'}
        />
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
    marginTop: '1%',
    marginBottom: '2%',
    borderRadius: 5,
  },
  ContentView: {
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 3,
    marginRight: 5,
    padding: '2%',
  },
  TitleText: {
    color: '#9F9F9F',
    fontSize: 13,
  },
  ContentText: {
    color: '#404040',
    fontSize: 13,
  },
});
