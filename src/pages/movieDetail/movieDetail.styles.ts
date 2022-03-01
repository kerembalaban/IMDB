import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    error: {
        paddingHorizontal: 24,
        fontSize: 24,
        fontWeight: 'bold'
    },
    thumbnailImage: {
        height: 200,
        marginTop: 16
    },
    topInfo: {
        marginStart: 16,
        marginTop: 16
    },
    moviePoster: {
        width: 100,
        height: 140,
        borderRadius: 4
    },
    movieDetailContainer: {
        flexDirection: 'row',
        marginHorizontal: 16,
        marginTop: 16
    },
    movieInformation: {
        marginHorizontal: 16,
        marginTop: 8
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
    },
    year: {
        fontSize: 18,
        marginTop: 4
    },
    description: {
        flex:1,
        marginStart: 16,
        fontSize: 16,
        fontWeight: '500'
    },
    genres: {
        fontSize: 14,
        top: 4
    },
    stars: {
        fontSize: 14,
        marginTop: 4
    },
    rating: {
        fontSize: 16,
        fontWeight: '500',
        marginTop: 4,
        marginStart: 16
    },
    favoriteButton: {
        backgroundColor: '#f3ce13',
        height:50,
        marginHorizontal:16,
        marginTop:16,
        borderRadius: 8,
        justifyContent:'center',
        alignItems:'center'
    },
    favoriteButtonTitle: {
        fontSize: 16,
        fontWeight: '500'
    }
})

export default styles