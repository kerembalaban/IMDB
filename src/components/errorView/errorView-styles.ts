import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    error: {
        paddingHorizontal: 24,
        fontSize: 24,
        textAlign:'center',
        fontWeight: 'bold'
    },
    errorButton: {
        backgroundColor: '#f3ce13',
        height:50,
        width: 200,
        marginHorizontal:16,
        marginTop:16,
        borderRadius: 8,
        justifyContent:'center',
        alignItems:'center'
    },
    errorButtonTitle: {
        fontSize: 16,
        fontWeight: '500',
    }
})

export default styles