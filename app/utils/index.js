export { NavigationActions } from 'react-navigation';
import { Toast, Modal } from 'antd-mobile-rn';

export { default as Storage } from './storage';

export const delay = time => new Promise(resolve => setTimeout(resolve, time));

export const createAction = type => payload => ({ type, payload });

export const getCurrentParams = navigationState => {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  if (route.routes) {
    return getCurrentParams(route);
  }
  return route.params;
};

export const Event = {
  // 通过on接口监听事件eventName 如果事件eventName被触发，则执行callback回调函数
  on(eventName, callback) {
    // 你的代码
    if (!this.handles) {
      // this.handles={};
      Object.defineProperty(this, 'handles', {
        value: {},
        enumerable: false,
        configurable: true,
        writable: true,
      });
    }

    if (!this.handles[eventName]) {
      this.handles[eventName] = [];
    }
    this.handles[eventName].push(callback);
  },
  // 触发事件 eventName
  emit(eventName) {
    // 你的代码
    if (this.handles[arguments[0]]) {
      for (let i = 0; i < this.handles[arguments[0]].length; i++) {
        this.handles[arguments[0]][i](arguments[1]);
      }
    }
  },
};
export const ShowToast = msg => {
  Toast.info(msg, 1);
};
