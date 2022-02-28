/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, { FC } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import RNBootSplash from "react-native-bootsplash";
import BottomTabNavigator from './src/navigations/bottomTabNavigator';

const App: FC = () => {

  return (
    <NavigationContainer onReady={() => RNBootSplash.hide()}>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

export default App;
