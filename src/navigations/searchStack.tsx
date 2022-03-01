import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { FC } from "react";
import { MovieDetailScreen, SearchScreen } from '../pages'
import { SearchStackParams } from "../types/navigations";

const SearchStack = createNativeStackNavigator<SearchStackParams>()

const SearchNavigator: FC = () => {
    return (
        <SearchStack.Navigator>
            <SearchStack.Screen name="Search" component={SearchScreen} />
            <SearchStack.Screen name="MovieDetail" component={MovieDetailScreen}
                options={({ route }) => ({ title: route.params.movie.title })} />
        </SearchStack.Navigator>
    )
}

export default SearchNavigator