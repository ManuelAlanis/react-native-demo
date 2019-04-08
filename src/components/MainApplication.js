import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import MapScreen from './MapScreen.js';
import HomeScreen from './HomeScreen.js';
import Settings from './Settings.js';

const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            title: 'Home screen'
        }
    },
    Map: {
        screen: MapScreen,
        navigationOptions: {
          title: 'Map'
        }
    },
    Settings: {
        screen: Settings,
        navigationOptions: {
          title: 'Settings'
        }
    },
});

export default createAppContainer(TabNavigator);
