import { StyleSheet } from 'react-native';
export const Styles = StyleSheet.create({
    progressContainer:{
        flex:1,
        justifyContent:"flex-start",
        alignItems:"center",
        marginTop:8
    },progressBarContainer:{
        borderRadius:3,
        backgroundColor:"#fff",
        borderWidth:1,
        borderColor:"#fe9836",
        width:"80%"
    },progress:{
        borderRadius:1,
        backgroundColor:"#fe9836",
        borderWidth:2,
        borderColor:"green",
        width:"20%"
    },
})