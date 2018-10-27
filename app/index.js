import React from 'react';
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';

import store from './store';
import { loadData } from './actions';
import { FilmsList } from './components';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
