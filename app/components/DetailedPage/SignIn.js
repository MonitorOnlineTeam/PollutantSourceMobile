import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { SCREEN_WIDTH } from '../../config/globalsize';
import { connect } from 'react-redux';
import { NavigationActions } from '../../utils';
import TaskDetails from './TaskDetails';

/*
* @Description: 现场签到.
*/
@connect()
export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static navigationOptions = ({ navigation }) => ({
    title: '现场签到',
    tabBarLable: '现场签到',
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
    headerRight: (
      <View>
        <Image
          style={{ width: 23, height: 23, marginRight: 8, alignSelf: 'center' }}
          tintColor="#FFF"
          source={require('../../images/lssj.png')}
        />
      </View>
    ),
  })
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        {
          <View style={{ backgroundColor: '#F1F4F9', height: '100%' }}>
            <TaskDetails style={{ flex: 10 }} />
            {/* 第三模块 签到*/}
            <TouchableOpacity
              style={styles.Touchable}
              onPress={() => {
                this.props.navigation.dispatch(
                  NavigationActions.navigate({
                    routeName: 'ExecutionTasks',
                  })
                );
              }}
            >
              <Text
                style={{
                  alignSelf: 'center',
                  fontSize: 25,
                  color: '#FFF',
                  letterSpacing: 1,
                }}
              >
                签到
              </Text>
              <Text
                style={{ alignSelf: 'center', fontSize: 14, color: '#FFF' }}
              >
                08:30:00
              </Text>
            </TouchableOpacity>
            <View
              style={{
                width: SCREEN_WIDTH,
                height: '30%',
                flexDirection: 'row',
                marginBottom: '2%',
                marginTop: '5%',
                flex: 3,
                justifyContent: 'center',
              }}
            >
              <Image
                style={{ width: 14, height: 14, alignSelf: 'center' }}
                tintColor="#000"
                source={require('../../images/dw.png')}
              />
              <Text style={{ alignSelf: 'center', fontSize: 12 }}>
                {' '}
                定位地点：北京雪地龙
              </Text>
              <Text
                style={{ color: '#2A9DEE', alignSelf: 'center', fontSize: 12 }}
              >
                {' '}
                去重新定位
              </Text>
            </View>
          </View>
        }
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  Touchable: {
    flexDirection: 'column',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '2%',
    width: SCREEN_WIDTH - 260,
    height: SCREEN_WIDTH - 260,
    borderRadius: 5000000,
    justifyContent: 'center',
    backgroundColor: '#2A9DEE',
    flex: 2,
  },
});
