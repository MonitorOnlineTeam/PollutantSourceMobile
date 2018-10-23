import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity,Text,StyleSheet } from 'react-native';
import { SCREEN_WIDTH } from '../../config/globalsize';
import { NavigationActions } from '../../utils';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import TaskAdjustmentListCard from '../Assembly/TaskAdjustmentListCard';
import { WhiteSpace, WingBlank,Checkbox } from 'antd-mobile-rn';
/*
 * @Description: 超标报警记录.
 */
@connect()
export default class TaskAdjustmentList extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: '超标报警记录',
    tabBarLable: '超标报警记录',
    headerBackTitle: null,
    headerTintColor: '#FFF',
    headerStyle: { backgroundColor: '#1895EF' },
    tabBarIcon: ({ focused, tintColor }) => (
      <Icon
        name={'clipboard'}
        size={20}
        style={{ color: focused ? tintColor : 'gray' }}
      />
    ),
  })
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const persons = [
      {
        key:'1',
        AlarmTime: '2018-10-12 08:00:01',
        Pollutant: '二氧化硫',
        AlarmType: '超标报警',
        AlarmState: '未接触',
        AlarmContinueTime: '10',
        Discription: '北京绿都供暖有限公司-废气排口于2018-10-12 08:00:00 二氧化硫超标7次（1级7次），首次超标时间2018-10-12 07:00:00，超标值214.882（<200为正常）',
        color:'rgb(74,198,162)'
      },
      {
        key:'2',
        AlarmTime: '2018-10-12 08:00:02',
        Pollutant: '二氧化硫',
        AlarmType: '超标报警',
        AlarmState: '未接触',
        AlarmContinueTime: '10',
        Discription: '北京绿都供暖有限公司-废气排口于2018-10-12 08:00:00 二氧化硫超标7次（1级7次），首次超标时间2018-10-12 07:00:00，超标值214.882（<200为正常）',
        color:'rgb(239,120,114)'
      },
      {
        key:'3',
        AlarmTime: '2018-10-12 08:00:03',
        Pollutant: '二氧化硫',
        AlarmType: '超标报警',
        AlarmState: '未接触',
        AlarmContinueTime: '10',
        Discription: '北京绿都供暖有限公司-废气排口于2018-10-12 08:00:00 二氧化硫超标7次（1级7次），首次超标时间2018-10-12 07:00:00，超标值214.882（<200为正常）',
        color:'rgb(141,122,212)'
      },
      {
        key:'4',
        AlarmTime: '2018-10-12 08:00:04',
        Pollutant: '二氧化硫',
        AlarmType: '超标报警',
        AlarmState: '未接触',
        AlarmContinueTime: '10',
        Discription: '北京绿都供暖有限公司-废气排口于2018-10-12 08:00:00 二氧化硫超标7次（1级7次），首次超标时间2018-10-12 07:00:00，超标值214.882（<200为正常）',
        color:'rgb(74,198,162)'
      },
      {
        key:'5',
        AlarmTime: '2018-10-12 08:00:05',
        Pollutant: '二氧化硫',
        AlarmType: '超标报警',
        AlarmState: '未接触',
        AlarmContinueTime: '10',
        Discription: '北京绿都供暖有限公司-废气排口于2018-10-12 08:00:00 二氧化硫超标7次（1级7次），首次超标时间2018-10-12 07:00:00，超标值214.882（<200为正常）',
        color:'rgb(239,120,114)'
      },
      {
        key:'6',
        AlarmTime: '2018-10-12 08:00:06',
        Pollutant: '二氧化硫',
        AlarmType: '超标报警',
        AlarmState: '未接触',
        AlarmContinueTime: '10',
        Discription: '北京绿都供暖有限公司-废气排口于2018-10-12 08:00:00 二氧化硫超标7次（1级7次），首次超标时间2018-10-12 07:00:00，超标值214.882（<200为正常）',
        color:'rgb(141,122,212)'
      }
    ];
    return (
      <View style={{ backgroundColor: '#F1F4F9', width: SCREEN_WIDTH,height:'100%'}}>
        <ScrollView>
          {/* 主模块 */}
          {persons.map((item, key) => {
            return (
              <View
              key={key}
              >
              <WhiteSpace/>
              <TaskAdjustmentListCard
                           key={key}
                           AlarmTime={item.AlarmTime}
                           Pollutant={item.Pollutant}
                           AlarmType={item.AlarmType}
                           AlarmState={item.AlarmState}
                           AlarmContinueTime={item.AlarmContinueTime}
                           Discription={item.Discription}
                           color={item.color}
                         />
               </View>        
            );
          })}
        </ScrollView>
       
        <View style={styles.MainView}>
        <View style={{width:'20%'}} />
        <View style={styles.TitleText}>
          <Text style={{textAlign:'center'}}>      
               <Icon
                  name={'envelope-open-o'}
                  size={18}
                  style={{color:'rgb(140,160,251)'}}
              />  </Text>
          <Text style={styles.TitleTexts}>标为已读</Text>
         </View>
         <View style={styles.TitleText}>
         <Text style={{textAlign:'center'}}>
         <Icon
                  name={'check-square-o'}
                  size={18}
                  style={{color:'rgb(140,160,251)'}}
              /> 
         </Text>
         <Text style={styles.TitleTexts}>全选</Text>
         </View>  
         <View style={{width:'20%'}} />
         </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainView: {
    width:'60%',
    height:40,
    marginLeft:'20%',
    backgroundColor:'#FFFFFF',
    borderRadius:20,
    flexDirection:'row',
    marginTop:'2%'
  },
  TitleText: {
    width:'30%',
    paddingTop:'2%'
  },
  TitleTexts: {
    textAlign:'center',
    fontSize:10
  },
});