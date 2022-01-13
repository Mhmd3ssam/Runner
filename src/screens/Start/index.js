import React from 'react';
import { View, Text } from 'react-native';
import Steps from '../../components/Steps';

const StartScreen = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',

        }}>
            <Text>
                <Steps />

            </Text>
            <Text>
                {'Steps'}

            </Text>

        </View>
    )
};

export default StartScreen;