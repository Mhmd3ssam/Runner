import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, SafeAreaView } from 'react-native';
import { Styles } from './styles'
import { startCounter, stopCounter } from 'react-native-accurate-step-counter';

import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import StatusBarLayout from "../../components/HistoryCard/StatusBarLayout";
import StatusContent from "../../components/HistoryCard/StatusContent";

const StartScreen = ({ route, navigation }) => {
    const { distance,time } = route.params;
    const [steps, setSteps] = useState(0);


    const timeIcon = <Ionicons name="timer-outline" size={50} style={Styles.tripIcons}/>
    const measureIcon = <FontAwesome5 name="running" size={50} style={Styles.tripIcons}/>
    const stepsIcon = <Entypo name="baidu" size={50} style={Styles.tripIcons}/>

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
    }, []);

    return (
        <View style={{
            flex: 1,
            padding: 24,
            backgroundColor: "#fe9836"

        }}>
            <View style={Styles.tripDetailsContainer}>
                <StatusBarLayout>
                    <StatusContent icon={measureIcon} measure={distance} {...Styles.tripContent}/>
                    <StatusContent icon={timeIcon} measure={`${time.hours}:${time.minutes}`} {...Styles.tripContent} />
                    <StatusContent icon={stepsIcon} measure={steps} {...Styles.tripContent}/>
                </StatusBarLayout>
            </View>    
        </View>
    )
};

export default StartScreen;