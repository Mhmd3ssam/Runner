import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { Styles } from './styles.js';
import { images } from "../../common/images";

const Chalange = () => {
    const RenderItem = ({title,url}) => {
        return (
            <>
                <View style={{...Styles.mainContainer}}>
                    <Image source={url} style={Styles.progressImage} />
                    <Text style={Styles.levelText}>{title}</Text>
                </View>
                
            </>)
    };

    return (
        <>
            <RenderItem title="Complete 30 km  to achive green leve 🏃" url={images.green}/>
            <RenderItem title="Complete 250 km to achive red leve 🏅" url={images.red}/>
            <RenderItem title="Complete 450 km to achive blue leve 🎖️" url={images.blue}/>
            <RenderItem title="Complete 600 km to achive orange leve 🏆" url={images.orange}/>
        </>
        
    )
};

export default Chalange;
