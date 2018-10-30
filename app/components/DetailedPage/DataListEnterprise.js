import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Button,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { SCREEN_WIDTH } from '../../config/globalsize';
import { WhiteSpace, WingBlank } from 'antd-mobile-rn';
import { NavigationActions } from '../../utils';
import { SiteInformation } from './SiteInformation';
import { connect } from 'react-redux';
/*
 * @Description: 企业_数据一览.
 */
const this2 = this;
@connect()
export default class DataListEnterprise extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View
                style={{
                    flexDirection: 'column',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    width: SCREEN_WIDTH - 20,
                    backgroundColor: '#FFFFFF',
                    flexDirection: 'column',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    width: SCREEN_WIDTH - 20,
                    backgroundColor: '#FFFFFF',
                    borderRadius: 5,
                    shadowColor: '#E3E3E3',
                    shadowOffset: { w: 0, h: 50 },
                    shadowRadius: 3,
                    shadowOpacity: 0.1,
                    elevation: 1,
                }}
            >
                {/* 表头 */}
                <WhiteSpace />
                <Button
                    title="hahaha"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
                {/* 标题 */}
                <View style={{ flexDirection: 'row' }}>
                    <WingBlank />
                    <View style={{ flex: 3, flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 14, color: '#000000' }}>监测点</Text>
                    </View>
                    <WingBlank />
                    {/* 第二标题 */}
                    <View style={{ flex: 2, flexDirection: 'column' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 14, color: '#000000' }}>SO2</Text>
                            <WingBlank size="sm" />
                            <Image
                                tintColor="#5F7CFC"
                                style={{ width: 14, height: 14, borderRadius: 100, margin: 3 }}
                                source={require('../../images/jt.png')}
                            />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 12, color: '#A8ADB6' }}>mg/m³</Text>
                        </View>
                    </View>

                    {/* 第三标题 */}
                    <View style={{ flex: 2, flexDirection: 'column' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 14, color: '#000000' }}>NOx</Text>
                            <WingBlank size="sm" />
                            <Image
                                tintColor="#5F7CFC"
                                style={{ width: 14, height: 14, borderRadius: 100, margin: 3 }}
                                source={require('../../images/jt.png')}
                            />
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 12, color: '#A8ADB6' }}>mg/m³</Text>
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
                {/* 内容 */}
                <ScrollView style={{}}>
                    {/* 内容 */}
                    <TouchableOpacity
                        style={{ flexDirection: 'row' }}
                        onPress={event => {
                            this.props.dispatch(
                                NavigationActions.navigate({
                                    routeName: 'SiteInformation',
                                })
                            );
                        }}
                    >
                        <WingBlank />
                        {/* 第一列 */}
                        <View style={{ flex: 2, flexDirection: 'column' }}>
                            <View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View
                                        style={{
                                            width: 12,
                                            height: 12,
                                            borderRadius: 50,
                                            backgroundColor: '#26C439',
                                        }}
                                    />
                                    <WingBlank size="sm" />
                                    <Text style={{ fontSize: 14, color: '#000000' }}>
                                        发电供热
                  </Text>
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <WingBlank size="sm" />
                                    <WingBlank size="sm" />
                                    <Text style={{ fontSize: 9, color: '#FF4F4F' }}>
                                        本月传输有效率低于65%
                  </Text>
                                </View>
                            </View>
                            {/* 线 */}
                            <WhiteSpace />
                        </View>

                        {/* 第二列 */}
                        

                        {/* 第三列 */}
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            <View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 14, color: '#000000' }}>11.1</Text>
                                </View>
                            </View>
                        </View>
                        {/* 第四列 */}
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            <View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 14, color: '#000000' }}>11.1</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>

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

                    {/* 内容 */}
                    <TouchableOpacity style={{ flexDirection: 'row' }}>
                        <WingBlank />
                        {/* 第一列 */}
                        <View style={{ flex: 2, flexDirection: 'column' }}>
                            <View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View
                                        style={{
                                            width: 12,
                                            height: 12,
                                            borderRadius: 50,
                                            backgroundColor: '#26C439',
                                        }}
                                    />
                                    <WingBlank size="sm" />
                                    <Text style={{ fontSize: 14, color: '#000000' }}>
                                        发电供热
                  </Text>
                                </View>

                                <View style={{ flexDirection: 'row' }}>
                                    <WingBlank size="sm" />
                                    <WingBlank size="sm" />
                                    <Text style={{ fontSize: 9, color: '#FF4F4F' }}>
                                        本月传输有效率低于65%
                  </Text>
                                </View>
                            </View>
                            {/* 线 */}
                            <WhiteSpace />
                        </View>

                        {/* 第二列 */}

                        {/* 第三列 */}
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            <View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 14, color: '#000000' }}>5.1</Text>
                                </View>
                            </View>
                        </View>
                        {/* 第四列 */}
                        <View style={{ flex: 1, flexDirection: 'column' }}>
                            <View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 14, color: '#000000' }}>2.11</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({});
