import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';

import { connect } from 'react-redux';

import { getFilmsList } from './reducer';
import Separator from './Separator';
import ListItem from './ListItem';

function mapStateToProps(state, props) {
  const filmsList = getFilmsList(state);
  return {
    items: filmsList,
  };
}

function keyExtractor(item) {
  return item.id;
}

@connect(mapStateToProps)
class FilmsList extends React.PureComponent {
  static propTypes={
    style: PropTypes.number,
    navigation: PropTypes.object.isRequired,
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  _handleItemPress = (id) => {
    const { navigation } = this.props;
    navigation.navigate('Film', { id });
  };

  _renderItem = ({ item }) => {
    const { onPressFilm } = this.props;
    return (
      <ListItem
        {...item}
        onPress={this._handleItemPress}
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
