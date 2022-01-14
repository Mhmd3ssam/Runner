import React from 'react';
import { View, Text } from 'react-native';
const StatusContent = ({title,measure}) => {
    return (
        <View>
            <Text style={{color: '#fe9836',alignSelf:"center"}}>
                {measure}
            </Text>
            <Text style={{alignSelf: "center"}}>
                {title}
            </Text>
        </View>
    )
};

export default StatusContent;
