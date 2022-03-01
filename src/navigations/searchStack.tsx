import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { FC } from "react";
import { MovieDetailScreen, SearchScreen } from '../pages'

type SearchStackParams = {
    Search: undefined;
    Detail: undefined;
};

const SearchStack = createNativeStackNavigator<SearchStackParams>()

const SearchNavigator: FC = () => {
    return (
        <SearchStack.Navigator screenOptions={{
            headerShown: false
        }}>
            <SearchStack.Screen name="Search" component={SearchScreen} />
            <SearchStack.Screen name="Detail" component={MovieDetailScreen} />
        </SearchStack.Navigator>
    )
}

export default SearchNavigator