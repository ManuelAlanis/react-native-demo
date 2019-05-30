import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

class Splash extends React.Component {
    render() {
        return (
            <View style={styles.loginContainer}>
                <Image
                    resizeMode="contain"
                    style={styles.imageLogo}
                    source={{ uri: 'https://i.imgur.com/fsg7Gji.jpg' }}
                />
            </View>
        );   
    }
}

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageLogo: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 250, 
        height: 250,
    },
});

export default Splash; 
