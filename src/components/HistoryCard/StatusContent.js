import React from 'react';
import { View, Text } from 'react-native';
const StatusContent = ({title,measure,icon,...props}) => {
    return (
        <View>
            <Text style={{color: '#fe9836',alignSelf:"center",...props}}>
                {measure}
            </Text>
            <Text style={{alignSelf: "center"}}>
                {title || icon}
            </Text>
        </View>
    )
};

export default StatusContent;
