import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import ISearchResult from '../../interfaces/searchResult';
import ImageComponent from '../image/image';
import styles from './movieListItem-styles'

type Props = {
    item: ISearchResult,
    onPress(item: ISearchResult): void
};

const MovieListItem = ({ item, onPress }: Props) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => onPress(item)}>
            {/* Movie Image */}
            <ImageComponent uri={item.image} style={styles.image} />
           
            {/* Movie Information */}
            <View style={styles.information}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default MovieListItem