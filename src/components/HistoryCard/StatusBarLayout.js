import React from 'react';
import { View, } from 'react-native';

const StatusBarLayout = ({children}) => {
    return (
        <View style={{
            flexDirection:"row",
            justifyContent:"space-between",
            marginTop:12,
            alignItems:"center"
        }}>
            {children}
        </View>
    )
};

export default StatusBarLayout;
