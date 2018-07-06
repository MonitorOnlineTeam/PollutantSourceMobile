//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { connect } from 'react-redux';

import {
  SCREEN_WIDTH,
  little_font_size,
  little_font_size2,
} from '../../config/globalsize';
import globalcolor from '../../config/globalcolor';
import { defaultPollutantCodes } from '../../mockdata/Base/commonbase';

class LabelHeadView extends Component {
  render() {
    return (
      <View
        style={[
          styles.container,
          {
            flexDirection: 'row',
            borderBottomColor: globalcolor.borderLightGreyColor,
            borderBottomWidth: 1,
          },
          {
            width: (defaultPollutantCodes.length * SCREEN_WIDTH) / 3,
            height: 32,
          },
        ]}
      >
        {defaultPollutantCodes.map(item => {
          return (
            <View key={item.Value} style={[styles.oneLabel]}>
              <View
                style={[
                  {
                    height: 28,
                    width: 1,
                    backgroundColor: globalcolor.borderGreyColor,
                  },
                ]}
              />
              <View
                style={[
                  { flex: 1, justifyContent: 'center', alignItems: 'center' },
                ]}
              >
                <Text style={[{ fontSize: little_font_size }]}>
                  {item.Name}
                </Text>
                <Text style={[{ fontSize: little_font_size2 }]}>
                  {item.Unit}
                </Text>
              </View>
            </View>
          );
        })}
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
  oneLabel: {
    width: SCREEN_WIDTH / 3,
    height: 32,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

//make this component available to the app
export default LabelHeadView;
