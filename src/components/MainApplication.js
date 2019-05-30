import React from 'react';
import { Text, View} from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import MapScreen from './MapScreen.js';
import HomeScreen from './HomeScreen.js';
import AddProducts from './AddProducts.js';
import Settings from './Settings.js';


class CartTitle extends React.Component {
    render() {
      return (
        <View>
            <Text style={{ width: 30, height: 30 }}>
                Cart(3)
            </Text>
        </View>
      );
    }
}

const AddProductsNavigator = createStackNavigator({
    New: { 
        screen: AddProducts,
        navigationOptions: {
            title: 'Add products',
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
