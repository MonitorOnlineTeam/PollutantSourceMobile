import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import { WhiteSpace} from 'antd-mobile-rn';
/*
 * @Description: 运维状况蓝色卡片.
 */
export default class OperationStatusSlide extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <View style={[styles.containerVertical]}>


        <View style={{ width: "90%",  backgroundColor: "#30A0F1", flexDirection:"column", alignItems: "center", alignSelf: "center", borderRadius: 5 }}>
        <WhiteSpace size="lg"/>
          <Text style={{ fontSize: 12, color: "#FFFFFF" }}>企业运维统计</Text>
          <WhiteSpace/>
  
            <Text style={{ fontSize: 16, color: "#FFFFFF" }}>
            企业平均传输有效率： {this.props.effective}
          </Text>

          <WhiteSpace/>
          <Text style={{ fontSize: 12, color: "#FFFFFF" }}>
          辖区排口数:{this.props.outNumber}
          </Text>
          <WhiteSpace/>
      <TouchableOpacity style={{alignItems: "center", alignSelf: "center",justifyContent:"center",backgroundColor:"#8EC7F2",borderRadius:50}}>
      <Text style={{color:"#FFFFFF",padding:5}}>例行运维次数：{this.props.operatioNumber}</Text>
      </TouchableOpacity>
      <WhiteSpace size="lg" />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({


    containerVertical:
    {

  
      width: "100%",

    },

  });