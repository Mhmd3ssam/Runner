import { StyleSheet } from 'react-native';
export const Styles = StyleSheet.create({
    layoutContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 12,
        alignItems: "center"
    },
    mearsure: {
        color: '#fe9836',
        alignSelf: "center"
    },
    text: {
        alignSelf: "center"
    },
    cardContainer: {
        borderRadius: 12,
        backgroundColor: '#fff',
        marginVertical: 8,
        padding: 16,
        elveation: 1
    },
    firstSectionContainer:{
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"flex-start"
    },
    iamge:{
        width:40,
        height:40,
        borderRadius:8
    }
});