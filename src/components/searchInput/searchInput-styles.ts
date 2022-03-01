import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:16,
        marginTop:16
    },
    searchInput: {
        flex:1,
        height:50,
        borderWidth:1,
        borderColor:'#D3D3D3',
        borderRadius:10,
        paddingStart:16
    },
    cancelButton: {
        fontStyle:'500',
        marginStart:16
    }
})

export default styles