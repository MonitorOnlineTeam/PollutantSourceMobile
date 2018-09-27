import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
export default class HistoryData extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: '历史数据',
        tabBarLable: '历史数据',
        headerBackTitle: null,
        headerTintColor: '#FFF',
        headerStyle: { backgroundColor: '#1895EF' },
        tabBarIcon: ({ focused, tintColor }) => (
          <Icon
            name={'clipboard'}
            size={20}
            style={{ color: focused ? tintColor : 'gray' }}
          />
        ),
      })
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}
