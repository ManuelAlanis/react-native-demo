import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import { withNavigation } from 'react-navigation';
import firebase from '../firebase.js';
import styles from '../styles/styles.js';

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.initBindings();
    }

    initBindings() {
        this.signUp = this.signUp.bind(this);
        this.goBack = this.goBack.bind(this);
    }

    goBack() {
        this.props.navigation.goBack();
    }

    signUp(email, password) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((firebaseUser) => {
            console.log('process login firebaseUser', firebaseUser);
            // this.hideAlert();
        }).catch((error) => {
            console.log('process login error', error);
            // this.hideAlert();
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
                    placeholderTextColor='rgba(225,225,225,0.7)'
                />
                
                <TextInput
                    style={styles.input}   
                    returnKeyType="go"
                    onChangeText={password => this.setState({ password })} 
                    ref={(input)=> this.passwordInput = input} 
                    placeholder='Password' 
                    placeholderTextColor='rgba(225,225,225,0.7)' 
                    secureTextEntry
                />

                <TouchableOpacity 
                    style={styles.buttonContainer} 
                    onPress={this.signUp(this.state.email, this.state.password)}
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
            </View>
        );
    }
}

export default SignUpForm;
