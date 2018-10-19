import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { WhiteSpace, WingBlank } from 'antd-mobile-rn';
/*
 * @Description: 任务调整卡片.
 */
export default class ChargeAlarmInfoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        {/* 主块 */}
        <TouchableOpacity>
          <View style={styles.MainView}>
            {/* 标题 */}
            <View style={[styles.RowView]}>
              <Image
                style={styles.TitleImg}
                tintColor="#ff414e"
                source={require('../../images/gzbj.png')}
              />
              <WingBlank size="sm" />
              <Text style={styles.TitleText}>{this.props.name}</Text>
            </View>

            {/* 文字描述模块 */}
            <View style={styles.SpecificView}>
              <View style={styles.RowView}>
                <WingBlank size="lg" />
                <Text style={styles.CosntentText}>时间：</Text>
                <Text style={styles.CosntentText}>{this.props.AlarmTime}</Text>
              </View>
              <View style={styles.RowView}>
                <WingBlank size="lg" />

                <Text style={[styles.ContentText, styles.flexStyle]}>
                  最后报警时间：{this.props.LastAlarmTime}
                </Text>
              </View>
              <View style={styles.RowView}>
                <WingBlank size="lg" />

                <Text style={[styles.ContentText, styles.flexStyle]}>
                  运维人：{this.props.operationperson}
                </Text>
              </View>

              <View style={styles.RowView}>
                <WingBlank size="lg" />

                {/* <Text style={[styles.ContentText, styles.flexStyle]}></Text> */}
                <Text style={[styles.ContentText, styles.flexStyle]}>
                  电话：{this.props.phone}
                </Text>
                {/* <Text style={[styles.ContentText, styles.flexStyle]}></Text> */}
                <Text style={styles.ClickText}>详情信息>></Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainView: {
    width: '96%',
    backgroundColor: '#FFFFFF',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    borderRadius: 6,
    alignSelf: 'center',
    marginTop: 6,
    marginBottom: 5,
    shadowColor: '#E3E3E3',
    shadowOffset: { w: 0, h: 50 },
    shadowRadius: 3,
    shadowOpacity: 0.1,
    elevation: 1,
  },
  flexStyle: {
    flex: 1,
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
    marginLeft: '-2%',
  },
});
