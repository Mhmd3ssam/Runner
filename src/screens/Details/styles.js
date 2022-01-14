import { StyleSheet } from 'react-native';
export const Styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "#fff",
        flex: 1,
        padding: 20
    },
    timingContent: {
        fontSize: 16,
        color: "#aaaaaa"
    },
    titleContainer: {
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        paddingBottom: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    titleContent: {
        fontSize: 20,
        fontWeight: "bold",
        
    },
    editeIcone: {
        color: "black",
    },
    distanceContainer: {
        alignItems: "center",
        padding: 10,
        marginVertical: 10
    },
    distanceContent:{
        fontWeight: "bold",
        fontSize: 100,
        color: "black",
    },
    distanceMeasureText:{
        fontSize: 30,
        color: "#ccc",
    },
    tripDetailsContainer:{
        borderColor:"#fe9836",
        borderWidth:1,
        borderRadius:10,
        justifyContent:"center",
        paddingHorizontal:20,
        paddingVertical:15,
    },
    tripIcons:{
        color:"#014b8e",
    },
    progressContainer:{
        flex:1,
        justifyContent:"flex-start",
        alignItems:"center",
        marginTop:8
    },
    progressImage:{
        height:150,
        width:130
    },
    progressBarContainer:{
        borderRadius:3,
        backgroundColor:"#fff",
        borderWidth:1,
        borderColor:"#fe9836",
        width:"80%"
    },
    iconProgreess:{
        position:"absolute",
        bottom:0,
        right:0,
        top:135,
        left:300,
        color:"green"
    },
    progress:{
        borderRadius:1,
        backgroundColor:"#fe9836",
        borderWidth:2,
        borderColor:"green",
        width:"20%"
    },
    progressText:{
        marginTop:15
    },

})