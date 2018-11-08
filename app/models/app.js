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

      /**
       * c9b7ab20-2fd9-4009-81fd-e0413108a71a 移动端菜单
       * 环保专工帐号：d3ab7b72-c145-4d1c-8701-0b71b628503e
       * 企业高管：ebbb3ae6-f488-4c12-831a-6aa9f749e465
       * 运维主管：2acd1422-8474-4709-8cfc-d8b7c4628fac
       * 运维人员：766f911d-5e41-4bbf-b705-add427a16e77
       * 监测专员：c2f18c7e-b735-42a0-91a1-96b886966ddc
       * 
      */

      if (account === 'system') {
        data = 'system';
      } else if (account === 'wangnailin') {
        // 集团人员 企业领导
        // data = 'groupCompany';
        data = 'manager';
      } else if (account === 'lisonggui') {
        // 分厂人员 企业环保专工
        // data = 'branchOffice';
        data = 'department';
      } else if (account === 'chengyun') {
        // 运维人员
        data = 'operationsStaff';
      } else if (account === 'a') {
        //运维主管
        data = 'HeadOfOperationsAndMaintenance';
      } else if (account === 'b') {
        //运维高管
        data = 'OperationsManager';
      } else if (account === 'c') {
        //环保局领导
        data = 'Epa leadership';
      } else if (account === 'd') {
        //环保局工作人员
        data = 'Environmental protection agency';
      }

      let mainnavs;
      let workbenchs;
      let stations;
      // console.log('a');
      // const result = yield call(getNavigators);
      // console.log('b');
      // if (result.data.length > 0) {
      //   const rdata = result.data;
      //   mainnavs = rdata.find(e => e.text === '主导航');
      //   workbenchs = rdata.find(e => e.text === '工作台');
      //   stations = rdata.find(e => e.text === '排口信息');
      // }

      // yield saveStorage('mainnavs', mainnavs.children);
      // yield saveStorage('workbenchs', workbenchs.children);
      // yield saveStorage('stations', mainnavs.children);

      // const abd = yield storageload('mainnavs');
      // const ddd = yield loadStorage('mainnavs');
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
            
            // //获取菜单权限并保存
            // const account = user.User_Account;
            // if (account === 'system') {
            //   data = 'system';
            // } else if (account === 'wangnailin') {
            //   // 集团人员 企业领导
            //   // data = 'groupCompany';
            //   data = 'manager';
            // } else if (account === 'lisonggui') {
            //   // 分厂人员 企业环保专工
            //   // data = 'branchOffice';
            //   data = 'department';
            // } else if (account === 'chengyun') {
            //   // 运维人员
            //   data = 'operationsStaff';
            // } else if (account === 'a') {
            //   //运维主管
            //   data = 'HeadOfOperationsAndMaintenance';
            // } else if (account === 'b') {
            //   //运维高管
            //   data = 'OperationsManager';
            // } else if (account === 'c') {
            //   //环保局领导
            //   data = 'Epa leadership';
            // } else if (account === 'd') {
            //   //环保局工作人员
            //   data = 'Environmental protection agency';
            // }
            const result = yield call(getNavigators);
            let mainnavs;
            if (result.data.length > 0) {
              const rdata = result.data;
              mainnavs = rdata.find(e => e.text === '主导航');
              // workbenchs = rdata.find(e => e.text === '工作台');
              // stations = rdata.find(e => e.text === '排口信息');
            }

            yield saveStorage('mainnavs', mainnavs.children);

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
