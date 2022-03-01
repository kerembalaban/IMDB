
import { useNavigation } from '@react-navigation/native'
import React, { FC, useState } from 'react'
import { FlatList, Keyboard, NativeSyntheticEvent, TextInput, TextInputChangeEventData, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MovieListItem } from '../../components'
import useFetch from '../../hooks/useFetch.hook'
import ISearchData from '../../interfaces/searchData'
import ISearchResult from '../../interfaces/searchResult'
import { API_KEY, BASE_API_URL, MOVIE_SEARCH_ENDPOINT } from '../../utils/contants'
import styles from './searchScreen-style'

const SearchScreen: FC = () => {
    const [query, setQuery] = useState<string>("")
    const url = query && `${BASE_API_URL}/${MOVIE_SEARCH_ENDPOINT}/${API_KEY}/${query}`;
    const { data, loading } = useFetch<ISearchData>(url)
    const navigation = useNavigation()

    const handleOnQueryChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setQuery(e.nativeEvent.text)
    }

    const dismissKeyboard = () => {
        Keyboard.dismiss()
    }

    const handleOnSearchInputFocus = () => {

    }

    const handleOnItemPress = (item: ISearchResult) => {
        
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.searchContainer}>
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
                renderItem={({ item }) => <MovieListItem item={item} onPress={handleOnItemPress}/>}
                keyExtractor={(item) => item.id} />
        </SafeAreaView>

    )
}

export default SearchScreen