import React from 'react';
import PropTypes from 'prop-types';
import {
  FlatList,
  View,
  Text,
  Image,
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { onFilmOpen } from './actions';
import { getFilmsList } from './reducer';
import styles from './styles';

function mapStateToProps(state) {
  const filmsList = getFilmsList(state);
  return {
    items: filmsList,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    onPressFilm: onFilmOpen,
  }, dispatch);
}

function keyExtractor(item) {
  return item.id;
}

@connect(mapStateToProps, mapDispatchToProps)
class FilmsList extends React.PureComponent {
  static propTypes={
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    onPressFilm: PropTypes.func.isRequired,
  };

  _renderItem = ({ item }) => {
    const { onPressFilm } = this.props;
    return (
      <ListItem
        {...item}
        onPress={onPressFilm}
      />
    );
  };

  render() {
    const { items } = this.props;
    return (
      <FlatList
        data={items}
        renderItem={this._renderItem}
        keyExtractor={keyExtractor}
      />
    );
  }
}

export default FilmsList;
