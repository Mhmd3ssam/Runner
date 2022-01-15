import React from 'react';
import MapView, { Circle } from 'react-native-maps';
import { View } from 'react-native';
import { Styles } from './styles.js';

const Map = () => {
    return (
        <View style={Styles.mapContainer}>
            <MapView
                style={Styles.map}
                region={{
                    latitude: 37.75710,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                minZoomLevel={18}
            >
                <Circle center={{
                    latitude: 37.75710,
                    longitude: -122.4324
                }}
                    radius={4}
                    fillColor='red'
                />
            </MapView>
        </View>
    )
};

export default Map;

