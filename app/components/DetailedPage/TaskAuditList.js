import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity, Text,StyleSheet, FlatList } from 'react-native';
import { Grid, Tabs, NoticeBar, Badge, WhiteSpace,List,WingBlank   } from 'antd-mobile-rn';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { SCREEN_WIDTH } from '../../config/globalsize';
import { NavigationActions } from '../../utils';
import { connect } from 'react-redux';
import TaskAuditcard from '../Assembly/TaskAuditcard';
import AlarmListInfoData from '../Assembly/AlarmListInfoData.json';
const Item = List.Item;
const Brief = Item.Brief;
/*
 * @Description: 报警列表-超标报警.
 */
@connect()
export default class TaskAuditList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        extra:<Text style={{color:'red',flex:0.5,fontSize:13}}>报警次数：8</Text>,
         text:<Text style={{fontWeight:'bold'}}>锅炉小号烟囱1</Text>
    };
  }

  render() {
    return (
        <View  style={{backgroundColor:'rgb(241,244,249)'}}>
        <ScrollView style={{width:'95%',marginTop:'3%',marginBottom:'7%',backgroundColor:'white',borderRadius:5}}>
         <FlatList  
          data={AlarmListInfoData}
          renderItem={({item}) =>            
            <View style={{height:64,width:SCREEN_WIDTH,flexDirection:'row',alignItems:'center',borderBottomWidth:1 ,borderBottomColor:'rgb(237,237,240)'}}>   
              <TouchableOpacity style={{height:64,width:SCREEN_WIDTH,flexDirection:'row',alignItems:'center',borderBottomWidth:1 ,borderBottomColor:'rgb(237,237,240)'}} >
               <View style={{flex:8,marginLeft:24}}>
                <Text style={{fontWeight:'bold'}}>{item.PointName}</Text>
                <Text>{item.EntName}</Text>
               </View>
              <Text style={[{color:'red',flex:5}]}>{'报警次数：'+item.Count}</Text>
              <Icon
                  name={'angle-right'}
                  size={20}
                  style={{ color: 'gray',flex:2}}
              />   
               </TouchableOpacity>    
            </View>}  
        /> 
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
      width: SCREEN_WIDTH - 30,
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
      borderBottomLeftRadius: 0,
    },
    ScrollTitleText: {
      flex: 1,
      fontSize: 13,
      color: '#FFFFFF',
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