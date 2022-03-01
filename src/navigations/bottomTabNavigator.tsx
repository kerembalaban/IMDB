import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { FC } from "react";
import HomeNavigator from "./homeStack";
import SearchNavigator from "./searchStack";

type BottomTabParams = {
    HomeStack: undefined;
    SearchStack: undefined;
};

const BottomTab = createBottomTabNavigator<BottomTabParams>()

const BottomTabNavigator: FC = () => {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen name="HomeStack" component={HomeNavigator} />
            <BottomTab.Screen name="SearchStack" component={SearchNavigator} />
        </BottomTab.Navigator>
    )
}

export default BottomTabNavigator