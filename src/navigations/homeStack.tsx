import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { FC } from "react";
import { HomeScreen, MovieDetailScreen } from '../pages'
import { HomeStackParams } from "../types/navigations";

const HomeStack = createNativeStackNavigator<HomeStackParams>()

const HomeNavigator: FC = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Home" component={HomeScreen} options={{
                title: "My Favorites"
            }}/>
            <HomeStack.Screen name="MovieDetail" component={MovieDetailScreen}
                options={({ route }) => ({ title: route.params.movie.title })} />
        </HomeStack.Navigator>
    )
}

export default HomeNavigator