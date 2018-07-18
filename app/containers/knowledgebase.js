import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Grid } from 'antd-mobile-rn';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

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
<<<<<<< HEAD
          <Icon name={'angle-left'} size={32} style={{ color: '#ffffff' }} />
=======
          <Icon name={'angle-left'} size={32} style={{ color: 'black' }} />
>>>>>>> de69db19a87a0911761502f2ca8f65207eb936ce
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
