//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, processColor, } from 'react-native';
import { Grid } from 'antd-mobile';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Iconi from 'react-native-vector-icons/dist/Ionicons';
import {BarChart} from 'react-native-charts-wrapper';

import {SCREEN_WIDTH} from '../../config/globalsize';
import { NavigationActions } from '../../utils';
import { Button } from '../../components';

// create a component
@connect()
class SingleStationDetail extends Component {

    constructor(props){
        super(props);
        this.state = {
            featureList:[
                {
                    icon: <Icon name={'history'} size={20} style={{color:'gray'}}/>,
                    text: `历史数据`,
                    id:0,
                },
                {
                    icon: <Iconi name={'md-home'} size={20} style={{color:'gray'}}/>,
                    text: `3D站房`,
                    id:1,
                },
                {
                    icon: <Iconi name={'md-git-pull-request'} size={20} style={{color:'gray'}}/>,
                    text: `工艺流程图`,
                    id:2,
                },
                {
                    icon: <Icon name={'bell'} size={20} style={{color:'gray'}}/>,
                    text: `报警记录`,
                    id:3,
                },
                {
                    icon: <Icon name={'bullhorn'} size={20} style={{color: 'gray'}}/>,
                    text: `预警记录`,
                    id:4,
                },
                {
                    icon: <Icon name={'file-text'} size={20} style={{color: 'gray'}}/>,
                    text: `例行任务`,//巡检
                    id:5,
                },
                {
                    icon: <Icon name={'free-code-camp'} size={20} style={{color:'gray'}}/>,
                    text: `应急任务`,
                    id:6,
                },
                {
                    icon: <Icon name={'bug'} size={20} style={{color:'gray'}}/>,
                    text: `故障记录`,
                    id:7,
                },
                {
                    icon: <Icon name={'ban'} size={20} style={{color:'gray'}}/>,
                    text: `停产记录`,
                    id:8,
                },
                {
                    icon: <Icon name={'cubes'} size={20} style={{color:'gray'}}/>,
                    text: `备品备件`,
                    id:9,
                },
                {
                    icon: <Icon name={'lightbulb-o'} size={20} style={{color:'gray'}}/>,
                    text: `停电记录`,
                    id:10,
                },
                {
                    icon: <Icon name={'user-md'} size={20} style={{color:'gray'}}/>,
                    text: `质控`,
                    id:11,
                },
            ],
            legend: {
                enabled: true,
                textSize: 14,
                form: 'SQUARE',
                formSize: 14,
                xEntrySpace: 10,
                yEntrySpace: 5,
                formToTextSpace: 5,
                wordWrapEnabled: true,
                maxSizePercent: 0.5
            },
            data: {
                dataSets: [{
                  values: [{y: 100}, {y: 105}, {y: 102}, {y: 110}, {y: 114}, {y: 109}, {y: 105}, {y: 99}, {y: 95}],
                  label: 'Bar dataSet',
                  config: {
                    color: processColor('teal'),
                    barSpacePercent: 40,
                    barShadowColor: processColor('lightgrey'),
                    highlightAlpha: 90,
                    highlightColor: processColor('red'),
                  }
                }],
              },
              highlights: [{x: 3}, {x: 6}],
              xAxis: {
                valueFormatter: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                granularityEnabled: true,
                granularity : 1,
              }
        };
    }

    static navigationOptions =({router,navigation})=>{
        return{
            title: '站点信息',
            tabBarLabel: '站点信息',
            headerLeft:(  
                <Text  onPress={()=>{
                    navigation.dispatch(NavigationActions.back());
                }} style={{marginLeft:5, width:32, height:32, textAlign:"center",}} >  
                <Icon name={'angle-left'} size={32} style={{color:'black'}}/>
                </Text>  
            )
        };
    }
    

    goBack = () => {
        this.props.dispatch(NavigationActions.back());
    }

