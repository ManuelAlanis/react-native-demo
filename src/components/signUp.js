import React, { Component } from 'react';
import { Image, View, KeyboardAvoidingView, ScrollView } from 'react-native';
import SignUpForm from '../forms/signUpForm.js';
import styles from '../styles/styles.js';

class SignUp extends Component {

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
                        <SignUpForm navigation={this.props.navigation} />
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        );
    }
}

export default SignUp;
