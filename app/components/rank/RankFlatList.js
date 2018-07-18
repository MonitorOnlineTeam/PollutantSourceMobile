//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import RankChartBar from '../rank/RankChartBar';
import { createAction } from '../../utils';
import {
  getAllConcentration,
  defaultPollutantCodes,
} from '../../mockdata/Base/commonbase';
import RankFlatListData from '../../mockdata/Rank/RankFlatListData.json';

const SCREEN_WIDTH = Dimensions.get('window').width;

/**
 * 排名-列表
 *
 * @class RankFlatList
 * @extends {Component}
 */
@connect(
  ({ app, datapreview }) => ({
    listRankData: app.listRankData,
    pressPollutantCode: app.pressPollutantCode,
    YValues: datapreview.YValues,
  }),
  null,
  null,
  { withRef: true }
)
class RankFlatList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stationLst: [],
    };
    getAllData('hour').then(value => {
      let stationLst = value;
      let aa;
      stationLst.forEach(item => {
        aa = Math.floor(Math.random() * 100000 + 10000) / 1000;
        item.aa = aa;
      });
      console.log(stationLst);
      this.setState({
        stationLst: stationLst,
      });
      this.props.dispatch(
        createAction('datapreview/updateState')({ YValues: stationLst })
      );
    });
  }
  render() {
    return (
      <FlatList
        data={this.props.YValues}
        ListHeaderComponent={
          <View
            style={{
              height: 240,
              width: SCREEN_WIDTH,
              backgroundColor: '#ffffff',
              marginBottom: 5,
            }}
          >
            <RankChartBar
              style={{ marginBottom: 10 }}
              ref={ref => (this._rankChartBar = ref)}
            />
            <View style={{ flexDirection: 'row', marginTop: 5 }}>
              <View
                style={{
                  backgroundColor: '#03d304',
                  width: 15,
                  height: 15,
                  marginLeft: 30,
                }}
              />
              <Text style={{ marginLeft: 5 }}>微量</Text>
              <View
                style={{
                  backgroundColor: '#efdc31',
                  width: 15,
                  height: 15,
                  marginLeft: 30,
                }}
              />
              <Text style={{ marginLeft: 5 }}>少量</Text>
              <View
                style={{
                  backgroundColor: '#ff401a',
                  width: 15,
                  height: 15,
                  marginLeft: 30,
                }}
              />
              <Text style={{ marginLeft: 5 }}>大量</Text>
              <View
                style={{
                  backgroundColor: '#16010b',
                  width: 15,
                  height: 15,
                  marginLeft: 30,
                }}
              />
              <Text style={{ marginLeft: 5 }}>巨量</Text>
            </View>
          </View>
        }
        renderItem={this._renderItemList}
        keyExtractor={this._extraUniqueKey}
      />
    );
  }
  _sortRankChart = () => {
    this.props.dispatch(createAction('app/doSortchartDataAll')());
    this._rankChartBar.wrappedInstance._sort();
  }
  //FlatList key
  _extraUniqueKey = (item, index) => `index11${index}${item}`
  _renderItemList = item => {
    console.log(item.item.aa);
    if (item.item.key != undefined) {
      return (
        <View
          style={{
            backgroundColor: '#ffffff',
            flexDirection: 'row',
            width: SCREEN_WIDTH,
            height: 40,
            justifyContent: 'space-between',
          }}
        >
          <Text
            style={{
              fontSize: 14,
              color: '#868686',
              padding: 3,
              width: SCREEN_WIDTH / 3,
              marginLeft: 10,
            }}
          >
            {item.item.Abbreviation}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: '#333333',
              padding: 3,
              width: SCREEN_WIDTH / 4 - 20,
            }}
          >
            {item.item.pointName}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color:
                item.item.aa > 90
                  ? '#16010b'
                  : item.item.aa > 60
                    ? '#ff401a'
                    : item.item.aa > 30 ? '#efdc31' : '#03d304',
              padding: 3,
              width: SCREEN_WIDTH / 6,
            }}
          >
            {item.item.aa}
          </Text>
        </View>
      );
    } else {
      return (
        <View
          style={{
            backgroundColor: '#ffffff',
            flexDirection: 'row',
            width: SCREEN_WIDTH,
            height: 40,
            marginLeft: 10,
            marginRight: 20,
            justifyContent: 'space-between',
          }}
        >
          <Text
            style={{
              fontSize: 14,
              color: '#868686',
              padding: 3,
              width: SCREEN_WIDTH / 3,
              marginLeft: 10,
            }}
          >
            {item.item.Abbreviation}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: '#333333',
              padding: 3,
              width: SCREEN_WIDTH / 4 - 20,
            }}
          >
            {item.item.pointName}
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: item.item.chartColor,
              padding: 3,
              width: SCREEN_WIDTH / 6,
            }}
          >
            {188}
          </Text>
        </View>
      );
    }
  }
}

const getAllData = async dataType => {
  let datalist = [];

  const getdata = await getAllConcentration({ dataType: dataType });
  getdata.map(item => {
    let data = {
      key: item.DGIMN,
      entpointName: item.EntName + '-' + item.PointName,
      monitorTime:
        item.MonitoringDatas.length === 0
          ? moment().format('YYYY-MM-DD HH:mm:ss')
          : item.MonitoringDatas[0].MonitoringTime,
      entName: item.EntName,
      pointName: item.PointName,
      industry: item.IndustryTypeCode,
      dgimn: item.DGIMN,
      control: item.AttentionCode,
      dataType: dataType,
      MonitoringDatasi: item.MonitoringDatas[0],
      Abbreviation: item.Abbreviation,
      bstatus: null,

      status:
        item.DGIMN === 'bjldgn01' ||
        item.DGIMN === 'dtgjhh11102' ||
        item.DGIMN === 'dtgrjx110'
          ? 3
          : 1,
    };
    if (
      item.DGIMN === 'bjldgn01' ||
      item.DGIMN === 'dtgjhh11102' ||
      item.DGIMN === 'dtgrjx110'
    ) {
      data.status = 2;
    } else if (
      item.DGIMN === 'dtgrjx104' ||
      item.DGIMN === 'dtgrjx103' ||
      item.DGIMN === 'lywjfd03'
    ) {
      data.status = 3;
    } else {
      data.status = 1;
    }
    if (item.MonitoringDatas.length > 0) {
      item.MonitoringDatas[0].PollutantDatas.map(wry => {
        data[wry.PollutantCode] = wry.Concentration + ',' + wry.PollutantCode;
        data[wry.PollutantCode + '-' + 'PollutantName'] = wry.PollutantName;
        data[wry.PollutantCode + '-' + 'PollutantCode'] = wry.PollutantCode;
        data[wry.PollutantCode + '-' + 'IsExceed'] = wry.IsExceed; // 是否超标
        data[wry.PollutantCode + '-' + 'ExceedValue'] = wry.ExceedValue; // 超标倍数
        data[wry.PollutantCode + '-' + 'IsException'] = wry.IsException; // 是否异常
        data[wry.PollutantCode + '-' + 'ExceptionText'] = wry.ExceptionText; // 异常类型
        data[wry.PollutantCode + '-' + 'Standard'] = wry.Standard; // 标准值
      });
    }
    datalist.push(data);
  });
  console.log(datalist);
  return datalist;
};
// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default RankFlatList;
