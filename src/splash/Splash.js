import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

class Splash extends React.Component {
    render() {
        return (
            <View style={styles.loginContainer}>
                <Text>Splash</Text>
                <Image
                    resizeMode="contain"
                    style={styles.imageLogo}
                    source={{ uri: 'https://itbaja.org/wp-content/uploads/gravity_forms/1-dcc4dc85146084a2e975373dab5bab0f/2016/04/arkus2.png' }}
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
