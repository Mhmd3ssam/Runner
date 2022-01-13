import React from 'react';
import { View, Text , Image} from 'react-native';
import { MAP } from '../../common/images';
import { dummy_data } from '../../common/dummy';
import Card from '../../components/HistoryCard';
const History = () => {
    return (
        <>
        <View style={{paddingHorizontal:12}}>
            {/* Card 1 */}
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
                        source={{uri:MAP}}
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
                            {'Monday'}
                        </Text>
                        <Text style={{
                            color:"gray"
                        }}>
                            {'Monday Moring Run'}
                        </Text>
                    </View>
                </View>
                <View style={{
                    flexDirection:"row",
                    justifyContent:"space-between",
                    marginTop:12,
                    alignItems:"center"
                }}>
                    <View>
                    <Text style={{
                        alignSelf:"center"
                    }}>{'1.5'}</Text>
                      <Text style={{
                          color:'#fe9836'
                      }}>{'Kilomerter'}</Text>
                     
                    </View>
                  
                    <View >
                    <Text>{'01:05'}</Text>
                      <Text style={{
                          color:'#fe9836'
                      }}>{'Time'}</Text>
                     
                    </View>
                  
                    <View>
                    <Text>{'1259'}</Text>
                      <Text style={{
                          color:'#fe9836'
                      }}>{'Steps'}</Text>
                    
                    </View>
                  
                </View>
            </View>
        </View>
            {dummy_data.map((data)=><Card data={data} />)}
        </>
       
    )
};

export default History;
