import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { SCREEN_WIDTH } from '../../config/globalsize';
import { NavigationActions } from '../../utils';
import { connect } from 'react-redux';
/*
 * @Description:基本卡片.
 */
export default class BasicCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <TouchableOpacity style={styles.MainView} onPress={this.props.onclick}>
        <View style={[styles.RowView]}>
          <Image
            style={styles.TitleImg}
            tintColor="#ff414e"
            source={require('../../images/gzbj.png')}
          />
          <Text style={[styles.TitleText]}>{this.props.title}</Text>
          {this.props.list.map(item, key)}
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  MainView: {
    width: '96%',
    backgroundColor: '#FFFFFF',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    borderRadius: 6,
    alignSelf: 'center',
    marginTop: 6,
    marginBottom: 3,
    shadowColor: '#E3E3E3',
    shadowOffset: { w: 0, h: 50 },
    shadowRadius: 3,
    shadowOpacity: 0.1,
    elevation: 1,
  },
  flexStyle: {
    flex: 1,
  },
  TitleImg: {
    width: 13,
    height: 13,
    marginRight: 10,
  },
  TitleText: {
    color: '#3F3F3F',
    fontSize: 14,
  },
  ContentText: {
    fontSize: 13,
    color: '#BCBCC5',
    lineHeight: 24,
  },
  SpecificView: {
    marginLeft: 30,
  },
  RowView: {
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  ClickText: {
    fontSize: 13,
    color: '#2F9CF4',
    paddingRight: 15,
  },
});
