//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import navigation, { TabNavigator, TabBarBottom } from 'react-navigation';

import DataList from './DataList';
import Map from './Map';
import Workbench from './Workbench';
import Statistical from './Statistical';
import Account from './Account';
import ConsumableManage from '../workbench/ConsumableManage';

import { loadStorage } from '../../dvapack/storage';

// create a component
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      aa: {},
    };
  }

  async componentWillMount() {
    if (this.state.loading == true) {
      let nav = {
        // Map: { screen: Map },
      };
      const navs = await loadStorage('mainnavs');
      for (const r of navs) {
        for (const e of r.children) {
          if (r.text === '环保专工') {
            if (e.text === '数据') {
              nav.DataList = { screen: DataList };
            } else if (e.text === '报警') {
            } else if (e.text === '报备') {
            } else if (e.text === '分析') {
              nav.Statistical = { screen: Statistical };
            } else if (e.text === '我的') {
              nav.Account = { screen: Account };
            }
          } else if (r.text === '监测专员') {
            if (e.text === '数据') {
              nav.DataList = { screen: DataList };
            } else if (e.text === '报警') {
            } else if (e.text === '工作台') {
              nav.Workbench = { screen: Workbench };
            } else if (e.text === '记录') {
            } else if (e.text === '我的') {
              nav.Account = { screen: Account };
            }
          } else if (r.text === '运维主管') {
            if (e.text === '工作台') {
              nav.Workbench = { screen: Workbench };
            } else if (e.text === '数据') {
              nav.DataList = { screen: DataList };
            } else if (e.text === '历史') {
            } else if (e.text === '分析') {
              nav.Statistical = { screen: Statistical };
            } else if (e.text === '我的') {
              nav.Account = { screen: Account };
            }
          } else if (r.text === '运维人员') {
            if (e.text === '工作台') {
              nav.Workbench = { screen: Workbench };
            } else if (e.text === '数据一览') {
              nav.DataList = { screen: DataList };
            } else if (e.text === '历史记录') {
            } else if (e.text === '我的') {
              nav.Account = { screen: Account };
            }
          }
        }
      }
      debugger;

      this.setState({
        loading: false,
        aa: TabNavigator(nav, {
          headerMode: 'none',
          tabBarComponent: TabBarBottom,
          tabBarPosition: 'bottom',
          swipeEnabled: false,
          animationEnabled: false,
          lazyLoad: false,
        }),
      });
    }
  }

  render() {
    if (this.state.loading) {
      return <Text>123</Text>;
    } else {
      const SimpleAppNavigator = this.state.aa;
      return <SimpleAppNavigator />;
    }
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});
export default Main;
