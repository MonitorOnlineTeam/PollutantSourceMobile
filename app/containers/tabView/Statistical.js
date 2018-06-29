// import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { Grid } from 'antd-mobile';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Iconi from 'react-native-vector-icons/dist/Ionicons';

import wholeSituationStyle from '../../config/wholeSituationStyle';
import { NavigationActions } from '../../utils';
/*
 * Copyright (c) 2018 houxfmark3955@163.com
 *
 * @Script: Statistical.js
 * @Author: houxf
 * @Email: houxfmark3955@163.com
 * @Create At: 2018-06-20 14:45:44
 * @Last Modified By: houxfmark3955@163.com
 * @Last Modified At: 2018-06-27 15:18:37
 * @Description: 统计.
 */

// create a component
@connect()
class Statistical extends Component {
  static navigationOptions = {
    // header: null,
    title: '统计',
    tabBarLabel: '统计',
    tabBarIcon: ({ focused, tintColor }) => (
      // <Image
      //   style={[
      //     wholeSituationStyle.icon,
      //     { tintColor: focused ? tintColor : 'gray' },
      //   ]}
      //   source={require('../../images/person.png')}
      // />
      <Icon
        name={'pie-chart'}
        size={20}
        style={{ color: focused ? tintColor : 'gray' }}
      />
    ),
  }

  constructor(props) {
    super(props);
    this.state = {
      rankList: [
        {
          icon: <Icon name={'bar-chart'} size={20} style={{ color: 'gray' }} />,
          text: `站点排污排名`,
          id: 0,
        },
        {
          icon: <Icon name={'bar-chart'} size={20} style={{ color: 'gray' }} />,
          text: `分厂排污排名`,
          id: 1,
        },
        {
          icon: <Icon name={'list-alt'} size={20} style={{ color: 'gray' }} />,
          text: `排污规划`,
          id: 2,
        },
        {
          icon: (
            <Icon name={'align-left'} size={20} style={{ color: 'gray' }} />
          ),
          text: `报警次数排名`,
          id: 3,
        },
        {
          icon: (
            <Icon name={'align-left'} size={20} style={{ color: 'gray' }} />
          ),
          text: `报警时长排名`,
          id: 4,
        },
        {
          icon: (
            <Icon name={'align-right'} size={20} style={{ color: 'gray' }} />
          ),
          text: `逾期统计排名`,
          id: 5,
        },
        {
          icon: (
            <Icon name={'align-right'} size={20} style={{ color: 'gray' }} />
          ),
          text: `故障次数排名`,
          id: 6,
        },
        {
          icon: <Icon name={'pie-chart'} size={20} style={{ color: 'gray' }} />,
          text: `故障原因`,
          id: 7,
        },
        {
          icon: <Icon name={'list-alt'} size={20} style={{ color: 'gray' }} />,
          text: `员工工作统计`,
          id: 8,
        },
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Grid
          data={this.state.rankList}
          columnNum={3}
          activeStyle={true}
          onClick={_el => {
            console.log(_el);
            switch (_el.id) {
              case 0:
                this.props.dispatch(
                  NavigationActions.navigate({
                    routeName: 'RankOfStationByEmissions',
                  })
                );
                break;
              case 1:
                this.props.dispatch(
                  NavigationActions.navigate({
                    routeName: 'RankOfBranchOfficeByEmissions',
                  })
                );
                break;
              case 2:
                this.props.dispatch(
                  NavigationActions.navigate({ routeName: 'EmissionsPlan' })
                );
                break;
              case 3:
                this.props.dispatch(
                  NavigationActions.navigate({
                    routeName: 'AlarmingNumberStatistics',
                  })
                );
                break;
              case 4:
                this.props.dispatch(
                  NavigationActions.navigate({
                    routeName: 'AlarmingDurationStatistics',
                  })
                );
                break;
              case 5:
                this.props.dispatch(
                  NavigationActions.navigate({ routeName: 'OverdueStatistics' })
                );
                break;
              case 6:
                this.props.dispatch(
                  NavigationActions.navigate({
                    routeName: 'BreakdownNumberStatistics',
                  })
                );
                break;
              case 7:
                this.props.dispatch(
                  NavigationActions.navigate({
                    routeName: 'FailureCauseStatistics',
                  })
                );
                break;
              case 8:
                this.props.dispatch(
                  NavigationActions.navigate({ routeName: 'Workmeter' })
                );
                break;
            }
          }}
        />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

// make this component available to the app
export default Statistical;
