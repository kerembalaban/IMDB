
import { useNavigation } from '@react-navigation/native'
import React, { FC, useContext, useState } from 'react'
import { Keyboard, NativeSyntheticEvent, TextInput, TextInputChangeEventData, View, SafeAreaView, Text } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay/lib'
import { ListComponent, SearchBar } from '../../components'
import ErrorView from '../../components/errorView/errorView'
import { AppContext } from '../../contexApi/appContext'
import useFetch from '../../hooks/useFetch.hook'
import ISearchData from '../../interfaces/searchData'
import ISearchResult from '../../interfaces/searchResult'
import { API_KEY, BASE_API_URL, MOVIE_SEARCH_ENDPOINT } from '../../utils/contants'
import styles from './searchScreen-style'

const SearchScreen: FC = () => {
    const [query, setQuery] = useState<string>("")
    const [data, setData] = useState<ISearchData|null>()
    const [error, setError] = useState<string|null>()
    const [loading, setLoading] = useState<boolean>(false)
    const navigation = useNavigation()
    const { recents } = useContext(AppContext);
    const [focused, setFocused] = useState<boolean>(false)
    
    const handleOnQueryChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        setQuery(e.nativeEvent.text)
    }

    const dismissKeyboard = () => {
        Keyboard.dismiss()
    }

    const searchData = () => {
        const url = `${BASE_API_URL}/${MOVIE_SEARCH_ENDPOINT}/${API_KEY}/${query}`;
        setLoading(true)
        fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.errorMessage) {
                setError(data.errorMessage)
                setData(null)
            } else {
                setData(data)
                setError(null)
            }
            setLoading(false)
        })
        .catch(error => {
            setError(error)
            setData(null)
            setLoading(false)
        })
    }

    const handleOnSearchInputFocus = () => {
        setFocused(true)
    }

    const handleOnItemPress = (movie: ISearchResult) => {
        navigation.navigate("MovieDetail", { movie: movie })
    }

    const handleOnCancel = () => {
        setQuery("")
        setData(null)
        setFocused(false)
        dismissKeyboard()
    }

    return (
        <View style={styles.container}>
            <Spinner
                visible={loading}
                overlayColor={'rgba(51, 49, 62, 0.95)'} />
            <SearchBar
                value={query}
                onSubmit={searchData}
                onFocus={handleOnSearchInputFocus}
                onChange={handleOnQueryChange}
                onCancel={handleOnCancel} />
            {
                error && focused ?
                <ErrorView error={error} onPress={searchData} /> 
                : null
            }
            {
                // if search bar is focued, recent search listed
                focused && query.length == 0 && recents.length > 0 &&
                <>
                    <Text style={styles.recentTitle}>Recents</Text>
                    <ListComponent
                        data={recents}
                        onPress={handleOnItemPress}
                        onScroll={dismissKeyboard} />
                </>
            }
            {
                data && query.length > 0 &&
                <ListComponent
                    data={data && data.results}
                    onPress={handleOnItemPress}
                    onScroll={dismissKeyboard} />
            }

        </View>
    )
}

export default SearchScreen