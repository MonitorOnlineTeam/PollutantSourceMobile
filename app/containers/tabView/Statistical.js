// import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';

import wholeSituationStyle from '../../config/wholeSituationStyle';
/*
 * Copyright (c) 2018 houxfmark3955@163.com
 *
 * @Script: Statistical.js
 * @Author: houxf
 * @Email: houxfmark3955@163.com
 * @Create At: 2018-06-20 14:45:44
 * @Last Modified By: houxfmark3955@163.com
 * @Last Modified At: 2018-06-20 15:11:42
 * @Description: 统计.
 */

 
// create a component
@connect()
class Statistical extends Component {
    static navigationOptions = {
        header: null,
        title: '统计',
        tabBarLabel: '统计',
        tabBarIcon: ({ focused, tintColor }) => (
            <Image
            style={[wholeSituationStyle.icon, { tintColor: focused ? tintColor : 'gray' }]}
            source={require('../../images/person.png')}
            />
        ),
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Statistical</Text>
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
        backgroundColor: '#2c3e50',
    },
});

// make this component available to the app
export default Statistical;
