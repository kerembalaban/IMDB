import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { FC } from "react";
import { MovieDetailScreen } from "../pages";
import HomeNavigator from "./homeStack";
import SearchNavigator from "./searchStack";

type BottomTabParams = {
    HomeStack: undefined;
    SearchStack: undefined;
};

const BottomTab = createBottomTabNavigator<BottomTabParams>()
const BottomTabNavigator: FC = () => {
    return (
        <BottomTab.Navigator screenOptions={{
            headerShown: false
        }}>
            <BottomTab.Screen name="HomeStack" component={HomeNavigator} options={{
                title: "My Favorites"
            }}/>
            <BottomTab.Screen name="SearchStack" component={SearchNavigator} options={{
                title: "Search"
            }}/>
        </BottomTab.Navigator>
    )
}

export default BottomTabNavigator