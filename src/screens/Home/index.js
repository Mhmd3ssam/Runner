import React,{useState} from 'react';
import { View, Text, Pressable, TextInput} from 'react-native';
import MapView from 'react-native-maps';
import { Styles } from './styles';

import { Avatar } from 'react-native-elements';

const Home = () => {
    const[distance,setDistance] = useState("0.1");
    const [error,setError] = useState(null);

    const inputValdation = (input)=>{
        let rgx = /^[0-9]*\.?[0-9]?$/;
        return input.match(rgx);
    }
    const inputHandelChange = (value)=>{
        if(!inputValdation(value)){
            setDistance(distance);
            setError('UnVaild Number');
        }else{
            setError("");
            setDistance(value);
        }
        
    }
    return (
        <View style={Styles.container}>
            {/* Distance section */}
            <Pressable style={Styles.distanceContainer}
                onPress={() => { console.log('My distance') }}
            >
                <TextInput style={{...Styles.distanceContent, color: error ?"red":"black"}} 
                value={distance} 
                keyboardType='decimal-pad'
                onChangeText={(value)=>{inputHandelChange(value)}}
                />
                <View style={Styles.underLineDistanceContent}></View>
                <Text style={{...Styles.measurementUnit ,color: error ?"red":"black" }}>
                    {error ?error:'Kilometer'}
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
