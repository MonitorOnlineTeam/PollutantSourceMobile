// import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import wholeSituationStyle from '../../config/wholeSituationStyle';
import {SCREEN_WIDTH} from '../../config/globalsize';
import { NavigationActions } from '../../utils';
import WorkbenchRouter from '../workbench';
/*
 * Copyright (c) 2018 SDL.All Rights Reserved
 *
 * @Script: Workbench.js
 * @Author: houxf
 * @Email: houxfmark3955@163.com
 * @Create At: 2018-06-20 14:21:47
 * @Last Modified By: houxfmark3955@163.com
 * @Last Modified At: 2018-06-27 11:18:53
 * @Description: 工作台.
 */

// create a component
const stateButtonWidth = SCREEN_WIDTH/5;
@connect()
class Workbench extends Component {
  static navigationOptions = {
    // header: null,
    title: '工作台',
    tabBarLabel: '工作台',
    tabBarIcon: ({ focused, tintColor }) => (
      // <Image
      //   style={[
      //     wholeSituationStyle.icon,
      //     { tintColor: focused ? tintColor : 'gray' },
      //   ]}
      //   source={require('../../images/person.png')}
      // />
      <Icon name={'clipboard'} size={20} style={{color:focused ? tintColor : 'gray'}}/>
    ),
  }

  constructor(props){
    super(props);
    this.state ={
      'stateArray':[
        {
          id:'todo',
          title:'待办',
          count:8,
          'fun':()=>{
            this.props.dispatch(NavigationActions.navigate({ routeName: 'Todo' }));
          },
        },
        {
          id:'earlywarning',
          title:'预警',
          count:110,
          'fun':()=>{
            this.props.dispatch(NavigationActions.navigate({ routeName: 'EarlyWarning' }));
          },
        },
        {
          id:'message',
          title:'消息',
          count:0,
          'fun':()=>{
            this.props.dispatch(NavigationActions.navigate({ routeName: 'Message' }));
          },
        },
        {
          id:'alarm',
          title:'报警',
          count:3,
          'fun':()=>{
            this.props.dispatch(NavigationActions.navigate({ routeName: 'Alarm' }));
          },
        },
      ],
      functionArray:[
        {
          id:'emergencytask',
          title:'应急派单',
          'fun':()=>{
            this.props.dispatch(NavigationActions.navigate({ routeName: 'EmergencyTask' }));
          },
        },
        {
          id:'workplan',
          title:'工作计划',
          'fun':()=>{
            this.props.dispatch(NavigationActions.navigate({ routeName: 'WorkPlan' }));
          },
        },
        {
          id:'taskmanage',
          title:'任务管理',
          'fun':()=>{
            this.props.dispatch(NavigationActions.navigate({ routeName: 'TaskManage' }));
          },
        },
        {
          id:'reservemanage',
          title:'库存管理',
          'fun':()=>{
            this.props.dispatch(NavigationActions.navigate({ routeName: 'ReserveManage' }));
          },
        },
        {
          id:'breakdownlist',
          title:'故障记录',
          'fun':()=>{
            this.props.dispatch(NavigationActions.navigate({ routeName: 'BreakdownList' }));
          },
        },
        {
          id:'powercutlist',
          title:'停电记录',
          'fun':()=>{
            this.props.dispatch(NavigationActions.navigate({ routeName: 'PowerCutList' }));
          },
        },
        {
          id:'consumablemanage',
          title:'耗材统计',
          'fun':()=>{
            this.props.dispatch(NavigationActions.navigate({ routeName: 'ConsumableManage' }));
          },
        },
      ]
    };
  }

  render() {
    return (
      <WorkbenchRouter></WorkbenchRouter>
    );
  }
}
{/*<View style={styles.container}>
        <StatusBar barStyle="dark-content" style={[{height:24}]}/>
        <View style={[{flexDirection:'row',height:stateButtonWidth*2
        ,backgroundColor:'black',width:SCREEN_WIDTH,
        justifyContent:'center',alignItems:'center',}]}>
          {
            this.state.stateArray.map((item,key)=>{
              return <TouchableOpacity key={item.id} style={[{marginLeft:4,marginRight:4}]}
                onPress={item.fun}>
                <View style={[
                  {width:stateButtonWidth,height:stateButtonWidth,
                    justifyContent:'center',alignItems:'center',
                  backgroundColor:item.id==='todo'?'lightblue':
                  item.id==='earlywarning'?'orange':
                  item.id==='message'?'yellow':
                  item.id==='alarm'?'red':'white',}]}>
                  <Text style={[{color:'white'}]}>{item.title}</Text>
                  <Text style={[{color:'white'}]}>{item.count}</Text>
                </View>
              </TouchableOpacity>;
            })
          }
        </View>
        <View style={[{
          width:SCREEN_WIDTH,
          flex:1,flexDirection:'row',
          flexWrap:'wrap',
          paddingLeft:stateButtonWidth/3,
          paddingRight:stateButtonWidth/3,
        }]}>
          {
            this.state.functionArray.map((item,key)=>{
              return <TouchableOpacity key={item.id}
                onPress={item.fun}
                style={[
                {marginLeft:stateButtonWidth/48,
                  marginRight:stateButtonWidth/48,
                marginTop:stateButtonWidth/3}]}>
              <View style={[
                {width:stateButtonWidth,height:stateButtonWidth,
                  justifyContent:'center',alignItems:'center',
                backgroundColor:'red',}]}>
                <Text style={[{color:'white'}]}>{item.title}</Text>
              </View>
            </TouchableOpacity>;
            })
          }
        </View>
        </View>*/}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  stateContainer:{
    
  },
});

// make this component available to the app
export default Workbench;
