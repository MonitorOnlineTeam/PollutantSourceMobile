import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
/*
 * @Description: 报警详细信息卡片.
 */
export default class AlarmInfoDataCard extends Component {
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
            <Text style={styles.ContentText}>{this.props.dateTime}</Text>

            <View style={styles.RowView}>
              <Text style={styles.CosntentText}>报警次数：</Text>
              <Text style={{ color: '#D05F77', fontSize: 13 }}>
                {this.props.number}
              </Text>
            </View>
            <View style={styles.RowView}>
              <Text style={styles.ContentText}>报警类别：</Text>
              <Text style={{ color: '#D05F77', fontSize: 13 }}>
                {this.props.alarmType}
              </Text>
            </View>
            <View style={styles.RowView}>
              <Text style={styles.ContentText}>内容：</Text>
              <Text style={styles.ContentText}>{this.props.contentText}</Text>
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
    color: '#6C6C6C',
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
});
