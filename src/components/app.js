import React from 'react';
import { Firebase } from '../firebase.js/';
import AppNavigator from '../components/appNavigator.js';
import LoginNavigator from '../components/LoginNavigator.js';
import Splash from '../splash/Splash.js';

class App extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: null
        };
    }
    
    componentWillMount() {
        Firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    isLoggedIn: true,
                });
            } else {
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
