import React from 'react';
import PropTypes from 'prop-types';
import {
  FlatList,
  View,
  Text,
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { onFilmOpen } from './actions';
import { getFilmsList } from './reducer';
import styles from './styles';
import Separator from './Separator';
import ListItem from './ListItem';

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
    style: PropTypes.number,
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
    const { style, items } = this.props;
    const styleList = [style];
    return (
      <FlatList
        style={styleList}
        data={items}
        renderItem={this._renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={Separator}
      />
    );
  }
}

export default FilmsList;
