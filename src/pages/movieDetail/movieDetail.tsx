
import React, { FC } from 'react'
import { useState } from 'react'
import { FlatList, Insets, Keyboard, NativeSyntheticEvent, Text, TextInput, TextInputChangeEventData, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MovieListItem } from '../../components'
import useFetch from '../../hooks/useFetch.hook'
import ISearchData from '../../interfaces/searchData'
import { API_KEY, BASE_API_URL, MOVIE_SEARCH_ENDPOINT } from '../../utils/contants'
import styles from './movieDetail.styles'

const MovieDetailScreen: FC = () => {
    const contentInset: Insets = { top: 4, left: 8 };

    const [query, setQuery] = useState<string>("")
    // const url = query && `${BASE_API_URL}/${MOVIE_SEARCH_ENDPOINT}/${API_KEY}/${query}`;

    // const { data, loading } = useFetch<ISearchData>(url)

    const data = {
        searchType: "All",
        expression: "inception",
        results: [
            {
                id: "tt1375666",
                resultType: "Title",
                image: "https://imdb-api.com/images/original/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_Ratio0.7273_AL_.jpg",
                title: "Inception",
                description: "(2010)"
            },
            {
                id: "tt7321322",
                resultType: "Title",
                image: "https://imdb-api.com/images/original/MV5BYWJmYWJmNWMtZTBmNy00M2MzLTg5ZWEtOGU5ZWRiYTE0ZjVmXkEyXkFqcGdeQXVyNzkyOTM2MjE@._V1_Ratio0.7273_AL_.jpg",
                title: "Inception",
                description: "(2014) (Short)"
            },
            {
                id: "tt6128620",
                resultType: "Title",
                image: "https://imdb-api.com/images/original/MV5BY2MwNDU3YWQtYjRiNS00NzgyLWEwYTUtOGE4ZWNiYzcwMzY3XkEyXkFqcGdeQXVyNjMxNzQ2NTQ@._V1_Ratio1.0000_AL_.jpg",
                title: "Inception",
                description: "(2011) (TV Episode) - Season 1 | Episode 2 - Chris Stuckmann Quick Movie Reviews (2011) (TV Series)"
            },
            {
                id: "tt1790736",
                resultType: "Title",
                image: "https://imdb-api.com/images/original/MV5BMjE0NGIwM2EtZjQxZi00ZTE5LWExN2MtNDBlMjY1ZmZkYjU3XkEyXkFqcGdeQXVyNjMwNzk3Mjk@._V1_Ratio0.7273_AL_.jpg",
                title: "Inception: Motion Comics",
                description: "(2010) (Video)"
            },
            {
                id: "nm13440063",
                resultType: "Name",
                image: "https://imdb-api.com/images/original/nopicture.jpg",
                title: "Inception Mental Health Gym",
                description: ""
            },
            {
                id: "nm9372797",
                resultType: "Name",
                image: "https://imdb-api.com/images/original/nopicture.jpg",
                title: "Deception",
                description: ""
            },
            {
                id: "inception",
                resultType: "Keyword",
                image: "",
                title: "inception",
                description: "(9 titles)"
            },
            {
                id: "conception",
                resultType: "Keyword",
                image: "",
                title: "conception",
                description: "(47 titles)"
            },
            {
                id: "co0469119",
                resultType: "Company",
                image: "",
                title: "Inception",
                description: "[it] (Production)"
            },
            {
                id: "co0450912",
                resultType: "Company",
                image: "",
                title: "Inception Film Partners",
                description: "[us] (International Sales Agent)"
            }
        ],
        errorMessage: ""
    }

    return (
        <SafeAreaView style={styles.container}>
            {/* <View style={styles.searchContainer}>
                <TextInput
                    onFocus={handleOnSearchInputFocus}
                    returnKeyType='search'
                    style={styles.searchInput}
                    placeholder={'Search IMDb'}
                    onChange={handleOnQueryChange} />
            </View>


            <FlatList
                onScroll={dismissKeyboard}
                contentContainerStyle={styles.flatListContainer}
                data={data && data?.results}
                renderItem={({ item }) => <MovieListItem item={item} />}
                keyExtractor={(item) => item.id} /> */}
        </SafeAreaView>

    )
}

export default MovieDetailScreen