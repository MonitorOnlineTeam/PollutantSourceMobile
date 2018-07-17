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
import { Grid, Tabs, NoticeBar } from 'antd-mobile-rn';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Iconi from 'react-native-vector-icons/dist/Ionicons';
import { LineChart, BarChart, PieChart } from 'react-native-charts-wrapper';
import update from 'immutability-helper';

import { SCREEN_WIDTH } from '../../config/globalsize';
import { NavigationActions } from '../../utils';
import { Button } from '../../components';
import Operation from '../../components/DetailedPage/Operation';
import QualityControl from '../../components/DetailedPage/QualityControl';
import globalcolor from '../../config/globalcolor';
import markersInfo from '../../mockdata/OverView/markersInfo.json';

// create a component
@connect()
class SingleStationDetail extends Component {
  constructor(props) {
    super(props);
    let showNoticeBar = false;
    // console.log(props.navigation.state.params.item);
    if (
      props.navigation.state.params.item.DGIMN === 'bjldgn01' ||
      props.navigation.state.params.item.DGIMN === 'dtgjhh11102' ||
      props.navigation.state.params.item.DGIMN === 'dtgrjx110' ||
      props.navigation.state.params.item.DGIMN === 'dtgrjx103' ||
      props.navigation.state.params.item.DGIMN === 'lywjfd03'
    ) {
      console.log('showNoticeBar true');
      showNoticeBar = true;
    } else {
      showNoticeBar = false;
    }
    let barChartData = [];
    let pieChartData = [];
    for (let i = 0; i < markersInfo.sewageoption.series[0].data.length; i++) {
      barChartData.push({
        y: markersInfo.sewageoption.series[0].data[i],
        marker: i + '时 ' + markersInfo.sewageoption.series[0].data[i],
      });
    }
    for (
      let i = 0;
      i < markersInfo.sewagepieoption.series[0].data.length;
      i++
    ) {
      //value: 35, label: '烟尘'
      pieChartData.push({
        value: markersInfo.sewagepieoption.series[0].data[i].value,
        label: markersInfo.sewagepieoption.series[0].data[i].name,
      });
    }
    this.state = {
      item: props.navigation.state.params.item,
      showNoticeBar: showNoticeBar,
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
        backgroundTint: processColor('#FF0000'),
        // markerColor: processColor('#FAFAFA'),
        markerColor: processColor('#1CCE00'),
        textColor: processColor('white'),
        form: 'SQUARE',
        formSize: 14,
        xEntrySpace: 10,
        yEntrySpace: 5,
      },
      barChart: {
        legend: {
          enabled: false,
          textSize: 14,
          form: 'SQUARE',
          formSize: 14,
          xEntrySpace: 10,
          yEntrySpace: 5,
          formToTextSpace: 5,
          wordWrapEnabled: true,
          maxSizePercent: 0.5,
        },
        data: {
          dataSets: [
            {
              values: barChartData,
              // [
              //   { y: 100 },
              //   { y: 105 },
              //   { y: 102 },
              //   { y: 110 },
              //   { y: 114 },
              //   { y: 109 },
              //   { y: 105 },
              //   { y: 99 },
              //   { y: 95 },
              //   { y: 100 },
              //   { y: 105 },
              //   { y: 102 },
              //   { y: 110 },
              //   { y: 114 },
              //   { y: 109 },
              //   { y: 105 },
              //   { y: 99 },
              //   { y: 95 },
              //   { y: 100 },
              //   { y: 105 },
              //   { y: 102 },
              //   { y: 110 },
              //   { y: 114 },
              //   { y: 109 },
              //   { y: 105 },
              // ],
              label: 'Bar dataSet',
              config: {
                color: processColor(globalcolor.darkRed),
                barSpacePercent: 40,
                barShadowColor: processColor('lightgrey'),
                highlightAlpha: 90,
                highlightColor: processColor('red'),
              },
            },
          ],
        },
        // highlights: [{x: 3}, {x: 6}],
        xAxis: {
          valueFormatter: [
            '00',
            '01',
            '02',
            '03',
            '04',
            '05',
            '06',
            '07',
            '08',
            '09',
            '10',
            '11',
            '12',
            '13',
            '14',
            '15',
            '16',
            '17',
            '18',
            '19',
            '20',
            '21',
            '22',
            '23',
          ],
          granularityEnabled: true,
          granularity: 1,
        },
      },
      pieChart: {
        legend: {
          enabled: true,
          textSize: 8,
          form: 'CIRCLE',
          position: 'RIGHT_OF_CHART',
          wordWrapEnabled: true,
        },
        data: {
          dataSets: [
            {
              values: pieChartData,
              // [
              //   { value: 35, label: '烟尘' },
              //   { value: 20, label: 'NOx' },
              //   { value: 45, label: 'SO2' },
              // ],
              label: '',
              config: {
                colors: [
                  processColor('#324454'),
                  processColor('#69a1a9'),
                  processColor('#bb322c'),
                ],
                // [processColor('#C0FF8C'), processColor('#FFF78C'), processColor('#FFD08C'), processColor('#8CEAFF'), processColor('#FF8C9D')],
                valueTextSize: 12,
                valueTextColor: processColor('white'),
                sliceSpace: 5,
                selectionShift: 13,
              },
            },
          ],
        },
        highlights: [
          // {x:2}
        ],
        description: {
          // text: 'This is Pie chart description',
          text: '',
          textSize: 12,
          textColor: processColor('darkgray'),
        },
      },
    };
  }
  componentDidMount() {
    let _circleColors = [];
    let lineData = [];
    for (let i = 0; i < markersInfo.monitorTrend.series[0].data.length; i++) {
      _circleColors.push(processColor(globalcolor.antBlue));
      lineData.push({
        y: markersInfo.monitorTrend.series[0].data[i],
        marker: i + '时 ' + markersInfo.monitorTrend.series[0].data[i],
      });
    }
    this.setState(
      update(this.state, {
        data: {
          $set: {
            dataSets: [
              {
                values: lineData,
                // [
                //   { y: 0.88, marker: `00时 0.88` },
                //   { y: 0.77, marker: `01时 0.77` },
                //   { y: 105, marker: `02时 105` },
                //   { y: 115, marker: `0时 115` },
                //   { y: 50, marker: `03时 50` },
                //   { y: 50, marker: `04时 50` },
                //   { y: 50, marker: `05时 50` },
                //   { y: 50, marker: `06时 50` },
                //   { y: 50, marker: `07时 50` },
                //   { y: 50, marker: `08时 50` },
                //   { y: 50, marker: `09时 50` },
                //   { y: 50, marker: `10时 50` },
                //   { y: 50, marker: `11时 50` },
                //   { y: 50, marker: `12时 50` },
                //   { y: 50, marker: `13时 50` },
                //   { y: 50, marker: `14时 50` },
                //   { y: 50, marker: `15时 50` },
                //   { y: 50, marker: `16时 50` },
                //   { y: 45, marker: `17时 45` },
                //   { y: 44, marker: `18时 44` },
                //   { y: 43, marker: `19时 43` },
                //   { y: 44, marker: `20时 44` },
                //   { y: 54, marker: `21时 54` },
                //   { y: 57, marker: `22时 57` },
                //   { y: 60, marker: `23时 60` },
                // ],
                label: '',

                config: {
                  lineWidth: 2,
                  drawCircles: true,
                  // highlightColor: processColor('red'),
                  color: processColor(globalcolor.antBlue),
                  circleColors: _circleColors,
                  drawFilled: true,
                  fillColor: processColor('white'),
                  // fillAlpha: 60,
                  valueTextSize: 15,
                  drawValues: false,
                  valueFormatter: '##.000',
                  // dashedLine: {
                  //   lineLength: 20,
                  //   spaceLength: 20,
                  // },
                },
              },
            ],
          },
        },
        xAxis: {
          $set: {
            fontFamily: 'HelveticaNeue-Medium',
            fontWeight: 'bold',
            fontStyle: 'italic',
            position: 'BOTTOM',
            valueFormatter: [
              '00',
              '01',
              '02',
              '03',
              '04',
              '05',
              '06',
              '07',
              '08',
              '09',
              '10',
              '11',
              '12',
              '13',
              '14',
              '15',
              '16',
              '17',
              '18',
              '19',
              '20',
              '21',
              '22',
              '23',
            ],
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
    // let entry = event.nativeEvent;
    // if (entry == null) {
    //   this.setState({ ...this.state.barChart, selectedEntry: null });
    // } else {
    //   this.setState({ ...this.state.barChart, selectedEntry: JSON.stringify(entry) });
    // }
    // console.log(event.nativeEvent);
  }

  pieChartHandleSelect(event) {
    // let entry = event.nativeEvent
    // if (entry == null) {
    //   this.setState({...this.state.pieChart, selectedEntry: null})
    // } else {
    //   this.setState({...this.state.pieChart, selectedEntry: JSON.stringify(entry)})
    // }
    // console.log(event.nativeEvent)
  }

  // <View style={styles.container}>
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

  handleSelect(event) {
    // let entry = event.nativeEvent
    // if (entry == null) {
    //   this.setState({...this.state.barChart, selectedEntry: null})
    // } else {
    //   this.setState({...this.state.barChart, selectedEntry: JSON.stringify(entry)})
    // }
    // console.log(event.nativeEvent)
  }

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
                {this.state.showNoticeBar ? (
                  <NoticeBar
                    marqueeProps={{ loop: true, leading: 500, fps: 60 }}
                  >
                    报警 报警原因：参数报警 报警描述：温度状态参数过高
                  </NoticeBar>
                ) : null}
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
                      {this.state.item.PointName
                        ? this.state.item.Abbreviation +
                          ' ' +
                          this.state.item.PointName
                        : this.state.item.Abbreviation +
                          ' ' +
                          this.state.item.pointName}
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
                      backgroundColor: '#1CCE00',
                      height: 50,
                      width: '30%',
                      margin: 5,
                      borderRadius: 2,
                      alignContent: 'center',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Text style={{ color: '#fff', fontSize: 14 }}>
                      烟尘: 107
                    </Text>
                  </View>
                  <View
                    style={{
                      backgroundColor: '#1CCE00',
                      height: 50,
                      width: '30%',
                      margin: 5,
                      borderRadius: 2,
                      alignContent: 'center',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Text style={{ color: '#fff', fontSize: 14 }}>SO2: 112</Text>
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
                    <Text style={{ color: '#fff', fontSize: 14 }}>NOx: 59</Text>
                  </View>
                  <View
                    style={{
                      backgroundColor: '#1CCE00',
                      height: 50,
                      width: '30%',
                      margin: 5,
                      borderRadius: 2,
                      alignContent: 'center',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Text style={{ color: '#fff', fontSize: 14 }}>
                      折算烟尘: 154
                    </Text>
                  </View>
                  <View
                    style={{
                      backgroundColor: '#1CCE00',
                      height: 50,
                      width: '30%',
                      margin: 5,
                      borderRadius: 2,
                      alignContent: 'center',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Text style={{ color: '#fff', fontSize: 14 }}>
                      折算SO2: 61
                    </Text>
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
                    <Text style={{ color: '#fff', fontSize: 14 }}>
                      折算NOx: 41
                    </Text>
                  </View>
                </View>
                {/* 污染物结束 */}
                {
                  <View
                    style={{
                      flex: 1,
                      borderBottomColor: '#d8d8d8',
                      borderBottomWidth: 1,
                      height: 200,
                      marginTop: 10,
                    }}
                  >
                    <Text style={[{ marginLeft: 8 }]}>污染物24小时趋势图</Text>
                    <LineChart
                      style={styles.chart}
                      data={this.state.data}
                      chartDescription={{ text: '' }}
                      legend={{ enabled: false }}
                      marker={this.state.marker}
                      xAxis={this.state.xAxis}
                      drawGridBackground={false}
                      /* borderColor={processColor('teal')} */
                      borderWidth={1}
                      drawBorders={false}
                      touchEnabled={true}
                      dragEnabled={true}
                      scaleEnabled={false}
                      scaleXEnabled={false}
                      scaleYEnabled={false}
                      pinchZoom={false}
                      doubleTapToZoomEnabled={false}
                      dragDecelerationEnabled={true}
                      dragDecelerationFrictionCoef={0.99}
                      keepPositionOnRotation={false}
                      onSelect={this.handleSelect.bind(this)}
                      onChange={event => console.log(event.nativeEvent)}
                    />
                  </View>
                }
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
                          tintColor="#1CE3CB"
                          opacity={1.0}
                          source={require('../../images/lct.png')}
                        />
                      </View>

                      <View style={{ marginLeft: 10 }}>
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
                          tintColor="#FC9D27"
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
                  <TouchableOpacity
                    style={{}}
                    onPress={p => {
                      this.props.dispatch(
                        NavigationActions.navigate({ routeName: 'AlarmRecord' })
                      );
                    }}
                  >
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
                          tintColor="#FC274B"
                          source={require('../../images/txl.png')}
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
                  <TouchableOpacity
                    style={{}}
                    onPress={p => {
                      this.props.dispatch(
                        NavigationActions.navigate({
                          routeName: 'EarlyWarningInfo',
                        })
                      );
                    }}
                  >
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
                          tintColor="#00B7E3"
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
          <View style={style}>
            <Operation />
          </View>
          {/* 排污 */}
          <View style={style}>
            <ScrollView>
              <View style={{ backgroundColor: '#fefefe', width: SCREEN_WIDTH }}>
                <View
                  style={{
                    backgroundColor: '#f4f4f8',
                    borderBottomColor: '#d8d8d8',
                    borderBottomWidth: 1,
                  }}
                >
                  <Text style={{ color: '#6c6c6c', margin: 8 }}>
                    24小时排污量
                  </Text>
                  <BarChart
                    style={[styles.chart, { height: 160, width: SCREEN_WIDTH }]}
                    data={this.state.barChart.data}
                    xAxis={this.state.barChart.xAxis}
                    animation={{ durationX: 2000 }}
                    legend={this.state.barChart.legend}
                    gridBackgroundColor={processColor('#ffffff')}
                    drawBarShadow={false}
                    drawValueAboveBar={true}
                    drawHighlightArrow={true}
                    onSelect={this.handleSelect.bind(this)}
                    highlights={this.state.barChart.highlights}
                    drawBorders={false}
                    touchEnabled={true}
                    dragEnabled={true}
                    scaleEnabled={false}
                    scaleXEnabled={false}
                    scaleYEnabled={false}
                    pinchZoom={false}
                    doubleTapToZoomEnabled={false}
                    dragDecelerationEnabled={true}
                    dragDecelerationFrictionCoef={0.99}
                    keepPositionOnRotation={false}
                    onChange={event => console.log(event.nativeEvent)}
                  />
                </View>
                <View
                  style={{
                    paddingTop: 1,
                    borderBottomColor: '#d8d8d8',
                    borderBottomWidth: 1,
                    flexDirection: 'row',
                  }}
                />
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
                  <Text style={{ fontSize: 15 }}>总排污量：200</Text>
                  <Text style={{ fontSize: 15 }}>排污占比：12.8%</Text>
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
                  <PieChart
                    style={[styles.chart, { height: 160, width: SCREEN_WIDTH }]}
                    logEnabled={true}
                    /* chartBackgroundColor={processColor('pink')} */
                    chartDescription={this.state.pieChart.description}
                    data={this.state.pieChart.data}
                    legend={this.state.pieChart.legend}
                    highlights={this.state.pieChart.highlights}
                    entryLabelColor={processColor('white')}
                    entryLabelTextSize={12}
                    drawEntryLabels={true}
                    rotationEnabled={true}
                    rotationAngle={45}
                    usePercentValues={false}
                    styledCenterText={{
                      text: '',
                      color: processColor('pink'),
                      size: 12,
                    }}
                    centerTextRadiusPercent={100}
                    holeRadius={40}
                    holeColor={processColor('#f0f0f0')}
                    transparentCircleRadius={45}
                    transparentCircleColor={processColor('#f0f0f088')}
                    maxAngle={350}
                    onSelect={() => {}}
                    onChange={event => console.log(event.nativeEvent)}
                  />
                </View>
                <View
                  style={{
                    paddingTop: 1,
                    borderBottomColor: '#d8d8d8',
                    borderBottomWidth: 1,
                    flexDirection: 'row',
                  }}
                />
              </View>
            </ScrollView>
          </View>
          <View style={style}>
            <QualityControl />
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
    marginBottom: 8,
    marginLeft: 4,
    marginRight: 4,
  },
});
export const title = 'Tabs';
export const description = 'Tabs example';
//make this component available to the app
export default SingleStationDetail;
