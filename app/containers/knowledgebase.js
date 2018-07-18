import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Grid } from 'antd-mobile-rn';
import { connect } from 'react-redux';

import { NavigationActions } from '../utils';
import knowledge from '../Data/knowledge.json';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
@connect()
class knowledgebase extends Component {
  static navigationOptions = ({ router, navigation }) => {
    return {
      title: '知识库',
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
