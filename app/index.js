import React from 'react';
import { AppRegistry, AsyncStorage, YellowBox } from 'react-native';

import { createLogger } from 'redux-logger';
import { persistStore } from 'redux-persist';
import createLoading from 'dva-loading';

import dva from './utils/dva';
import storage from './config/globalstorage';
import Router, { routerMiddleware, screenTracking } from './router';
import { registerModels } from './models';
// import api from './config/globalapi';


YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
const logger = createLogger();

if (!__DEV__) {
  global.console = {
    info: () => {},
    log: () => {},
    warn: () => {},
    error: () => {}
  };
}

// const dvaEnhancer = {
//   onEffect: (effect, sagaEffects, model) => function * effectEnhancer(...args) {
//     // let config = getUseNetConfig();
//     const httpsNetUrl = 'https://api.chsdl.cn/wry';
//     let url = `${httpsNetUrl + api.system.nettest}`;
//     let result = yield test(url, {}).then(async data => true, json => false);
//     const CNConfig = [];
//     const NetConfig = getNetConfig();
//     if (result) {
//       yield effect(...args);
//     } else {
//       let newconfig = [];
//       NetConfigJSON.Config.map((item, key) => {
//         let netitem = {};
//         netitem.neturl = `http://${item.configIp}:${item.configPort}`;
//         netitem.isuse = true;
        
//         if (config.neturl != netitem.neturl) {
//           newconfig.push(netitem);
//         }
//       });
//       yield saveNetConfig(newconfig);
//       config = getUseNetConfig();
//       url = `${config.neturl + api.system.nettest}`;
//       result = yield test(url, {}).then(async data => true, json => false);
//         if (result) {
//           yield effect(...args);
//         } else {
//           // ShowToast('网络断开，请重试');
//         }
//   }
//   }
// };

const app = dva({
  initialState: {},
  models: [],
  ...createLoading({ effects: true }),
  onAction: [routerMiddleware, screenTracking, logger],
  onError(e) {
    console.log('onError', e);
  },
});

const App = app.start(<Router />);
// app.use(dvaEnhancer);
registerModels(app);
persistStore(app.getStore(), {
  storage: AsyncStorage,
  blacklist: ['router']
});

AppRegistry.registerComponent('PollutantSourceMobile', () => App);
// 17692545435  302 4 102