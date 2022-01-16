import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import { dummy_data } from '../../common/dummy';
import Card from '../../components/HistoryCard';
import Chalange from '../../components/Chalange';
import { useDispatch, useSelector } from 'react-redux';

const History = () => {
    const renderItem = ({ item }) => <Card data={item} />;
    const _data = useSelector(state => state);
    return (
        <SafeAreaView>
            {_data.length !== 0 ?
                <FlatList
                    data={_data}
                    renderItem={renderItem}
                    keyExtractor={item => item.Id}
                /> :
                <Chalange />
            }

        </SafeAreaView>
    )
};

export default History;
