import React, { useState } from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';
import MapView, { Circle } from 'react-native-maps';
import { Styles } from './styles';
import { Avatar } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation(); 
    const [distance, setDistance] = useState('0.0');
    const [time, setTime] = useState({
        hours: '00',
        minutes: '00'

    })
    const [toggle, setToggle] = useState(true);
    const [error, setError] = useState(null);

    const inputValdation = (input, typeOFMeasure) => {
        let rgx;
        if (typeOFMeasure) {
            rgx = /^[0-9]*\.?[0-9]?$/;
            return [input.match(rgx), typeOFMeasure];
        } else {
            rgx = /^[0-9]{0,2}:{1}[0-9]{0,2}?$/;
            return [input.match(rgx), typeOFMeasure];
        }

    }

    const inputHandelChange = (value, toggle) => {

        if (!inputValdation(value, toggle)[0] && toggle) {
            setDistance('');
            setError('Be ease 😎');
        } else if (!inputValdation(value, toggle)[0] || toggle) {
            setDistance(value);
            setError('')
        } else if (!inputValdation(value, toggle)[0] && !toggle) {
            setTime('');
            setError('Be ease 😎');
        } else {
            let h = value.split(':')[0];
            let m = value.split(':')[1];
            setTime({
                hours: h,
                minutes: m
            });
        }

    }

    return (
        <>
            {/* Map section */}
            <View style={Styles.container} pointerEvents='none'>
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
            <View style={Styles.screenContentConatiner}>
                {/* Distance section */}
                <Pressable style={Styles.distanceContainer}
                    onPress={() => { console.log('My distance') }}
                >
                    <TextInput style={Styles.distanceContent}
                        value={toggle ? distance : `${time.hours}:${time.minutes}`}
                        keyboardType='decimal-pad'
                        onChangeText={(value) => { inputHandelChange(value, toggle) }}
                    />
                    <View style={Styles.underLineDistanceContent}></View>
                    <Text style={{ ...Styles.measurementUnit, color: error ? "red" : "black" }}>
                        {error ? error : toggle ? "Kilometers" : "Hours : Minutes"}
                    </Text>
                </Pressable>
                {/*Start Button section */}
                <View style={Styles.stratSectionContainer}>
                    <Avatar
                        size={115}
                        rounded
                        title="START"
                        titleStyle={Styles.stratAvatarContent}
                        containerStyle={Styles.avaterContainer}
                        onPress={() => { navigation.navigate("Start") }}
                    />
                    {/* Toggle butoon to conter the trip by distance or time  */}
                    <Pressable
                        onPress={() => {
                            setToggle(!toggle);
                            setError('')
                        }}
                        style={Styles.toggleContainer}
                    >
                        <Text style={Styles.toggleContent}>
                            {toggle ? 'Distance' : 'Time'}
                        </Text>
                    </Pressable>
                   
                </View>
              
            </View>
          
        </>
    )

};

export default Home;


