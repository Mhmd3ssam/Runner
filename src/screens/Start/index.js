import React, { useEffect, useState, useRef} from 'react';
import { View, Text, Pressable, Alert, Vibration} from 'react-native';
import { Avatar } from 'react-native-elements';

import { Styles } from './styles'
import { startCounter, stopCounter } from 'react-native-accurate-step-counter';
import Geolocation from 'react-native-geolocation-service';
import { uerPermision, calDistance, secondsToHm, dayName, timeOfDay, getTime } from '../../service';

import {useDispatch, useSelector} from 'react-redux';
import {saveTrip} from '../../store/actions';

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
    const[tripTime, setTripTime] = useState();
    const[tripStartedAt, setTripStartedAt] = useState();
    const[tripDistance, setTripDistance] = useState(0);
    const[latitude,setLatitude] = useState();
    const[longitude,setLongitude] = useState();
    const[location,setLocation] = useState(null);
    const watchId = useRef(null );

    const dispatch = useDispatch();
    const data = useSelector(state=>state);
    
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

    const handleSaveTrip = ()=>{
        let trip = {
            "ID":"1",
            "Day":dayName(),
            "StartTime":tripStartedAt,
            "Title":`${dayName()} ${timeOfDay()} Run`,
            "MapImage":"https://images.unsplash.com/photo-1584972191378-d70853fc47fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            "Kilometers":tripDistance,
            "Time":tripTime,
            "Steps":steps,
            "totalKmRun": "19",
            "startLatitude":latitude,
            "startLongitude":longitude,
            "endLatitude": location.coords.latitude,
            "endLongitude": location.coords.longitude
        }
        dispatch(saveTrip(trip));
        Vibration.vibrate();
        navigation.navigate("Trips");
    }
    
    const getLocationUpdates = async () => {
        const hasPermission = await uerPermision();
    
        if (!hasPermission) {
            console.log('error')
          return;
        }
        let oldLocation = null;
        let totalDistance = 0;
        let totalTime = 0;
        watchId.current = Geolocation.watchPosition(
          position => {
            setLocation(position);
            let newDistance ;
            let newTime;
            if(oldLocation){
                newDistance = 0;
                newTime = 0;
            }else{
                
                newDistance = calDistance(
                    oldLocation?.coords.latitude,
                    oldLocation?.coords.longitude,
                    position.coords.latitude,
                    position.coords.longitude,
                );
               
            }
            console.log(totalDistance,'tootal');
            console.log(newDistance,'new');

            newTime = 10;
            totalTime = totalTime + newTime;
            totalDistance = totalDistance + (parseFloat(newDistance)?parseFloat(newDistance):0);     
            setTripTime(secondsToHm(totalTime));
            setTripDistance(totalDistance.toFixed(2));
            oldLocation = position;
          },
          error=> {
            setLocation(error);
          },
          {
            accuracy: {
              android: 'high',
            },
            enableHighAccuracy: true,
            distanceFilter: 0,
            interval: 10000,
            fastestInterval: 2000,
            forceRequestLocation: true,
            forceLocationManager: true,
          },
        );
    };

    const removeLocationUpdates = () => {
        if (watchId.current !== null) {
          Geolocation.clearWatch(watchId.current);
          watchId.current = null;
        }
    };
    
    useEffect(()=>{
        if(location && tripTime === '00:00:10'){
            setTripStartedAt(getTime(location.timestamp));
            setLatitude(location.coords.latitude);
            setLongitude(location.coords.longitude);
        }
    },[tripTime]);

    useEffect(()=>{
        let cancle;
        navigation.addListener('focus',(event)=>{
            cancle = getLocationUpdates()
        }) 
        return ()=> cancle;
    },[navigation])
    
    useEffect(
        () =>
          navigation.addListener('blur', event => {
            removeLocationUpdates();
          }),
        [navigation],
    );

    useEffect(()=>{
        navigation.addListener('beforeRemove',(event)=>{
            event.preventDefault();
            Alert.alert('Leaving!!','Are you sure you want to leave this trip ?!',[
                {text:"No",style:"cancel",onPress:()=>{}},
                {text:"yes",style:"destructive",onPress:()=>{navigation.dispatch(event.data.action)}},

            ]
            )
        })
    },[navigation]);

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
                    <StatusContent icon={measureIcon} measure={tripDistance} {...Styles.tripContent} />
                    <StatusContent icon={timeIcon} measure={tripTime?tripTime :"00:00:00"} {...Styles.tripContent} />
                    <StatusContent icon={stepsIcon} measure={resume ? steps:pausStps  } {...Styles.tripContent} />
                </StatusBarLayout>
            </View>
            <View style={Styles.distanceContainer}>
                <Text style={Styles.distanceContent}>{+distance? distance:`${time.hours}:${time.minutes}`}</Text>
                <Text style={Styles.distanceText}>{+distance?'Km':'H : M'}</Text>
            </View>
            <Progress {...{ marginTop: 60,  }} progress={progress} />
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
                <Pressable onLongPress={handleSaveTrip}>
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

//"latitude": 70.0326189, "longitude": 10.714204