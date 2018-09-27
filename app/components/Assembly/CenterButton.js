import React, { Component } from 'react';
import { View, Text,StyleSheet,Dimensions,TouchableOpacity } from 'react-native';
export default class CenterButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
 <TouchableOpacity onPress={()=>{this.props.click();}} 
 style={{backgroundColor:this.props.bgColor,width:"95%",height:35,marginLeft: "auto",
    marginRight:"auto",borderRadius:5,justifyContent:"center",borderColor:this.props.bColor,borderWidth:this.props.bwidth}}>
    <Text style={{color:this.props.TColor,alignSelf:"center",justifyContent:"center",fontSize:14}}>
    {this.props.title}</Text>
    </TouchableOpacity>  
    
    );
  }
}
const styles = StyleSheet.create({
Main:{
 


}



});