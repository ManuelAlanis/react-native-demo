// import libraries for making a component
import React from 'react';
// import { View } from 'react-native';
// import { createStackNavigator, createAppContainer } from 'react-navigation';
// import Header from './header.js';
// import Login from './login.js';
// import SignUp from './signUp.js';
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
    
    render() {
        return (
            <AppNavigator />
        );
    }
}

export default App;
