import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Grid } from 'antd-mobile';
import { connect } from 'react-redux';

import { NavigationActions } from '../utils';
import knowledge from '../Data/knowledge.json';

@connect()
class knowledgebase extends Component {
  static navigationOptions = ({ router, navigation }) => {
    return {
      title: '知识库',
      headerTintColor: '#fff',
      headerStyle: { backgroundColor: '#4f6aea' },
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

export default knowledgebase;
