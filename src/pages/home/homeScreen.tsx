
import { useNavigation } from '@react-navigation/native'
import { NativeStackHeaderProps, NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { FC, useContext } from 'react'
import { SafeAreaView } from 'react-native'
import { ListComponent } from '../../components'
import { AppContext } from '../../contexApi/appContext'
import ISearchResult from '../../interfaces/searchResult'
import styles from './homeScreen-style'

const HomeScreen: FC = () => {
    const { favorites } = useContext(AppContext);
    const navigation = useNavigation()

    const handleOnItemPress = (movie: ISearchResult) => {
        navigation.navigate("MovieDetail", { movie: movie })
    }

    return (
        <SafeAreaView style={styles.container}>
            <ListComponent 
                data={favorites} 
                onPress={handleOnItemPress}/>
        </SafeAreaView>
    )
}

export default HomeScreen