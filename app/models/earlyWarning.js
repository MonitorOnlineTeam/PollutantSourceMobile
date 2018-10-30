import { Model } from '../dvapack';
import { getToken, saveStorage, loadStorage } from '../dvapack/storage';
import { shishi, fenzhong, xiaoshi, ri } from '../config/globalconst';
import {
  getAllConcentration,
  defaultPollutantCodes,
} from '../mockdata/Base/commonbase';

export default Model.extend({
  namespace: 'earlyWarning',
  state: {
    persons: [
      {
        name: '大唐集团-废气排口1',
        time: '2018年9月19日 10:59:32~2018年9月19日 10:59:24',
        type: '对比预警',
        c: '11',
        content: '烟气分析仪型号EMS168781数据发生较大变化',
        ifchicked: '0',
      },
      {
        name: '大唐集团-废气排口2',
        time: '2018年9月19日 10:59:32~2018年9月19日 10:59:24',
        type: '对比预警',
        c: '12',
        content: '烟气分析仪型号EMS168782数据发生较大变化',
        ifchicked: '0',
      },
      {
        name: '大唐集团-废气排口3',
        time: '2018年9月19日 10:59:32~2018年9月19日 10:59:24',
        type: '对比预警',
        c: '13',
        content: '烟气分析仪型号EMS168783数据发生较大变化',
        ifchicked: '0',
      },
      {
        name: '大唐集团-废气排口4',
        time: '2018年9月19日 10:59:32~2018年9月19日 10:59:24',
        type: '对比预警',
        c: '14',
        content: '烟气分析仪型号EMS168784数据发生较大变化',
        ifchicked: '0',
      },
      {
        name: '大唐集团-废气排口5',
        time: '2018年9月19日 10:59:32~2018年9月19日 10:59:24',
        type: '对比预警',
        c: '15',
        content: '烟气分析仪型号EMS168785数据发生较大变化',
        ifchicked: '0',
      },
      {
        name: '大唐集团-废气排口6',
        time: '2018年9月19日 10:59:32~2018年9月19日 10:59:24',
        type: '对比预警',
        c: '16',
        content: '烟气分析仪型号EMS168786数据发生较大变化',
        ifchicked: '0',
      },
      {
        name: '大唐集团-废气排口7',
        time: '2018年9月19日 10:59:32~2018年9月19日 10:59:24',
        type: '对比预警',
        c: '17',
        content: '烟气分析仪型号EMS168787数据发生较大变化',
        ifchicked: '0',
      },
      {
        name: '大唐集团-废气排口8',
        time: '2018年9月19日 10:59:32~2018年9月19日 10:59:24',
        type: '对比预警',
        c: '18',
        content: '烟气分析仪型号EMS168788数据发生较大变化',
        ifchicked: '0',
      },
      {
        name: '大唐集团-废气排口9',
        time: '2018年9月19日 10:59:32~2018年9月19日 10:59:24',
        type: '对比预警',
        c: '19',
        content: '烟气分析仪型号EMS168789数据发生较大变化',
        ifchicked: '0',
      },
    ],
  },
  reducers: {
    // setState(state, { payload }) {
    //   return { ...state, ...payload };
    // },
  },
  subscriptions: {
    setupSubscriber({ dispatch, listen }) {
      //   listen({
      //     RankOfStationByEmissions: () => {
      //       this.setTimeout(() => {
      //         dispatch({
      //           type: 'initRankList',
      //           payload: { mTag: xiaoshi },
      //         });
      //       }, 500);
      //     },
      //   });
    },
  },

  effects: {
    /**
     *
     * @param {any} { payload }
     * @param {any} { update, call, put,select }
     */
    // *getPollutantCodes({ payload }, { update, call, put, select }) {
    //   const { user } = yield select(state => state.app);
    //   const { selectedPolluntType } = yield select(state => state.app);
    //   let pollutantBeens = yield call(datapreviewService.getPollutantCodes, {
    //     type: selectedPolluntType,
    //     user,
    //   });
    //   yield update({ pollutantBeens });
    // },
    *allSelect({ payload: { keys } }, { update, call, put, select }) {
      const { persons } = yield select(state => state.earlyWarning);
      persons.forEach(item => {
        item.ifchicked = keys;
      });
      console.log(persons);
      yield update({ persons: [] });
      yield update({ persons: persons });
    },
    *clickItem({ payload: { index } }, { update, call, put, select }) {
      const { persons } = yield select(state => state.earlyWarning);
      persons[index].ifchicked = persons[index].ifchicked == 1 ? 0 : 1;
      yield update({ persons: [] });
      yield update({ persons: persons });
    },
  },
});
