import React from 'react';
import { Provider } from 'react-redux';

import EStyleSheet from 'react-native-extended-stylesheet';
import { createStackNavigator } from 'react-navigation';

import store from './store';
import { loadData } from './actions';
import {
  Films as FilmsScreen,
  Home as HomeScreen,
} from './screens';

EStyleSheet.build({
  $border: '#E2E2E2',
});

const AppWithNavigation = createStackNavigator({
  Home: {
    screen: HomeScreen,
    title: 'Home',
  },
  Films: FilmsScreen,
});

export default class App extends React.Component {
  componentDidMount() {
    store.dispatch(loadData()).then(() => console.log("ololo"));
  }

  render() {
    return (
      <Provider store={store}>
        <AppWithNavigation />
      </Provider>
    );
  }
}
