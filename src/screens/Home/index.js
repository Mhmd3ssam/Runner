import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, TextInput, PermissionsAndroid,Platform, } from 'react-native';
import MapView, { Circle } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import { Styles } from './styles';
import { Avatar } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { uerPermision } from '../../service';



const Home = () => {
    const navigation = useNavigation(); 
    const [distance, setDistance] = useState('0.0');
    const [time, setTime] = useState({
        hours: '00',
        minutes: '00'

    })
    const [toggle, setToggle] = useState(true);
    const [error, setError] = useState(null);
    const[psoition,setposition] = useState({});
    
    
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
            setError('Be easy 😎');
        } else if (!inputValdation(value, toggle)[0] || toggle) {
            setDistance(value);
            setError('')
        } else if (!inputValdation(value, toggle)[0] && !toggle) {
            setTime('');
            setError('Be easy 😎');
        } else {
            let h = value.split(':')[0];
            let m = value.split(':')[1];
            setTime({
                hours: h,
                minutes: m
            });
        }

    }

    const userLocation =async  ()=>{
        let hasPermission = await uerPermision();
        if(!hasPermission)return;
        Geolocation.getCurrentPosition((position)=>{
            setposition(position) ;
            console.log(position);
        }, (error)=>{
            console.log(error);
            setposition(null);
        },{
            accuracy: {
              android: 'high',
            },
            enableHighAccuracy: true,
            timeout: 30000,
            maximumAge: 10000,
            distanceFilter: 0,
            forceRequestLocation: true,
            forceLocationManager: false,
            showLocationDialog: true,
          });
    }
    useEffect(()=>{
        uerPermision();
        userLocation();
        console.log(psoition.latitude,'latitude')
        
    },[navigation])
    return (
        <>
            {/* Map section */}
            <View style={Styles.container} pointerEvents='none'>
                <MapView
                    style={Styles.map}
                    region={{
                        latitude: psoition?.coords.latitude || 31.0326272,
                        longitude: psoition?.coords.longitude ||30.7142433,
                        latitudeDelta: psoition?.latitudeDelta ||0.0922,
                        longitudeDelta: psoition?.longitudeDelta ||0.0421,
                    }}
                    minZoomLevel={18}
                >
                    <Circle center={{
                        latitude: psoition?.coords.latitude || 31.0326272,
                        longitude: psoition?.coords.longitude ||30.7142433
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
                        onPress={() => { navigation.navigate("Start",{distance:distance,time:time}) }}
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


//  {"coords": {"accuracy": 16.68400001525879, "altitude": 22.600000381469727, "altitudeAccuracy": 1.7365318536758423, "heading": 93.92518615722656, "latitude": 31.0326272, "longitude": 30.7142433, "speed": 0.26427894830703735}, "mocked": false, "provider": "fused", "timestamp": 1642279055274}