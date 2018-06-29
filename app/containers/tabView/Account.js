import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import { Button } from '../../components';
import { createAction, NavigationActions } from '../../utils';
import wholeSituationStyle from '../../config/wholeSituationStyle';

@connect(({ app }) => ({ ...app }))
class Account extends Component {
  static navigationOptions = {
    // header: null,
    title: '我',
    tabBarLabel: '我',
    tabBarIcon: ({ focused, tintColor }) => (
      // <Image
      //   style={[
      //     wholeSituationStyle.icon,
      //     { tintColor: focused ? tintColor : 'gray' },
      //   ]}
      //   source={require('../../images/person.png')}
      // />
      <Icon
        name={'address-card'}
        size={20}
        style={{ color: focused ? tintColor : 'gray' }}
      />
    ),
  }

  gotoLogin = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Login' }));
  }

  logout = () => {
    this.props.dispatch(createAction('app/logout')());
  }

  render() {
    const { login } = this.props;
    return (
      <View style={styles.container}>
        <Button text="知识库" style={{ width: 50 }} />
        <Button text="通讯录" style={{ width: 50 }} />
        <Button text="通知提醒" style={{ width: 50 }} />
        <Button text="知识库" style={{ width: 50 }} />
        <Button text="知识库" style={{ width: 50 }} />
        {login ? (
          <Button text="Logout" onPress={this.logout} />
        ) : (
          <Button text="Goto Login" onPress={this.gotoLogin} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Account;
