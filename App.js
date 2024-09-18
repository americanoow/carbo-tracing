import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/index.js';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#0E90AD" barStyle="light-content"/>
      <Routes/>
    </NavigationContainer>
  );
};
