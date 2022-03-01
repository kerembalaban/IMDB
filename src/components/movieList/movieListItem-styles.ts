import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 8
    },
    image: {
        width: 55,
        height: 80,
        borderRadius: 2
    },
    information: {
        flex: 1,
        marginHorizontal: 8,
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