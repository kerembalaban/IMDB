/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AppProvider from './src/contexApi/AppProvider';

const App = () => {

  return (
    <AppProvider>
      <NavigationContainer>
          <SplashNavigators />
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
