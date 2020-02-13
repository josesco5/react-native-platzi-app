/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  Text,
} from 'react-native';

import Home from './src/screens/containers/home';

const App: () => React$Node = () => {
  return (
    <Home>
      <Text>Header</Text>
      <Text>Buscador</Text>
      <Text>Categorías</Text>
      <Text>Sugerencias</Text>
    </Home>
  );
};

export default App;
