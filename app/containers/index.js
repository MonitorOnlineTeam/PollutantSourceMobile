import { StackNavigator } from 'react-navigation';
import { Animated, Easing } from 'react-native';

// import HomeNavigator from './tabView';
import branchOffice from './tabView/branchOffice';
import operationsStaff from './tabView/operationsStaff';
import groupCompany from './tabView/groupCompany';
import system from './tabView/system';
import Detail from './Detail';
import Login from './Login';

const MainNavigator = StackNavigator(
  {
    // HomeNavigator: { screen: HomeNavigator },
    branchOffice: { screen: branchOffice },
    operationsStaff: { screen: operationsStaff },
    groupCompany: { screen: groupCompany },
    system: { screen: system },
    Detail: { screen: Detail },
  },
  {
    headerMode: 'float',
  }
);

export default StackNavigator(
  {
    Login: { screen: Login },
    // Main: { screen: MainNavigator },
    branchOffice: { screen: branchOffice },
    operationsStaff: { screen: operationsStaff },
    groupCompany: { screen: groupCompany },
    system: { screen: system },
    Detail: { screen: Detail },
  },
  {
    lazyLoad: true,
    headerMode: 'none',
    mode: 'modal',
    navigationOptions: {
      gesturesEnabled: false,
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const height = layout.initHeight;
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });

        return { opacity, transform: [{ translateY }] };
      },
    }),
  }
);
