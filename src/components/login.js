import React, { Component } from 'react';
import { Image, View, KeyboardAvoidingView, ScrollView, Text } from 'react-native';
import LoginForm from '../forms/loginForm.js';
import styles from '../styles/styles.js';

class Login extends Component {
    render() {
        return (
            <ScrollView>
                <KeyboardAvoidingView behavior="padding" style={styles.container}>
            
                    <View style={styles.loginContainer}>
                        <Image
                            resizeMode="contain"
                            style={styles.imageLogo}
                            source={{ uri: 'https://i.imgur.com/fsg7Gji.jpg' }}
                        />
                    </View> 
                    <View>
                        <LoginForm navigation={this.props.navigation} />
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        );
    }
}

export default Login;
