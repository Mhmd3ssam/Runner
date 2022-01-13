import React from 'react';
import { View, Text } from 'react-native';

const Details = ({ route, navigation }) => {
    const { data } = route.params;
    return (
        <View>
            <Text>
                {'Details Screen'}
                {data.ID}
            </Text>
        </View>
    )
};

export default Details;
