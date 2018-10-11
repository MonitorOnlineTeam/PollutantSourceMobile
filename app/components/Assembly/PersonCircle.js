import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { WhiteSpace } from 'antd-mobile-rn';
/*
 * @Description: 人员周历名称头像模块.
 */
export default class PersonCircle extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          width: 62,
          height: 80,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <TouchableOpacity
          onPress={this.props.personpress}
          style={{
            width: 50,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            // 颜色值选中样式，未选中相反
            backgroundColor: this.props.selected ? '#26C439' : '#FFFFFF',
            borderRadius: 50,
          }}
        >
          <Image
            style={{ width: 20, height: 20 }}
            // 颜色值选中样式，未选中相反
            tintColor={this.props.selected ? '#FFFFFF' : '#26C439'}
            source={require('../../images/r.png')}
          />

          <WhiteSpace />
        </TouchableOpacity>
        {/* 姓名 */}
        <View style={{ flexDirection: 'row' }}>
          <WhiteSpace size="lg" />
          <Text style={{ fontSize: 11, color: '#676767' }}>
            {this.props.personname}
          </Text>
          {this.props.isnews ? (
            <View
              style={{
                backgroundColor: '#FF0000',
                alignItems: 'stretch',
                borderRadius: 50,
                width: 5,
                height: 5,
              }}
            />
          ) : (
            <View />
          )}
        </View>
      </View>
    );
  }
}
