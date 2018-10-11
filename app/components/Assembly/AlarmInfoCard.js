import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
/*
 * @Description: 报警信息卡片.
 */
export default class AlarmInfoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        {/* 主块 */}
        <View style={styles.MainView}>
          {/* 标题 */}
          <View style={[styles.RowView]}>
            <Image
              style={styles.TitleImg}
              tintColor="#ff414e"
              source={require('../../images/gzbj.png')}
            />
            <Text style={[styles.TitleText]}>{this.props.title}</Text>
          </View>
          {/* 文字描述模块 */}
          <View style={styles.SpecificView}>
            <View style={styles.RowView}>
              <Text style={styles.CosntentText}>时间：</Text>
              <Text style={[styles.ContentText, styles.flexStyle]}>
                {this.props.dateTime}
              </Text>
            </View>

            <View style={styles.RowView}>
              <Text style={styles.CosntentText}>内容：</Text>
              <Text style={[styles.ContentText, styles.flexStyle]}>
                {this.props.contentText}
              </Text>
              <Text style={styles.ClickText}>详情信息>></Text>
            </View>
          </View>
        </View>
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
    marginRight: 10,
  },
  TitleText: {
    color: '#3F3F3F',
    fontSize: 14,
  },
  ContentText: {
    fontSize: 13,
    color: '#3F3F3F',
    lineHeight: 24,
  },
  SpecificView: {
    marginLeft: 30,
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
    fontSize: 12,
  },
});
