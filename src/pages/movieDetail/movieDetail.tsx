
import { RouteProp, useRoute } from '@react-navigation/native'
import React, { FC, useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay/lib'
import { ImageComponent } from '../../components'
import ErrorView from '../../components/errorView/errorView'
import { AppContext } from '../../contexApi/appContext'
import useFetch from '../../hooks/useFetch.hook'
import IMovieDetail from '../../interfaces/movieDetail'
import { SearchStackParams } from '../../types/navigations'
import { API_KEY, BASE_API_URL, MOVIE_DETAIL_ENDPOINT } from '../../utils/contants'
import styles from './movieDetail.styles'

type detailScreenRouteType = RouteProp<SearchStackParams>

const MovieDetailScreen: FC = () => {
    const route = useRoute<detailScreenRouteType>()
    const movie = route.params && route.params?.movie
    const [url, setUrl] = useState<string>("")
    const { favorites, recents, addFavorite, removeFavorite, addRecentSearch } = useContext(AppContext);
    const { data, error, loading } = useFetch<IMovieDetail>(url)

    useEffect(() => {
        // prepare movie detail url with selected movie id
        // then change state to call useFetch hooks to get data from Api
        const url = `${BASE_API_URL}/${MOVIE_DETAIL_ENDPOINT}/${API_KEY}/${movie?.id}/Trailer`;
        setUrl(url)

        // if user open movie detail screen, selected movie added to recent search (like imdb)
        // check if movie was not added before to recent searchs 
        if (!recents.some(item => item.id === movie!.id)) {
            addRecentSearch(movie!)
        }
    }, [])

    // check if selected movie in favorites
    const checkMovieInFavoriteList = () => {
        return favorites.some(item => item.id == movie!.id)
    }

    const handleOnFavoriteButton = () => {
        // check if selected movie in favorites && determine add/remove process
        if (checkMovieInFavoriteList()) {
            removeFavorite(movie!)
        } else {
            addFavorite(movie!)
        }
    }

    const handleOnTryAgain = () => {

    }

    const MovieDetail = () => {
        return (
            <ScrollView contentContainerStyle={{paddingBottom:24}}>
                <View style={styles.container}>
                    {/* Top Info */}
                    <View style={styles.topInfo}>
                        <Text style={styles.title}>{data?.title}</Text>
                        <Text style={styles.year}>{`${data!.year}  ${data?.runtimeStr}`}</Text>
                        <Text style={styles.stars}>{data?.stars}</Text>
                        <Text style={styles.genres}>{data!.genres}</Text>
                    </View>
                    {/* Thumbnail Image */}
                    <ImageComponent uri={data!.trailer.thumbnailUrl} style={styles.thumbnailImage} />
                    {/* MovieDetails */}
                    <View style={styles.movieDetailContainer}>
                        <ImageComponent uri={data!.image} style={styles.moviePoster} />
                        <Text style={styles.description}>{data!.trailer.videoDescription}</Text>
                    </View>
                    {/* Add/Remove Favorite Button */}
                    <TouchableOpacity style={styles.favoriteButton} onPress={handleOnFavoriteButton}>
                        <Text style={styles.favoriteButtonTitle}>{checkMovieInFavoriteList() ? "Remove From favorites" : "Add to favorites"}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        )
    }

    return (
        <View style={styles.container}>
            <Spinner
                visible={loading}
                overlayColor={'rgba(51, 49, 62, 0.95)'} />
            {
                error &&
                <ErrorView error={error} onPress={handleOnTryAgain} />
            }
            {
                data &&
                MovieDetail()
            }

        </View>


    )
}

export default MovieDetailScreen