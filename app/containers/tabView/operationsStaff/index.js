import { TabNavigator, TabBarBottom } from 'react-navigation';

// import Home from './Home';
import DataList from '../DataList';
import Map from '../Map';
import Workbench from '../Workbench';
// import Statistical from '../Statistical';
import Account from '../Account';

export default TabNavigator(
  {
    Workbench: { screen: Workbench },
    DataList: { screen: DataList },
    // Map: { screen: Map },
    // Statistical: { screen: Statistical },
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
