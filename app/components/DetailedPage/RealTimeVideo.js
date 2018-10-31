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
import { NavigationActions } from '../../utils';
import { connect } from 'react-redux';
import RealTimeVideoCard from '../Assembly/RealTimeVideoCard';
/*
 * @Description: 实时视频.
 */
@connect()
export default class RealTimeVideo extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const persons = [
            {
                Name: '废气排口1',
                Person: '成云（18233217211）',
                SO2: '8.88',
                NOx: '8.88',
                yanchen: '8.88',
                wendu: '8.88',
                yali: '8.88',
                liusu: '8.88',
                jieju: '8.88',
                jiemianji: '8.88',
                liuliang: '8.88',
            },
        ];
        return (
            <View style={{ backgroundColor: '#F1F4F9', width: SCREEN_WIDTH, height: '100%' }}>
                <ScrollView style={{ width: '100%', backgroundColor: '#F1F4F9' }}>
                    {/* 主模块 */}
                    {persons.map((item, key) => {
                        return (
                            <RealTimeVideoCard
                                key={key}
                                Name={item.Name}
                                Person={item.Person}
                                SO2={item.SO2}
                                NOx={item.NOx}
                                yanchen={item.yanchen}
                                wendu={item.wendu}
                                yali={item.yali}
                                liusu={item.liusu}
                                jieju={item.jieju}
                                jiemainji={item.jiemainji}
                                liuliang={item.liuliang}
                                hanyangliang={item.hanyangliang}
                            />
                        );
                    })}
                </ScrollView>
            </View>
        );
    }
}
