import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Image } from 'react-native';
import { connect } from 'react-redux';
import { SCREEN_WIDTH } from '../../config/globalsize';
import CenterButton from '../Assembly/CenterButton';
import TaskDetails from './TaskDetails';
import { WhiteSpace, WingBlank, DatePicker, List } from 'antd-mobile-rn';
/*
 * @Description: 记录表核审核.
 */
export default class RecordSheetAuditing extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>

        <ScrollView style={{ height: "85%" }}>
          <TaskDetails></TaskDetails>
          <View style={styles.MainView} >
            <View style={[styles.TitleView]}>
              <Image
                style={{ height: 15, width: 15, }}
                tintColor="#5C9CFF"
                source={require('../../images/zkjh.png')}
              />
              <Text style={{ color: "#000000" }}>应急处理</Text>
            </View>
            <View>
              {/* 处理说明输入框 */}
              <TextInput style={styles.TitleInput} multiline={true} placeholder="应急处理信息"
                underlineColorAndroid="transparent"
                clearButtonMode="always"
                maxLength={100}
              >
              </TextInput>
              {/* 限制总字数 */}
              <Text style={{
                textAlign: "right", padding: "3%", color: "#BFBFBF", borderBottomColor: "#E5E9EB",
                borderBottomWidth: 1,
              }}>0/100</Text>
            </View>
          </View>

        </ScrollView>
        <WhiteSpace size="sm" />
        <CenterButton bgColor={"#1895EF"} TColor={"#FFFFFF"} title={"审核通过"}></CenterButton>
        <WhiteSpace />
        <CenterButton bgColor={"#FFFFFF"} TColor={"#BFBFBF"} title={"驳回"}></CenterButton>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainViews: {
    flexDirection: "column", marginLeft: "auto", marginRight: "auto", width: SCREEN_WIDTH - 20,
    backgroundColor: "#FFFFFF", marginTop: "2%", marginBottom: "2%", borderRadius: 5,
    shadowColor: "#E3E3E3",
    shadowOffset: { w: 0, h: 50 },
    shadowRadius: 3,
    shadowOpacity: 0.1,
    elevation: 1,
  },

  MainView: {
    flexDirection: "column", marginLeft: "auto", marginRight: "auto", width: SCREEN_WIDTH - 20,
    backgroundColor: "#FFFFFF", marginBottom: "10%", borderRadius: 5,

  },
  TitleView: {
    flexDirection: "row", marginLeft: "auto", marginRight: "auto", width: SCREEN_WIDTH - 20,
    backgroundColor: "#FFFFFF", borderTopRightRadius: 5, borderTopLeftRadius: 5,
    borderBottomColor: "#E5E9EB",
    borderBottomWidth: 1,

    padding: "3%"
  },
  TitleInput:
  {
    backgroundColor: "#FFFFFF",
    padding: "3%",

  },

});