import { createAction, NavigationActions, Storage, ShowToast } from '../utils';
import * as authService from '../services/auth';
import { Model } from '../dvapack';
import {
  clearToken,
  saveToken,
  saveStorage,
  loadStorage,
  storageload,
} from '../dvapack/storage';
import { getNavigators } from '../services/auth';

export default Model.extend({
  namespace: 'app',
  state: {
    login: false,
    loading: true,
    fetching: false,
    globalConfig: {},
    user: {},
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {
    /**
     * 获取全局变量
     * houxf 2018.06.22
     * @param {any} { payload }
     * @param {any} { call, put, update }
     */
    *loadglobalvariable({ payload }, { call, put, update, take }) {
      const { user } = payload;
      const account = user.User_Account;
      let data = 'operationsStaff';
      let globalConfig = yield loadStorage('globalconfig');
      if (account === 'system') {
        data = 'system';
      } else if (account === 'wangnailin') {
        // 集团人员
        data = 'groupCompany';
      } else if (account === 'lisonggui') {
        // 分厂人员
        data = 'branchOffice';
      } else if (account === 'chengyun') {
        // 运维人员
        data = 'operationsStaff';
      }

      let mainnavs;
      let workbenchs;
      let stations;

      const result = yield call(getNavigators);
      if (result.data.length > 0) {
        const rdata = result.data;
        mainnavs = rdata.find(e => e.text === '主导航');
        workbenchs = rdata.find(e => e.text === '工作台');
        stations = rdata.find(e => e.text === '排口信息');
      }

      yield saveStorage('mainnavs', mainnavs.children);
      yield saveStorage('workbenchs', workbenchs.children);
      yield saveStorage('stations', mainnavs.children);

      const abd = yield storageload('mainnavs');
      const ddd = yield loadStorage('mainnavs');
      /*
    branchOffice: { screen: branchOffice },
    operationsStaff: { screen: operationsStaff },
    groupCompany: { screen: groupCompany },
    system: { screen: system },
    Detail: { screen: Detail },
    */
      yield put(
        NavigationActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'MainView' })],
        })
      );
      // if (user && user != null) {
      //   yield put('GetPolluntType', { });
      //   yield take('GetPolluntType/@@end');
      // }
      // if (SplashScreen) {
      //   SplashScreen.hide();
      // }
      yield update({ globalConfig, user });
    },
    *loadStorage(action, { call, put }) {
      const login = yield call(Storage.get, 'login', false);
      yield put(createAction('updateState')({ login, loading: false }));
    },
    *login({ payload }, { call, put, take, update }) {
      yield put(createAction('updateState')({ fetching: true }));
      if (
        payload.User_Account === '' ||
        payload.User_Pwd === '' ||
        payload.User_Account === undefined ||
        payload.User_Pwd === undefined
      ) {
        ShowToast('用户名，密码不能为空');
      } else {
        const result = yield call(authService.login, payload);
        console.log(result);
        if (result == null) {
          ShowToast('登录失败');
        } else if (result != null && result.requstresult == '1') {
          let user = result.data;
          if (user !== null) {
            yield saveToken(user);
            yield put('loadglobalvariable', { user });
            yield take('loadglobalvariable/@@end');
          }
          yield put(createAction('updateState')({ result, fetching: false }));
          Storage.set('login', result);
        } else if (result != null && result.requstresult == '0') {
          ShowToast('用户名或密码错误');
          yield put(createAction('updateState')({ result, fetching: false }));
        } else {
          ShowToast('登录失败');
        }
      }
    },
    *logout(action, { call, put }) {
      yield call(Storage.set, 'login', false);
      yield put(createAction('updateState')({ login: false }));
      yield put(NavigationActions.navigate({ routeName: 'Login' }));
    },
  },
  subscriptions: {
    setup({ dispatch }) {
      dispatch({ type: 'loadStorage' });
    },
    setupSubscriber({ dispatch, listen }) {
      listen({
        // MyPhoneList: ({ params }) => {
        //   dispatch({
        //     type: 'loadcontactlist',
        //     payload: {
        //     }
        //   });
        // },
      });
    },
  },
});
