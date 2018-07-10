import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';

let navigationData;
class DisplayDOC extends Component {
  static navigationOptions = ({ router, navigation }) => {
    navigationData = navigation;
    return {
      title: navigation.state.params.title,
      headerTintColor: '#fff',
      headerStyle: { backgroundColor: '#4f6aea' },
    };
  }
  render() {
    return (
      <ScrollView style={{ backgroundColor: '#ffffff' }}>
        <View style={{ backgroundColor: '#ffffff' }}>
          <Text
            style={{
              marginLeft: 20,
              marginRight: 20,
              fontSize: 21,
              alignContent: 'center',
              alignSelf: 'center',
              lineHeight: 28,
              color: '#464646',
            }}
          >
            {navigationData.state.params.title}
          </Text>
          <Text
            style={{
              marginLeft: 20,
              marginRight: 20,
              fontSize: 16,
              alignContent: 'center',
              alignSelf: 'center',
              marginTop: 10,
              lineHeight: 28,
            }}
          >
            {navigationData.state.params.content}
          </Text>
        </View>
      </ScrollView>
    );
  }
}

export default DisplayDOC;
