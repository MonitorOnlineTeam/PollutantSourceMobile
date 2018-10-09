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
import { NavigationActions } from '../utils';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { SCREEN_WIDTH } from '../config/globalsize';
import data from '../mockdata/Base/Code/T_Cod_ExceptionProcessing.json';
import moment from 'moment';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
export default class AlarmRecord extends Component {
  static navigationOptions = ({ router, navigation }) => {
    return {
      title: '报警记录',
      headerTintColor: '#000000',
      headerStyle: { backgroundColor: '#ffffff' },
      headerLeft: (
        <Text
          onPress={() => {
            navigation.dispatch(NavigationActions.back());
          }}
          style={{ marginLeft: 8, width: 32, height: 32, textAlign: 'center' }}
        >
          <Icon name={'angle-left'} size={32} style={{ color: '#000000' }} />
        </Text>
      ),
    };
  }
  constructor(props) {
    super(props);
    const time = [];
    data.map(item => {
      const date = moment(item.AlarmTime, moment.ISO_8601).format('YYYY-MM-DD');
      if (time.length !== 0) {
        const isno = true;
        time.map(a => {
          if (a.key == date) {
            isno = false;

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
        marginLeft: 5,
        marginTop: 10,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <Text
          style={{
            alignContent: 'center',
            color: '#000000',
            fontSize: 10,
          }}
        >
          {moment(section.key, moment.ISO_8601).format('YYYY')}
        </Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          alignContent: 'center',

          flexDirection: 'row',
        }}
      >
        <Text
          style={{
            color: '#000000',
            fontSize: 23,
            fontWeight: ('bold', '700'),
          }}
        >
          {moment(section.key, moment.ISO_8601).format('DD')}
        </Text>
        <Text
          style={{
            color: '#353535',
            fontSize: 13,
            fontWeight: ('bold', '100'),
          }}
        >
          {moment(section.key, moment.ISO_8601).format('MM月')}
        </Text>
      </View>
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
          width: SCREEN_WIDTH - 80,
          borderRadius: 10,
          marginBottom: 10,
          marginLeft: 70,
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

              marginRight: 10,
              marginTop: 17,

              borderColor: '#e3e3e3',
              borderWidth: 1,
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
            <View style={{ flexDirection: 'row', marginTop: 3, marginLeft: 8 }}>
              <Text style={{ color: '#797979', fontSize: 14 }}>报警时间:</Text>
              <Text style={{ color: '#252525', fontSize: 14 }}>
                {' '}
                {item.AlarmTime}
              </Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 3, marginLeft: 8 }}>
              <Text style={{ color: '#797979', fontSize: 14 }}>污染物：</Text>
              <Text style={{ color: '#252525', fontSize: 14 }}>
                {' '}
                {item.PollutantName}
              </Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 3, marginLeft: 8 }}>
              <Text style={{ color: '#797979', fontSize: 14 }}>报警类别：</Text>
              <Text style={{ color: '#252525', fontSize: 14 }}>
                {' '}
                {item.AlarmType}次
              </Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 3, marginLeft: 8 }}>
              <Text style={{ color: '#797979', fontSize: 14 }}>报警状态：</Text>
              <Text style={{ color: '#252525', fontSize: 14 }}>
                {' '}
                {item.State}
              </Text>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 3, marginLeft: 8 }}>
              <Text style={{ color: '#797979', fontSize: 14 }}>
                报警持续时长(小时):
              </Text>
              <Text style={{ color: '#252525', fontSize: 14 }}>
                {' '}
                {item.AlarmContinuedTime}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 3,
                marginLeft: 8,
                marginRight: 30,
              }}
            >
              <Text style={{ color: '#797979', fontSize: 14 }}>描述：</Text>
              <Text
                style={{
                  color: '#252525',
                  fontSize: 13,
                  marginRight: 15,
                  lineHeight: 20,
                }}
              >
                {' '}
                {item.AlarmMsg}
              </Text>
            </View>

            <TouchableOpacity
              style={{
                borderBottomStartRadius: 9,
                borderBottomEndRadius: 9,
                borderTopColor: '#f5f5f5',
                borderTopWidth: 1,
                marginTop: 10,
                width: '100%',
                padding: 10,
                backgroundColor: '#ffbf59',
              }}
              onPress={this.phoneList}
            >
              <View
                style={{ flexDirection: 'row', marginTop: 10, marginLeft: 8 }}
              >
                <Text style={{ color: '#ffffff' }}>运维单</Text>
                <Image
                  source={require('../images/sjt.png')}
                  tintColor="#ffffff"
                  style={{
                    width: 15,
                    height: 15,
                    alignItems: 'center',
                    alignSelf: 'center',
                    marginLeft: 8,
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
      <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
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
