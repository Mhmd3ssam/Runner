import React from 'react';
import { View, Text } from 'react-native';

const StatusContent = ({title,measure}) => {
    return (
        <View>
            <Text style={{alignSelf: "center"}}>
                {title}
            </Text>
            <Text style={{color: '#fe9836'}}>
                {measure}
            </Text>
        </View>
    )
};

export default StatusContent;
