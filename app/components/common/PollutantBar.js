//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,  } from 'react-native';

import {SCREEN_WIDTH,normal_font_size} from '../../config/globalsize';
import globalcolor from '../../config/globalcolor';

// create a component
class PollutantBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            pollutantType:[
                {
                    label:'SO2',
                },
                {
                    label:'NO',
                },
                {
                    label:'烟尘',
                },
                {
                    label:'折算SO2',
                },
                {
                    label:'折算NO',
                },
                {
                    label:'折算烟尘',
                },
                {
                    label:'O2',
                },
                {
                    label:'烟气温度',
                },
                {
                    label:'烟气湿度',
                },
                {
                    label:'烟气净压',
                },
                {
                    label:'流量',
                },
            ],
            selectItem:0,
        };
    }
    render() {
        return (
            <View style={styles.container}>
                {this.state.pollutantType.map((item,key)=>{
                    return (<TouchableOpacity style={[{marginTop:1,}]}
                            key={key}
                            onPress={()=>{this.setState({selectItem:key});}}
                        >
                        <View style={[{width:SCREEN_WIDTH/6,height:44,
                            backgroundColor:this.state.selectItem===key? globalcolor.titleBlue:globalcolor.white,
                            justifyContent:'center',alignItems:'center',
                        }]}>
                            <Text style={[{color:this.state.selectItem===key? globalcolor.white:globalcolor.textBlack}]}>{item.label}</Text>
                        </View>
                     </TouchableOpacity>);
                    })
                }
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        width:SCREEN_WIDTH,
        flexDirection: 'row',
        height:90,
        flexWrap:'wrap',
        backgroundColor:'white'
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default PollutantBar;
