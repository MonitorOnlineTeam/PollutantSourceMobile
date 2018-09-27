import React, { Component } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity, processColor, } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { SCREEN_WIDTH } from '../../config/globalsize';
import { WhiteSpace, WingBlank } from 'antd-mobile-rn';
import { connect } from 'react-redux';
import { LineChart, BarChart, PieChart } from 'react-native-charts-wrapper';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import globalcolor from '../../config/globalcolor';
import update from 'immutability-helper';

import markersInfo from '../../mockdata/OverView/markersInfo.json';

/*
 * @Description: 站点信息.
 */
@connect()
export default class SiteInformation extends Component {

  static navigationOptions = {
    // header: null,
    title: '站点信息',
    tabBarLabel: '站点信息',
    headerTintColor: '#FFF',
    headerStyle: { backgroundColor: '#1895EF' },
    headerTitleStyle: { alignSelf: 'center', },
    headerRight: (<View><Image
      style={{ width: 23, height: 23, marginRight: 8, alignSelf: "center" }}
      tintColor="#FFF"
      source={require('../../images/lssj.png')}
    /></View>),
    headerLeft: (
      <Text
        onPress={() => {
          navigation.dispatch(NavigationActions.back());
        }}
        style={{ marginLeft: 8, width: 32, height: 32, textAlign: 'center' }}
      >
        <Icon name={'angle-left'} size={32} style={{ color: '#FFFFFF' }} />
      </Text>
    ),
    
    tabBarIcon: ({ focused, tintColor }) => (
      // <Image
      //   style={[
      //     wholeSituationStyle.icon,
      //     { tintColor: focused ? tintColor : 'gray' },
      //   ]}
      //   source={require('../../images/person.png')}
      // />
      <Icon
        name={'address-card'}
        size={20}
        style={{ color: focused ? tintColor : 'gray' }}
      />
    ),
  }

