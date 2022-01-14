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
        fontWeight: "bold"
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
    progressContainer:{
        flex:1,
        justifyContent:"flex-start",
        alignItems:"center",
        marginTop:8
    },
    progressImage:{
        height:150,
        width:130
    }
})