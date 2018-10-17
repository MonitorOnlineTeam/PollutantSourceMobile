//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import navigation, { TabNavigator, TabBarBottom } from 'react-navigation';

import DataList from './DataList';
import Map from './Map';
import Workbench from './Workbench';
import ExecutionTasks from '../../components/DetailedPage/ExecutionTasks';
import My from '../../components/DetailedPage/My';
import SiteInformation from '../../components/DetailedPage/SiteInformation';
import StatisticalAnalysis from '../../components/DetailedPage/StatisticalAnalysis';
import HistoryData from './HistoryData';
import Statistical from './Statistical';

import Account from './Account';
import ConsumableManage from '../workbench/ConsumableManage';
//import OperationStatus from '../../components/DetailedPage/OperationStatus';
import OperationCalendar from '../../components/DetailedPage/OperationCalendar';

import OperationStatus from '../../components/DetailedPage/RecordSheetAuditing';
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
  static navigationOptions = ({ navigation }) => ({
    title: '工作台',
    tabBarLable: '工作台',
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
              nav.StatisticalAnalysis = { screen: StatisticalAnalysis };
            } else if (e.text === '我的') {
              nav.My = { screen: My };
            }
          }
        }
      }

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
