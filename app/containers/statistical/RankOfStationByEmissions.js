//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import { Button } from '../../components';
import { NavigationActions } from '../../utils';
import GridItem from '../../components/RankOfStationByEmissions/GridItem';
// create a component
@connect()
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
          iconame:'bar-chart',
          title:'first',
          color:'red'
         },
         {
          iconame:'list-alt',
          title:'second',
          color:'#a324fb'
         },
         {
          iconame:'align-right',
          title:'third',
          color:'blue'
         },
         {
          iconame:'align-right',
          title:'forth',
          color:'grey'
         },
         {
          iconame:'pie-chart',
          title:'fiv',
          color:'#23ea89'
         }
      ],
    };
  }

  goBack = () => {
    this.props.dispatch(NavigationActions.back({ routeName: 'Account' }));
  }
  render() {
    return (
      <View style={{flexDirection:'row',flexWrap:'wrap'}}>
        {
          this.renderItems()
        }
      </View>
    );
  }
  renderItems=()=>{
    const result=[];
    this.state.rankList.map((item,key)=>{
      result.push(<GridItem onClick={()=>{
        alert(item.title);
      }} key={key} iconame={item.iconame} color={item.color} title={item.title}  />);
    });
    return result;
  }
}
 

//make this component available to the app
export default RankOfStationByEmissions;
