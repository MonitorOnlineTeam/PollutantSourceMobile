import React, { Component } from 'react';
import { View, Text ,StyleSheet,Image} from 'react-native';
import {  WingBlank ,WhiteSpace} from 'antd-mobile-rn';
/*
 * @Description: 人员周历任务模块.
 */
export default class TitleBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    // 任务类型 routine：例行任务，emergency：应急任务，
    icon = (value) => {
        switch (value) {
            case "例行任务":
                return (<Image
                    style={styles.TitleImg}
                    tintColor="#C8A7F5"
                    source={require('../../images/rw.png')}
                />);
                break;
            case "应急任务":
                return (<Image
                    style={styles.TitleImg}
                    tintColor="#F77A7A"
                    source={require('../../images/gzbj.png')}
                />);
                break;
        }

    }
    render() {
        return (
            <View style={[styles.MainView]}>
                <View style={[styles.RowView]}>
                    {
                        this.icon(this.props.taskType)
                    }
                      <WingBlank size="sm"/>
                    <Text style={[styles.TitleText,{flex:1}]}>任务类型：{this.props.taskType}</Text>
                  
                    <Text  style={{fontSize:11,color:"#989898"}}>{this.props.date}</Text>
                    <WingBlank size="sm"/>
                </View>
                <View style={styles.SpecificView}>
                    <Text style={styles.ContentText}>排口地址：{this.props.address}</Text>
                    <Text style={styles.ContentText}>任务执行状态:
                <Text style={{ color: this.props.stateColor }}>
                            {this.props.state}</Text></Text>

                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    MainView: {
        width: '100%',
        backgroundColor: "#FFFFFF",
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 15,
        borderRadius: 6,
        alignSelf: 'center',
        marginTop: 3,
        marginBottom: 2,
        shadowColor: "#E3E3E3",
        shadowOffset: { w: 0, h: 50 },
        shadowRadius: 3,
        shadowOpacity: 0.1,
        elevation: 1,
      },
 

    MainViewbg: {
        backgroundColor: "#FFFFFF",
        shadowColor: "#E3E3E3",
        shadowOffset: { w: 0, h: 50 },
        shadowRadius: 3,
        shadowOpacity: 0.1,
        elevation: 1,
    },
    flexStyle:
    {

        height: 90,
        borderRadius: 6,
        width: "30%",
        backgroundColor: "#FFFFFF",
        shadowOffset: { w: 0, h: 50 },
        shadowRadius: 3,
        shadowOpacity: 0.1,
        elevation: 1,
    },
    flexStyle:
    {
        flex: 1
    },
    TitleImg: {
        width: 17,
        height: 17,

    },
    TitleText: {
        color: '#3F3F3F',
        fontSize: 14
    },
    ContentText: {
        fontSize: 13,
        color: "#989898",
        lineHeight: 24

    },
    SpecificView:
    {

        marginLeft: 30
    },
    RowView:
    {

        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'

    },

});