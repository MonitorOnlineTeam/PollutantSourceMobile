import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { SCREEN_WIDTH } from '../../config/globalsize';
import { NavigationActions } from '../../utils';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import CenterButton from '../Assembly/CenterButton';
@connect()
/*
 * @Description: 报警详细信息.
 */
export default class AlarmInfoData extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  static navigationOptions = ({ navigation }) => ({
    title: '报警信息',
    tabBarLable: '报警信息',
    headerBackTitle: null,
    headerTintColor: '#FFF',
    headerStyle: { backgroundColor: '#1895EF' },
    headerTitleStyle: { alignSelf: 'center' },
    headerLeft: (
      <Text
        onPress={() => {
          navigation.dispatch(NavigationActions.back());
        }}
        style={{ marginLeft: 8, width: 32, height: 32, textAlign: 'center' }}
      >
        <Icon name={'angle-left'} size={32} style={{ color: '#FFFFFF' }} />
      </Text>
    ),
  })
  render() {
    return (
      <View style={{}}>
        <ScrollView style={{ marginBottom: "3%", height: "90%" }}>
          {/*----------------------- 开始-------------------------- */}
          {/* 主块 */}
          <View style={styles.MainView}>
            {/* 标题 */}
            <View style={[styles.RowView]}>
              <Image
                style={styles.TitleImg}
                tintColor="#ff414e"
                source={require('../../images/gzbj.png')}
              />
              <Text style={[styles.TitleText]}>大唐集团-废气排口</Text>
            </View>
            {/* 文字描述模块 */}
            <View style={styles.SpecificView}>
              <Text style={styles.ContentText}>2018-07-07 19:23:00~2018-7-24 16:18:00</Text>
              <Text style={styles.ContentText}>报警次数：2</Text>
              <View style={styles.RowView}>
                <Text style={styles.ContentText}>报警次数：</Text>
                <Text style={{ color: "#D05F77", fontSize: 13 }} >故障报警</Text>
              </View>
              <Text style={styles.ContentText}>内容：烟气分析仪型号CEMS160808150</Text>
            </View>
          </View>
          {/* 主块 */}
          <View style={styles.MainView}>
            {/* 标题 */}
            <View style={[styles.RowView]}>
              <Image
                style={styles.TitleImg}
                tintColor="#ff414e"
                source={require('../../images/gzbj.png')}
              />
              <Text style={[styles.TitleText]}>雪地龙-排口</Text>
            </View>
            {/* 文字描述模块 */}
            <View style={styles.SpecificView}>
              <Text style={styles.ContentText}>2018-07-07 19:23:00~2018-7-24 16:18:00</Text>
              <Text style={styles.ContentText}>报警次数：2</Text>

              <View style={styles.RowView}>
                <Text style={styles.ContentText}>报警次数：</Text>
                <Text style={{ color: "#D05F77", fontSize: 13 }} >故障报警</Text>
              </View>
              <Text style={styles.ContentText}>内容：烟气分析仪型号CEMS160808150</Text>
            </View>
          </View>
          {/* 主块 */}
          <View style={styles.MainView}>
            {/* 标题 */}
            <View style={[styles.RowView]}>
              <Image
                style={styles.TitleImg}
                tintColor="#ff414e"
                source={require('../../images/gzbj.png')}
              />
              <Text style={[styles.TitleText]}>雪地龙-排口第三</Text>
            </View>
            {/* 文字描述模块 */}
            <View style={styles.SpecificView}>
              <Text style={styles.ContentText}>2018-07-07 19:23:00~2018-7-24 16:18:00</Text>
              <Text style={styles.ContentText}>报警次数：2</Text>
              <View style={styles.RowView}>
                <Text style={styles.ContentText}>报警次数：</Text>
                <Text style={{ color: "#D05F77", fontSize: 13 }} >故障报警</Text>
              </View>
              <Text style={styles.ContentText}>内容：烟气分析仪型号CEMS160808150</Text>
            </View>
          </View>
          {/* 主块 */}
          <View style={styles.MainView}>
            {/* 标题 */}
            <View style={[styles.RowView]}>
              <Image
                style={styles.TitleImg}
                tintColor="#ff414e"
                source={require('../../images/gzbj.png')}
              />
              <Text style={[styles.TitleText]}>大唐集团-排口</Text>
            </View>
            {/* 文字描述模块 */}
            <View style={styles.SpecificView}>
              <Text style={styles.ContentText}>2018-07-07 19:23:00~2018-7-24 16:18:00</Text>
              <Text style={styles.ContentText}>报警次数：2</Text>
              <View style={styles.RowView}>
                <Text style={styles.ContentText}>报警次数：</Text>
                <Text style={{ color: "#D05F77", fontSize: 13 }} >故障报警</Text>
              </View>
              <Text style={styles.ContentText}>内容：烟气分析仪型号CEMS160808150</Text>
            </View>
          </View>
          {/* 主块 */}
          <View style={styles.MainView}>
            {/* 标题 */}
            <View style={[styles.RowView]}>
              <Image
                style={styles.TitleImg}
                tintColor="#ff414e"
                source={require('../../images/gzbj.png')}
              />
              <Text style={[styles.TitleText]}>大唐集团-排口</Text>
            </View>
            {/* 文字描述模块 */}
            <View style={styles.SpecificView}>
              <Text style={styles.ContentText}>2018-07-07 19:23:00~2018-7-24 16:18:00</Text>
              <Text style={styles.ContentText}>报警次数：2</Text>

              <View style={styles.RowView}>
                <Text style={styles.ContentText}>报警次数：</Text>
                <Text style={{ color: "#D05F77", fontSize: 13 }} >故障报警</Text>
              </View>
              <Text style={styles.ContentText}>内容：烟气分析仪型号CEMS160808150</Text>
            </View>
          </View>
          {/* 主块 */}
          <View style={styles.MainView}>
            {/* 标题 */}
            <View style={[styles.RowView]}>
              <Image
                style={styles.TitleImg}
                tintColor="#ff414e"
                source={require('../../images/gzbj.png')}
              />
              <Text style={[styles.TitleText]}>大唐集团-排口</Text>
            </View>
            {/* 文字描述模块 */}
            <View style={styles.SpecificView}>
              <Text style={styles.ContentText}>2018-07-07 19:23:00~2018-7-24 16:18:00</Text>
              <Text style={styles.ContentText}>报警次数：2</Text>

              <View style={styles.RowView}>
                <Text style={styles.ContentText}>报警次数：</Text>
                <Text style={{ color: "#D05F77", fontSize: 13 }} >故障报警</Text>
              </View>
              <Text style={styles.ContentText}>内容：烟气分析仪型号CEMS160808150</Text>
            </View>
          </View>
          {/*----------------------------- 结束----------------------------------- */}
        </ScrollView >
        <CenterButton title={'响应'} bgColor={'#2196F3'} TColor={'#FFFFFF'} click={() => {
          this.props.dispatch(
            NavigationActions.navigate({
              routeName: 'SignIn'
            })
          );
        }}></CenterButton>
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
    marginBottom: 5,
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
    color: "#6C6C6C",
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