import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { dummy_data } from '../../common/dummy';
import Card from '../../components/HistoryCard';
import {useDispatch, useSelector} from 'react-redux';

const History = () => {
    const renderItem = ({ item }) => <Card data={item}/>;
    const _data = useSelector(state=>state);
    return (
        <SafeAreaView>
            <FlatList
                data={_data}
                renderItem={renderItem}
                keyExtractor={item => item.Id} 
            />
        </SafeAreaView>
    )
};

export default History;
