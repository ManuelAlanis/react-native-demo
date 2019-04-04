import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import { withNavigation } from 'react-navigation';
import firebase from '../firebase.js';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.initBinds();
    }
    
    initBinds() {
        this.signIn = this.signIn.bind(this);
        this.goToSignUp = this.goToSignUp.bind(this);
    }

    signIn(email, password) {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((firebaseUser) => {
            console.log('process login firebaseUser', firebaseUser);
        }).catch((error) => {
            console.log('process login error', error);
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
                    // value={this.state.email}
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
                    // value={this.state.password}
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
