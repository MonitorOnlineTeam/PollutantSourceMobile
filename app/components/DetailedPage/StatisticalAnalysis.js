import React, { Component } from 'react';
import { View, Text } from 'react-native';
import knowledge from '../../Data/knowledge.json';

import { Grid } from 'antd-mobile-rn';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

/*
 * @Description: .
 */
@connect()
export default class StatisticalAnalysis extends Component {
    static navigationOptions = ({ router, navigation }) => {
        return {
          title: '统计分析',
          headerTintColor: '#fff',
          headerStyle: { backgroundColor: '#4f6aea' },
          headerLeft: (
            <Text
              onPress={() => {
                navigation.dispatch(NavigationActions.back());
              }}
              style={{ marginLeft: 5, width: 32, height: 32, textAlign: 'center' }}
            >
              <Icon name={'angle-left'} size={32} style={{ color: '#ffffff' }} />
            </Text>
          ),
        };
      }
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Grid
          data={knowledge}
          activeStyle={true}
          columnNum={3}
          onClick={da => {
            this.props.dispatch(
              NavigationActions.navigate({ routeName: 'FileDOC', params: da })
            );
          }}
        />
      </View>
    );
  }
}