    handleSelect(event) {
        let entry = event.nativeEvent;
        if (entry == null) {
            this.setState({...this.state, selectedEntry: null});
        } else {
            this.setState({...this.state, selectedEntry: JSON.stringify(entry)});
        }

        console.log(event.nativeEvent);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[{
                    width:SCREEN_WIDTH,
                    flex:1,
                    backgroundColor:'lightgrey'
                }]}>
                    <Text >
                        {'SingleStationDetail 单一排口数据 ,上部是当前排口的当前监测数据，中部是一段时间的数据图表 ppt11页'}
                    </Text>
                    
                    <BarChart
                        style={styles.chart}
                        data={this.state.data}
                        xAxis={this.state.xAxis}
                        animation={{durationX: 2000}}
                        legend={this.state.legend}
                        gridBackgroundColor={processColor('#ffffff')}
                        drawBarShadow={false}
                        drawValueAboveBar={true}
                        drawHighlightArrow={true}
                        onSelect={this.handleSelect.bind(this)}
                        highlights={this.state.highlights}
                        onChange={(event) => console.log(event.nativeEvent)}
                    />
                </View>
                <Grid data={this.state.featureList} columnNum={4}
                    activeStyle={{backgroundColor:'red'}}
                    hasLine={false}
                    square={false}
                    onClick={_el => {
                        switch(_el.id) {
                            case 0:
                                console.log('历史数据');
                                this.props.dispatch(NavigationActions.navigate({ routeName: 'HistoricalData' }));
                            break;
                            case 1:
                                // 3d站房
                                this.props.dispatch(NavigationActions.navigate({ routeName: '_3DStation' }));
                            break;
                            case 2:
                                // 工艺流程图
                                this.props.dispatch(NavigationActions.navigate({ routeName: 'ProcessFlowDiagram' }));
                            break;
                            case 3:
                                // 报警
                                this.props.dispatch(NavigationActions.navigate({ routeName: 'Alarm_' }));
                            break;
                            case 4:
                                // 预警
                                this.props.dispatch(NavigationActions.navigate({ routeName: 'EarlyWarning_' }));
                            break;
                            case 5:
                                // 巡检
                                this.props.dispatch(NavigationActions.navigate({ routeName: 'Patrol' }));
                            break;
                            case 6:
                                // 应急
                                this.props.dispatch(NavigationActions.navigate({ routeName: 'Emergency' }));
                            break;
                            case 7:
                                // 故障
                                this.props.dispatch(NavigationActions.navigate({ routeName: 'Breakdown' }));
                            break;
                            case 8:
                                // 停产
                                this.props.dispatch(NavigationActions.navigate({ routeName: 'HaltProduction' }));
                            break;
                            case 9:
                                // 备品备件
                                this.props.dispatch(NavigationActions.navigate({ routeName: 'SparePart' }));
                            break;
                            case 10:
                                // 停电
                                this.props.dispatch(NavigationActions.navigate({ routeName: 'PowerCut' }));
                            break;
                            case 11:
                                // 质控
                                this.props.dispatch(NavigationActions.navigate({ routeName: 'QualityControl' }));
                            break;
                        }
                    }}
                    itemStyle={
                        {height:SCREEN_WIDTH/6,
                        width:SCREEN_WIDTH/4,}
                    }
                    renderItem={(el, index) => {
                        return <View style={[
                            {
                                height:SCREEN_WIDTH/6,
                                width:SCREEN_WIDTH/4,
                                justifyContent:'center',
                                alignItems:'center',
                            }
                        ]}>
                            <View
                                style={[
                                    {
                                        height:SCREEN_WIDTH/10,
                                        width:SCREEN_WIDTH/10,
                                        backgroundColor: 'lightblue',
                                        borderRadius:SCREEN_WIDTH/16,
                                        justifyContent:'center',
                                        alignItems:'center',
                                    },
                                ]}
                            >
                                {/*<Image source={require('../../images/person.png')} 
                                    style={[{height:SCREEN_WIDTH/12,
                                    width:SCREEN_WIDTH/12,}]}/>*/}
                                    {
                                        el.icon
                                    }
                            </View>
                            <Text style={[{marginTop:4,fontSize:12}]}>{
                                el.text
                            }</Text>
                        </View>;
                    }}
                />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    chart: {
        flex: 1
    },
});

//make this component available to the app
export default SingleStationDetail;
