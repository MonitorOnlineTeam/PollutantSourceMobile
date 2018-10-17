import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    StyleSheet,
} from 'react-native';
/*
 * @Description: 运维日历卡片.
 */
import { WhiteSpace, WingBlank } from 'antd-mobile-rn';
export default class OperationCalendarCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <TouchableOpacity style={[styles.MainViews]}>
                {/* 标题 */}
                <View style={[styles.RowView]}>
                    <Image
                        style={styles.TitleImg}
                        tintColor="#ff414e"
                        source={require('../../images/rw.png')}
                    />
                    <WingBlank size="md" />
                    <Text style={[styles.TitleText, { flex: 1 }]}>
                        任务类型：{this.props.taskType}
                    </Text>
                    <Text style={{ fontSize: 11, color: '#7E7E7E' }}>
                        任务执行人：{this.props.name}
                    </Text>
                    <WingBlank size="md" />
                </View>
                {/* 文字描述模块 */}
                <View style={styles.SpecificView}>
                    <Text style={styles.ContentText}>排口地址：{this.props.outName}</Text>
                    <View style={styles.RowView}>
                        <Text style={styles.ContentText}>任务执行状态：</Text>
                        <Text style={{ color: '#D05F77', fontSize: 13 }}>{this.props.taskState}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({

      MainViews: {
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
        color: '#7E7E7E',
        lineHeight: 24,
    },
    SpecificView: {
        marginLeft: 30,
    },
    RowView: {
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
});

