import React from 'react';
import { View, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import styles from '../styles/styles.js'

class HomeScreen extends React.Component {
    // static navigationOptions = () => {
    //     title: 'Home',
    //     /* No more header config here! */
    // };
    render() {
        return (
        <View 
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
            <Text>Home!</Text>
                    {/* ``      uio `   23579-`` */}
            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                region={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >
            </MapView>
        </View>
        );
    }
}

export default HomeScreen;