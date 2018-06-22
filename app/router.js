import React, { PureComponent } from 'react';
import { BackHandler, Animated, Easing } from 'react-native';
import {
  StackNavigator,
  TabNavigator,
  TabBarBottom,
  NavigationActions,
} from 'react-navigation';
import {
  initializeListeners,
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';
// import CodePush from "react-native-code-push";

import { getCurrentParams, Event } from './utils';
import Loading from './containers/Loading';
// import Login from './containers/Login';
// import Home from './containers/Home';
// import Account from './containers/Account';
// import Detail from './containers/Detail';
import AppNavigator from './containers';
// import {doUpdate} from './utils/CodePushUtil';

// const HomeNavigator = TabNavigator(
//   {
//     Home: { screen: Home },
//     Account: { screen: Account },
//   },
//   {
//     tabBarComponent: TabBarBottom,
//     tabBarPosition: 'bottom',
//     swipeEnabled: false,
//     animationEnabled: false,
//     lazyLoad: false,
//   }
// );

// const MainNavigator = StackNavigator(
//   {
//     HomeNavigator: { screen: HomeNavigator },
//     Detail: { screen: Detail },
//   },
//   {
//     headerMode: 'float',
//   }
// );

// const AppNavigator = StackNavigator(
//   {
//     Login: { screen: Login },
//     Main: { screen: MainNavigator },
//   },
//   {
//     headerMode: 'none',
//     mode: 'modal',
//     navigationOptions: {
//       gesturesEnabled: false,
//     },
//     transitionConfig: () => ({
//       transitionSpec: {
//         duration: 300,
//         easing: Easing.out(Easing.poly(4)),
//         timing: Animated.timing,
//       },
//       screenInterpolator: sceneProps => {
//         const { layout, position, scene } = sceneProps;
//         const { index } = scene;

//         const height = layout.initHeight;
//         const translateY = position.interpolate({
//           inputRange: [index - 1, index, index + 1],
//           outputRange: [height, 0, 0],
//         });

//         const opacity = position.interpolate({
//           inputRange: [index - 1, index - 0.99, index],
//           outputRange: [0, 1, 1],
//         });

//         return { opacity, transform: [{ translateY }] };
//       },
//     }),
//   }
// );

function getCurrentScreen(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  if (route.routes) {
    return getCurrentScreen(route);
  }
  return route.routeName;
}

export const routerMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.router
);
const addListener = createReduxBoundAddListener('root');

export const screenTracking = ({ getState }) => next => async action => {
  if (
    action.type !== NavigationActions.NAVIGATE &&
    action.type !== NavigationActions.BACK &&
    action.type !== NavigationActions.RESET
  ) {
    return next(action);
  }
  if (!action.routeName) {
    const navigateInfo = routerReducer(getState().router, action);
    const currentScreen = getCurrentScreen(navigateInfo);
    const params = getCurrentParams(navigateInfo);
    action.routeName = currentScreen;
    action.params = params;
  }
  // routeName, params, type
  await Event.emit('RouterChange', action);
  // lizheng solve detail page flash before loading data.
  const result = next(action);
  return result;
};

@connect(({ app, router, loading }) => ({
  app,
  router,
  loginLoading: loading.effects['app/login'],
}))
class Router extends PureComponent {
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backHandle);
  }

  componentDidMount() {
    // CodePush.notifyAppReady();
    // doUpdate((syncStatus)=>{},(progress)=>{});
    initializeListeners('root', this.props.router);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backHandle);
  }

  backHandle = () => {
    const currentScreen = getCurrentScreen(this.props.router);
    if (currentScreen === 'Login') {
      return true;
    }
    if (currentScreen !== 'Home') {
      this.props.dispatch(NavigationActions.back());
      return true;
    }
    return false;
  }

  render() {
    const { dispatch, app, router } = this.props;
    if (
      // app.loading
      this.props.loginLoading
    )
      return <Loading />;

    const navigation = {
      dispatch,
      state: router,
      addListener,
    };
    return <AppNavigator navigation={navigation} />;
  }
}

export function routerReducer(state, action = {}) {
  return AppNavigator.router.getStateForAction(action, state);
}

export default Router;
