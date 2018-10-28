import React from 'react';
import PropTypes from 'prop-types';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Card,
  CardItem,
  Contaner,
  Content,
  Body,
  Text,
  Spinner,
} from 'native-base';

import { withDataLoader } from '../../utils';
import { getStateSlice } from './reducer';
import { openFilm as openFilmAction } from './actions';
import FilmField from './FilmField';

function mapStateToProps(state) {
  return getStateSlice(state);
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    openFilm: openFilmAction,
  }, dispatch);
}

function handleLoad(props) {
  const { navigation, openFilm } = props;
  return openFilm(navigation.getParam('id'));
}

@connect(mapStateToProps, mapDispatchToProps)
@withDataLoader(handleLoad)
class Film extends React.PureComponent {
  static propTypes={
    title: PropTypes.string,
    director: PropTypes.string,
    producer: PropTypes.string,
    rtScore: PropTypes.string,
    releaseDate: PropTypes.string,
    description: PropTypes.string,
  };

  render() {
    const {
      title,
      description,
      director,
      producer,
      releaseDate,
      rtScore,
    } = this.props;

    return (
      <Card>
        <CardItem header>
          <Text>
            Film:
            {title}
          </Text>
        </CardItem>
        <CardItem>
          <Body>
            <FilmField title="Director">
              {director}
            </FilmField>
            <FilmField title="Producer">
              {producer}
            </FilmField>
            <FilmField title="Release date">
              {releaseDate}
            </FilmField>
            <FilmField title="Rate score">
              {rtScore}
            </FilmField>
            <FilmField title="Description">
              {description}
            </FilmField>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

export default Film;
