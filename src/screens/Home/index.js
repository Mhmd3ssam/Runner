import React from 'react';
import { View, Text, Pressable } from 'react-native';
import MapView from 'react-native-maps';
import { Styles } from './styles';

import { Avatar } from 'react-native-elements';

const Home = () => {
    return (
        <View style={Styles.container}>
            <Pressable style={{
                marginTop: 50,
                marginBottom: 50
            }}
                onPress={() => { console.log('My distance') }}
            >
                <Text style={{
                    fontSize: 42,
                    fontWeight: "bold",
                    color: 'red'
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
            {/*Start Button  */}
            <View style={{
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 10,
                marginTop: 10,
            }}>
                <Avatar
                    size={115}
                    rounded
                    title="START"
                    titleStyle={{
                        fontSize: 22,
                        color: "#fff",
                        fontWeight: "bold"

                    }}
                    containerStyle={{
                        backgroundColor: '#fe9836',
                        fontSize: 1
                    }}
                    onPress={() => { console.log('start') }}
                />
                {/* Toggle butoon to conter the trip by distance or time  */}
                <Pressable
                    onPress={() => { console.log('change to time') }}
                    style={{
                        marginBottom: 10,
                        marginTop: 10,
                    }}
                >
                    <Text style={{
                        alignSelf: "center",
                        fontSize: 15,
                    }}>
                        {'Distance'}
                    </Text>
                </Pressable>
            </View>

        </View>
    )
};

export default Home;
