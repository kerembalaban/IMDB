import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { FC } from "react";
import { HomeScreen, MovieDetailScreen } from '../pages'

type HomeStackParams = {
    Home: undefined;
    Detail: undefined;
};

const HomeStack = createNativeStackNavigator<HomeStackParams>()

const HomeNavigator: FC = () => {
    return (
        <HomeStack.Navigator screenOptions={{
            headerShown: false
        }}>
            <HomeStack.Screen name="Home" component={HomeScreen} />
            <HomeStack.Screen name="Detail" component={MovieDetailScreen} />
        </HomeStack.Navigator>
    )
}

export default HomeNavigator