import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 4
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