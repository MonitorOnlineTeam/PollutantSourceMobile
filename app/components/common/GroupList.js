import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

import globalcolor from '../../config/globalcolor';
import {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  WINDOW_HEIGHT,
} from '../../config/globalsize';
import NoDataComponent from '../../components/common/NoDataComponent';
import LoadingComponent from '../../components/common/LoadingComponent';

@connect(({ datapreview }) => ({
  groupItems: datapreview.groupItems,
  groupSelected: datapreview.groupSelected,
}))
class GroupList extends Component {
  _renderItem = ({ item }) => {
    console.log();
    return (
      <TouchableOpacity
        style={[
          {
            flexDirection: 'row',
            borderBottomColor: globalcolor.borderLightGreyColor,
            borderBottomWidth: 0.5,
            justifyContent: 'center',
            alignItems: 'center',
            height: 32,
          },
        ]}
        onPress={() => {
          this.props.itemClick(item);
        }}
      >
        {this.props.groupSelected == item ? (
          <Icon
            name={'ios-radio-button-on-outline'}
            size={24}
            style={[{ marginLeft: 8, marginRight: 8 }]}
          />
        ) : (
          <Icon
            name={'ios-radio-button-off-outline'}
            size={24}
            style={[{ marginLeft: 8, marginRight: 8 }]}
          />
        )}
        <Text style={[{ flex: 1, textAlign: 'center' }]}>{item}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    console.log(this.props.groupItems);
    return (
      <View style={[styles.container]}>
        <View style={[styles.titleContainer]}>
          <View style={{ height: 32, width: 32, marginLeft: 4 }} />
          <Text style={[styles.titleText]}>站点分组</Text>
          <TouchableOpacity
            style={[styles.closeIconTouchable]}
            onPress={() => {
              this.props.hideDialog();
            }}
          >
            <Icon
              name={'md-close-circle'}
              size={32}
              style={{ color: 'white' }}
            />
          </TouchableOpacity>
        </View>
        {this.props.spinning ? (
          <LoadingComponent Message={'正在努力加载数据'} />
        ) : this.props.groupItems.length > 0 ? (
          <FlatList
            style={[styles.flatlist]}
            data={this.props.groupItems}
            extraData={this.state}
            keyExtractor={(item, index) => {
              return index;
            }}
            renderItem={this._renderItem}
          />
        ) : (
          <NoDataComponent style={[styles.noDataComponent]} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: (SCREEN_HEIGHT * 2) / 3,
    width: (SCREEN_WIDTH * 3) / 4,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    height: 40,
    backgroundColor: globalcolor.titleBlue,
    flexDirection: 'row',
    width: (SCREEN_WIDTH * 3) / 4 - 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  titleText: {
    color: globalcolor.white,
    fontWeight: 'bold',
  },
  closeIconTouchable: {
    height: 32,
    width: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 4,
  },
  flatlist: {
    flex: 1,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    width: (SCREEN_WIDTH * 3) / 4 - 1,
  },
  noDataComponent: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
});

//make this component available to the app
export default GroupList;
