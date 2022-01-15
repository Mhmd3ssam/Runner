import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    mapContainer:{
        ...StyleSheet.absoluteFill,
        flex:1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        
    },
    map: {
        width: 400,
        flex:1,
        backgroundColor: '#000',
        
    },
});