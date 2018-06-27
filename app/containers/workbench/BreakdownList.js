//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import { Button } from '../../components';
import { NavigationActions } from '../../utils';

// create a component
@connect()
class BreakdownList extends Component {
    static navigationOptions =({router,navigation})=>{
        return{
            title: '故障记录',
            tabBarLabel: '故障记录',
            headerLeft:(  
                <Text  onPress={()=>{
                    navigation.dispatch(NavigationActions.back());
                }} style={{marginLeft:5, width:32, height:32, textAlign:"center",}} >  
                <Icon name={'angle-left'} size={32} style={{color:'black'}}/>
                </Text>  
            )
        };
    }
    goBack = () => {
        this.props.dispatch(NavigationActions.back({ routeName: 'Account' }));
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>BreakdownList</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
});

//make this component available to the app
export default BreakdownList;
