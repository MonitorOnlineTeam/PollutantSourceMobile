//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { SCREEN_WIDTH } from '../../config/globalsize';
// create a component
class GridItem extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onClick}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
          width: SCREEN_WIDTH / 3 - 2,
          height: SCREEN_WIDTH / 3 - 2,
          borderRightWidth: 1,
          borderRightColor: 'grey',
          borderBottomColor: 'grey',
          borderBottomWidth: 1,
        }}
      >
        <View>
          <Icon
            name={this.props.iconame}
            size={20}
            style={{ color: this.props.color }}
          />
        </View>
        <View style={{ marginTop: 5 }}>
          <Text>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
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
export default GridItem;
