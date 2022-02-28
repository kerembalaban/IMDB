import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { FC } from "react";
import { HomeScreen, SearchScreen } from '../pages'

type BottomTabParams = {
    Home: undefined;
    Search: undefined;
};

const BottomTab = createBottomTabNavigator<BottomTabParams>()

const BottomTabNavigator: FC = () => {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen name="Home" component={HomeScreen} />
            <BottomTab.Screen name="Search" component={SearchScreen} />
        </BottomTab.Navigator>
    )
}

export default BottomTabNavigator