// import libraries for making a component
import React from 'react';
// import { View } from 'react-native';
// import { createStackNavigator, createAppContainer } from 'react-navigation';
// import Header from './header.js';
// import Login from './login.js';
// import SignUp from './signUp.js';
import firebase from 'firebase';
import AppNavigator from './appNavigator.js';

class App extends React.Component {
    // static navigationOptions = ({ navigation }) => {
    //     return {
    //         title: navigation.getParam('otherParam', 'A Nested Details Screen'),
    //     };
    // };
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        firebase.initializeApp({
            apikey: 'AIzaSyABVaCF2l8XTtymRpFttfx6LBmqvMRPzLw',
            authDomain: ' authentication-a5265.firebaseapp.com ',
            databaseURL: ' https://authentication-a5265.firebaseio.com ',
            projectId: ' authentication-a5265 ',
            storageBucket: ' authentication-a5265.appspot.com ',
            messagingSenderId: '903384301428' 
        });
    }
    
    render() {
        return (
            <AppNavigator />
        );
    }
}

export default App;
