import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { SCREEN_WIDTH } from '../../config/globalsize';
import { WhiteSpace, WingBlank } from 'antd-mobile-rn';
import { NavigationActions } from '../../utils';
import { connect } from 'react-redux';
/*
 * @Description: 报警视频.
 */
@connect()
export default class AlarmVideoEnterprise extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View
                style={{
                    backgroundColor: '#F1F4F9',
                    width: SCREEN_WIDTH,
                    height: '100%',
                }}
            >
                <ScrollView style={{ width: '100%', backgroundColor: '#F1F4F9' }}>
                    {/* 主模块 */}
                    <View style={{ width: '100%', height: '100%' }}>
                        <View style={{ width: '100%' }}>
                            <View
                                style={{
                                    width: '90%',
                                    height: 36,
                                    marginLeft: '5%',
                                    backgroundColor: '#FFFFFF',
                                    flexDirection: 'row',
                                    marginTop: 6,
                                    marginBottom: 6,
                                    borderRadius: 5,
                                }}
                            >
                                <View style={{ flexDirection: 'row', flex: 1, marginLeft: 8 }}>
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
                                            名称:脱硫入口1号
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', marginRight: 8 }}>
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
                                            tintColor="#F9AF63"
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
                                            成云（18711452684）
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View
                                style={{
                                    width: '90%',
                                    height: 200,
                                    backgroundColor: '#C5D2E3',
                                    borderRadius: 8,
                                    marginLeft: '5%',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Image
                                    style={{
                                        width: 45,
                                        height: 45,
                                    }}
                                    source={require('../../images/bofang.png')}
                                />
                            </View>
                        </View>
                        <WhiteSpace />
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 14, color: '#CCC' }}>2018-07-25 09:00 ~ 2018-07-25 16:00</Text>
                            </View>
                        </View>
                        <WhiteSpace />
                        <WhiteSpace />
                        <View style={{ flexDirection: 'row' }}>
                            <WingBlank />
                            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                                <Text style={{ fontSize: 14, color: '#000000' }}>时间</Text>
                                <WingBlank size="sm" />
                            </View>
                            
                            {/* 第二标题 */}
                            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 14, color: '#000000' }}>SO2</Text>
                                    <WingBlank size="sm" />
                                </View>
                            </View>

                            {/* 第三标题 */}
                            <View style={{ flex: 1, flexDirection: 'column' , alignItems: 'center'}}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 14, color: '#000000' }}>NOx</Text>
                                    <WingBlank size="sm" />
                                </View>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 14, color: '#000000' }}>烟尘</Text>
                                    <WingBlank size="sm" />
                                </View>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 14, color: '#000000' }}>流量</Text>
                                    <WingBlank size="sm" />
                                </View>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'column' , alignItems: 'center'}}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 14, color: '#000000' }}>流速</Text>
                                    <WingBlank size="sm" />
                                </View>
                            </View>
                        </View>

                        <WhiteSpace />
                        <View
                            style={{
                                flexDirection: 'row',
                                width: '90%',
                                alignSelf: 'center',
                                borderBottomColor: '#E3E3E3',
                                borderBottomWidth: 0.8,
                            }}
                        />
                        <WhiteSpace />
                        <View style={{ flexDirection: 'row' }}>
                            <WingBlank />
                            {/* <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                                <Text style={{ fontSize: 14, color: '#000000' }}>15:20</Text>
                                <WingBlank size="sm" />
                            </View> */}
                            <View style={{ flex: 1,  flexDirection: 'column' , alignItems: 'center'}}>
                                <View style={{flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 14, color: '#000000' }}>15:20</Text>
                                    <WingBlank size="sm" />
                                </View>
                            </View>
                            {/* 第二标题 */}
                            <View style={{ flex: 1,  flexDirection: 'column' , alignItems: 'center'}}>
                                <View style={{flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 14, color: '#000000' }}>37.235</Text>
                                    <WingBlank size="sm" />
                                </View>
                            </View>

                            {/* 第三标题 */}
                            <View style={{ flex: 1, flexDirection: 'column' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 14, color: '#000000' }}>37.235</Text>
                                    <WingBlank size="sm" />
                                </View>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'column' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 14, color: '#000000' }}>48.693</Text>
                                    <WingBlank size="sm" />
                                </View>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'column' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 14, color: '#000000' }}>10</Text>
                                    <WingBlank size="sm" />
                                </View>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'column' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 14, color: '#000000' }}>17</Text>
                                    <WingBlank size="sm" />
                                </View>
                            </View>
                        </View>
                        <WhiteSpace />
                        <View
                            style={{
                                flexDirection: 'row',
                                width: '90%',
                                alignSelf: 'center',
                                borderBottomColor: '#E3E3E3',
                                borderBottomWidth: 0.8,
                            }}
                        />
                        <WhiteSpace />
                        <View style={{ flexDirection: 'row' }}>
                            <WingBlank />
                            {/* <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                                <Text style={{ fontSize: 14, color: '#000000' }}>15:20</Text>
                                <WingBlank size="sm" />
                            </View> */}
                            <View style={{ flex: 1,  flexDirection: 'column' , alignItems: 'center'}}>
                                <View style={{flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 14, color: '#000000' }}>15:20</Text>
                                    <WingBlank size="sm" />
                                </View>
                            </View>
                            {/* 第二标题 */}
                            <View style={{ flex: 1,  flexDirection: 'column' , alignItems: 'center'}}>
                                <View style={{flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 14, color: '#000000' }}>37.235</Text>
                                    <WingBlank size="sm" />
                                </View>
                            </View>

                            {/* 第三标题 */}
                            <View style={{ flex: 1, flexDirection: 'column' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 14, color: '#000000' }}>37.235</Text>
                                    <WingBlank size="sm" />
                                </View>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'column' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 14, color: '#000000' }}>48.693</Text>
                                    <WingBlank size="sm" />
                                </View>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'column' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 14, color: '#000000' }}>10</Text>
                                    <WingBlank size="sm" />
                                </View>
                            </View>
                            <View style={{ flex: 1, flexDirection: 'column' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 14, color: '#000000' }}>17</Text>
                                    <WingBlank size="sm" />
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
