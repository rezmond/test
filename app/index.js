import React from 'react';
import { Provider } from 'react-redux';

import EStyleSheet from 'react-native-extended-stylesheet';
import { createStackNavigator } from 'react-navigation';

import store from './store';
import {
  Films as FilmsScreen,
  Home as HomeScreen,
  Film as FilmScreen,
} from './screens';

EStyleSheet.build({
  $border: '#E2E2E2',
});

const AppWithNavigation = createStackNavigator({
  Home: HomeScreen,
  Films: FilmsScreen,
  Film: FilmScreen,
});

export default function App() {
  return (
    <Provider store={store}>
      <AppWithNavigation />
    </Provider>
  );
}
