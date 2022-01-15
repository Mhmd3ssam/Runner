import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, Alert } from 'react-native';
import { Avatar } from 'react-native-elements';

import { Styles } from './styles'
import { startCounter, stopCounter } from 'react-native-accurate-step-counter';

import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";

import StatusBarLayout from "../../components/HistoryCard/StatusBarLayout";
import StatusContent from "../../components/HistoryCard/StatusContent";
import Progress from "../../components/Progress";


const StartScreen = ({ route, navigation }) => {
    const { distance, time } = route.params;
    const [steps, setSteps] = useState(0);
    const[pausStps,setPausStps] = useState(steps)
    const [progress, setProgress] = useState('20%');
    const [resume, setResume] = useState(true);


    const timeIcon = <Ionicons name="timer-outline" size={50} style={Styles.tripIcons} />
    const measureIcon = <FontAwesome5 name="running" size={50} style={Styles.tripIcons} />
    const stepsIcon = <Entypo name="baidu" size={50} style={Styles.tripIcons} />
    const finshIcon = <Ionicons name="stop-circle-outline" size={50} style={{color:"#fe9836"}} />
    const pauseIcon = <Ionicons name="pause" size={50} style={{color:"#fe9836"}} />
    const resumIcon = <AntDesign name="caretright" size={50} style={{color:"#fe9836"}}/>

    const handleTrip = ()=>{ 
        setResume(!resume);
        setPausStps(steps);
        
    }

 
    useEffect(()=>{
        navigation.addListener('beforeRemove',(event)=>{
            event.preventDefault();
            Alert.alert('Leaving!!','Are you sure you want to leave this trip ?!',[
                {text:"No",style:"cancel",onPress:()=>{}},
                {text:"yes",style:"destructive",onPress:()=>{navigation.dispatch(event.data.action)}},

            ]
            )
        })
    },[navigation])
    useEffect(() => {
        const config = {
            default_threshold: 15.0,
            default_delay: 150000000,
            cheatInterval: 3000,
            onStepCountChange: (stepCount) => { setSteps(stepCount) },
            onCheat: () => { console.warn("User is Cheating") }
        }
        startCounter(config);
        return () => { stopCounter() }
    }, [resume]);

    return (
        <View style={{
            flex: 1,
            padding: 24,
            backgroundColor: "#fe9836"

        }}>
            <View style={Styles.tripDetailsContainer}>
                <StatusBarLayout>
                    <StatusContent icon={measureIcon} measure={distance} {...Styles.tripContent} />
                    <StatusContent icon={timeIcon} measure={`${time.hours}:${time.minutes}`} {...Styles.tripContent} />
                    <StatusContent icon={stepsIcon} measure={resume ? steps:pausStps  } {...Styles.tripContent} />
                </StatusBarLayout>
            </View>
            <View style={Styles.distanceContainer}>
                <Text style={Styles.distanceContent}>{'5.00'}</Text>
                <Text style={Styles.distanceText}>{'Miles'}</Text>
            </View>
            <Progress {...{ marginTop: 60 }} progress={progress} />
            <View style={Styles.avatarContainer}>
                <Pressable onPress={handleTrip}>
                    <Avatar
                        size={100}
                        rounded
                        containerStyle={Styles.avater}
                    />
                    <View style={Styles.pausIcon}>
                        {resume ? pauseIcon : resumIcon}
                    </View>
                </Pressable>
                <Pressable onLongPress={()=>{navigation.navigate("Trips")}}>
                    <Avatar
                        size={100}
                        rounded
                        containerStyle={Styles.avater}
                    />
                    <View style={Styles.pausIcon}>
                        {finshIcon}
                    </View>
                </Pressable> 
            </View>
        </View>
    )
};

export default StartScreen;