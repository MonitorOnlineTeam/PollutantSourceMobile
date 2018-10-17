import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  processColor,
} from 'react-native';
import { SCREEN_WIDTH } from '../../config/globalsize';
import { DatePicker, List } from 'antd-mobile-rn';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { WhiteSpace, WingBlank } from 'antd-mobile-rn';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
} from 'react-native-chart-kit';
/*
* @Description: 用户评价.
*/

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
    },
  ],
};
export default class UserEvaluation extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: '用户评价',
    tabBarLable: '用户评价',
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
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.MainView}>
        <TouchableOpacity style={{ width: '100%', height: 50 }}>
          <List style={{}}>
            <DatePicker
              value={this.state.value}
              mode="month"
              minDate={new Date(1918, 7, 6)}
              maxDate={new Date(2026, 11, 3)}
              onChange={this.onChange}
              format="YYYY-MM"
            >
              <List.Item arrow="down">时间</List.Item>
            </DatePicker>
          </List>
        </TouchableOpacity>
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
});
