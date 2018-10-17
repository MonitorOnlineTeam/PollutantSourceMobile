import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Checkbox, WingBlank } from 'antd-mobile-rn';
import { connect } from 'react-redux';

import { NavigationActions, createAction } from '../../utils';
//多选按钮
@connect()
export default class Checkboxes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkBox: this.props.chicked,
      visible: false,

    };
  }
  onpress = () => {
    var chicked = this.state.checkBox == '1' ? '0' : '1';
    this.setState({ checkBox: chicked });
    this.props.dispatch(createAction('earlyWarning/allSelect')({keys:chicked}));
  }
  render() {
    return (
      <View style={{ height: 50, flexDirection: "row" }}>
        <TouchableOpacity style={{ width: "70%", height: 50,flexDirection: "row", backgroundColor: "#FFFFFF",alignItems:"center",borderTopWidth:1,borderTopColor:"#E0E0E0" }} onPress={this.onpress}>
        <WingBlank size="lg" />
          <Checkbox
            style={{ width: 15, height: 15 }}
            checked={this.state.checkBox == '1' ? true : false}
          /> 
            <WingBlank size="sm" />
          <Text style={{color:this.props.bgColor}}>全选</Text>
      
        <WingBlank size="lg" />
        <Text style={{color:this.props.bgColor}}>共选<Text style={{color:"#FF0000"}}>{this.props.N}</Text>条信息</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.click();
          }}
          style={{
            backgroundColor: this.props.bgColor,
            width: '30%',
            height: 50,


            justifyContent: "center",
            borderColor: this.props.bColor,
            borderWidth: this.props.bwidth,
          }}
        >
          <Text
            style={{
              color: this.props.TColor,
              alignSelf: 'center',
              justifyContent: 'center',
              fontSize: 14,
            }}
          >
            {this.props.title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
