import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import CenterButton from '../Assembly/CenterButton';
import { connect } from 'react-redux';
import { Tabs, Icon, WingBlank, Steps } from 'antd-mobile-rn';
import { SCREEN_WIDTH } from '../../config/globalsize';
import { NavigationActions } from '../../utils';
import TaskDetails from './TaskDetails';
import Timeline from '../Assembly/TimeLine';
const Step = Steps.Step;
@connect()
/*
 * @Description: 执行任务.
 */
export default class ExecutionTasks extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: '执行任务',
    tabBarLable: '执行任务',
    headerBackTitle: null,
    headerTintColor: '#FFF',
    headerStyle: { backgroundColor: '#1895EF' },
    headerTitleStyle: { alignSelf: 'center' },
  })
  constructor(props) {
    super(props);
    this.data = [
      { time: '2018-10-17', title: '创建任务单',lineColor:"#1296db", description: '',icon: require('../../images/lcdg.png') },
      { time: '2018-10-17', title: '应急处理',lineColor:"#cccccc", description: '成云 开始时间:2018-6-15-2018-6-15',icon: require('../../images/lcdg.png') },
      { time: '2018-10-17', title: '校准',lineColor:"#cccccc", description: '',icon: require('../../images/qt.png') },
      { time: '2018-10-17', title: '审核',lineColor:"#cccccc", description: '',icon: require('../../images/qt.png') },

    ];
    this.state = {

      steps2: [
        {
          title: '创建任务单',
          description: '',
          status: 'finish',
        },
        {
          title: '应急处理',
          description: '',
          status: 'wait',
        },
        {
          title: '校准',
          description: '',
          status: 'wait',
        },
        {
          title: '审核',
          description: '',
          status: 'wait',
        },
      ],
    };
  }
  /*
   * @Description: 执行任务.
   */

  render() {
    const tabs = [{ title: '任务详情' }, { title: '执行任务' }];
    return (
      <View style={{ flex: 1, backgroundColor: '#F1F4F9' }}>
        {/* 任务详情 */}
        <Tabs tabs={tabs} initialPage={1} page={1}>
          <View style={styles.tabs}>
            <ScrollView>
              <TaskDetails />
              <View style={[styles.MainViews]}>
                <View style={[styles.TitleView]}>
                  <Text style={{ color: '#000000' }}>流程图</Text>
                </View>
                <View style={{ marginTop: 10 }}>
                  <WingBlank size="lg">
                    <Timeline
                    descriptionStyle={{color:"#a5a5a5"}}
                    showTime={false}
                       circleSize={20}
                       circleColor='rgb(45,156,219)'
                       lineColor='rgb(45,156,219)'
                       timeContainerStyle={{minWidth:52,}}
                       innerCircle={'icon'}
                    
                      data={this.data}
         
                    />
                  </WingBlank>
                </View>
              </View>
            </ScrollView>
          </View>
          {/* 执行任务 */}
          <View style={styles.tabs}>
            {/* 主模块 */}
            <ScrollView style={styles.tabView}>
              <View style={styles.MainView}>
                <View style={[styles.TitleView]}>
                  <Text style={{ color: '#000000' }}>应急处理</Text>
                </View>
                <View>
                  {/* 处理说明输入框 */}
                  <TextInput
                    style={styles.TitleInput}
                    multiline={true}
                    placeholder="处理说明"
                    underlineColorAndroid="transparent"
                    clearButtonMode="always"
                    maxLength={100}
                  />
                  {/* 限制总字数 */}
                  <Text
                    style={{
                      textAlign: 'right',
                      padding: '3%',
                      color: '#BFBFBF',
                      borderBottomColor: '#E5E9EB',
                      borderBottomWidth: 1,
                    }}
                  >
                    0/100
                  </Text>
                </View>
              </View>
              <View style={{ marginBottom: '2%' }}>
                {/* 按钮 */}
                <CenterButton
                  title={'气态分析仪运行状况检查记录表'}
                  bgColor={'#FFFFFF'}
                  TColor={'#7C7C7C'}
                  bwidth={1}
                  bColor={'#DDE6ED'}
                />
              </View>
              <View style={{ marginBottom: '2%' }}>
                <CenterButton
                  title={'备品备件更换记录'}
                  bgColor={'#FFFFFF'}
                  TColor={'#7C7C7C'}
                  bwidth={1}
                  bColor={'#DDE6ED'}
                />
              </View>
              <View style={{ marginBottom: '2%' }}>
                <CenterButton
                  title={'+'}
                  bgColor={'#FFFFFF'}
                  TColor={'#7C7C7C'}
                  bwidth={1}
                  bColor={'#DDE6ED'}
                />
              </View>
              <View style={styles.MainView}>
                <View style={[styles.TitleView]}>
                  <Text style={{ color: '#000000' }}>图片附件</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    padding: '3%',
                    flexWrap: 'wrap',
                  }}
                >
                  {/*--------------重复样式---华丽的分割线开始-----------------  */}
                  <Image
                    style={styles.Img}
                    source={require('../../images/img.png')}
                  />
                  <Image
                    style={styles.Img}
                    source={require('../../images/img.png')}
                  />
                  <Image
                    style={styles.Img}
                    source={require('../../images/img.png')}
                  />

                  {/*--------------重复样式---华丽的分割线结束-----------------  */}
                </View>
              </View>
              <View style={{ marginBottom: '2%' }}>
                <CenterButton
                  title={'拍照'}
                  bgColor={'#FFFFFF'}
                  TColor={'#7C7C7C'}
                  bwidth={1}
                  bColor={'#DDE6ED'}
                />
              </View>
              <View style={{ marginBottom: '2%' }}>
                <CenterButton
                  title={'任务上报'}
                  bgColor={'#FFFFFF'}
                  TColor={'#7C7C7C'}
                  bwidth={1}
                  bColor={'#DDE6ED'}
                />
              </View>
              <View style={{ marginBottom: '2%' }}>
                <CenterButton
                  title={'提交'}
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
            </ScrollView>
          </View>
        </Tabs>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainViews: {
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
  tabView: {
    flexDirection: 'column',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: SCREEN_WIDTH - 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    marginTop: '2%',
    shadowColor: '#E3E3E3',
    shadowOffset: { w: 0, h: 50 },
    shadowRadius: 3,
    shadowOpacity: 0.1,
    elevation: 1,
    marginBottom: '2%',
    height: '95%',
  },
  MainView: {
    flexDirection: 'column',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: SCREEN_WIDTH - 20,
    backgroundColor: '#FFFFFF',
    marginBottom: '10%',
    borderRadius: 5,
  },
  TitleView: {
    flexDirection: 'column',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: SCREEN_WIDTH - 20,
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderBottomColor: '#E5E9EB',
    borderBottomWidth: 1,

    padding: '3%',
  },
  TitleInput: {
    backgroundColor: '#FFFFFF',
    padding: '3%',
  },
  Img: {
    width: 60,
    height: 60,
    margin: 5,
  },
  tabs: {
    width: '100%',

    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F1F4F9',
  },
});