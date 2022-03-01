import React from 'react'
import { FlatList } from 'react-native';
import ISearchResult from '../../interfaces/searchResult';
import MovieListItem from '../movieList/movieListItem';
import styles from './flatList-styles'

type Props = {
    data: ISearchResult[],
    onScroll?(): void,
    onPress(item: ISearchResult): void
};

const ListComponent = ({ data, onScroll, onPress }: Props) => {
    return (
        <FlatList
            onScroll={onScroll}
            contentContainerStyle={styles.flatListContainer}
            data={data}
            renderItem={({ item }) => <MovieListItem item={item} onPress={onPress} />}
            keyExtractor={(item) => item.id} />

    )
}

export default ListComponent