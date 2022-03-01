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
import AppProvider from './src/contexApi/appContext';

const App: FC = () => {

  return (
    <AppProvider>
      <NavigationContainer onReady={() => RNBootSplash.hide()}>
        <BottomTabNavigator />
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
