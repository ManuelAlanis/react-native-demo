import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import MapScreen from './MapScreen.js';
import HomeScreen from './HomeScreen.js';
import Settings from './Settings.js';

const HomeNavigator = createStackNavigator({
    Home: { 
        screen: HomeScreen,
        navigationOptions: {
            title: 'Home 2222'
        } 
    },
});

const MapNavigator = createStackNavigator({
    Map: { 
        screen: MapScreen,
        navigationOptions: {
            title: 'Map 2222'
        }  
    },
});

const SettingsNavigator = createStackNavigator({
    Settings: { 
        screen: Settings,
        navigationOptions: {
            title: 'Settings'
        }  
    },
});

const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: HomeNavigator,
        navigationOptions: {
            title: 'Home screen'
        }
    },
    Map: {
        screen: MapNavigator,
        navigationOptions: {
          title: 'Map'
        }
    },
    Settings: {
        screen: SettingsNavigator,
        navigationOptions: {
          title: 'Settings'
        }
    },
});

export default createAppContainer(TabNavigator);
