import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import ISearchResult from '../../interfaces/searchResult';
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
            <FastImage
                style={styles.image}
                source={{
                    uri: item.image,
                    priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover}
            />

            <View style={styles.information}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default MovieListItem