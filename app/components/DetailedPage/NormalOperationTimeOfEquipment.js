import React, { Component } from 'react';
import {
    View,
    ScrollView,
    TouchableOpacity,
    Text,
    StyleSheet,
    FlatList,
    Image
} from 'react-native';
import {
    Grid,
    Tabs,
    NoticeBar,
    Badge,
    List,
    WingBlank,
    WhiteSpace,
} from 'antd-mobile-rn';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { SCREEN_WIDTH } from '../../config/globalsize';
import { NavigationActions } from '../../utils';
import { connect } from 'react-redux';
import NormalOperationTimeOfEquipmentCard from '../Assembly/NormalOperationTimeOfEquipmentCard';
/*
 * @Description: 设备正常运行时间分析.
 */
@connect()
export default class NormalOperationTimeOfEquipment extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const NormalOperationTimeOfEquipmentData = [
            {
                PointName: '锅炉1号',
                EquipmentTime: '60',
            },
            {
                PointName: '锅炉2号',
                EquipmentTime: '80',
            },
            {
                PointName: '锅炉3号',
                EquipmentTime: '60',
            },
            {
                PointName: '锅炉4号',
                EquipmentTime: '80',
            },
            {
                PointName: '锅炉5号',
                EquipmentTime: '60',
            },
            {
                PointName: '锅炉6号',
                EquipmentTime: '30',
            },
            {
                PointName: '锅炉7号',
                EquipmentTime: '20',
            },
            {
                PointName: '锅炉8号',
                EquipmentTime: '70',
            },
            {
                PointName: '锅炉9号',
                EquipmentTime: '60',
            },
            {
                PointName: '锅炉10号',
                EquipmentTime: '20',
            },
            {
                PointName: '锅炉11号',
                EquipmentTime: '20',
            },
            {
                PointName: '锅炉12号',
                EquipmentTime: '20',
            },
            {
                PointName: '锅炉13号',
                EquipmentTime: '20',
            },
            {
                PointName: '锅炉14号',
                EquipmentTime: '20',
            },
            {
                PointName: '锅炉15号',
                EquipmentTime: '20',
            },
            {
                PointName: '锅炉16号',
                EquipmentTime: '20',
            },

        ];
        return (
            <View style={{ backgroundColor: '#F1F4F9', width: '100%' }}>
                <ScrollView style={{ width: '100%' }}>
                    {/* 主模块 */}
                    <View style={{ width: SCREEN_WIDTH, height: Math.ceil(NormalOperationTimeOfEquipmentData / 2) * 150, flexDirection: 'row', flexWrap: 'wrap' }}>
                        {NormalOperationTimeOfEquipmentData.map((item, key) => {
                            return (
                                <NormalOperationTimeOfEquipmentCard
                                    key={key}
                                    PointName={item.PointName}
                                    EquipmentTime={item.EquipmentTime}
                                />
                            );
                        })}
                    </View>
                </ScrollView>
            </View>
        );
    }
}
