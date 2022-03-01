
import React, { FC, useContext } from 'react'
import { FlatList, SafeAreaView, Text } from 'react-native'
import { MovieListItem } from '../../components'
import { AppContext } from '../../contexApi/appContext'
import ISearchResult from '../../interfaces/searchResult'
import styles from './homeScreen-style'

const HomeScreen: FC = () => {
    const { favorites } = useContext(AppContext);

    const handleOnItemPress = (item: ISearchResult) => {
        console.log(item)
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                contentContainerStyle={styles.flatListContainer}
                data={favorites}
                renderItem={({ item }) => <MovieListItem item={item} onPress={handleOnItemPress} />}
                keyExtractor={(item) => item.id} />
        </SafeAreaView>
    )
}

export default HomeScreen