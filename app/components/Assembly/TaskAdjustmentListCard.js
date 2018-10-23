import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { WhiteSpace, WingBlank,Checkbox } from 'antd-mobile-rn';
/*
 * @Description: 超标报警记录卡片.
 */
export default class TaskAdjustmentListCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{width:'100%',flexDirection:"row"}}>
            <View style={[styles.DateView,{backgroundColor:this.props.color}]}>
                <Text style={styles.DateViews}>2018-8</Text>
                <Text style={styles.DateViewsday}>20</Text>
            </View>
        {/* 主块 */}
          <View style={styles.MainView}>
            {/* 文字描述模块 */}
            <View style={styles.SpecificView}>
              <View style={styles.RowView}>
                <Text style={[styles.ContentText, styles.flexStyle]}>
                  报警时间：
                </Text>
                <Text>
                  {this.props.AlarmTime}
                </Text>
              </View>
              <View style={styles.RowView}>
                <Text style={[styles.ContentText, styles.flexStyle]}>
                  污染物：
                </Text>
                <Text>
                  {this.props.Pollutant}
                </Text>
              </View>
              <View style={styles.RowView}>
                <Text style={[styles.ContentText, styles.flexStyle]}>
                  报警类别：
                </Text>
                <Text>
                  {this.props.AlarmType}
                </Text>
              </View>
              <View style={styles.RowView}>
                <Text style={[styles.ContentText, styles.flexStyle]}>
                  报警状态：
                </Text>
                <Text>
                  {this.props.AlarmState}
                </Text>
              </View>
              <View style={styles.RowView}>
                <Text style={[styles.ContentText, styles.flexStyle]}>
                  运报警持续时间（小时）：
                </Text>
                <Text>
                  {this.props.AlarmContinueTime}
                </Text>
              </View>
              <View style={styles.RowView}>
                <Text style={[styles.ContentText, styles.flexStyle]}>
                  描述： 
                  <Text style={{color:'#000000'}}>
                  {this.props.Discription}
                  </Text>
                </Text>
              </View>
            </View>
          </View>
          <View style={{alignItems:'center',justifyContent:'center',marginLeft:5}}>
            <Checkbox
            />
          </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainView: {
    width: '80%',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    borderRadius: 6,
    alignSelf: 'center',
    position:"relative",
    zIndex:90,
    shadowColor:"#FFFFFF", 
    shadowOffset: { w: 0, h: 50 },
    shadowRadius: 3,
    shadowOpacity: 0.1,
    elevation: 1,
    backgroundColor:'#FFFFFF',
    marginLeft:-5

  },
  flexStyle: {
    color: 'rgb(180,179,199)',
  },
  TitleImg: {
    width: 13,
    height: 13,
  },
  TitleText: {
    color: '#3F3F3F',
    fontSize: 14,
  },
  ContentText: {
    fontSize: 13,
    color: '#FF4F4F',
    lineHeight: 24,
  },

  RowView: {
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  ClickText: {
    fontSize: 13,
    color: '#2F9CF4',
    paddingRight: 15,
  },
  CosntentText: {
    color: 'rgb(180,179,199)',
    fontSize: 13,
    lineHeight: 24,
  },
  SpecificView: {
    marginLeft: '3%',
  },
  DateView:{
    zIndex:100,left:10,
    shadowColor:"#FFFFFF", 
    shadowOffset: { w: 0, h: 50 },
    shadowRadius: 3,
    shadowOpacity: 0.1,
    elevation: 1,
    width:45,
    height:45,
    marginTop:'5%',
    borderRadius:5,
  },
  DateViews:{
    textAlign:'center',
    fontSize:12,
    color:'white',
  },
  DateViewsday:{
    textAlign:'center',
    fontSize:16,
    color:'white'
  },
});
