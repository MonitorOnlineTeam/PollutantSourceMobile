import React, { Component } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import {
  Grid,
  Tabs,
  NoticeBar,
  Badge,
  List,
  WingBlank,
  WhiteSpace,
} from 'antd-mobile-rn';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { SCREEN_WIDTH } from '../../config/globalsize';
import { NavigationActions } from '../../utils';
import { connect } from 'react-redux';
import TaskAuditcard from '../Assembly/TaskAuditcard';
import AlarmListInfoData from '../Assembly/AlarmListInfoData.json';
const Item = List.Item;
const Brief = Item.Brief;
/*
 * @Description: 例行运维频次列表.
 */
@connect()
export default class RoutineOperationTimes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const RoutineOperationTimesData = [
      {
        PointName: '锅炉1号',
        TransmissionTfficiency: '20',
        Processed: '10',
        color: '#ED3334',
      },
      {
        PointName: '锅炉1号',
        TransmissionTfficiency: '20',
        Processed: '10',
        color: '#ED3334',
      },
      {
        PointName: '锅炉1号',
        TransmissionTfficiency: '20',
        Processed: '10',
        color: '#ED3334',
      },
      {
        PointName: '锅炉1号',
        TransmissionTfficiency: '20',
        Processed: '10',
        color: '#ED3334',
      },
      {
        PointName: '锅炉1号',
        TransmissionTfficiency: '20',
        Processed: '10',
        color: '#0EAF5F',
      },
      {
        PointName: '锅炉1号',
        TransmissionTfficiency: '20',
        Processed: '10',
        color: '#0EAF5F',
      },
      {
        PointName: '锅炉1号',
        TransmissionTfficiency: '20',
        Processed: '10',
        color: '#0EAF5F',
      },
      {
        PointName: '锅炉1号',
        TransmissionTfficiency: '20',
        Processed: '10',
        color: '#0EAF5F',
      },
      {
        PointName: '锅炉1号',
        TransmissionTfficiency: '20',
        Processed: '10',
        color: '#0EAF5F',
      },
      {
        PointName: '锅炉1号',
        TransmissionTfficiency: '20',
        Processed: '10',
        color: '#0EAF5F',
      },
      {
        PointName: '锅炉1号',
        TransmissionTfficiency: '20',
        Processed: '10',
        color: '#0EAF5F',
      },
      {
        PointName: '锅炉1号',
        TransmissionTfficiency: '20',
        Processed: '10',
        color: '#0EAF5F',
      },
    ];
    return (
      <View
        style={{
          backgroundColor: 'rgb(239,242,247)',
          width: '100%',
          marginTop: '5%',
        }}
      >
        <View style={{ width: '90%' }}>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              marginLeft: '5%',
              flexDirection: 'row',
            }}
          >
            <View style={{ width: '28%' }}>
              <Text
                style={{ textAlign: 'center', fontSize: 13, lineHeight: 50 }}
              >
                排口名
              </Text>
            </View>
            <View style={{ width: '36%', flexDirection: 'row' }}>
              <View style={{ flex: 4 }}>
                <Text
                  style={{ fontSize: 13, lineHeight: 50, textAlign: 'right' }}
                >
                  实际例行次数
                </Text>
              </View>
              <View
                style={{
                  width: '5%',
                  height: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                  flex: 1,
                }}
              >
                <Image
                  style={{ width: 10, height: 10 }}
                  source={require('../../images/shangxiajiantou.png')}
                />
              </View>
            </View>
            <View style={{ width: '36%', flexDirection: 'row' }}>
              <View style={{ flex: 4 }}>
                <Text
                  style={{ fontSize: 13, lineHeight: 50, textAlign: 'right' }}
                >
                  计划例行次数
                </Text>
              </View>
              <View
                style={{
                  width: '5%',
                  height: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                  flex: 1,
                }}
              >
                <Image
                  style={{ width: 10, height: 10 }}
                  source={require('../../images/shangxiajiantou.png')}
                />
              </View>
            </View>
          </View>
        </View>
        <FlatList
          data={RoutineOperationTimesData}
          renderItem={({ item }) => (
            <View
              style={{
                height: 45,
                width: '90%',
              }}
            >
              <TouchableOpacity
                style={{
                  height: 45,
                  width: '100%',
                  marginLeft: '5%',
                }}
              >
                <View style={{ flexDirection: 'row' }}>
                  <View
                    style={{
                      width: '1%',
                      backgroundColor: item.color,
                      height: 40,
                      borderRadius: 3,
                    }}
                  />
                  <View
                    style={{
                      flexDirection: 'row',
                      width: '99%',
                      backgroundColor: '#FFFFFF',
                      height: 40,
                      borderBottomRightRadius: 3,
                      borderTopRightRadius: 3,
                    }}
                  >
                    <View style={{ width: '28%' }}>
                      <Text
                        style={{
                          textAlign: 'center',
                          fontSize: 14,
                          lineHeight: 40,
                        }}
                      >
                        {item.PointName}
                      </Text>
                    </View>
                    <View style={{ width: '36%' }}>
                      <Text
                        style={{
                          textAlign: 'center',
                          fontSize: 14,
                          lineHeight: 40,
                        }}
                      >
                        {item.TransmissionTfficiency}
                      </Text>
                    </View>
                    <View style={{ width: '36%' }}>
                      <Text
                        style={{
                          textAlign: 'center',
                          fontSize: 14,
                          lineHeight: 40,
                        }}
                      >
                        {item.Processed}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <WhiteSpace style={{ backgroundColor: '#EFF2F7' }} />
            </View>
          )}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainView: {
    flexDirection: 'column',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: SCREEN_WIDTH - 30,
    backgroundColor: '#FFFFFF',
    marginTop: '2%',
    marginBottom: '2%',
    borderRadius: 5,
    shadowColor: '#E3E3E3',
    shadowOffset: { w: 0, h: 50 },
    shadowRadius: 3,
    shadowOpacity: 0.1,
    elevation: 1,
  },
  MainPadding: {
    padding: '3%',
  },
  ContentView: {
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 6,
    marginRight: 5,
  },
  TitleText: {
    color: '#9F9F9F',
    fontSize: 13,
  },
  ContentText: {
    color: '#404040',
    fontSize: 13,
  },
  ScrollTitleView: {
    flexDirection: 'row',
    padding: '2%',
    backgroundColor: '#9b9b9b',
    borderRadius: 5,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  ScrollTitleText: {
    flex: 1,
    fontSize: 13,
    color: '#FFFFFF',
  },
  ScrollContentView: {
    flexDirection: 'row',
    padding: '2%',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    borderTopWidth: 1,
    borderTopColor: '#E0E4E7',
  },
  ScrollContentText: {
    flex: 1,
    fontSize: 11,
  },
});
