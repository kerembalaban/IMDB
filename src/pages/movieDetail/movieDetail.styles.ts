import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    },
    error:{
        paddingHorizontal:24,
        fontSize:24,
        fontWeight:'bold'
    },
    image: {
        width: 60,
        height: 100,
        borderRadius: 4
    },
    information: {
        flex: 1,
        marginHorizontal: 16,
        marginTop: 16
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    description: {
        fontSize: 14,
        fontWeight: '500',
        marginTop: 4
    }
})

export default styles