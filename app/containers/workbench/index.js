import { TabNavigator, TabBarTop } from 'react-navigation';

// import Home from './Home';
import Todo from './Todo';
import EarlyWarning from './EarlyWarning';
import Message from './Message';
import Alarm from './Alarm';

export default TabNavigator(
  {
    Todo: { screen: Todo },
    EarlyWarning: { screen: EarlyWarning },
    Message: { screen: Message },
    Alarm: { screen: Alarm },
  },
  {
    headerMode: 'none',
    tabBarComponent: TabBarTop,
    tabBarPosition: 'top',
    swipeEnabled: false,
    animationEnabled: false,
    lazyLoad: false,
    // initialRouteName:'Workbench'
  }
);