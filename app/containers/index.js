import { StackNavigator } from 'react-navigation';
import { Animated, Easing } from 'react-native';

import HomeNavigator from './tabView';
import Detail from './Detail';
import Login from './Login';
import MyPhoneList from './MyPhoneList';
import knowledgebase from './knowledgebase';
import FileDOC from './FileDOC';
import DisplayDOC from './DisplayDOC';
const MainNavigator = StackNavigator(
  {
    HomeNavigator: { screen: HomeNavigator },
    Detail: { screen: Detail },
    MyPhoneList:{screen:MyPhoneList},
    knowledgebase:{screen:knowledgebase},
    FileDOC:{screen:FileDOC},
    DisplayDOC:{screen:DisplayDOC}
  },
  {
    headerMode: 'float',
  }
);

export default StackNavigator(
  {
    Login: { screen: Login },
    Main: { screen: MainNavigator },
 
  },
  {
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
