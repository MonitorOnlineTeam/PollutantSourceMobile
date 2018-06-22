import { createAction, NavigationActions, Storage, ShowToast } from '../utils';
import * as authService from '../services/auth';
import { Model } from '../dvapack';
import { clearToken, saveToken, saveStorage, loadStorage } from '../dvapack/storage';

export default Model.extend({
  namespace: 'app',
  state: {
    login: false,
    loading: true,
    fetching: false,
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {
    *loadStorage(action, { call, put }) {
      const login = yield call(Storage.get, 'login', false);
      yield put(createAction('updateState')({ login, loading: false }));
    },
    /**
     * 获取全局变量
     * liz 2017.11.11
     * @param {any} { payload } 
     * @param {any} { call, put, update } 
     */
    * loadglobalvariable({ payload }, { call, put, update,take }) {
      // const { user } = payload;
      // let globalConfig = yield loadStorage('globalconfig');
      
      // if (user && user != null) {
      //   yield put('GetPolluntType', { });
      //   yield take('GetPolluntType/@@end');
      // } 
      // if (SplashScreen) {
      //   SplashScreen.hide();
      // }
      // yield update({ globalConfig, user });
    },
    *login({ payload }, { call, put }) {
      yield put(createAction('updateState')({ fetching: true }));
      const login = yield call(authService.login, payload);
      console.log(login);
      if(login == null) {
        ShowToast('登陆失败');
      } else if (login&&login.requstresult === '1') {
        const user = login.data;
        Storage.set('login', login);
        yield put(createAction('updateState')({ login, fetching: false }));
        yield saveToken(user);
        // yield put('loadglobalvariable', { user });
        // yield take('loadglobalvariable/@@end');
        yield put(
          NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Main' })],
          })
        );
      } else {
        ShowToast('用户名或密码错误');
      }
    },
    *logout(action, { call, put }) {
      yield call(Storage.set, 'login', false);
      yield put(createAction('updateState')({ login: false }));
      yield put(
        NavigationActions.navigate({ routeName: 'Login' })
      );
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
