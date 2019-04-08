import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import firebase from '../firebase.js';
import styles from '../styles/styles.js';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            showAlert: false,
            message: '',
            confirmText: '',
            showConfirmButton: false,
            isLoginDisabled: false,
        };
        this.initBinds();
    }
    
    initBinds() {
        this.signIn = this.signIn.bind(this);
        this.goToSignUp = this.goToSignUp.bind(this);
        this.showAlert = this.showAlert.bind(this);
        this.hideAlert = this.hideAlert.bind(this);
    }

    showAlert(callback, showProgress, title, message, confirmText, showConfirmButton) {
        this.setState({
            showAlert: true,
            showProgress,
            title,
            message,
            confirmText,
            showConfirmButton,
        }, () => {
            if (callback) {
                callback();
            }
        });
    }

    hideAlert(callback) {
        this.setState({
            showAlert: false
        }, () => {
            if (callback) {
                callback();
            }
        });
    }

    signIn(email, password) {
        this.setState({
            isLoginDisabled: true
        });
        this.showAlert(null, true, 'Loggin in',
            'Wait while we validate your credentials', 'OK', false);
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            this.showAlert(null, true, 'Loggin in',
                'Wait while we validate your credentials', 'OK', false);
        }).catch((error) => {
            this.setState({
                isLoginDisabled: false
            });
            this.showAlert(null, false, 'An error has ocurred', error.message, 'OK', true);
        });
    }

    goToSignUp() {
        this.props.navigation.navigate('SignUp');
    }

    render() {
        return (
            <View>
                <TextInput 
                    style={styles.input} 
                    autoCapitalize="none"
                    onChangeText={email => this.setState({ email })}
                    onSubmitEditing={() => this.passwordInput.focus()} 
                    autoCorrect={false} 
                    keyboardType='email-address'
                    returnKeyType='next'
                    placeholder='Email'
                    placeholderTextColor='rgba(225,225,225,0.7)'
                />
                
                <TextInput
                    style={styles.input}
                    onChangeText={password => this.setState({ password })}
                    ref={(input)=> this.passwordInput = input} 
                    returnKeyType='go'
                    placeholder='Password' 
                    placeholderTextColor='rgba(225,225,225,0.7)' 
                    secureTextEntry
                />

                <TouchableOpacity 
                    style={styles.buttonContainer}
                    onPress={() => this.signIn(this.state.email, this.state.password)}
                    disabled={this.state.isLoginDisabled}
                >
                    <Text
                        style={styles.buttonText} 
                    >
                        LOGIN
                    </Text>
                </TouchableOpacity> 
                <View style={styles.loginContainer}>
                    <Text 
                        style={styles.signUpButton}
                        onPress={this.goToSignUp}
                    >
                        Sign up
                    </Text>
                </View>
                <AwesomeAlert
                    show={this.state.showAlert}
                    showProgress={this.state.showProgress}
                    title={this.state.title}
                    message={this.state.message}
                    confirmText={this.state.confirmText}
                    showConfirmButton={this.state.showConfirmButton}
                    closeOnTouchOutside={false}
                    confirmButtonColor="#e20021"
                    closeOnHardwareBackPress={false}
                    onCancelPressed={() => {
                        this.hideAlert();
                    }}
                    onConfirmPressed={() => {
                        this.hideAlert();
                    }}
                    overlayStyle={styles.alertOverlayStyle}
                    contentContainerStyle={styles.alertContentContainerStyle}
                />
            </View>
        );
    }
}

export default LoginForm;
