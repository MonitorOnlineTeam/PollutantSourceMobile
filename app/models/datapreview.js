import { Model } from '../dvapack';
// import * as datapreviewService  from '../services/datapreviewService';
import { getToken, saveStorage, loadStorage } from '../dvapack/storage';
import { shishi, fenzhong, xiaoshi, ri } from '../config/globalconst';
import {
  getAllConcentration,
  defaultPollutantCodes,
} from '../mockdata/Base/commonbase';

export default Model.extend({
  namespace: 'datapreview',
  state: {
    searchType: 'xiaoshi',
    seasons: [],
    searchDateValue: [],
    pollutantBeens: [
      {
        PollutantCode: '0',
        PollutantName: 'PM10',
        Unit: 'μg/m³',
      },
      {
        PollutantCode: '1',
        PollutantName: 'PM2.5',
        Unit: 'μg/m³',
      },
      {
        PollutantCode: '0',
        PollutantName: 'PM10',
        Unit: 'μg/m³',
      },
      {
        PollutantCode: '1',
        PollutantName: 'PM2.5',
        Unit: 'μg/m³',
      },
    ],
    YValues:[],
    pointBeens: [
      /**
       * pID : 2dc875e5-d500-4d6a-8f0f-c395a239b2ad
       * pname : 惠冶镁业有限公司
       * status : 0
       * text : 码头二号排口-重
       * tag : 废气
       * DGIMN : fq106
       * type : 2
       * Longitude : 116.217919
       * Latitude : 39.885501
       * Times : 2017/5/8 13:25:08
       * Values : ["179.463","363.079","374.874","","","12.041","400.963","","269.687","361.522","","60.344","110.141","268.211","393.305","68.767","245.988"]
       * Colors : ["#0066FF","#FF0000","","","","","","","","","","","","","","",""]
       */
      // {
      //     pID:'2dc875e5-d500-4d6a-8f0f-c395a239b2ad',
      //     pname:'惠冶镁业有限公司',
      //     status:'0',
      //     text:'码头二号排口-重',
      //     tag:'废气',
      //     DGIMN:'fq106',
      //     type:2,
      //     Longitude:1.1,
      //     Latitude:1.1,
      //     Times:'2017/5/8 13:25:08',
      //     Values:['2','6.8','7.9','8.2'],
      //     Colors:['','','',''],
      // },
    ],
    selectedPollutantIndex: 0,
    selectOption: 2,
    textDate: '',
    groupSelectorVisible: false,
    groupItems: [],
    groupSelected: '全部',
    pullToRefreshing: false,
  },
  reducers: {
    setSearchType(state, { payload }) {
      return { ...state, ...payload };
    },
    setSeasons(state, { payload }) {
      return payload.seasons;
    },
    setState(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  subscriptions: {
    setupSubscriber({ dispatch, listen }) {
      listen({
        DataPreviewAll: () => {
          console.log('listen DataPreviewAll');

          dispatch({
            type: 'getPollutantCodes',
          });
          dispatch({
            type: 'getGroupList',
            // payload: {searchTime:prefixDate+' '+myDate.getHours()+":00:00",mTag:xiaoshi,},
            payload: { mTag: xiaoshi },
          });
          // dispatch({ type: 'loadPointWithData',
          //     payload: {searchTime:prefixDate+' '+myDate.getHours()+":00:00",mTag:xiaoshi,GroupID:'全部'},
          // });
        },
        RankOfStationByEmissions:()=>{
          this.setTimeout(  
            () => {  dispatch({
              type: 'initRankList',
              payload: { mTag: xiaoshi },
            }); },  
            500  
          );  
         
        }
      });
    },
  },
  
  effects: {
    
    /**
     * 获取指定污染物的因子编码
     * houxiaofeng
     *
     * @param {any} { payload }
     * @param {any} { update, call, put,select }
     */
    *getPollutantCodes({ payload }, { update, call, put, select }) {
      const { user } = yield select(state => state.app);
      const { selectedPolluntType } = yield select(state => state.app);
      let pollutantBeens = yield call(datapreviewService.getPollutantCodes, {
        type: selectedPolluntType,
        user,
      });
      yield update({ pollutantBeens });
    },
    *demo123({ payload }, { update, call, put, select }) {
      console.log('demo123');
      const {YValues} = yield select(state => state.datapreview);
       
        let   array = [];
             YValues.forEach(item => {
              item.aa = Math.floor(Math.random() * 100000 + 10000) / 1000;
              array.push(item);
            });
             array.sort(function(a,b){
           
             return b.aa-a.aa;
         });
      // yield put('setState', { 'YValues': array});
      
      yield update({"YValues":array });
    },
    *initRankList({ payload }, { update, call, put, select }) {
      console.log('initRankList');
      let datalist = [];
      const getdata = yield call (getAllConcentration,{ dataType: 'hour' });
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
          dataType: 'hour',
          MonitoringDatasi: item.MonitoringDatas[0],
          Abbreviation: item.Abbreviation,
          bstatus: null,
          aa:Math.floor(Math.random() * 100000 + 10000) / 1000,
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
       datalist.sort(function(a,b){
     
       return b.aa-a.aa;
   });
      yield update({"YValues":datalist });
    },
    *loadPointWithData(
      {
        payload: { searchTime, mTag, GroupID },
      },
      { update, call, put, select }
    ) {
      // console.log(searchTime);
      // console.log(mTag);
      // console.log(GroupID);
      yield put('showSpinning', {});
      const { user } = yield select(state => state.app);
      const { selectedPolluntType } = yield select(state => state.app);
      const { groupItems } = yield select(state => state.datapreview);
      if (searchTime != -1) {
        searchTime = searchTime.replace(/ /g, '+');
        // searchTime = searchTime.replace(/:/g,'%3A');
      }
      let pointBeens = yield call(datapreviewService.loadPointWithData, {
        type: selectedPolluntType,
        user,
        searchTime,
        mTag,
        GroupID,
      });
      //获取国控点的方法
      // let GKpointBeens =  yield call(datapreviewService.getLastHourData, {type:selectedPolluntType,user,searchTime,mTag,GroupID:groupStrs});
      // let GKpointBeens2 =  yield call(datapreviewService.getLastDayData, {type:selectedPolluntType,user,searchTime,mTag,GroupID:groupStrs});
      // pointBeens = pointBeens.concat(GKpointBeens);
      let GKGroupID = GroupID;
      if (GroupID == '' || GroupID == '全部') {
        GKGroupID = '';
        groupItems.map((item, key) => {
          if (key == 0) {
            GKGroupID = '';
          } else if (key == 1) {
            GKGroupID = item + '';
          } else {
            GKGroupID = GKGroupID + ',' + item;
          }
        });
      }
      let GKpointBeens = [];
      if (mTag == ri) {
        GKpointBeens = yield call(datapreviewService.getLastDayData, {
          type: selectedPolluntType,
          user,
          searchTime,
          mTag,
          GroupID: GKGroupID,
        });
      } else if (mTag == xiaoshi) {
        GKpointBeens = yield call(datapreviewService.getLastHourData, {
          type: selectedPolluntType,
          user,
          searchTime,
          mTag,
          GroupID: GKGroupID,
        });
      } else if (mTag == fenzhong || mTag == shishi) {
        GKpointBeens = yield call(datapreviewService.getLastHourData, {
          type: selectedPolluntType,
          user,
          searchTime,
          mTag,
          GroupID: GKGroupID,
        });
        let tempArray = [];
        GKpointBeens.map((item, key) => {
          console.log(item);
          if (
            item.Times != undefined &&
            item.Times != null &&
            item.Times != ''
          ) {
            // item.tag
            tempArray = item.Times.split(' ');
            item.tag = item.tag + '(' + tempArray[1].split(':')[0] + ':00)';
          }
        });
      }
      // else if (mTag == shishi) {
      //     GKpointBeens =  yield call(datapreviewService.getLastHourData, {type:selectedPolluntType,user,searchTime,mTag,GroupID:GKGroupID});
      //     GKpointBeens.map ((item,key)=>{
      //         console.log(item);
      //     });
      // }
      pointBeens = pointBeens.concat(GKpointBeens);

      yield update({ pointBeens });
      yield put('hideSpinning', {});
      yield update({ pullToRefreshing: false });
    },
    *initTextDate(
      {
        payload: { searchTime },
      },
      { update, call, put, select }
    ) {
      let textDate = yield select(state => state.textDate);
      if (textDate == '' || textDate == undefined || textDate == null) {
        yield update({ textDate: searchTime });
      }
    },
    /**
     * 获取监测点分组，初始化列表
     * houxiaofeng
     *
     * @param {any} { payload: {mTag} }
     * @param {any} { update, call, put,select }
     */
    *getGroupList(
      {
        payload: { mTag },
      },
      { update, call, put, select }
    ) {
      yield put('showSpinning', {});
      const { user } = yield select(state => state.app);
      const { selectedPolluntType } = yield select(state => state.app);
      const { groupItems } = yield select(state => state.datapreview);
      if (groupItems.length == 0) {
        let myDate = new Date();
        myDate.setTime(myDate.getTime() - 60 * 60 * 1000);
        let prefixDate =
          myDate.getFullYear() +
          '-' +
          (myDate.getMonth() + 1) +
          '-' +
          myDate.getDate();
        let searchTime =
          prefixDate +
          ' ' +
          (myDate.getHours() < 10
            ? '0' + myDate.getHours()
            : myDate.getHours()) +
          ':00:00';
        // dispatch({ type: 'initTextDate', payload: {searchTime:prefixDate+' '+myDate.getHours()+":00:00",},});
        yield put('initTextDate', { searchTime });
        if (searchTime != -1) {
          searchTime = searchTime.replace(/ /g, '+');
          // searchTime = searchTime.replace(/:/g,'%3A');
        }
        let pointBeens = yield call(datapreviewService.loadPointWithData, {
          type: selectedPolluntType,
          user,
          searchTime,
          mTag,
        });
        // let groupItems = [];
        let groupStrs = '';
        pointBeens.map((item, key) => {
          if (item && item.GroupID && groupItems.indexOf(item.GroupID) == -1) {
            if (groupItems.length == 0) {
              groupStrs = item.GroupID;
            } else {
              groupStrs = groupStrs + ',' + item.GroupID;
            }
            groupItems.push(item.GroupID);
          }
        });
        if (groupItems.indexOf('全部') == -1) {
          groupItems.splice(0, 0, '全部');
        }
        yield update({ groupItems });
        //获取国控点的方法
        let GKpointBeens = yield call(datapreviewService.getLastHourData, {
          type: selectedPolluntType,
          user,
          searchTime,
          mTag,
          GroupID: groupStrs,
        });
        // let GKpointBeens2 =  yield call(datapreviewService.getLastDayData, {type:selectedPolluntType,user,searchTime,mTag,GroupID:groupStrs});
        pointBeens = pointBeens.concat(GKpointBeens);

        yield update({ pointBeens });
        yield put('hideSpinning', {});
      } else {
        yield put('hideSpinning', {});
      }
    },
  },
});
