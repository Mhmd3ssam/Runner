import React from 'react';
import { View, Text } from 'react-native';
import { Styles } from './styles.js';

const StatusContent = ({title,measure,icon,...props}) => {
    return (
        <View>
            <Text style={{...Styles.mearsure,...props}}>
                {measure}
            </Text>
            <Text style={Styles.text}>
                {title || icon}
            </Text>
        </View>
    )
};

export default StatusContent;
