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

@connect(mapStateToProps, mapDispatchToProps)
class Film extends React.PureComponent {
  static propTypes={
    navigation: PropTypes.object,
    openFilm: PropTypes.func.isRequired,
    title: PropTypes.string,
    director: PropTypes.string,
    producer: PropTypes.string,
    rtScore: PropTypes.string,
    releaseDate: PropTypes.string,
    description: PropTypes.string,
  };

  constructor(props) {
    super(props);

    const { navigation } = props;
    this.state = {
      isLoading: true,
    };
    this.didBlurSubscription = navigation.addListener('didFocus', this._openFilm);
  }

  componentWillUnmount() {
    this.didBlurSubscription.remove();
  }

  _openFilm = async () => {
    const { navigation, openFilm } = this.props;
    await openFilm(navigation.getParam('id'));

    this.setState({
      isLoading: false,
    });
  }

  render() {
    const {
      title,
      description,
      director,
      producer,
      releaseDate,
      rtScore,
    } = this.props;
    const { isLoading } = this.state;

    if (isLoading) {
      return <Spinner />;
    }

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
