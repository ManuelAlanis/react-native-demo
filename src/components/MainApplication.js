import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import MapScreen from './MapScreen.js';
import HomeScreen from './HomeScreen.js';
import Settings from './Settings.js';

const HomeNavigator = createStackNavigator({
    BookmarkList: { 
        screen: HomeScreen,
        navigationOptions: {
            title: 'Home'
        } 
    },
});

const MapNavigator = createStackNavigator({
    NewBookmark: { 
        screen: MapScreen,
        navigationOptions: {
            title: 'Map'
        }  
    },
});

const SettingsNavigator = createStackNavigator({
    NewBookmark: { 
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
