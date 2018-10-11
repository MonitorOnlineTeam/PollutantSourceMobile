import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Checkbox } from 'antd-mobile-rn';
/*
 * @Description: 报警详细信息卡片.
 */
export default class EarlyWarningCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkBox: this.props.chicked,
      visible: false,
      part1Value: 1,
      part2Value: 1,
    };
  }
  onpress = () => {
    var chicked = this.state.checkBox == '1' ? '0' : '1';
    this.setState({ checkBox: chicked });
  }
  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.onpress}>
          {/* 主块 */}
          <View style={styles.MainView}>
            {/* 标题 */}
            <View style={[styles.RowView]}>
              <Checkbox
                style={styles.TitleImg}
                checked={this.state.checkBox == '1' ? true : false}
              />
              <Text style={[styles.TitleText]}>{this.props.title}</Text>
            </View>
            {/* 文字描述模块 */}
            <View style={styles.SpecificView}>
              <Text style={styles.ContentText}>{this.props.dateTime}</Text>

              <View style={styles.RowView}>
                <Text style={styles.CosntentText}>预警次数：</Text>
                <Text style={{ color: '#FF4F4F', fontSize: 13 }}>
                  {this.props.number}
                </Text>
              </View>
              <View style={styles.RowView}>
                <Text style={styles.ContentText}>预警类别：</Text>
                <Text style={{ color: '#FF4F4F', fontSize: 13 }}>
                  {this.props.alarmType}
                </Text>
              </View>
              <View style={styles.RowView}>
                <Text style={styles.ContentText}>内容：</Text>
                <Text style={styles.ContentTexts}>
                  {this.props.contentTexts}
                </Text>
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
  },
  TitleImg: {
    width: 13,
    height: 13,
    marginRight: 10,
  },
  TitleText: {
    color: '#3F3F3F',
    fontSize: 14,
  },
  ContentText: {
    fontSize: 13,
    lineHeight: 24,
  },
  ContentTexts: {
    fontSize: 13,
    lineHeight: 24,
  },
  SpecificView: {
    marginLeft: '7%',
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
});
