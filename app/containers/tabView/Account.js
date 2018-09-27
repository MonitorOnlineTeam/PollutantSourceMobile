import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import { Button } from '../../components';
import { createAction, NavigationActions } from '../../utils';
import wholeSituationStyle from '../../config/wholeSituationStyle';
import { SCREEN_WIDTH } from '../../config/globalsize';
import { getToken } from '../../dvapack/storage';

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

  render() {
    const { login } = this.props;
    const array = [
      {
        icon: (
          <Image style={styles.icon} source={require('../../images/zsk.png')} />
        ),
        update: '',
        text: '知识库',
        onPress: (phoneList = () => {
          this.props.dispatch(
            NavigationActions.navigate({ routeName: 'knowledgebase' })
          );
        }),
      },
      {
        icon: (
          <Image
            style={styles.icon}
            source={require('../../images/txl.png')}
            tintColor="#00B7E3"
          />
        ),
        update: '',
        text: '通讯录',
        onPress: (phoneList = () => {
          this.props.dispatch(
            NavigationActions.navigate({ routeName: 'MyPhoneList' })
          );
        }),
      },
      {
        icon: (
          <Image
            style={styles.icon}
            source={require('../../images/tztx.png')}
          />
        ),
        update: '',
        text: '通知提醒',
        onPress: (logout = () => {
          // this.props.dispatch(createAction('app/logout')());
        }),
      },
      {
        icon: (
          <Image
            style={styles.icon}
            source={require('../../images/gyww.png')}
          />
        ),
        update: '',
        text: '关于我们',
        onPress: (logout = () => {
          // this.props.dispatch(createAction('app/logout')());
        }),
      },
      {
        icon: (
          <Image
            style={styles.icon}
            source={require('../../images/xtbb.png')}
          />
        ),
        update: '已经最新版',
        text: '版本更新',
        onPress: (logout = () => {
          // this.props.dispatch(createAction('app/logout')());
        }),
      },
      {
        icon: (
          <Image style={styles.icon} source={require('../../images/tc.png')} />
        ),
        update: '',
        text: '退出',
        onPress: (logout = () => {
          this.props.dispatch(createAction('app/logout')());
        }),
      },
    ];
    let user = getToken();
    return (
      <View
        style={{ flexDirection: 'column', backgroundColor: '#E3E3E3', flex: 1 }}
      >
        <View
          style={[
            {
              backgroundColor: '#007ACC',
              flexDirection: 'row',
              justifyContent: 'center',
              width: SCREEN_WIDTH,
              height: 30,
              alignContent: 'center',
              paddingTop: 10,
            },
          ]}
        >
          <Text style={[{ color: '#FFFFFF', fontSize: 20 }]}>{''}</Text>
        </View>
        <View
          style={{
            width: SCREEN_WIDTH,
            height: 100,
            flexDirection: 'row',
            backgroundColor: '#007ACC',
          }}
        >
          <Image
            source={require('../../images/userlogo.jpg')}
            style={{ marginLeft: 20, width: 70, height: 70, borderRadius: 100 }}
          />
          <View style={{ marginLeft: 10, marginTop: 15 }}>
            <Text style={{ color: '#FFFFFF', fontSize: 20 }}>
              {user.User_Name}
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <Image
                source={require('../../images/BJ.png')}
                style={{
                  width: 13,
                  height: 13,
                  tintColor: '#cacaca',
                  marginTop: 4,
                }}
              />
              
            </View>
          </View>
        </View>

        {array.map((item, key) => {
          return (
            <TouchableOpacity
              key={item.text}
              onPress={item.onPress}
              style={styles.TO}
            >
              {/*<Image style={styles.icon} source={item.icon} />*/}
              {item.icon}
              <Text style={styles.text}> {item.text}</Text>
              <Text style={{ marginRight: 10 }}> {item.update}</Text>
            </TouchableOpacity>
          );
        })}

        {/* {login ? (
          <Button text="Logout" onPress={this.logout} />
        ) : (
          <Button text="Goto Login" onPress={this.gotoLogin} />
        )} */}
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
  text_logout: {
    color: 'white',
    fontSize: 16,
  },
  text: {
    flex: 1,
    marginLeft: 5,
    fontSize: 14,
    color: '#343434',
  },
  icon: {
    paddingLeft: 10,
    width: 23,
    height: 23,
  },
  TO: {
    marginTop: 1,

    borderBottomColor: '#B01513',
    alignItems: 'center',
    paddingLeft: 10,
    width: SCREEN_WIDTH,
    backgroundColor: 'white',
    height: 50,
    flexDirection: 'row',
  },

  TO_logout: {
    alignItems: 'center',
    marginTop: 5,
    justifyContent: 'center',
    width: SCREEN_WIDTH,
    backgroundColor: '#31AFE5',
    height: 50,
  },
  TO_square: {
    alignItems: 'center',
    width: 100,
    height: 100,
    backgroundColor: '#FF9015',
  },
});

export default Account;
