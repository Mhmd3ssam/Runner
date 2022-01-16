import React from 'react';
import MapView, { Circle } from 'react-native-maps';
import { View } from 'react-native';
import { Styles } from './styles.js';

const Map = ({ route, navigation }) => {
    const { startLatitude, startLongitude, endLatitude, endLongitude } = route.params;

    return (
        <View style={Styles.mapContainer}>
            <MapView
                style={Styles.map}
                region={{
                    latitude: startLatitude,
                    longitude: startLongitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                minZoomLevel={18}
            >
                <Circle center={{
                    latitude: startLatitude,
                    longitude: startLongitude
                }}
                    radius={4}
                    fillColor='red'
                />
                <Circle center={{
                    latitude: endLatitude,
                    longitude: endLongitude
                }}
                    radius={4}
                    fillColor='green'
                />              
            </MapView>
        </View>
    )
};

export default Map;

