import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import { withNavigation } from 'react-navigation';
import firebase from '../firebase.js';
import AwesomeAlert from 'react-native-awesome-alerts';

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

    async showAlert(callback, showProgress, title, message, confirmText, showConfirmButton) {
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

    async hideAlert(callback) {
        this.setState({
            showAlert: false
        }, () => {
            if (callback) {
                callback();
            }
        });
    }

    async signIn(email, password) {
        // this.showAlert(null, true);
        this.setState({
            isLoginDisabled: true
        });
        await firebase.auth().signInWithEmailAndPassword(email, password)
        .then((firebaseUser) => {
            console.log('process login firebaseUser', firebaseUser);
            this.showAlert(null, true, 'Loggin in', 'Wait while we validate your credentials', 'OK', false);
        }).catch((error) => {
            console.log('process login error', error);
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
        // const { showAlert, showProgress } = this.state;
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
                    // activeOpacity={!this.state.isLoginDisabled ? 1 : 0.7}
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
                    confirmButtonColor="#DD6B55"
                    onCancelPressed={() => {
                        this.hideAlert();
                    }}
                    onConfirmPressed={() => {
                        this.hideAlert();
                    }}
                />
            </View>
        );
    }
}

export default LoginForm;

const styles = StyleSheet.create({
    formContainer: {
        // flex: 1,
        // justifyContent: 'flex-end',
        // marginBottom: 36
    },
    loginContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
     padding: 20
    },
    imageLogo: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 250, 
        height: 250,
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#000'
    },
    buttonContainer: {
        backgroundColor: '#e20021',
        paddingVertical: 15
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    },
    signUpButton: {
        color: '#e20021',
        fontSize: 20,
        marginTop: 10,
        textDecorationLine: 'underline'
    }
});
