import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  Button,
  TouchableOpacity,
  Platform,
  Image,
} from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { SCREEN_WIDTH } from '../config/globalsize';
import data from '../mockdata/Base/Code/T_Cod_ExceptionProcessing.json';
import moment from 'moment';
export default class AlarmRecord extends Component {
  constructor(props) {
    super(props);
    const time = [];
    data.map(item => {
      const date = moment(item.AlarmTime).format('YYYY-MM-DD');
      if (time.length !== 0) {
        const isno = true;
        time.map(a => {
          if (a.key == date) {
            isno = false;
            console.log('----------------------------------');
            console.log(a.data);
            a.data.push({
              AlarmType: item.AlarmType,
              AlarmTime: item.AlarmTime,
              ExceptRecoverTime: item.ExceptRecoverTime,
              State: item.State,
              AlarmMsg: item.AlarmMsg,
              AlarmContinuedTime: item.AlarmContinuedTime,
              PollutantName: item.PollutantName,
            });
          }
        });
        if (isno) {
          time.push({
            key: date,
            data: [
              {
                AlarmType: item.AlarmType,
                AlarmTime: item.AlarmTime,
                ExceptRecoverTime: item.ExceptRecoverTime,
                State: item.State,
                AlarmMsg: item.AlarmMsg,
                AlarmContinuedTime: item.AlarmContinuedTime,
                PollutantName: item.PollutantName,
              },
            ],
          });
        }
      } else {
        time.push({
          key: date,
          data: [
            {
              AlarmType: item.AlarmType,
              AlarmTime: item.AlarmTime,
              ExceptRecoverTime: item.ExceptRecoverTime,
              State: item.State,
              AlarmMsg: item.AlarmMsg,
              AlarmContinuedTime: item.AlarmContinuedTime,
              PollutantName: item.PollutantName,
            },
          ],
        });
      }
    });
    this.state = {
      data: time,
    };
  }

  extraUniqueKey = (item, index) => `index${index}${item}`
  footer = () => {
    //正在加载数据或者没有更多数据了
    return <View />;
  }
  renderSectionHeader = ({ section }) => (
    <View
      style={{
        borderBottomColor: '#BFBFBF',
        backgroundColor: '#ffffff',
        width: SCREEN_WIDTH - 20,
        borderRadius: 10,
        alignSelf: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          alignContent: 'center',
          color: '#8B8B8B',
          alignSelf: 'center',
          alignItems: 'center',
          fontSize: 15,
        }}
      >
        {section.key}
      </Text>
    </View>
  )
  renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          //item点击
        }}
        style={{
          flex: 1,
          width: SCREEN_WIDTH - 20,
          borderRadius: 10,
          marginBottom: 10,
          marginLeft: 10,
          backgroundColor: '#fff',
          marginTop: 5,
        }}
      >
        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              backgroundColor: 'white',
              flex: 1,
              borderRadius: 10,
              padding: 10,
              marginRight: 10,
              marginTop: 17,
              paddingBottom: 20,
            }}
          >
            <View style={{ flexDirection: 'row', padding: 5 }}>
              <Text
                style={{
                  alignSelf: 'center',
                  alignItems: 'center',
                  color: '#ff414e',
                  fontSize: 15,
                }}
              >
                {item.name}
              </Text>
            </View>
            <View
              style={{ flexDirection: 'row', marginTop: 3, marginLeft: 21 }}
            >
              <Text style={{ color: '#797979', fontSize: 14 }}>报警时间:</Text>
              <Text style={{ color: '#252525', fontSize: 14 }}>
                {' '}
                {item.AlarmTime}
              </Text>
            </View>
            <View
              style={{ flexDirection: 'row', marginTop: 3, marginLeft: 21 }}
            >
              <Text style={{ color: '#797979', fontSize: 14 }}>污染物：</Text>
              <Text style={{ color: '#252525', fontSize: 14 }}>
                {' '}
                {item.PollutantName}
              </Text>
            </View>
            <View
              style={{ flexDirection: 'row', marginTop: 3, marginLeft: 21 }}
            >
              <Text style={{ color: '#797979', fontSize: 14 }}>报警类别：</Text>
              <Text style={{ color: '#252525', fontSize: 14 }}>
                {' '}
                {item.AlarmType}次
              </Text>
            </View>
            <View
              style={{ flexDirection: 'row', marginTop: 3, marginLeft: 21 }}
            >
              <Text style={{ color: '#797979', fontSize: 14 }}>报警状态：</Text>
              <Text style={{ color: '#252525', fontSize: 14 }}>
                {' '}
                {item.State}
              </Text>
            </View>

            <View
              style={{ flexDirection: 'row', marginTop: 3, marginLeft: 21 }}
            >
              <Text style={{ color: '#797979', fontSize: 14 }}>
                报警持续时长(小时):
              </Text>
              <Text style={{ color: '#252525', fontSize: 14 }}>
                {' '}
                {item.AlarmContinuedTime}
              </Text>
            </View>
            <View
              style={{ flexDirection: 'row', marginTop: 3, marginLeft: 21 }}
            >
              <Text style={{ color: '#797979', fontSize: 14 }}>描述：</Text>
              <Text style={{ color: '#252525', fontSize: 14 }}>
                {' '}
                {item.AlarmMsg}
              </Text>
            </View>

            <TouchableOpacity
              style={{
                borderTopColor: '#f5f5f5',
                borderTopWidth: 1,
                marginTop: 10,
              }}
              onPress={this.phoneList}
            >
              <View
                style={{ flexDirection: 'row', marginTop: 10, marginLeft: 21 }}
              >
                <Text style={{ color: '#2D82FF' }}>运维单</Text>
                <Image
                  source={require('../images/sjt.png')}
                  tintColor="#2D82FF"
                  style={{
                    width: 15,
                    height: 15,
                    alignItems: 'center',
                    alignSelf: 'center',
                    marginLeft: 5,
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    console.log(this.state.data);
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <SectionList
            stickySectionHeadersEnabled={true}
            keyExtractor={this.extraUniqueKey}
            renderSectionHeader={this.renderSectionHeader}
            ListEmptyComponent={() => <View />} //当数据是空的时候显示的components
            ListFooterComponent={this.footer}
            refreshing={false}
            onRefresh={() => {
              //加载数据的事件
            }}
            onEndReached={info => {
              //滚动到屏幕底部的事件
            }}
            onEndReachedThreshold={Platform.OS === 'ios' ? 0 : 1}
            renderItem={this.renderItem}
            sections={this.state.data}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {},
  content: {
    width: '100%',

    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cell: {
    height: 100,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#ececec',
    borderBottomWidth: 1,
  },
  txt: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
    fontSize: 30,
  },
});
