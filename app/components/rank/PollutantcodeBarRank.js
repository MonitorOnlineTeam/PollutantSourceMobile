//import liraries
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { createAction, ShowToast, NavigationActions } from '../../utils';
import { connect } from 'react-redux';
import data from '../../mockdata/Rank/mainmap.json';
import {
  getAllConcentration,
  defaultPollutantCodes,
} from '../../mockdata/Base/commonbase';


const SCREEN_WIDTH = Dimensions.get('window').width;
/**
 * 污染因子bar
 * helenChen
 * @class PollutantcodeBar
 * @extends {Component}
 */
@connect(({ app, loading, datapreview }) => ({
  YValues: datapreview.YValues,
}))
class PollutantcodeBarRank extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pollutantData: data.data[2].pollutantType,
      pressPollutantCode: data.data[2].pollutantType[0].pollutantCode,
    };
  }

  //污染因子 item
  _renderItemPollutant = item => {
    let color =
      item.item.pollutantCode === this.state.pressPollutantCode
        ? '#4B83F5'
        : '#42403E';
    return (
      <View
        style={{
          backgroundColor: '#ffffff',
          flexDirection: 'row',
          height: 40,
          marginLeft: 4,
          marginRight: 4,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <TouchableOpacity
          onPress={() => {
            
            this.setState({ pressPollutantCode: item.item.pollutantCode });
          
            this.props.dispatch(
              createAction('datapreview/demo123')()
            );
          }}
        >
          {item.item.pollutantName == 'PM25' ? (
            <Text
              style={{
                fontSize: 14,
                alignSelf: 'center',
                padding: 5,
                color: color,
              }}
            >
              PM<Text
                style={{
                  fontSize: 8,
                  alignSelf: 'center',
                  padding: 5,
                  color: color,
                }}
              >
                2.5
              </Text>{' '}
            </Text>
          ) : item.item.pollutantName == 'PM10' ? (
            <Text
              style={{
                fontSize: 14,
                alignSelf: 'center',
                padding: 5,
                color: color,
              }}
            >
              PM<Text
                style={{
                  fontSize: 8,
                  alignSelf: 'center',
                  padding: 5,
                  color: color,
                }}
              >
                10
              </Text>{' '}
            </Text>
          ) : item.item.pollutantName == 'NO2' ? (
            <Text
              style={{
                fontSize: 14,
                alignSelf: 'center',
                padding: 5,
                color: color,
              }}
            >
              NO<Text
                style={{
                  fontSize: 8,
                  alignSelf: 'center',
                  padding: 5,
                  color: color,
                }}
              >
                2
              </Text>{' '}
            </Text>
          ) : item.item.pollutantName == 'SO2' ? (
            <Text
              style={{
                fontSize: 14,
                alignSelf: 'center',
                padding: 5,
                color: color,
              }}
            >
              SO<Text
                style={{
                  fontSize: 8,
                  alignSelf: 'center',
                  padding: 5,
                  color: color,
                }}
              >
                2
              </Text>{' '}
            </Text>
          ) : item.item.pollutantName == 'O3' ? (
            <Text
              style={{
                fontSize: 14,
                alignSelf: 'center',
                padding: 5,
                color: color,
              }}
            >
              O<Text
                style={{
                  fontSize: 8,
                  alignSelf: 'center',
                  padding: 5,
                  color: color,
                }}
              >
                3
              </Text>{' '}
            </Text>
          ) : (
            <Text
              style={{
                fontSize: 14,
                alignSelf: 'center',
                padding: 5,
                color: color,
              }}
            >
              {item.item.pollutantName}
            </Text>
          )}
        </TouchableOpacity>
      </View>
    );
  }
  //FlatList key
  _extraUniqueKey = (item, index) => `index222${index}${item}`
  render() {
    return (
      <View style={{ width: SCREEN_WIDTH, backgroundColor: '#ffffff' }}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          extraData={this.state.pressPollutantCode}
          data={this.state.pollutantData}
          renderItem={this._renderItemPollutant}
          keyExtractor={this._extraUniqueKey}
        />
      </View>
    );
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
  return datalist;
};
// define your styles
const styles = StyleSheet.create({});

//make this component available to the app
export default PollutantcodeBarRank;
