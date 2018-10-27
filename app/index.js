import React from 'react';
import { Provider } from 'react-redux';

import EStyleSheet from 'react-native-extended-stylesheet';

import store from './store';
import { loadData } from './actions';
import { FilmsList } from './components';

EStyleSheet.build({
  $border: '#E2E2E2',
});

export default class App extends React.Component {
  componentDidMount() {
    store.dispatch(loadData()).then(() => console.log("ololo"));
  }
  render() {
    return (
      <Provider store={store}>
        <FilmsList />
      </Provider>
    );
  }
}