  handleSelect(event) { }
  constructor(props) {
    super(props);
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


     data:{},
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
        markerColor: processColor('#f0f0f0'),
        textColor: processColor('#151515'),
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
  render() {
    return (
      <ScrollView>
        <View style={styles.MainView}>

          {/* 文字描述模块 */}
          <View style={styles.SpecificView}>

            <Text style={[styles.TitleText]}>大唐集团-废气排口1</Text>
            <Text style={styles.ContentText}>运维人：<Text style={{ color: "#BABABA" }}>马冬梅</Text></Text>
            <Text style={[styles.ContentText]}>运维电话：<Text style={{ color: "#BABABA" }}>15160169915</Text></Text>
            <Text style={[styles.ContentText]}>当前运维人：<Text style={{ color: "#BABABA" }}>小王</Text></Text>
            <WhiteSpace size="md" />
            <View style={{
              flexDirection: "row", width: "100%", alignSelf: 'center',
              borderBottomColor: "#E3E3E3", borderBottomWidth: 0.8
            }}></View>
            <WhiteSpace size="md" />

            <View style={{ flexDirection: "row" }}>
              <WingBlank size="sm" />
              <View style={{ flex: 1 }}>

                <AnimatedCircularProgress
                  size={90}
                  width={8}
                  fill={90}
                  tintColor="#2096F3"

                  backgroundColor="#F1F4F9" >
                  {
                    () => (
                      <View >
                        <Text style={{ fontSize: 11 }}>
                          传输有效率
                      </Text>
                        <Text style={{ fontSize: 11, alignSelf: "center", color: "#2096F3" }}>
                          90%
                      </Text>
                      </View>
                    )
                  }
                </AnimatedCircularProgress>
              </View>
              <View style={{ flex: 1 }}>
                <AnimatedCircularProgress
                  size={90}
                  width={8}
                  fill={70}
                  tintColor="#2096F3"

                  backgroundColor="#F1F4F9" >
                  {
                    () => (
                      <View >
                        <Text style={{ fontSize: 11 }}>
                          传输有效率
                      </Text>
                        <Text style={{ fontSize: 11, alignSelf: "center", color: "#2096F3" }}>
                          70%
                      </Text>
                      </View>
                    )
                  }
                </AnimatedCircularProgress>
              </View>
              <View style={{ flex: 1 }}>
                <AnimatedCircularProgress
                  size={90}
                  width={8}
                  fill={90}
                  tintColor="#2096F3"

                  backgroundColor="#F1F4F9" >
                  {
                    () => (
                      <View >
                        <Text style={{ fontSize: 11 }}>
                          传输有效率
                      </Text>
                        <Text style={{ fontSize: 11, alignSelf: "center", color: "#2096F3" }}>
                          96%
                      </Text>
                      </View>
                    )
                  }
                </AnimatedCircularProgress>
              </View>
            </View>


          </View>
        </View>

        <View style={styles.MainView}>
          <Text style={[styles.TitleText]}>污染物 2018年6月27日 00:00:00</Text>
          <WhiteSpace />
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            <View style={{
              backgroundColor: "#FF4F4F", flex: 1, alignSelf: "center", justifyContent: "center", alignItems: "center",
              height: 50, borderRadius: 5, margin: 3, width: 500
            }}>
              <Text style={{ color: "#FFFFFF" }}>烟尘：107</Text>
            </View>
            <View style={{
              backgroundColor: "#2cca69", flex: 1, alignSelf: "center", justifyContent: "center", alignItems: "center",
              height: 50, borderRadius: 5, margin: 3, width: 500
            }}>
              <Text style={{ color: "#FFFFFF" }}>SO2：107</Text>
            </View>
            <View style={{
              backgroundColor: "#2cca69", flex: 1, alignSelf: "center", justifyContent: "center", alignItems: "center",
              height: 50, borderRadius: 5, margin: 3, width: 500
            }}>
              <Text style={{ color: "#FFFFFF" }}>NOx：107</Text>
            </View>

          </View>
          <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
            <View style={{
              backgroundColor: "#2cca69", flex: 1, alignSelf: "center", justifyContent: "center", alignItems: "center",
              height: 50, borderRadius: 5, margin: 3, width: 500
            }}>
              <Text style={{ color: "#FFFFFF" }}>折算烟尘：107</Text>
            </View>
            <View style={{
              backgroundColor: "#FF4F4F", flex: 1, alignSelf: "center", justifyContent: "center", alignItems: "center",
              height: 50, borderRadius: 5, margin: 3, width: 500
            }}>
              <Text style={{ color: "#FFFFFF" }}>折算SO2：107</Text>
            </View>
            <View style={{
              backgroundColor: "#F7B507", flex: 1, alignSelf: "center", justifyContent: "center", alignItems: "center",
              height: 50, borderRadius: 5, margin: 3, width: 500
            }}>
              <Text style={{ color: "#FFFFFF" }}>折算NOx：107</Text>
            </View>

          </View>
        </View>
        <View style={styles.MainView}>
          <Text style={[styles.TitleText]}>烟尘24小时趋势图</Text>
          <WhiteSpace />
          <View
            style={{
              flex: 1,
              borderBottomColor: '#d8d8d8',
              borderBottomWidth: 1,
              height: 200,
              marginTop: 10,
            }}
          >
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
        </View>
         {/* 历史数据 */}
        <TouchableOpacity style={styles.MainView}>
          <View style={{ flexDirection: "column", }}>
            <View style={{ flexDirection: "row", }}>
              <View style={{
                width: 5, height: 15, backgroundColor: "#24DCFE",
                borderRadius: 5
              }}></View>
              <WingBlank size="sm" />
              <Text style={{ flex: 1, fontSize: 15, color: "#000000" }}>历史数据</Text>
              <Text style={{ fontSize: 10 }}>2018-06-27 10:10</Text>
            </View>
            <View style={{ flexDirection: "row", }}>
              <WingBlank size="md" />
              <Text style={{ fontSize: 10 }}>PM10仪表异常</Text>
            </View>
          </View>
        </TouchableOpacity>
           {/* 视频监控 */}
        <TouchableOpacity style={styles.MainView}>
          <View style={{ flexDirection: "column", }}>
            <View style={{ flexDirection: "row", }}>
              <View style={{
                width: 5, height: 15, backgroundColor: "#B676FF",
                borderRadius: 5
              }}></View>
              <WingBlank size="sm" />
              <Text style={{ flex: 1, fontSize: 15, color: "#000000" }}>历史数据</Text>
              <Text style={{ fontSize: 10 }}>2018-06-27 10:10</Text>
            </View>
            <View style={{ flexDirection: "row", }}>
              <WingBlank size="md" />
              <Text style={{ fontSize: 10 }}>张三完成2018年9月26日 14:40:19定陵设备</Text>
            </View>
          </View>
        </TouchableOpacity>

   <WhiteSpace />

      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  chart: {
    flex: 1,
    marginBottom: 8,
    marginLeft: 4,
    marginRight: 4,
  },
  MainView: {
    width: '96%',
    backgroundColor: "#FFFFFF",

    padding: 15,
    borderRadius: 6,
    alignSelf: 'center',
    marginTop: 6,
    marginBottom: 3,
    shadowColor: "#E3E3E3",
    shadowOffset: { w: 0, h: 50 },
    shadowRadius: 3,
    shadowOpacity: 0.1,
    elevation: 1,
  },
  flexStyle:
  {
    flex: 1
  },
  TitleImg: {
    width: 13,
    height: 13,
    marginRight: 10,
  },
  TitleText: {
    color: '#3F3F3F',
    fontSize: 14
  },
  ContentText: {
    fontSize: 13,
    color: "#3F3F3F",
    lineHeight: 24

  },
  SpecificView:
  {
    padding: "1%",
  },
  RowView:
  {
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  ClickText:
  {
    fontSize: 13,
    color: "#2F9CF4",
    paddingRight: 15
  }
});