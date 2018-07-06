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

YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader',
]);
const logger = createLogger();

if (!__DEV__) {
  global.console = {
    info: () => {},
    log: () => {},
    warn: () => {},
    error: () => {},
  };
}

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
  blacklist: ['router'],
});

AppRegistry.registerComponent('PollutantSourceMobile', () => App);
// 17692545435  302 4 102
