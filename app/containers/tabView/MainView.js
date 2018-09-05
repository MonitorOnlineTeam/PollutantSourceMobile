//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import navigation,{ TabNavigator,TabBarBottom } from 'react-navigation';

import DataList from './DataList';
import Map from './Map';
import Workbench from './Workbench';
import Statistical from './Statistical';
import Account from './Account';

// create a component
class Main extends Component {
    static navigationOptions = {
        title: 'Main',
        headerTintColor: '#fff',
        headerStyle: { backgroundColor: '#4f6aea', height: 0 },
      }
    render() {
        let AppNavigator = TabNavigator({
            Map: { screen: Map },
            DataList: { screen: DataList },
            Workbench: { screen: Workbench },
            Statistical: { screen: Statistical },
            // Home: { screen: Home },
            Account: { screen: Account },
          },{
            headerMode: 'none',
            tabBarComponent: TabBarBottom,
            tabBarPosition: 'bottom',
            swipeEnabled: false,
            animationEnabled: false,
            lazyLoad: false,
          }); 
        console.log(navigation);
        return (
            <AppNavigator />
        );
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

//make this component available to the app
export default Main;
/**
 * let AppNavigator = createTabNavigator({
            Map: { screen: Map },
            DataList: { screen: DataList },
            Workbench: { screen: Workbench },
            Statistical: { screen: Statistical },
            // Home: { screen: Home },
            Account: { screen: Account },
          }); 
        return (
            <AppNavigator />
        );
 * 
*/