
import { RouteProp, useRoute } from '@react-navigation/native'
import React, { FC } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Text, View } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay/lib'
import { SafeAreaView } from 'react-native-safe-area-context'
import useFetch from '../../hooks/useFetch.hook'
import IMovieDetail from '../../interfaces/movieDetail'
import { SearchStackParams } from '../../types/navigations'
import { API_KEY, BASE_API_URL, MOVIE_DETAIL_ENDPOINT, MOVIE_SEARCH_ENDPOINT } from '../../utils/contants'
import styles from './movieDetail.styles'

type detailScreenRouteType = RouteProp<SearchStackParams>

const MovieDetailScreen: FC = () => {
    const route = useRoute<detailScreenRouteType>()
    const [url, setUrl] = useState<string>("")

    const { data, error, loading } = useFetch<IMovieDetail>(url)

    useEffect(() => {
        const url = `${BASE_API_URL}/${MOVIE_DETAIL_ENDPOINT}/${API_KEY}/324532`;
        setUrl(url)
    }, [])

    return (
        <View style={styles.container}>
            <Spinner
                visible={loading}
                overlayColor={'rgba(51, 49, 62, 0.95)'} />
            {
                error &&
                <Text style={styles.error}>{error}</Text>
            }
            {
                data &&
                <Text>{data?.genres}</Text>
            }

        </View>


    )
}

export default MovieDetailScreen