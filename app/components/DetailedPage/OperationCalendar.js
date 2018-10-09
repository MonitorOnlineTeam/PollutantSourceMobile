import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { NavigationActions } from '../../utils';
import { Calendar, CalendarList, Agenda, LocaleConfig } from 'react-native-calendars';
import { WhiteSpace, WingBlank, DatePicker, List } from 'antd-mobile-rn';
LocaleConfig.locales['fr'] = {
  monthNames: [
    '一月',
    '二月',
    '三月',
    '四月',
    '五月',
    '六月',
    '七月',
    '八月',
    '九月',
    '十月',
    '十一月',
    '十二月',
  ],
  monthNamesShort: [
    '一月',
    '二月',
    '三月',
    '四月',
    '五月',
    '六月',
    '七月',
    '八月',
    '九月',
    '十月',
    '十一月',
    '十二月',
  ],
  dayNames: [
    '星期天',
    '星期一',
    '星期二',
    '星期三',
    '星期四',
    '星期五',
    '星期六',
  ],
  dayNamesShort: ['日', '一', '二', '三', '四', '五', '六'],
};
LocaleConfig.defaultLocale = 'fr';
/*
 * @Description: 运维日历.
 */
export default class OperationCalendar extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: '运维日历',
    tabBarLable: '运维日历',
    headerBackTitle: null,
    headerTintColor: '#FFF',
    headerStyle: { backgroundColor: '#1895EF' },
    headerTitleStyle: { alignSelf: 'center', },
    headerLeft: (
      <Text
        onPress={() => {
          navigation.dispatch(NavigationActions.back());
        }}
        style={{ marginLeft: 8, width: 32, height: 32, textAlign: 'center' }}
      >
        <Icon name={'angle-left'} size={32} style={{ color: '#FFFFFF' }} />
      </Text>
    )
  })
  constructor(props) {
    super(props);
    this.state = {
      value: undefined,
    };
  }
  onChange = (value) => {
    this.setState({ value });
  }
  render() {
    return (
      <View>
        {/* 标头 */}
        <View style={[styles.MainView, { flexDirection: "column", alignItems: "center" }]}>
          <View style={{
            flexDirection: "row", backgroundColor: "#FFFFFF", width: "100%", height: 50,
            justifyContent: "center", alignItems: "center"
          }}>
            <View style={{ backgroundColor: "#F7B507", borderRadius: 50, width: 15, height: 15 }}>

            </View>
            <WingBlank size="md" />
            <Text>异常</Text>
            <WingBlank size="md" />
            <View style={{ backgroundColor: "#26C439", borderRadius: 50, width: 15, height: 15 }}>

            </View>
            <WingBlank size="md" />
            <Text>正常</Text>
            <WingBlank size="md" />
            <View style={{ backgroundColor: "#2196F3", borderRadius: 50, width: 15, height: 15 }}>

            </View>
            <WingBlank size="md" />
            <Text>计划</Text>
            <WingBlank size="md" />
          </View>


          <TouchableOpacity style={{ width: "100%", height: 50, }}>
            <List style={{}}>
              <DatePicker
                value={this.state.value}
                mode="month"
                minDate={new Date(1918, 7, 6)}
                maxDate={new Date(2026, 11, 3)}
                onChange={this.onChange}
                format="YYYY-MM"
              >
                <List.Item arrow="down"  >时间</List.Item>
              </DatePicker>
            </List>
          </TouchableOpacity>


        </View>
        {/* 日历框 */}
        <View style={[styles.MainView, styles.MainViewbg]}>
          <Calendar
         
             style={{}}
            markingType={'custom'}
            markedDates={{
              '2018-09-28': {
                customStyles: {
                  container: {
                    backgroundColor: '#26C439',
                    elevation: 2
                  },
                  text: {
                    color: '#FFFFFF',

                  },
                },
              },
              '2018-09-29': {
                customStyles: {
                  container: {
                    backgroundColor: '#F7B507',
                    elevation: 2
                  },
                  text: {
                    color: '#FFFFFF',
                  },
                }
              },
              '2018-09-05': {
                customStyles: {
                  container: {
                    backgroundColor: '#2196F3',
                    elevation: 2
                  },
                  text: {
                    color: '#FFFFFF',
                  },
                }
              }

            }}
          />
        </View>
        <ScrollView style={{height:"28%"}}>

          <TouchableOpacity style={styles.MainViews}>
            {/* 标题 */}
            <View style={[styles.RowView]}>
              <Image
                style={styles.TitleImg}
                tintColor="#ff414e"
                source={require('../../images/rw.png')}
              />
              <WingBlank size="md" />
              <Text style={[styles.TitleText,{flex:1}]}>任务类型：例行任务</Text>
              <Text style={{fontSize:11,color:"#7E7E7E"}}>任务执行人：小王</Text>
              <WingBlank size="md" />
            </View>
            {/* 文字描述模块 */}
            <View style={styles.SpecificView}>
              <Text style={styles.ContentText}>排口地址：法电大唐</Text>
              <View style={styles.RowView}>
                <Text style={styles.ContentText}>任务执行状态：</Text>
                <Text style={{ color: "#D05F77", fontSize: 13 }} >逾期</Text>
              </View>


            </View>
          </TouchableOpacity>

          
          <TouchableOpacity style={styles.MainViews}>
            {/* 标题 */}
            <View style={[styles.RowView]}>
              <Image
                style={styles.TitleImg}
                tintColor="#ff414e"
                source={require('../../images/rw.png')}
              />
              <WingBlank size="md" />
              <Text style={[styles.TitleText,{flex:1}]}>任务类型：例行任务</Text>
              <Text style={{fontSize:11,color:"#7E7E7E"}}>任务执行人：小王</Text>
              <WingBlank size="md" />
            </View>
            {/* 文字描述模块 */}
            <View style={styles.SpecificView}>
              <Text style={styles.ContentText}>排口地址：法电大唐</Text>
              <View style={styles.RowView}>
                <Text style={styles.ContentText}>任务执行状态：</Text>
                <Text style={{ color: "#D05F77", fontSize: 13 }} >逾期</Text>
              </View>


            </View>
          </TouchableOpacity>

          
          <TouchableOpacity style={styles.MainViews}>
            {/* 标题 */}
            <View style={[styles.RowView]}>
              <Image
                style={styles.TitleImg}
                tintColor="#ff414e"
                source={require('../../images/rw.png')}
              />
              <WingBlank size="md" />
              <Text style={[styles.TitleText,{flex:1}]}>任务类型：例行任务</Text>
              <Text style={{fontSize:11,color:"#7E7E7E"}}>任务执行人：小王</Text>
              <WingBlank size="md" />
            </View>
            {/* 文字描述模块 */}
            <View style={styles.SpecificView}>
              <Text style={styles.ContentText}>排口地址：法电大唐</Text>
              <View style={styles.RowView}>
                <Text style={styles.ContentText}>任务执行状态：</Text>
                <Text style={{ color: "#D05F77", fontSize: 13 }} >逾期</Text>
              </View>


            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainView: {
    width: '96%',

    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 1,
    borderRadius: 6,
    alignSelf: 'center',
    marginTop: 7,




  },
  MainViews: {
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
  MainViewbg: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#E3E3E3",
    shadowOffset: { w: 0, h: 50 },
    shadowRadius: 3,
    shadowOpacity: 0.1,
    elevation: 1,
  },
  flexStyle:
  {

    height: 90,
    borderRadius: 6,
    width: "30%",
    backgroundColor: "#FFFFFF",
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

  },
  TitleText: {
    color: '#3F3F3F',
    fontSize: 14
  },
  ContentText: {
    fontSize: 13,
    color: "#7E7E7E",
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
});
