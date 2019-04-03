import React, { Component } from 'react';
import { Image, View, StyleSheet, KeyboardAvoidingView } from 'react-native';
// import styles from '../styles/styles.js';
import LoginForm from '../forms/loginForm.js';

class Login extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.loginContainer}>
                    <Image 
                        resizeMode="contain" 
                        style={styles.imageLogo}
                        source={{ uri: 'https://itbaja.org/wp-content/uploads/gravity_forms/1-dcc4dc85146084a2e975373dab5bab0f/2016/04/arkus2.png' }}
                    />
                </View>
                <View style={[styles.formContainer]}>
                    <LoginForm navigation={this.props.navigation} />
                </View>
            </KeyboardAvoidingView>
        );
    }
}

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

export default Login;
