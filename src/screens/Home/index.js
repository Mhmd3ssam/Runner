import React from 'react';
import { View, Text, Pressable } from 'react-native';
import MapView from 'react-native-maps';
import { Styles } from './styles';

import { Avatar } from 'react-native-elements';

const Home = () => {
    return (
        <View style={Styles.container}>
            {/* Distance section */}
            <Pressable style={Styles.distanceContainer}
                onPress={() => { console.log('My distance') }}
            >
                <Text style={Styles.distanceContent}>
                    {'3.02'}
                </Text>
                <View style={Styles.underLineDistanceContent}></View>
                <Text style={Styles.measurementUnit}>
                    {'Kilometer'}
                </Text>
            </Pressable>
            {/* Map section */}
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
            {/*Start Button section */}
            <View style={Styles.stratSectionContainer}>
                <Avatar
                    size={115}
                    rounded
                    title="START"
                    titleStyle={Styles.stratAvatarContent}
                    containerStyle={Styles.avaterContainer}
                    onPress={() => { console.log('start') }}
                />
                {/* Toggle butoon to conter the trip by distance or time  */}
                <Pressable
                    onPress={() => { console.log('change to time') }}
                    style={Styles.toggleContainer}
                >
                    <Text style={Styles.toggleContent}>
                        {'Distance'}
                    </Text>
                </Pressable>
            </View>
        </View>
    )
};

export default Home;
