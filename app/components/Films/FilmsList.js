import React from 'react';
import PropTypes from 'prop-types';
import {
  FlatList,
  View,
  Text,
  Image,
} from 'react-native';

import { connect } from 'react-redux';

import { getStateSlice } from './reducer';
import styles from './styles';

function mapStateToProps(state) {
  const stateSlice = getStateSlice(state);
  return {
    items: stateSlice.list,
  };
}

function renderItem({ item }) {
  return <Text>{item.title}</Text>;
}

function keyExtractor(item) {
  return item.id;
}

@connect(mapStateToProps)
class FilmsList extends React.PureComponent {
  static propTypes={
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
  };


  render() {
    const { items } = this.props;
    return (
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    );
  }
}

export default FilmsList;
