import { TabNavigator, TabBarBottom } from 'react-navigation';

// import Home from './Home';
import DataList from '../DataList';
import Map from '../Map';
// import Workbench from '../Workbench';
import Statistical from '../Statistical';
import Account from '../Account';

export default TabNavigator(
  {
    Map: { screen: Map },
    DataList: { screen: DataList },
    // Workbench: { screen: Workbench },
    Statistical: { screen: Statistical },
    // Home: { screen: Home },
    Account: { screen: Account },
  },
  {
    headerMode: 'none',
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    lazyLoad: false,
  }
);
