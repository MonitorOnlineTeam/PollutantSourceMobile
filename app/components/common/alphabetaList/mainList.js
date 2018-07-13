/**
 * Created by chenqiming on 16/4/16.
 */

import React, { Component, PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  Image,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import heightMsg from './heightMsg';
import styles from './style';
import { connect } from 'react-redux';
import { NavigationActions } from '../../../utils';

@connect()
export default class MainList extends React.Component {
  static propTypes = {
    dataSource: PropTypes.object,
  }

  constructor(props) {
    super(props);
  }

  rowsMsg(rowData) {
    let arr = [];
    let result = [];
    for (v in rowData) {
      arr.push(v);
    }
    arr.sort();
    for (let i = 0, length = arr.length; i < length; i++) {
      let first = [];
      let thisOne = rowData[arr[i]];
      for (let j = 0, length = thisOne.length; j < length; j++) {
        first.push(
          <TouchableOpacity
            key={j}
            onPress={() => {
              this.props.dispatch(
                NavigationActions.navigate({
                  routeName: 'PersonalMsg',
                  params: { personalInfo: thisOne[j] },
                })
              );
            }}
          >
            <View style={styles.listItem}>
              <Image style={styles.img} source={{ uri: thisOne[j].url }} />
              <Text>{thisOne[j].name}</Text>
            </View>
            <View style={styles.line} />
          </TouchableOpacity>
        );
      }
      result.push(
        <View
          onLayout={e => {
            heightMsg[arr[i]] = e.nativeEvent.layout.height;
          }}
          key={i}
        >
          <View style={styles.listTitle}>
            {arr[i] != 'zz' ? (
              <Text style={styles.listTitleText}>{arr[i].toUpperCase()}</Text>
            ) : (
              <Text style={styles.listTitleText}>#</Text>
            )}
          </View>
          <View>{first}</View>
        </View>
      );
    }
    return <View>{result}</View>;
  }

  render() {
    return (
      <ListView
        dataSource={this.props.dataSource}
        head={true}
        renderRow={rowData => this.rowsMsg(rowData)}
      />
    );
  }
}
