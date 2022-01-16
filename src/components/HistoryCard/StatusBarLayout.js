import React from 'react';
import { View, } from 'react-native';
import { Styles } from './styles.js';

const StatusBarLayout = ({children}) => {
    return (
        <View style={Styles.layoutContainer}>
            {children}
        </View>
    )
};

export default StatusBarLayout;
