import React from 'react';
import { View, Text, Pressable } from 'react-native';
import MapView from 'react-native-maps';
import { Styles } from './styles';

const Home = () => {
    return (
        <View style={Styles.container}>
            <Pressable style={{
                marginTop:50,
                marginBottom:50
            }}
            onPress={()=>{console.log('Hi')}}
            >
                <Text style={{
                    fontSize: 42,
                    fontWeight: "bold",
                    color:'red'
                }}>
                    {'3.02'}
                </Text>
                <View style={{
                    borderBottomWidth: 3,
                }}></View>
                <Text style={{
                    alignSelf: "center",
                    fontSize: 15,
                }}>
                    {'Kilometer'}
                </Text>
            </Pressable>
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
        </View>
    )
};

export default Home;
