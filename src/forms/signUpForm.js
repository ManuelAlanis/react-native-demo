import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import { Firebase } from '../firebase.js';
import styles from '../styles/styles.js';

class SignUpForm extends Component {
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
        this.initBindings();
    }

    initBindings() {
        this.signUp = this.signUp.bind(this);
        this.goBack = this.goBack.bind(this);
        this.showAlert = this.showAlert.bind(this);
        this.hideAlert = this.hideAlert.bind(this);
    }

    goBack() {
        this.props.navigation.goBack();
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

    signUp(email, password) {
        this.showAlert(null, true, 'Loggin in',
            'Wait while we register your credentials', 'OK', false);
        Firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((firebaseUser) => {
            console.log('process login firebaseUser', firebaseUser);
        }).catch((error) => {
            this.showAlert(null, false, 'An error has ocurred', error.message, 'OK', true);
        });
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
                    returnKeyType="next" 
                    placeholder='Email' 
                    placeholderTextColor='#8d8d8d'
                />
                
                <TextInput
                    style={styles.input}   
                    returnKeyType="go"
                    onChangeText={password => this.setState({ password })} 
                    ref={(input)=> this.passwordInput = input} 
                    placeholder='Password' 
                    placeholderTextColor='#8d8d8d' 
                    secureTextEntry
                />

                <TouchableOpacity 
                    style={styles.buttonContainer} 
                    onPress={() => this.signUp(this.state.email, this.state.password)}
                >
                    <Text
                        style={styles.buttonText} 
                    >
                        Sign up
                    </Text>
                </TouchableOpacity> 
                <View style={styles.loginContainer}>
                    <Text 
                        style={styles.signUpButton}
                        onPress={this.goBack}
                    >
                        Log in
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

export default SignUpForm;
