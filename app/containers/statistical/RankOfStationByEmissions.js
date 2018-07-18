//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions,InteractionManager } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { BarChart } from 'react-native-charts-wrapper';
import { Button } from '../../components';
import { NavigationActions, createAction } from '../../utils';
import GridItem from '../../components/RankOfStationByEmissions/GridItem';
import RankFlatList from '../../components/rank/RankFlatList';

import PollutantcodeBarRank from '../../components/rank/PollutantcodeBarRank';
const SCREEN_WIDTH = Dimensions.get('window').width;
let _me = null;
// create a component
@connect(({ app }) => ({ pressPollutantCode: app.pressPollutantCode }))
class RankOfStationByEmissions extends Component {
  static navigationOptions = ({ router, navigation }) => {
    return {
      title: '站点排污排名',
      tabBarLabel: '站点排污排名',
      headerLeft: (
        <Text
          onPress={() => {
            navigation.dispatch(NavigationActions.back());
          }}
          style={{ marginLeft: 5, width: 32, height: 32, textAlign: 'center' }}
        >
          <Icon name={'angle-left'} size={32} style={{ color: 'black' }} />
        </Text>
      ),
    };
  }
  constructor(props) {
    super(props);
    this.state = {
      rankList: [
        {
          iconame: 'bar-chart',
          title: 'first',
          color: 'red',
        },
        {
          iconame: 'list-alt',
          title: 'second',
          color: '#a324fb',
        },
        {
          iconame: 'align-right',
          title: 'third',
          color: 'blue',
        },
        {
          iconame: 'align-right',
          title: 'forth',
          color: 'grey',
        },
        {
          iconame: 'pie-chart',
          title: 'fiv',
          color: '#23ea89',
        },
      ],
    };
  }

  goBack = () => {
    this.props.dispatch(NavigationActions.back({ routeName: 'Account' }));
  }
  componentDidMount() {
    InteractionManager.runAfterInteractions(()=>{
      this.props.navigation.setParams({ navigatePress: this.rankUpDown });
   });
    
  }
  rankUpDown = () => {
    this.props.navigation.dispatch(
      createAction('app/getpressCodeData')({
        whitchPage: 'Rank',
        pressPollutantCodeRank:
          this.props.pressPollutantCode != null
            ? this.props.pressPollutantCode
            : mainmap.data[2].pollutantType[0].pollutantCode,
        pressPollutantCodeMap: '',
      })
    );
  }
  render() {
    return (
      <View
        style={{ flexDirection: 'column', flex: 1, backgroundColor: '#ffffff' }}
      >
        <PollutantcodeBarRank
          style={{ width: SCREEN_WIDTH, backgroundColor: '#ffffff' }}
        />
        <RankFlatList ref={ref => (this._rankFlatList = ref)} />
      </View>
    );
  }
}

//make this component available to the app
export default RankOfStationByEmissions;
