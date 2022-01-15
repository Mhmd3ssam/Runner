import React from 'react';
import { Styles } from './styles';
import { View } from 'react-native';
const Progress = ({progress, ...props}) => {
    return (
        <View style={{...Styles.progressContainer,...props}}>
            <View style={Styles.progressBarContainer}>
                <View style={{...Styles.progress, width:progress}}></View>
            </View>
        </View>
    )
};

export default Progress;
