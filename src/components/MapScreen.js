import React from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker, AnimatedRegion, PROVIDER_GOOGLE } from 'react-native-maps';
import styles from '../styles/styles.js'

class HomeScreen extends React.Component {
    constructor() {
        super()
        this.state = {
            coordinate: {
                latitude: 32.5224664,
                longitude: -117.0190774,
            }
        }
    }

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
                    latitude: 32.5224664,
                    longitude: -117.0190774,
                    latitudeDelta: 0.008,
                    longitudeDelta: 0.0051,
                    zoom: 11
                }}
            >   
                <Marker coordinate={this.state.coordinate} />
            </MapView>
        </View>
        );
    }
}

export default HomeScreen;