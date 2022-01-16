import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
    screen: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tripIcons: {
        color: "black",
    },
    tripDetailsContainer: {
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: "center",
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    tripContent: {
        color: "white",
        marginBottom: 10,
        fontSize: 22,
    },
    distanceContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:60
    },
    distanceContent:{
        fontSize: 90,
        color:"black",
        fontWeight:"bold",
        fontStyle:"italic"
    },
    distanceText:{
        fontSize: 30,
        color:"white",
        fontStyle:"italic"
    },
    avatarContainer:{
        flexDirection:"row",
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:40
    },
    avater:{
        backgroundColor: 'white',
        marginHorizontal:35,
        borderColor:"black",
        borderWidth:3,
    },
    pausIcon:{
        position:"absolute",
        bottom:0,
        left:60,
        top:25,
    },
    
});
