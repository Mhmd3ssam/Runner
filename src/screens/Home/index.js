import React from 'react';
import { View, Text } from 'react-native';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Styles } from './styles';

const Home = () => {
    return (
        <View style={Styles.container}>
            <MapView
                style={Styles.map}
                region={{
                    latitude: 38.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >
            </MapView>
            <Text>{'Home Screen'}</Text>
        </View>
    )
};

export default Home;
