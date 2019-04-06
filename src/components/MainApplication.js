import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './HomeScreen.js';

// eslint-disable-next-line react/no-multi-comp
class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

class SettingsScreen2 extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>SettingsScreen2!</Text>
        </View>
      );
    }
  }

const TabNavigator = createBottomTabNavigator({
    Home: {
        // navigationOptions: { title: 'Header title' },
        screen: HomeScreen,
        navigationOptions: {
            title: 'Hello'
        }
    },
    Settings: {
        screen: SettingsScreen
    },
    SettingsScreenParent: {
        screen: SettingsScreen2,
    },
});

const styles = StyleSheet.create({
container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
},
map: {
    ...StyleSheet.absoluteFillObject,
},
});

export default createAppContainer(TabNavigator);
