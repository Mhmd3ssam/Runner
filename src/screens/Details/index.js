import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, Pressable, Keyboard, Image } from 'react-native';
import MapView, { Circle } from 'react-native-maps';
import { Styles } from './styles.js';
import {useDispatch, useSelector} from 'react-redux';

import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import { Levels } from "../../common/dummy";
import { images } from "../../common/images";
import StatusBarLayout from "../../components/HistoryCard/StatusBarLayout";
import StatusContent from "../../components/HistoryCard/StatusContent";


const Details = ({ route, navigation }) => {
    const { data } = route.params;
    let coords = {
        "startLatitude":data.startLatitude,
        "startLongitude":data.startLongitude,
        "endLatitude": data.endLatitude,
        "endLongitude": data.endLongitude
    }
    const [title, setTitle] = useState(data.Title);
    const [distanceAwayFromLevel, setDistanceAwayFromLevel] = useState(0);
    const [progress, setProgress] = useState('0%');
    const [level, setLevel] = useState('green');
    const [imageLevelSrc, setImageLevelSrc] = useState(null)
    const titleInputRef = useRef();

    const timeIcon = <Ionicons name="timer-outline" size={25} style={Styles.tripIcons} />
    const measureIcon = <FontAwesome5 name="running" size={25} style={Styles.tripIcons} />
    const stepsIcon = <Entypo name="baidu" size={25} style={Styles.tripIcons} />

    const calcLeve = (totalDistance) => {
        for (let i = 0; i < Levels.length; i++) {
            if (Levels[i].kmRequried >= totalDistance) {
                setLevel(Levels[i].level);
                setDistanceAwayFromLevel(Levels[i].kmRequried - totalDistance);
                let progress = (+totalDistance / 600) * 100;
                setProgress(`${progress}%`);
                for (const [k, v] of Object.entries(images)) {
                    if (Levels[i].level === k) {
                        setImageLevelSrc(v)
                    }
                }
                break;
            }
        }
    }

    useEffect(() => {
        calcLeve(data.totalKmRun);
    }, [])

    return (
        <Pressable style={Styles.mainContainer}
            onPress={() => { Keyboard.dismiss() }}
        >

            <Text style={Styles.timingContent}
            >
                {`${data.Day} - ${data.StartTime} `}
            </Text>
            <Pressable style={Styles.titleContainer}
                onPress={() => { titleInputRef.current.focus() }}
            >
                <TextInput
                    value={title}
                    onChangeText={(newTitle) => { setTitle(newTitle) }}
                    style={Styles.titleContent}
                    ref={titleInputRef}
                />
                <Feather
                    name="edit"
                    style={Styles.editeIcone}
                    size={20}
                />

            </Pressable>

            <View >
                <View style={Styles.mapContainer} pointerEvents='none'>
                    <MapView
                        style={Styles.map}
                        region={{
                            latitude: data.startLatitude,
                            longitude: data.startLongitude,
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
                <View style={Styles.distanceContainer}>
                    <Text style={Styles.distanceContent}>
                        {data.Kilometers}
                    </Text>
                    <Text style={Styles.distanceMeasureText}>
                        {'Kilometers'}
                    </Text>
                </View>
                <Pressable style={Styles.tripDetailsContainer} onPress={() => { navigation.navigate("Map",{...coords})}}>
                    <StatusBarLayout>
                        <StatusContent icon={measureIcon} measure={data.Kilometers} {...{ marginBottom: 10 }} />
                        <StatusContent icon={timeIcon} measure={data.Time} {...{ marginBottom: 10 }} />
                        <StatusContent icon={stepsIcon} measure={data.Steps} {...{ marginBottom: 10 }} />
                    </StatusBarLayout>
                </Pressable>
            </View>

            <View style={Styles.progressContainer}>
                {imageLevelSrc ? <Image source={imageLevelSrc} style={Styles.progressImage} /> : <Image source={images.green} style={Styles.progressImage} />}
                <Entypo name="location" size={20} style={{ ...Styles.iconProgreess, color: level }} />
                <View style={Styles.progressBarContainer}>
                    <View style={{ ...Styles.progress, borderColor: level, width: progress }}></View>
                </View>
                <Text style={Styles.progressText}>
                    {level === "orange" ? 'wow, you made it 🏆' : `${distanceAwayFromLevel} Km away from ${level} Level`}
                </Text>
            </View>
        </Pressable>
    )
};

export default Details;
