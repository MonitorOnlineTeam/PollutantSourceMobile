//import liraries
import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';

import globalcolor from '../../config/globalcolor';
import { SCREEN_WIDTH, normal_font_size } from '../../config/globalsize';
import { createAction } from '../../utils';
// import DateTitle from '../../components/DataPreview/DateTitle';

/**
 * 数据一览顶部的控制器，显示时间，切换查询条件
 */
@connect(
  ({ datapreview }) => ({
    // selectOption:datapreview.selectOption,
  }),
  null,
  null,
  { withRef: true }
)
class TopSelector extends PureComponent {
  constructor(props) {
    super(props);
    let myDate = new Date();
    let prefixDate =
      myDate.getFullYear() +
      '-' +
      (myDate.getMonth() + 1) +
      '-' +
      myDate.getDate();
    this.state = {
      datePickerVisible: false,
      selectOption: 2,
      textDate: prefixDate + ' ' + myDate.getHours() + ':00:00',
    };
  }
  getSelectOption = () => {
    // return this.props.selectOption;
    return this.state.selectOption;
  }
  _changeMTag = (index, searchTime) => {
    //更新数据
    console.log('_changeMTag');
    // this.props.dispatch(createAction('datapreview/updateState')({textDate:searchTime,selectOption:index}));
    this.setState({ selectOption: index });
    // this.props.dispatch(createAction('datapreview/loadPointWithData')({}));
    this._updateTime(searchTime);
  }

  _updateTime(date) {
    this.setState({ textDate: date });
  }
  _search = () => {
    this.props.dispatch(
      createAction('router/setModalVisible')({
        modalVisible: !this.props.modalVisible,
      })
    );
  }

  render() {
    return (
      <View
        style={[
          {
            height: 44,
            marginBottom: 1,
            width: SCREEN_WIDTH,
            alignItems: 'center',
            backgroundColor: 'white',
          },
        ]}
      >
        {/*<DateTitle />*/}
        <View
          style={[
            {
              width: SCREEN_WIDTH,
              flexDirection: 'row',
              justifyContent: 'space-around',
              borderBottomColor: globalcolor.borderGreyColor,
              borderTopColor: globalcolor.borderGreyColor,

              height: 44,
            },
          ]}
        >
          <TouchableOpacity
            style={[styles.optionStyle]}
            onPress={() => {
              this._search();
            }}
          >
            <Text
              style={[
                {
                  marginTop: 4,
                  marginBottom: 4,
                  height: 40,
                  lineHeight: 40,
                  fontSize: normal_font_size,
                },
              ]}
            >
              {this.state.textDate}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  optionStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
});

//make this component available to the app
export default TopSelector;
