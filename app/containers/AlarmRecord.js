import React, { Component } from 'react';
import {  View, Text,StyleSheet ,SectionList,Button,TouchableOpacity,Platform,Image} from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { SCREEN_WIDTH } from '../config/globalsize';
import { data } from '../mockdata/Base/Code/T_Cod_ExceptionProcessing.json';

export default class AlarmRecord extends Component {
   
  constructor(props) {
    super(props);
    this.state = {
      data: [ {key: '2018-1-1', data: [{da:'11'},{da:'12'},{da:'13'}]}
      ,{key: '2018-1-2', data: [{da:'21'},{da:'22'},{da:'23'}]}
      ,{key: '2018-1-3', data: [{da:'31'},{da:'32'},{da:'33'}]}]
    };
     
  }

  
    extraUniqueKey=(item, index) => `index${index}${item}`
    footer=() => {
      //正在加载数据或者没有更多数据了
      return (<View />);
    }
    renderSectionHeader=({ section }) => (
        <View
        style={{
          alignContent: 'center',
          alignSelf: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={{
    
          
           
          }}
        >
          <Text
            style={{
              alignContent: 'center',
              color: '#b7b7b7',
              alignSelf: 'center',
              alignItems: 'center',
              fontSize: 15,
            }}
          >
           {section.key}
          </Text>
        </View>
      </View>
      
    )
    renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          onPress={() => {
             //item点击
          }}
          style={{ flex: 1, width: SCREEN_WIDTH- 20, borderRadius: 10,marginBottom:10, marginLeft: 10, backgroundColor: '#fff', marginTop: 5 }}
        >
         <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              backgroundColor: 'white',
              flex: 1,
              borderRadius: 10,
              padding: 10,
              marginRight: 10,
              marginTop: 17,
              paddingBottom: 20,
            }}
          >
            <View style={{ flexDirection: 'row', padding: 5 }}>
              
              <Text
                style={{
                  alignSelf: 'center',
                  alignItems: 'center',
                  color: '#ff414e',
                  fontSize: 15,
                }}
              >
                {item.name}
              </Text>
            </View>
            <View
              style={{ flexDirection: 'row', marginTop: 3, marginLeft: 21 }}
            >
              <Text style={{ color: '#797979', fontSize: 14 }}>报警时间:</Text>
              <Text style={{ color: '#252525', fontSize: 14 }}>
                {' '}
                {item.date}
              </Text>
            </View>
            <View
              style={{ flexDirection: 'row', marginTop: 3, marginLeft: 21 }}
            >
              <Text style={{ color: '#797979', fontSize: 14 }}>污染物：</Text>
              <Text style={{ color: '#252525', fontSize: 14 }}>
                {' '}
                {item.poll}
              </Text>
            </View>
            <View
              style={{ flexDirection: 'row', marginTop: 3, marginLeft: 21 }}
            >
              <Text style={{ color: '#797979', fontSize: 14 }}>报警类别：</Text>
              <Text style={{ color: '#252525', fontSize: 14 }}>
                {' '}
                {item.cnt}次
              </Text>
            </View>
            <View
              style={{ flexDirection: 'row', marginTop: 3, marginLeft: 21 }}
            >
              <Text style={{ color: '#797979', fontSize: 14 }}>报警状态：</Text>
              <Text style={{ color: '#252525', fontSize: 14 }}>
                {' '}
                {item.alarmtype}
              </Text>
            </View>

            <View
              style={{ flexDirection: 'row', marginTop: 3, marginLeft: 21 }}
            >
              <Text style={{ color: '#797979', fontSize: 14 }}>报警持续时长(小时)</Text>
              <Text style={{ color: '#252525', fontSize: 14 }}>
                {' '}
                {item.standard}
              </Text>
            </View>
            <View
              style={{ flexDirection: 'row', marginTop: 3, marginLeft: 21 }}
            >
              <Text style={{ color: '#797979', fontSize: 14 }}>描述：</Text>
              <Text style={{ color: '#252525', fontSize: 14 }}>
                {' '}
                {item.Strength}
              </Text>
            </View>

            <TouchableOpacity
              style={{
                borderTopColor: '#f5f5f5',
                borderTopWidth: 1,
                marginTop: 10,
              }}
              onPress={this.phoneList}
            >
              <View
                style={{ flexDirection: 'row', marginTop: 10, marginLeft: 21 }}
              >
                <Text style={{ color: '#d2d2d2' }}>运维单</Text>
                <Image
                  source={require('../images/sjt.png')}
                  tintColor="#d2d2d2"
                  style={{
                    width: 15,
                    height: 15,
                    alignItems: 'center',
                    alignSelf: 'center',
                    marginLeft: 5,
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        </TouchableOpacity>
      );
    }
  

    render() {
        var data = [];
        for (var i = 0; i < 100; i++) {
            data.push({key: i, title: i + '',data:"data"});
        }

        return (
            <View style={{flex:1}}>
         
     <View style={{flex:1}}>
        <SectionList
        stickySectionHeadersEnabled={true}
          keyExtractor={this.extraUniqueKey}
          renderSectionHeader={this.renderSectionHeader}
          ListEmptyComponent={() => (<View></View>)}//当数据是空的时候显示的components
          ListFooterComponent={this.footer}
          refreshing={false}
          onRefresh={() => {
            //加载数据的事件
          }}
          onEndReached={(info) => {
          //滚动到屏幕底部的事件
          }}
          onEndReachedThreshold={Platform.OS === 'ios' ? 0 : 1}
          renderItem={this.renderItem}
          sections={this.state.data}
        />

                </View>

            </View>
        );
    }
}
const styles=StyleSheet.create({
    container:{

    },
    content:{
        width:"100%",
        
        backgroundColor:'yellow',
        justifyContent:'center',
        alignItems:'center'
    },
    cell:{
        height:100,
        backgroundColor:'purple',
        alignItems:'center',
        justifyContent:'center',
        borderBottomColor:'#ececec',
        borderBottomWidth:1

    },
    txt: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: 'white',
        fontSize: 30,
    }

});


   