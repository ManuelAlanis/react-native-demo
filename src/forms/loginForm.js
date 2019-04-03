import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
// import { withNavigation } from 'react-navigation';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    goToSignUp() {
        console.log('goToSignUp ');
        this.props.navigation.navigate('SignUp');
    }

    signIn() {
        console.log('signIn');
    }

    render() {
        // const { navigate } = this.props.navigation;
        return (
            <View>
                <TextInput 
                    style={styles.input} 
                    autoCapitalize="none" 
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
                    ref={(input)=> this.passwordInput = input} 
                    placeholder='Password' 
                    placeholderTextColor='rgba(225,225,225,0.7)' 
                    secureTextEntry
                />

                <TouchableOpacity 
                    style={styles.buttonContainer} 
                    onPress={this.signIn}
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
                        onPress={() => this.props.navigation.navigate('SignUp')}
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