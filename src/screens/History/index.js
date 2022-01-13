import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { dummy_data } from '../../common/dummy';
import Card from '../../components/HistoryCard';

const History = () => {
    const renderItem = ({ item }) => <Card data={item}/>;

    return (
        <SafeAreaView>
            <FlatList
                data={dummy_data}
                renderItem={renderItem}
                keyExtractor={item => item.Id}
                
            />
        </SafeAreaView>
    )
};

export default History;
