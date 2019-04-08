import React, { Component } from 'react';
import { Image, View, StyleSheet, KeyboardAvoidingView } from 'react-native';
// import styles from '../styles/styles.js';
import SignUpForm from '../forms/SignUpForm.js';
import styles from '../styles/styles.js';

class SignUp extends Component {

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.loginContainer}>
                    <Image 
                        resizeMode="contain" 
                        style={styles.imageLogo}
                        source={{ uri: 'https://itbaja.org/wp-content/uploads/gravity_forms/1-dcc4dc85146084a2e975373dab5bab0f/2016/04/arkus2.png' }}
                    />
                </View>
                <View>
                    <SignUpForm navigation={this.props.navigation} />
                </View>
            </KeyboardAvoidingView>
        );
    }
}

export default SignUp;
