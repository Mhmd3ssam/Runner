import React from 'react';
import { View, Text, Image , Pressable} from 'react-native';
import StatusBarLayout from './StatusBarLayout';
import StatusContent from './StatusContent';
import { useNavigation } from '@react-navigation/native';
import { Styles } from './styles.js';

const Card = ({data }) => {
    const navigation = useNavigation(); 
    return (
    <Pressable style={{paddingHorizontal:12}} key={data.Id} onPress={()=>{navigation.navigate("TripDetails",{data:data})}}>
        <View style={Styles.cardContainer}>
            <View style={Styles.firstSectionContainer}>
                <Image
                    source={{uri:data.MapImage}}
                    style={Styles.iamge}
                />
                <View style={{marginLeft:10}}>
                    <Text style={{color:'black'}}>
                        {data.Day}
                    </Text>
                    <Text style={{color:"gray"}}>
                        {data.Title}
                    </Text>
                </View>
            </View>
                <StatusBarLayout>
                    <StatusContent title="Kilometer" measure={data.Kilometers} />
                    <StatusContent title="Time" measure={data.Time} />
                    <StatusContent title="Steps" measure={data.Steps}/>
                </StatusBarLayout>           
       </View>
    </Pressable>
    )
};

export default Card;
