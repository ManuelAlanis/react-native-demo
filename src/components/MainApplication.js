
import React from 'react';
import { Text, View, Button } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

class HomeScreen extends React.Component {
    // static navigationOptions = () => {
    //     title: 'Home',
    //     /* No more header config here! */
    // };
    render() {

        // firebase.auth().signOut().then(function() {
        // // Sign-out successful.
        // }).catch(function(error) {
        // // An error happened.
        // });

        // var auth = firebase.auth();
        // var emailAddress = "user@example.com";

        // auth.sendPasswordResetEmail(emailAddress).then(function() {
        // // Email sent.
        // }).catch(function(error) {
        // // An error happened.
        // });

        // var user = firebase.auth().currentUser;
        // user.delete().then(function() {
        // // User deleted.
        // }).catch(function(error) {
        // // An error happened.
        // });

        return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Home!</Text>
            <Button
                title="Update the title"
                onPress={() => this.props.navigation.setParams({ otherParam: 'Updated!' })}
            />
        </View>
        );
    }
}

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

export default createAppContainer(TabNavigator);
