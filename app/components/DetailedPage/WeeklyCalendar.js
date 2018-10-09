import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { NavigationActions } from '../../utils';
import { Calendar, CalendarList, Agenda, LocaleConfig } from 'react-native-calendars';
import PersonCircle from '../Assembly/PersonCircle';
import TitleBlock from '../Assembly/TitleBlock';
import { WhiteSpace, WingBlank, DatePicker, List, Picker } from 'antd-mobile-rn';
/*
 * @Description:人员周历 .
 */
export default class WeeklyCalendar extends Component {


    static navigationOptions = ({ navigation }) => ({
        title: '人员周历',
        tabBarLable: '人员周历',
        headerBackTitle: null,
        headerTintColor: '#FFF',
        headerStyle: { backgroundColor: '#1895EF' },
        headerTitleStyle: { alignSelf: 'center', },
        headerLeft: (
            <Text
                onPress={() => {
                    navigation.dispatch(NavigationActions.back());
                }}
                style={{ marginLeft: 8, width: 32, height: 32, textAlign: 'center' }}
            >
                <Icon name={'angle-left'} size={32} style={{ color: '#FFFFFF' }} />
            </Text>
        )
    })


    constructor(props) {
        super(props);
        this.state = {
            value: null,
            value1: null,
            selectcode: 1,
        };
    }
    WeeklyonChange = (v) => {
        console.log(v);

    }
    onChange = (value) => {
        this.setState({
            value,

        });
    }
    onPickerChange = (value1) => {
        this.setState({
            value1,

        });
    }
    render() {
        const seasons = [
            {
                label: '第一周',
                value: '1',
            }, {
                label: '第二周',
                value: '2',
            },
            {
                label: '第三周',
                value: '3',
            },
            {
                label: '第四周',
                value: '4',
            },
            {
                label: '第五周',
                value: '4',
            },
        ];
        const persons = [
            { personid: 1, personname: '王丹丹', isnews: "1" },
            { personid: 2, personname: '李丹丹', isnews: "0" },
            { personid: 3, personname: '张丹丹', isnews: "0" },
            { personid: 4, personname: '羊丹丹', isnews: "0" },
            { personid: 5, personname: '马丹丹', isnews: "0" },
            { personid: 6, personname: '宋丹丹', isnews: "0" },
            { personid: 7, personname: '孔丹丹', isnews: "0" },
            { personid: 8, personname: '陈丹丹', isnews: "1" },
            { personid: 9, personname: '蒋丹丹', isnews: "1" },
            { personid: 10, personname: '刘丹丹', isnews: "0" },
            { personid: 11, personname: '赵丹丹', isnews: "0" },
            { personid: 12, personname: '严丹丹', isnews: "1" },
            { personid: 13, personname: '姜蛋蛋', isnews: "1" },
            { personid: 14, personname: '汪大东', isnews: "1" },
            { personid: 15, personname: '赵玲玲', isnews: "1" },
            { personid: 16, personname: '宋佳佳', isnews: "1" },
            { personid: 17, personname: '白莉莉', isnews: "1" },
        ];
        const taskData = [

            { Name: "王丹丹", taskData: 1, Date: "2018年9月30日", Type: "例行任务", address: "排口地址", state: "完成", stateColor: "#3cd05c" },
            { Name: "王丹丹", taskData: 1, Date: "2018年9月30日", Type: "应急任务", address: "排口地址", state: "未完成", stateColor: "#eb4a59" },
            { Name: "王丹丹", taskData: 1, Date: "2018年9月30日", Type: "例行任务", address: "排口地址", state: "完成", stateColor: "#3cd05c" },
            { Name: "王丹丹", taskData: 1, Date: "2018年9月30日", Type: "例行任务", address: "排口地址", state: "完成", stateColor: "#3cd05c" },
            { Name: "王丹丹", taskData: 1, Date: "2018年9月30日", Type: "例行任务", address: "排口地址", state: "完成", stateColor: "#3cd05c" },
            { Name: "王丹丹", taskData: 1, Date: "2018年9月30日", Type: "例行任务", address: "排口地址", state: "完成", stateColor: "#3cd05c" },
            { Name: "王丹丹", taskData: 1, Date: "2018年9月30日", Type: "例行任务", address: "排口地址", state: "完成", stateColor: "#3cd05c" },
            { Name: "王丹丹", taskData: 1, Date: "2018年9月30日", Type: "例行任务", address: "排口地址", state: "完成", stateColor: "#3cd05c" },


        ];
        return (
            <View>
                <WhiteSpace />
                {/* 联系人 */}
                <ScrollView style={[styles.MainView, {

                    flexWrap: "wrap",

                    height: 160, backgroundColor: "rgba(255, 255, 255, 0.0)"
                    , shadowColor: "rgba(255, 255, 255, 0.0)"
                }]}
                    horizontal={true}

                >
                    <View style={{
                        flexDirection: "column", flexWrap: "wrap",
                        height: 160
                    }}>
                        {
                            persons.map((item, key) => {
                                return (
                                    <PersonCircle key={key} personname={item.personname}
                                        select={item.personid}
                                        isnews={item.isnews == 1}
                                        personpress={() => {
                                            this.setState({
                                                selectcode: item.personid
                                            });
                                        }}

                                        selected={this.state.selectcode == item.personid} />
                                );
                            })
                        }
                    </View>

                </ScrollView>
                <WhiteSpace />
                {/* 主模块 */}

                <View style={[styles.MainView, styles.MainViewbg]}>
                    <View style={{ padding: 12,flexDirection:"row"}}>
                        <Text style={{ fontSize: 14, color: "#434343",flex:1 }}>运维人员姓名:王丹丹</Text>

                        <TouchableOpacity ><Text style={{ fontSize: 14, color: "#26C439" }}>详情信息>></Text></TouchableOpacity>
                           <WingBlank size="sm"/>
                    </View>

                    {/* 条件选择框 */}
                    <TouchableOpacity style={{ width: "100%", height: 94, }}>
                        <List >
                            <DatePicker
                                value={this.state.value}
                                mode="month"
                                minDate={new Date(1918, 7, 6)}
                                maxDate={new Date(2026, 11, 3)}
                                onChange={this.onChange}
                                format="YYYY-MM"
                            >
                                <List.Item arrow="down" activeStyle={{ borderTopColor: "#FFFFFF" }}>月</List.Item>
                            </DatePicker>
                        </List>
                        <List>
                            <Picker
                                value={this.state.value1}
                                cols={1}
                                onPickerChange={this.onPickerChange}
                                data={[
                                    {
                                        label: '请选择',
                                        value: '',
                                    },
                                    {
                                        label: '第一周',
                                        value: '1',
                                    },
                                    {
                                        label: '第二周',
                                        value: '2',
                                    },
                                    {
                                        label: '第三周',
                                        value: '3',
                                    },
                                    {
                                        label: '第四周',
                                        value: '4',
                                    }
                                ]}
                            >
                                <List.Item arrow="down" activeStyle={{ border: "#FFFFFF", borderWidth: 0, }}  >周</List.Item>
                            </Picker>

                        </List>
                    </TouchableOpacity>
                </View>
                <WhiteSpace size="xs" />
                <ScrollView style={[styles.MainView,{height:"50%"}]}>
                    {

                        taskData.map((item, key) => {

                            return (<TitleBlock key={key}
                                taskType={item.Type}
                                date={item.Date}
                                address={item.address}
                                stateColor={item.stateColor}
                                state={item.state}
                            >



                            </TitleBlock>);


                        })
                    }
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    MainView: {
        width: '96%',
        paddingBottom: 5,
        paddingLeft: 1,
        borderRadius: 6,
        alignSelf: 'center',

    },
    MainViewbg: {
        backgroundColor: "#FFFFFF",
        shadowColor: "#E3E3E3",
        shadowOffset: { w: 0, h: 50 },
        shadowRadius: 3,
        shadowOpacity: 0.1,
        elevation: 1,

    }

});
