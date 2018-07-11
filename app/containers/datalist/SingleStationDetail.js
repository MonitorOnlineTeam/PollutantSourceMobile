//import liraries
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  processColor,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Grid, Tabs } from 'antd-mobile-rn';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Iconi from 'react-native-vector-icons/dist/Ionicons';
import { LineChart } from 'react-native-charts-wrapper';
import update from 'immutability-helper';

import { SCREEN_WIDTH } from '../../config/globalsize';
import { NavigationActions } from '../../utils';
import { Button } from '../../components';

// create a component
@connect()
class SingleStationDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      legend: {
        enabled: true,
        textColor: processColor('blue'),
        textSize: 12,
        position: 'BELOW_CHART_RIGHT',
        form: 'SQUARE',
        formSize: 14,
        xEntrySpace: 10,
        yEntrySpace: 5,
        formToTextSpace: 5,
        wordWrapEnabled: true,
        maxSizePercent: 0.5,
        custom: {
          colors: [
            processColor('red'),
            processColor('blue'),
            processColor('green'),
          ],
          labels: [],
        },
      },
      marker: {
        enabled: true,
        digits: 2,
        backgroundTint: processColor('teal'),
        markerColor: processColor('#F0C0FF8C'),
        textColor: processColor('white'),
      },
    };
  }
  componentDidMount() {
    this.setState(
      update(this.state, {
        data: {
          $set: {
            dataSets: [
              {
                values: [{ y: 0.88 }, { y: 0.77 }, { y: 105 }, { y: 115 }, { y: 50 }, { y: 50 }, { y: 50 }, { y: 50 }, { y: 50 }, { y: 50 }, { y: 50 }, { y: 50 }, { y: 50 }, { y: 50 }, { y: 50 }, { y: 50 }, { y: 50 }, { y: 50 }, { y: 45 }, { y: 44 }, { y: 43 }, { y: 44 }, { y: 44 }],
                label: '',
                
                config: {
                  lineWidth: 2,
                  drawCircles: false,
                  highlightColor: processColor('red'),
                  color: processColor('red'),
                  drawFilled: true,
                  fillColor: processColor('red'),
                  fillAlpha: 60,
                  valueTextSize: 15,
                  valueFormatter: '##.000',
                  dashedLine: {
                    lineLength: 20,
                    spaceLength: 20,
                  },
                },
              }
            ],
          },
        },
        xAxis: {
          $set: {
            fontFamily: 'HelveticaNeue-Medium',
            fontWeight: 'bold',
            fontStyle: 'italic',
            valueFormatter: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
          },
        },
      })
    );
  }

  static navigationOptions = ({ router, navigation }) => {
    return {
      title: '站点信息',
      tabBarLabel: '站点信息',

      headerLeft: (
        <Text
          onPress={() => {
            navigation.dispatch(NavigationActions.back());
          }}
          style={{ marginLeft: 5, width: 32, height: 32, textAlign: 'center' }}
        >
          <Icon name={'angle-left'} size={32} style={{ color: 'black' }} />
        </Text>
      ),
    };
  }

  goBack = () => {
    this.props.dispatch(NavigationActions.back());
  }

  handleSelect(event) {
    let entry = event.nativeEvent;
    if (entry == null) {
      this.setState({ ...this.state, selectedEntry: null });
    } else {
      this.setState({ ...this.state, selectedEntry: JSON.stringify(entry) });
    }

    console.log(event.nativeEvent);
  } // <View style={styles.container}>
  //   <View
  //     style={[
  //       {
  //         width: SCREEN_WIDTH,
  //         flex: 1,
  //         backgroundColor: 'lightgrey',
  //       },
  //     ]}
  //   >
  //     <Text>
  //       {
  //         'SingleStationDetail 单一排口数据 ,上部是当前排口的当前监测数据，中部是一段时间的数据图表 ppt11页'
  //       }
  //     </Text>

  //     <BarChart
  //       style={styles.chart}
  //       data={this.state.data}
  //       xAxis={this.state.xAxis}
  //       animation={{ durationX: 2000 }}
  //       legend={this.state.legend}
  //       gridBackgroundColor={processColor('#ffffff')}
  //       drawBarShadow={false}
  //       drawValueAboveBar={true}
  //       drawHighlightArrow={true}
  //       onSelect={this.handleSelect.bind(this)}
  //       highlights={this.state.highlights}
  //       onChange={event => console.log(event.nativeEvent)}
  //     />
  //   </View>
  //   <Grid
  //     data={this.state.featureList}
  //     columnNum={4}
  //     activeStyle={{ backgroundColor: 'red' }}
  //     hasLine={false}
  //     square={false}
  //     onClick={_el => {
  //       switch (_el.id) {
  //         case 0:
  //           console.log('历史数据');
  //           this.props.dispatch(
  //             NavigationActions.navigate({ routeName: 'HistoricalData' })
  //           );
  //           break;
  //         case 1:
  //           // 3d站房
  //           this.props.dispatch(
  //             NavigationActions.navigate({ routeName: '_3DStation' })
  //           );
  //           break;
  //         case 2:
  //           // 工艺流程图
  //           this.props.dispatch(
  //             NavigationActions.navigate({
  //               routeName: 'ProcessFlowDiagram',
  //             })
  //           );
  //           break;
  //         case 3:
  //           // 报警
  //           this.props.dispatch(
  //             NavigationActions.navigate({ routeName: 'Alarm_' })
  //           );
  //           break;
  //         case 4:
  //           // 预警
  //           this.props.dispatch(
  //             NavigationActions.navigate({ routeName: 'EarlyWarning_' })
  //           );
  //           break;
  //         case 5:
  //           // 巡检
  //           this.props.dispatch(
  //             NavigationActions.navigate({ routeName: 'Patrol' })
  //           );
  //           break;
  //         case 6:
  //           // 应急
  //           this.props.dispatch(
  //             NavigationActions.navigate({ routeName: 'Emergency' })
  //           );
  //           break;
  //         case 7:
  //           // 故障
  //           this.props.dispatch(
  //             NavigationActions.navigate({ routeName: 'Breakdown' })
  //           );
  //           break;
  //         case 8:
  //           // 停产
  //           this.props.dispatch(
  //             NavigationActions.navigate({ routeName: 'HaltProduction' })
  //           );
  //           break;
  //         case 9:
  //           // 备品备件
  //           this.props.dispatch(
  //             NavigationActions.navigate({ routeName: 'SparePart' })
  //           );
  //           break;
  //         case 10:
  //           // 停电
  //           this.props.dispatch(
  //             NavigationActions.navigate({ routeName: 'PowerCut' })
  //           );
  //           break;
  //         case 11:
  //           // 质控
  //           this.props.dispatch(
  //             NavigationActions.navigate({ routeName: 'QualityControl' })
  //           );
  //           break;
  //       }
  //     }}
  //     itemStyle={{
  //       height: SCREEN_WIDTH / 6,
  //       width: SCREEN_WIDTH / 4,
  //     }}
  //     renderItem={(el, index) => {
  //       return (
  //         <View
  //           style={[
  //             {
  //               height: SCREEN_WIDTH / 6,
  //               width: SCREEN_WIDTH / 4,
  //               justifyContent: 'center',
  //               alignItems: 'center',
  //             },
  //           ]}
  //         >
  //           <View
  //             style={[
  //               {
  //                 height: SCREEN_WIDTH / 10,
  //                 width: SCREEN_WIDTH / 10,
  //                 backgroundColor: 'lightblue',
  //                 borderRadius: SCREEN_WIDTH / 16,
  //                 justifyContent: 'center',
  //                 alignItems: 'center',
  //               },
  //             ]}
  //           >
  //             {/*<Image source={require('../../images/person.png')}
  //                               style={[{height:SCREEN_WIDTH/12,
  //                               width:SCREEN_WIDTH/12,}]}/>*/}
  //             {el.icon}
  //           </View>
  //           <Text style={[{ marginTop: 4, fontSize: 12 }]}>{el.text}</Text>
  //         </View>
  //       );
  //     }}
  //   />
  // </View>

  render() {
    const tabs = [
      { title: '监控' },
      { title: '运维' },
      { title: '排污' },
      { title: '质控' },
    ];

    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
      
        <Tabs tabs={tabs} initialPage={0}>
     
                    <View style={style}>
                    <ScrollView>
            <View style={{ backgroundColor: '#fefefe', width: '100%' }}>
              <View
                style={{
                  backgroundColor: '#f4f4f8',
                  borderBottomColor: '#d8d8d8',
                  borderBottomWidth: 1,
                }}
              >
                <Text style={{ color: '#6c6c6c', margin: 8 }}>站点信息</Text>
              </View>
              <View
                style={{
                  padding: 10,
                  paddingTop: 1,
                  borderBottomColor: '#d8d8d8',
                  borderBottomWidth: 1,
                  marginLeft: 5,
                  marginRight: 5,
                  flexDirection: 'row',
                }}
              >
                <View style={{ marginTop: 5 }}>
                  <Text
                    style={{ fontSize: 20, color: '#292929', marginTop: 5 }}
                  >
                    朝阳奥体中心
                  </Text>

                  <Text style={{ color: '#b9b9b9' }}>运维单位:雪迪龙</Text>
                  <Text style={{ color: '#b9b9b9' }}>
                    站点信息:北京市长阳区安定路
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    flex: 1,
                    justifyContent: 'flex-end',
                  }}
                >
                  <TouchableOpacity
                    style={{
                      marginTop: 55,
                      marginLeft: 20,
                    }}
                  >
                    <Image
                      style={{
                        width: 25,
                        height: 25,
                      }}
                      tintColor="#bdbdbd"
                      source={require('../../images/dw.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      marginTop: 55,
                      marginLeft: 20,
                    }}
                  >
                    <Image
                      style={{
                        width: 25,
                        height: 25,
                      }}
                      tintColor="#bdbdbd"
                      source={require('../../images/k.png')}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <Text style={{ color: '#6c6c6c', marginLeft: 8, marginTop: 8 }}>
                污染物 2018年6月27日 00:00:00
              </Text>
              {/* 污染物 */}
              <View
                style={{
                  padding: 10,
                  borderBottomColor: '#d8d8d8',
                  borderBottomWidth: 1,
                  flexDirection: 'row',
                  width: '100%',
                  flexWrap: 'wrap',
                }}
              >
                <View
                  style={{
                    backgroundColor: '#42cf16',
                    height: 50,
                    width: '30%',
                    margin: 5,
                    borderRadius: 2,
                    alignContent: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text style={{ color: '#fff', fontSize: 14 }}>PM2.5: 56</Text>
                </View>
                <View
                  style={{
                    backgroundColor: '#42cf16',
                    height: 50,
                    width: '30%',
                    margin: 5,
                    borderRadius: 2,
                    alignContent: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text style={{ color: '#fff', fontSize: 14 }}>PM10: 91</Text>
                </View>
                <View
                  style={{
                    backgroundColor: '#efdd30',
                    height: 50,
                    width: '30%',
                    margin: 5,
                    borderRadius: 2,
                    alignContent: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text style={{ color: '#fff', fontSize: 14 }}>NOX: 41</Text>
                </View>
                <View
                  style={{
                    backgroundColor: '#42cf16',
                    height: 50,
                    width: '30%',
                    margin: 5,
                    borderRadius: 2,
                    alignContent: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text style={{ color: '#fff', fontSize: 14 }}>烟尘: 56</Text>
                </View>
                <View
                  style={{
                    backgroundColor: '#42cf16',
                    height: 50,
                    width: '30%',
                    margin: 5,
                    borderRadius: 2,
                    alignContent: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text style={{ color: '#fff', fontSize: 14 }}>SO2: 91</Text>
                </View>
                <View
                  style={{
                    backgroundColor: '#efdd30',
                    height: 50,
                    width: '30%',
                    margin: 5,
                    borderRadius: 2,
                    alignContent: 'center',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text style={{ color: '#fff', fontSize: 14 }}>NO2: 64</Text>
                </View>
              </View>
              {/* 污染物结束 */}
              {/* <View style={{ flex: 1,  borderBottomColor: '#d8d8d8',
                  borderBottomWidth: 1,height:200,marginTop:10}}>
                <LineChart
                  style={styles.chart}
                  data={this.state.data}
                  chartDescription={{ text: '' }}
                  legend={this.state.legend}
                  marker={this.state.marker}
                  xAxis={this.state.xAxis}
                  drawGridBackground={false}
                  borderColor={processColor('teal')}
                  borderWidth={1}
                  drawBorders={true}
                  touchEnabled={true}
                  dragEnabled={true}
                  scaleEnabled={true}
                  scaleXEnabled={true}
                  scaleYEnabled={true}
                  pinchZoom={true}
                  doubleTapToZoomEnabled={true}
                  dragDecelerationEnabled={true}
                  dragDecelerationFrictionCoef={0.99}
                  keepPositionOnRotation={false}
                  onSelect={this.handleSelect.bind(this)}
                  onChange={event => console.log(event.nativeEvent)}
                />
              </View> */}
              <View
                style={{
                  padding: 10,
                  borderBottomColor: '#dddddd',
                  borderBottomWidth: 1,
                  flexDirection: 'column',
                  width: '100%',
                }}
              >
                <TouchableOpacity style={{}}>
                  <View style={{ flexDirection: 'row' }}>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignContent: 'center',
                      }}
                    >
                      <Image
                        style={{
                          marginLeft: 2,
                          width: 25,
                          height: 25,
                        }}
                        tintColor="#47d0d2"
                        source={require('../../images/lct.png')}
                      />
                    </View>

                    <View style={{ marginLeft: 10}}>
                      <Text style={{ color: '#292929', fontSize: 15 }}>
                        流程图
                      </Text>
                      <Text style={{ color: '#6c6c6c', fontSize: 13 }}>
                        流程图状态
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  padding: 10,
                  borderBottomColor: '#dddddd',
                  borderBottomWidth: 1,
                  flexDirection: 'column',
                  width: '100%',
                }}
              >
                <TouchableOpacity style={{}}>
                  <View style={{ flexDirection: 'row' }}>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignContent: 'center',
                      }}
                    >
                      <Image
                        style={{
                          marginLeft: 2,
                          justifyContent: 'center',
                          width: 25,
                          height: 25,
                        }}
                        tintColor="#e6d24d"
                        source={require('../../images/lssj.png')}
                      />
                    </View>

                    <View style={{ marginLeft: 10 }}>
                      <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: '#292929', fontSize: 15 }}>
                          历史数据{' '}
                        </Text>
                        <Text
                          style={{
                            color: '#6c6c6c',
                            fontSize: 12,
                            justifyContent: 'center',
                          }}
                        >
                          -2018年6月27日 10:10{' '}
                        </Text>
                      </View>
                      <Text style={{ color: '#6c6c6c', fontSize: 13 }}>
                        PM10：40
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  padding: 10,
                  borderBottomColor: '#dddddd',
                  borderBottomWidth: 1,
                  flexDirection: 'column',
                  width: '100%',
                }}
              >
                <TouchableOpacity style={{}}>
                  <View style={{ flexDirection: 'row' }}>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignContent: 'center',
                      }}
                    >
                      <Image
                        style={{
                          marginLeft: 2,
                          justifyContent: 'center',
                          width: 25,
                          height: 25,
                        }}
                        tintColor="#ff414e"
                        source={require('../../images/gzbj.png')}
                      />
                    </View>
                    <View style={{ marginLeft: 10 }}>
                      <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: '#292929', fontSize: 15 }}>
                          报警记录{' '}
                        </Text>
                        <Text
                          style={{
                            color: '#6c6c6c',
                            fontSize: 12,
                            justifyContent: 'center',
                          }}
                        >
                          -2018年6月27日 10:10{' '}
                        </Text>
                      </View>

                      <Text style={{ color: '#6c6c6c', fontSize: 13 }}>
                        PM10仪表异常报警
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  padding: 10,
                  borderBottomColor: '#dddddd',
                  borderBottomWidth: 1,
                  flexDirection: 'column',
                  width: '100%',
                }}
              >
                <TouchableOpacity style={{}}>
                  <View style={{ flexDirection: 'row' }}>
                    <View
                      style={{
                        justifyContent: 'center',
                        alignContent: 'center',
                      }}
                    >
                      <Image
                        style={{
                          marginLeft: 2,
                          justifyContent: 'center',
                          width: 25,
                          height: 25,
                        }}
                        tintColor="#faaa00"
                        source={require('../../images/gzyj.png')}
                      />
                    </View>
                    <View style={{ marginLeft: 10 }}>
                      <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: '#292929', fontSize: 15 }}>
                          预警记录{' '}
                        </Text>
                        <Text
                          style={{
                            color: '#6c6c6c',
                            fontSize: 12,
                            justifyContent: 'center',
                          }}
                        >
                          -2018年6月27日 10:10{' '}
                        </Text>
                      </View>
                      <Text style={{ color: '#6c6c6c', fontSize: 13 }}>
                        PM10仪表预警
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            </ScrollView>
          </View>
          {/* 运维 */}
          <View style={style} >
          <ScrollView>
            <View style={{ backgroundColor: '#fefefe', width: SCREEN_WIDTH }}>
              <View
                style={{
                  backgroundColor: '#f4f4f8',
                  borderBottomColor: '#d8d8d8',
                  borderBottomWidth: 1,
                }}
              >
                <Text style={{ color: '#6c6c6c', margin: 8 }}>运维信息</Text>
              </View>
              <View
                style={{
                  padding: 10,
                  paddingTop: 1,
                  borderBottomColor: '#d8d8d8',
                  borderBottomWidth: 1,
                
                  flexDirection: 'row',
                }}
              >
                <View style={{ marginTop: 5 }}>
                  <Text
                    style={{ fontSize: 20, color: '#292929', marginTop: 5 }}
                  >
     
                  </Text>
                  <View style={{flexDirection:"row"}}>
                  <Text style={{ color: '#9f9f9f' ,fontSize:15}}>运维人：</Text>
                  <Text style={{ color: '#717171',fontSize:15 }}>小王</Text>
                  </View>
                  <View style={{flexDirection:"row"}}>
                  <Text style={{ color: '#9f9f9f' ,fontSize:15}}>联系电话：</Text>
                  <Text style={{ color: '#717171',fontSize:15 }}>18911524678</Text>
                  </View>  
                    <View style={{flexDirection:"row"}}>
                  <Text style={{ color: '#9f9f9f' ,fontSize:15}}>上次运维时间：</Text>
                  <Text style={{ color: '#717171',fontSize:15 }}>2018-06-01</Text>
                  </View>    
                  <View style={{flexDirection:"row"}}>
                  <Text style={{ color: '#9f9f9f' ,fontSize:15}}>距下次运维时间：</Text>
                  <Text style={{ color: '#717171',fontSize:15 }}>9(天)</Text>
                  </View>  
                    <View style={{flexDirection:"row"}}>
                  <Text style={{ color: '#9f9f9f' ,fontSize:15}}>是否逾期：</Text>
                  <Text style={{ color: '#717171',fontSize:15 }}>否</Text>
                  </View>    
                  <View style={{flexDirection:"row"}}>
                  <Text style={{ color: '#9f9f9f' ,fontSize:15}}>逾期时间：</Text>
                  <Text style={{ color: '#717171',fontSize:15 }}>0</Text>
                  </View>
                  
                </View>

               
              </View>
           </View>
           <Text style={{ color: '#6c6c6c', marginLeft: 8, marginTop: 8 }}>
                近期耗材情况(月)
              </Text>

           <View
                style={{
                  backgroundColor:"#ffffff",
                  padding: 10,
              
                  borderBottomColor: '#d8d8d8',
                  borderBottomWidth: 1,
                  flexDirection: 'row',
                  width: '100%',
                  flexWrap: 'wrap',
                }}
              >
              <View style={{width:"30%",height:50,backgroundColor:"#f4f4f8",borderRadius:5,flexDirection:"row",alignContent:"center",alignItems:"center",justifyContent:"center",margin:5}}>
               <Text style={{color:"#000000",fontSize:15}}>
                皮管：
               </Text>
               <Text style={{color:"#ff8400",fontSize:20}}>
                2个
               </Text>
              </View>
              <View style={{width:"30%",height:50,backgroundColor:"#f4f4f8",borderRadius:5,flexDirection:"row",alignContent:"center",alignItems:"center",justifyContent:"center",margin:5}}>
               <Text style={{color:"#000000",fontSize:15}}>
                试剂：
               </Text>
               <Text style={{color:"#ff8400",fontSize:20}}>
                1个
               </Text>
              </View>  
              <View style={{width:"30%",height:50,backgroundColor:"#f4f4f8",borderRadius:5,flexDirection:"row",alignContent:"center",alignItems:"center",justifyContent:"center",margin:5}}>
               <Text style={{color:"#000000",fontSize:15}}>
                标气：
               </Text>
               <Text style={{color:"#ff8400",fontSize:20}}>
                3个
               </Text>
              </View>
              </View>
           </ScrollView>
          </View>
         {/* 排污 */}
          <View style={style} >
          <ScrollView>
            <View style={{ backgroundColor: '#fefefe', width: SCREEN_WIDTH }}>
              <View
                style={{
                  backgroundColor: '#f4f4f8',
                  borderBottomColor: '#d8d8d8',
                  borderBottomWidth: 1,
                }}
              >
                <Text style={{ color: '#6c6c6c', margin: 8 }}>24小时排污量</Text>
              </View>
              <View
                style={{
                  
                  paddingTop: 1,
                  borderBottomColor: '#d8d8d8',
                  borderBottomWidth: 1,
                  flexDirection: 'row',
                }}
              >
                
               
              </View>
           </View>
           <View style={{ backgroundColor: '#fefefe', width: SCREEN_WIDTH }}>
              <View
                style={{
                  backgroundColor: '#f4f4f8',
                  borderBottomColor: '#d8d8d8',
                  borderBottomWidth: 1,
                }}
              >
                <Text style={{ color: '#6c6c6c', margin: 8 }}>总排污量</Text>
              </View>
              <View
                style={{
                  padding: 10,
                  paddingTop: 1,
                  borderBottomColor: '#d8d8d8',
                  borderBottomWidth: 1,
                
                
                }}
              >
                <Text style={{fontSize:15}}>总排污量：200</Text>
                <Text style={{fontSize:15}}>排污占比：12.8%</Text>
              </View>
           </View>
           <View style={{ backgroundColor: '#fefefe', width: SCREEN_WIDTH }}>
              <View
                style={{
                  backgroundColor: '#f4f4f8',
                  borderBottomColor: '#d8d8d8',
                  borderBottomWidth: 1,
                }}
              >
                <Text style={{ color: '#6c6c6c', margin: 8 }}>排量占比</Text>
              </View>
              <View
                style={{
                  
                  paddingTop: 1,
                  borderBottomColor: '#d8d8d8',
                  borderBottomWidth: 1,
                  flexDirection: 'row',
                }}
              >
                
               
              </View>
           </View>

           </ScrollView>
          </View>
          <View style={style} >
          <ScrollView>
          <View style={{ backgroundColor: '#fefefe', width: SCREEN_WIDTH }}>
              <View
                style={{
                  backgroundColor: '#f4f4f8',
                  borderBottomColor: '#d8d8d8',
                  borderBottomWidth: 1,
                }}
              >
                <Text style={{ color: '#6c6c6c', margin: 8 }}>近期质控情况(月)</Text>
              </View>
              <View
                style={{
                  //backgroundColor:"#59d200",
                  paddingTop: 1,
                  borderBottomColor: '#d8d8d8',
                  borderBottomWidth: 1,
                  flexDirection: 'row',
                  alignItems:"center",
                  justifyContent:"center"
                }}
              >
  
               
              </View>
           </View>

          </ScrollView>
          </View>
         
        </Tabs>
      </View>
    );
  }
}
const style = {
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',

  backgroundColor: '#ffffff',
};
// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  chart: {
    flex: 1,
  },
});
export const title = 'Tabs';
export const description = 'Tabs example';
//make this component available to the app
export default SingleStationDetail;
