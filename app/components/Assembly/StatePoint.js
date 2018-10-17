import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { WhiteSpace, WingBlank } from 'antd-mobile-rn';
/*
 * @Description: 状态点.
 * 属性:stateType 类型:数组[{color:状态点颜色},{val:状态名称}]
 */
export default class StatePoint extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: '#FFFFFF',
          width: '100%',
          height: 50,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            display: this.props.showTitle,
          }}
        >
          <WingBlank size="md" />
          <Text style={{ color: '#000000', fontSize: 17.2 }}>状态</Text>
        </View>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{
            flexDirection: 'row',
            backgroundColor: '#FFFFFF',
            width: '100%',
            height: 50,
            flex: 1,
          }}
        >
          <WingBlank size="lg" />
          {this.props.stateType.map((item, key) => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flex: 1,
                }}
                key={key}
              >
                <View
                  style={{
                    backgroundColor: item.color,
                    borderRadius: 50,
                    width: 15,
                    height: 15,
                  }}
                />
                <WingBlank size="md" />
                <Text>{item.val}</Text>
                <WingBlank size="md" />
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}
