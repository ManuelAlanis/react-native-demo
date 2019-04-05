import React from 'react';
import firebase from '../firebase.js/';
import AppNavigator from './AppNavigator.js';
import LoginNavigator from './LoginNavigator.js';
import Splash from '../splash/Splash.js';

class App extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: null
        };
    }
    
    componentWillMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log('process login success auth');
                this.setState({
                    isLoggedIn: true,
                });
            } else {
                console.log('process login error auth');
                this.setState({
                    isLoggedIn: false,
                });
            }
        });
    }

    render() {
        if (this.state.isLoggedIn === false) {
            return (
                <LoginNavigator />
            );
        } else if (this.state.isLoggedIn) {
            return (
                <AppNavigator navigation={this.props.navigation} />
            );
        }
        return (
            <Splash />
        );
    }
}

export default App;
