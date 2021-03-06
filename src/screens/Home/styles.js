import { StyleSheet } from 'react-native';
export const Styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFill,
      flex:1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      
    },
    screenContentConatiner:{
      position:"absolute",
      ...StyleSheet.absoluteFill,
      alignItems: 'center',
      justifyContent: "space-between",
       
    },
    map: {
      width: 400,
      flex:1,
      backgroundColor: '#000',
      opacity: 0.3, 
    },
    distanceContainer:{
      marginTop: 50,
      marginBottom: 50
    },
    distanceContent:{
      fontSize: 42,
      fontWeight: "bold",
      color: '#fe9836',
      alignSelf:"center"
    },
    underLineDistanceContent:{
      borderBottomWidth: 3
    },
    measurementUnit:{
      alignSelf: "center",
      fontSize: 15,
      color:"black"
    },
    stratSectionContainer:{
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 10,
      marginTop: 10,
    },
    avaterContainer:{
      backgroundColor: '#fe9836',
      fontSize: 1, 
    },
    stratAvatarContent:{
      fontSize: 22,
      color: "#fff",
      fontWeight: "bold"
    },
    toggleContainer:{
      marginBottom: 10,
      marginTop: 30,
      padding:10,
      borderRadius:30,
      borderWidth:1,
      borderColor:"#fe9836",
      backgroundColor:"white"
    },
    toggleContent:{
      alignSelf: "center",
      fontSize: 15,
      fontWeight:"bold",
      color: "#fe9836",
     
    }
    
});