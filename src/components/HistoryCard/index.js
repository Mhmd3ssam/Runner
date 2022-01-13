import React from 'react';
import { View, Text, Image } from 'react-native';
import StatusBarLayout from './StatusBarLayout';
import StatusContent from './StatusContent';
const Card = ({data}) => {
    return (
    <View style={{paddingHorizontal:12}} key={data.Id}>
        <View style={{
            borderRadius:12,
            backgroundColor:'#fff',
            marginVertical:8,
            padding:16,
            elveation: 1

        }}>
            <View style={{
                flexDirection:"row",
                justifyContent:"flex-start",
                alignItems:"flex-start"

            }}>
                <Image
                    source={{uri:data.MapImage}}
                    style={{
                        width:40,
                        height:40,
                        borderRadius:8
                    }}
                />
                <View style={{
                    marginLeft:10
                }}>
                    <Text style={{
                        color:'black'
                    }}>
                        {data.Day}
                    </Text>
                    <Text style={{
                        color:"gray"
                    }}>
                        {data.Title}
                    </Text>
                </View>
            </View>
                <StatusBarLayout>
                    <StatusContent title="Kilometer" measure={data.Kilometers}/>
                    <StatusContent title="Time" measure={data.Time}/>
                    <StatusContent title="Steps" measure={data.Steps}/>
                </StatusBarLayout>           
       </View>
    </View>
    )
};

export default Card;
