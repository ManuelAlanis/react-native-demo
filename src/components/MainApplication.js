import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import MapScreen from './MapScreen.js';
import HomeScreen from './HomeScreen.js';
import AddProducts from './AddProducts.js';
import Settings from './Settings.js';


const AddProductsNavigator = createStackNavigator({
    New: { 
        screen: AddProducts,
        navigationOptions: {
            title: 'Add products'
        } 
    },
});

const HomeNavigator = createStackNavigator({
    Home: { 
        screen: HomeScreen,
        navigationOptions: {
            title: 'Products'
        } 
    },
});

const MapNavigator = createStackNavigator({
    Map: { 
        screen: MapScreen,
        navigationOptions: {
            title: 'Map'
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
    New: {
        screen: AddProductsNavigator,
        navigationOptions: {
            title: 'Add products'
        }
    },
    Home: {
        screen: HomeNavigator,
        navigationOptions: {
            title: 'Products'
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
