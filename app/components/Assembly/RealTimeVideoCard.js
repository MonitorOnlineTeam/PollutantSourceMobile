import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { WhiteSpace, WingBlank } from 'antd-mobile-rn';
/*
 * @Description: 实时视频卡片.
 */
export default class RealTimeVideoCard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={{ width: '100%', height: '100%'}}>
                <View style={{ width: '100%' }}>
                    <View style={{ width: '90%', height: 36, marginLeft: '5%', backgroundColor: '#FFFFFF', flexDirection: 'row', marginTop: 6, marginBottom: 6, borderRadius: 5 }}>
                        <View style={{ flexDirection: 'row', flex: 1,marginLeft:8 }}>
                            <View
                                style={{
                                    alignContent: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Image
                                    style={{
                                        width: 18,
                                        height: 18,
                                    }}
                                    source={require('../../images/mingcheng.png')}
                                />
                            </View>

                            <View
                                style={{
                                    alignContent: 'center',
                                    justifyContent: 'center',
                                    marginLeft: 5,
                                }}
                            >
                                <Text style={{ fontSize: 13, lineHeight: 30 }}>
                                    名称:{this.props.Name}
                                </Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row',marginRight:8}}>
                            <View
                                style={{
                                    alignContent: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Image
                                    style={{
                                        width: 18,
                                        height: 18,
                                    }}
                                    tintColor='#F9AF63'
                                    source={require('../../images/r.png')}
                                  
                                />
                            </View>

                            <View
                                style={{
                                    alignContent: 'center',
                                    justifyContent: 'center',
                                    marginLeft: 5,
                                }}
                            >
                                <Text style={{ fontSize: 13, lineHeight: 30 }}>
                                    {this.props.Person}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: '90%', height: 200, backgroundColor: '#C5D2E3', borderRadius: 8, marginLeft: '5%', alignItems: 'center', justifyContent: 'center' }}>
                        <Image
                            style={{
                                width: 45,
                                height: 45,
                            }}
                            source={require('../../images/bofang.png')}
                        />
                    </View>

                </View>
                <View style={{ height: 25, width: '90%', marginLeft: '5%', marginTop: 10, }}>
                    <Text style={{ width: 80, height: 25, backgroundColor: '#1ACEA9', color: '#FFFFFF', lineHeight: 25, textAlign: 'center', borderRadius: 5, fontSize: 12 }}>
                        气态分析仪
                        </Text>
                </View>
                <View style={{ height: 48, width: '90%', marginLeft: '5%', marginTop: 5, flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', }}>
                    <View style={{ width: '30%', marginTop: 5 }}>
                        <View style={{ width: '100%', flexDirection: 'row', backgroundColor: '#FFFFFF', borderRadius: 5, height: 40 }}>
                            <View
                                style={{
                                    alignContent: 'center',
                                    justifyContent: 'center',
                                    marginLeft:5
                                }}
                            >
                                <Image
                                    style={{
                                        width: 12,
                                        height: 12,
                                    }}
                                    source={require('../../images/yuanhuan.png')}
                                />
                            </View>

                            <View
                                style={{
                                    alignContent: 'center',
                                    justifyContent: 'center',
                                    marginLeft: 5,
                                }}
                            >
                                <Text style={{ fontSize: 13, lineHeight: 30 }}>
                                    NOx:{this.props.NOx}
                                    {this.state.PointContentList
                                        ? this.state.PointContentList[0]
                                            ? this.state.PointContentList[0]
                                                .TransmissionEfficiency
                                            : ''
                                        : ''}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: '30%', marginTop: 5,marginLeft:'4.9%'}}>
                        <View style={{ width: '100%', flexDirection: 'row', backgroundColor: '#FFFFFF', borderRadius: 5, height: 40 }}>
                            <View
                                style={{
                                    alignContent: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Image
                                    style={{
                                        width: 12,
                                        height: 12,
                                        marginLeft:5
                                    }}
                                    source={require('../../images/yuanhuan.png')}
                                />
                            </View>

                            <View
                                style={{
                                    alignContent: 'center',
                                    justifyContent: 'center',
                                    marginLeft: 5,
                                }}
                            >
                                <Text style={{ fontSize: 13, lineHeight: 30 }}>
                                    SO2:{this.props.SO2}
                                    {this.state.PointContentList
                                        ? this.state.PointContentList[0]
                                            ? this.state.PointContentList[0]
                                                .TransmissionEfficiency
                                            : ''
                                        : ''}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: '30%', marginTop: 5,marginLeft:'4.9%'}}>
                        <View style={{ width: '100%', flexDirection: 'row', backgroundColor: '#FFFFFF', borderRadius: 5, height: 40 }}>
                            <View
                                style={{
                                    alignContent: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Image
                                    style={{
                                        width: 12,
                                        height: 12,
                                        marginLeft:5
                                    }}
                                    source={require('../../images/yuanhuan.png')}
                                />
                            </View>

                            <View
                                style={{
                                    alignContent: 'center',
                                    justifyContent: 'center',
                                    marginLeft: 5,
                                }}
                            >
                                <Text style={{ fontSize: 13, lineHeight: 30 }}>
                                    烟尘:{this.props.yanchen}
                                    {this.state.PointContentList
                                        ? this.state.PointContentList[0]
                                            ? this.state.PointContentList[0]
                                                .TransmissionEfficiency
                                            : ''
                                        : ''}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ height: 25, width: '90%', marginLeft: '5%', marginTop: 10, }}>
                    <Text style={{ width: 80, height: 25, backgroundColor: '#FF874B', color: '#FFFFFF', lineHeight: 25, textAlign: 'center', borderRadius: 5, fontSize: 12 }}>
                        烟气分析仪
                        </Text>
                </View>
                <View style={{ height: 144, width: '90%', marginLeft: '5%', marginTop: 5, flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', }}>
                <View style={{ width: '30%', marginTop: 8}}>
                        <View style={{ width: '100%', flexDirection: 'row', backgroundColor: '#FFFFFF', borderRadius: 5, height: 40 }}>
                            <View
                                style={{
                                    alignContent: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                 <Image
                                    style={{
                                        width: 12,
                                        height: 12,
                                        marginLeft:5
                                    }}
                                    source={require('../../images/yuanhuan.png')}
                                />
                            </View>

                            <View
                                style={{
                                    alignContent: 'center',
                                    justifyContent: 'center',
                                    marginLeft: 5,
                                }}
                            >
                                <Text style={{ fontSize: 13, lineHeight: 30 }}>
                                    温度:{this.props.wendu}
                                    {this.state.PointContentList
                                        ? this.state.PointContentList[0]
                                            ? this.state.PointContentList[0]
                                                .TransmissionEfficiency
                                            : ''
                                        : ''}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: '30%', marginTop: 8,marginLeft:'4.9%'}}>
                        <View style={{ width: '100%', flexDirection: 'row', backgroundColor: '#FFFFFF', borderRadius: 5, height: 40 }}>
                            <View
                                style={{
                                    alignContent: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                 <Image
                                    style={{
                                        width: 12,
                                        height: 12,
                                        marginLeft:5
                                    }}
                                    source={require('../../images/yuanhuan.png')}
                                />
                            </View>

                            <View
                                style={{
                                    alignContent: 'center',
                                    justifyContent: 'center',
                                    marginLeft: 5,
                                }}
                            >
                                <Text style={{ fontSize: 13, lineHeight: 30 }}>
                                    压力:{this.props.yali}
                                    {this.state.PointContentList
                                        ? this.state.PointContentList[0]
                                            ? this.state.PointContentList[0]
                                                .TransmissionEfficiency
                                            : ''
                                        : ''}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: '30%', marginTop: 8,marginLeft:'4.9%'}}>
                        <View style={{ width: '100%', flexDirection: 'row', backgroundColor: '#FFFFFF', borderRadius: 5, height: 40 }}>
                            <View
                                style={{
                                    alignContent: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Image
                                    style={{
                                        width: 12,
                                        height: 12,
                                        marginLeft:5
                                    }}
                                    source={require('../../images/yuanhuan.png')}
                                />
                            </View>

                            <View
                                style={{
                                    alignContent: 'center',
                                    justifyContent: 'center',
                                    marginLeft: 5,
                                }}
                            >
                                <Text style={{ fontSize: 13, lineHeight: 30 }}>
                                    流速:{this.props.liusu}
                                    {this.state.PointContentList
                                        ? this.state.PointContentList[0]
                                            ? this.state.PointContentList[0]
                                                .TransmissionEfficiency
                                            : ''
                                        : ''}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: '30%', marginTop: 8}}>
                        <View style={{ width: '100%', flexDirection: 'row', backgroundColor: '#FFFFFF', borderRadius: 5, height: 40 }}>
                            <View
                                style={{
                                    alignContent: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                 <Image
                                    style={{
                                        width: 12,
                                        height: 12,
                                        marginLeft:5
                                    }}
                                    source={require('../../images/yuanhuan.png')}
                                />
                            </View>

                            <View
                                style={{
                                    alignContent: 'center',
                                    justifyContent: 'center',
                                    marginLeft: 5,
                                }}
                            >
                                <Text style={{ fontSize: 13, lineHeight: 30 }}>
                                    截距:{this.props.jieju}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: '30%', marginTop: 8,marginLeft:'4.9%'}}>
                        <View style={{ width: '100%', flexDirection: 'row', backgroundColor: '#FFFFFF', borderRadius: 5, height: 40 }}>
                            <View
                                style={{
                                    alignContent: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                  <Image
                                    style={{
                                        width: 12,
                                        height: 12,
                                        marginLeft:5
                                    }}
                                    source={require('../../images/yuanhuan.png')}
                                />
                            </View>

                            <View
                                style={{
                                    alignContent: 'center',
                                    justifyContent: 'center',
                                    marginLeft: 5,
                                }}
                            >
                                <Text style={{ fontSize: 13, lineHeight: 30 }}>
                                    截面积:{this.props.jieju}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: '30%', marginTop: 8,marginLeft:'4.9%'}}>
                        <View style={{ width: '100%', flexDirection: 'row', backgroundColor: '#FFFFFF', borderRadius: 5, height: 40 }}>
                            <View
                                style={{
                                    alignContent: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                 <Image
                                    style={{
                                        width: 12,
                                        height: 12,
                                        marginLeft:5
                                    }}
                                    source={require('../../images/yuanhuan.png')}
                                />
                            </View>

                            <View
                                style={{
                                    alignContent: 'center',
                                    justifyContent: 'center',
                                    marginLeft: 5,
                                }}
                            >
                                <Text style={{ fontSize: 13, lineHeight: 30 }}>
                                    流量:{this.props.liuliang}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: '30%', marginTop: 8}}>
                        <View style={{ width: '100%', flexDirection: 'row', backgroundColor: '#FFFFFF', borderRadius: 5, height: 40 }}>
                            <View
                                style={{
                                    alignContent: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Image
                                    style={{
                                        width: 12,
                                        height: 12,
                                        marginLeft:5
                                    }}
                                    source={require('../../images/yuanhuan.png')}
                                />
                            </View>

                            <View
                                style={{
                                    alignContent: 'center',
                                    justifyContent: 'center',
                                    marginLeft: 5,
                                }}
                            >
                                <Text style={{ fontSize: 13, lineHeight: 30 }}>
                                    含氧量:{this.props.liuliang}
                                    {this.state.PointContentList
                                        ? this.state.PointContentList[0]
                                            ? this.state.PointContentList[0]
                                                .TransmissionEfficiency
                                            : ''
                                        : ''}
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: '30%', marginTop: 8,marginLeft:'4.9%'}}>
                        <View style={{ width: '100%', flexDirection: 'row', backgroundColor: '#FFFFFF', borderRadius: 5, height: 40 }}>
                            <View
                                style={{
                                    alignContent: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                 <Image
                                    style={{
                                        width: 12,
                                        height: 12,
                                        marginLeft:5
                                    }}
                                    source={require('../../images/yuanhuan.png')}
                                />
                            </View>

                            <View
                                style={{
                                    alignContent: 'center',
                                    justifyContent: 'center',
                                    marginLeft: 5,
                                }}
                            >
                                <Text style={{ fontSize: 13, lineHeight: 30 }}>
                                    温度:{this.props.wendu}
                                    {this.state.PointContentList
                                        ? this.state.PointContentList[0]
                                            ? this.state.PointContentList[0]
                                                .TransmissionEfficiency
                                            : ''
                                        : ''}
                                </Text>
                            </View>
                        </View>
                    </View>


                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    MainView: {
        width: '96%',
        backgroundColor: '#FFFFFF',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 15,
        borderRadius: 6,
        alignSelf: 'center',
        marginTop: 6,
        marginBottom: 5,
        shadowColor: '#E3E3E3',
        shadowOffset: { w: 0, h: 50 },
        shadowRadius: 3,
        shadowOpacity: 0.1,
        elevation: 1,
    },
    flexStyle: {
        flex: 1,
        color: 'rgb(180,179,199)',
    },
    TitleImg: {
        width: 13,
        height: 13,
    },
    TitleText: {
        color: '#3F3F3F',
        fontSize: 14,
    },
    ContentText: {
        fontSize: 13,
        color: '#FF4F4F',
        lineHeight: 24,
    },

    RowView: {
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    ClickText: {
        fontSize: 13,
        color: '#2F9CF4',
        paddingRight: 15,
    },
    CosntentText: {
        color: 'rgb(180,179,199)',
        fontSize: 12,
    },
});
