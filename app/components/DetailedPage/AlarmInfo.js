import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SCREEN_WIDTH } from '../../config/globalsize';
import { NavigationActions } from '../../utils';
import { connect } from 'react-redux';
/*
 * @Description: 报警信息.
 */
@connect()
export default class AlarmInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const thiss = this;
    return (
      <View style={{ backgroundColor: "#F1F4F9", width: SCREEN_WIDTH }}>
        <ScrollView style={{ marginBottom: "3%", height: "90%" }}>
          {/* 主模块 */}
          <TouchableOpacity style={styles.MainView} onPress={() => {
            this.props.dispatch(
              NavigationActions.navigate({
                routeName: 'AlarmInfoData'
              })
            );
          }}>
            {/* 标题 */}
            <View style={[styles.RowView]}>
              <Image
                style={styles.TitleImg}
                tintColor="#ff414e"
                source={require('../../images/gzbj.png')}
              />
              <Text style={[styles.TitleText]}>大唐集团-废气排口1</Text>
            </View>
            {/* 文字描述模块 */}
            <View style={styles.SpecificView}>
              <Text style={styles.ContentText}>时间：2018:-07-07 19:23:00</Text>
              <View style={styles.RowView}>
                <Text style={[styles.ContentText, styles.flexStyle]}>内容：气态分析仪故障</Text>
                <Text style={styles.ClickText}  >详细信息>></Text>
              </View>
            </View>
          </TouchableOpacity>
     
          {/*--------------重复样式---美丽的分割线结束-----------------  */}
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainView: {
    width: '96%',
    backgroundColor: "#FFFFFF",
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    borderRadius: 6,
    alignSelf: 'center',
    marginTop: 6,
    marginBottom: 3,
    shadowColor: "#E3E3E3",
    shadowOffset: { w: 0, h: 50 },
    shadowRadius: 3,
    shadowOpacity: 0.1,
    elevation: 1,
  },
  flexStyle:
  {
    flex: 1
  },
  TitleImg: {
    width: 13,
    height: 13,
    marginRight: 10,
  },
  TitleText: {
    color: '#3F3F3F',
    fontSize: 14
  },
  ContentText: {
    fontSize: 13,
    color: "#BCBCC5",
    lineHeight: 24

  },
  SpecificView:
  {

    marginLeft: 30
  },
  RowView:
  {
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  ClickText:
  {
    fontSize: 13,
    color: "#2F9CF4",
    paddingRight: 15
  }
});