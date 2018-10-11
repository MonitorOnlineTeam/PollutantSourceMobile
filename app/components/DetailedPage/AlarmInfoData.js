import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { SCREEN_WIDTH } from '../../config/globalsize';
import { NavigationActions } from '../../utils';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import CenterButton from '../Assembly/CenterButton';
import AlarmInfoDataCard from '../Assembly/AlarmInfoDataCard';
@connect()
/*
 * @Description: 报警详细信息.
 */
export default class AlarmInfoData extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
    //数据
    const persons = [
      {
        name: '大唐集团-废气排口',
        time: '2018年10月8日 16:20:27',
        type: '报警',
        c: '11',
        nr: '烟气分析仪型号CEMS1608081501',
      },
      {
        name: '大唐集团-废气排口',
        time: '2018年10月8日 16:20:27',
        type: '报警',
        c: '11',
        nr: '烟气分析仪型号CEMS160808150',
      },
      {
        name: '大唐集团-废气排口',
        time: '2018年10月8日 16:20:27',
        type: '报警',
        c: '11',
        nr: '烟气分析仪型号CEMS160808150',
      },
      {
        name: '大唐集团-废气排口',
        time: '2018年10月8日 16:20:27',
        type: '报警',
        c: '11',
        nr: '烟气分析仪型号CEMS160808150',
      },
      {
        name: '大唐集团-废气排口',
        time: '2018年10月8日 16:20:27',
        type: '报警',
        c: '11',
        nr: '烟气分析仪型号CEMS160808150',
      },
      {
        name: '大唐集团-废气排口',
        time: '2018年10月8日 16:20:27',
        type: '报警',
        c: '11',
        nr: '烟气分析仪型号CEMS160808150',
      },
      {
        name: '大唐集团-废气排口',
        time: '2018年10月8日 16:20:27',
        type: '报警',
        c: '11',
        nr: '0',
      },
      {
        name: '大唐集团-废气排口',
        time: '2018年10月8日 16:20:27',
        type: '报警',
        c: '11',
        nr: '1',
      },
      {
        name: '大唐集团-废气排口',
        time: '2018年10月8日 16:20:27',
        type: '报警',
        c: '11',
        nr: '1',
      },
    ];
    return (
      <View style={{}}>
        <ScrollView style={{ marginBottom: '3%', height: '90%' }}>
          {persons.map((item, key) => {
            return (
              <AlarmInfoDataCard
                title={item.name}
                dateTime={item.time}
                number={item.c}
                alarmType={item.type}
                key={key}
                contentText={item.nr}
              />
            );
          })}
        </ScrollView>
        <CenterButton
          title={'响应'}
          bgColor={'#2196F3'}
          TColor={'#FFFFFF'}
          click={() => {
            this.props.dispatch(
              NavigationActions.navigate({
                routeName: 'SignIn',
              })
            );
          }}
        />
      </View>
    );
  }
}
