import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Pressable, Keyboard,Image } from 'react-native';
import {Styles} from './styles.js'
import Feather from "react-native-vector-icons/Feather";
import {RunBadge} from "../../common/images";
import StatusBarLayout from "../../components/HistoryCard/StatusBarLayout";
import StatusContent from "../../components/HistoryCard/StatusContent";


const Details = ({ route, navigation }) => {
    const { data } = route.params;
    const [title, setTitle] = useState(data.Title);
    const titleInputRef = useRef();


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
            <View style={Styles.distanceContainer}>
                <Text style={Styles.distanceContent}>
                    {data.Kilometers}
                </Text>
                <Text style={Styles.distanceMeasureText}>
                    {'Kilometers'}
                </Text>
            </View>
            <View style={Styles.tripDetailsContainer}>
                <StatusBarLayout>
                    <StatusContent title="Kilometer" measure={data.Kilometers} />
                    <StatusContent title="Time" measure={data.Time} />
                    <StatusContent title="Steps" measure={data.Steps} />
                </StatusBarLayout>
            </View>
            <View style={Styles.progressContainer}>
                    <Image source={RunBadge}style={Styles.progressImage}/>
                    <Text>{'Progress'}</Text>
            </View>
        </Pressable>
    )
};

export default Details;
