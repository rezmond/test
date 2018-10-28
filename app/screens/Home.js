import React from 'react';
import PropTypes from 'prop-types';
import { View, Platform } from 'react-native';

import Expo from 'expo';
import {
  Button,
  Container,
  Text,
  Spinner,
} from 'native-base';

import styles from './styles';

export default class Home extends React.PureComponent {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  static navigationOptions = {
    title: 'Home',
  };

  state = { isLoading: true };

  componentWillMount() {
    Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    }).then(() => {
      this.setState({ isLoading: false });
    });
  }

  _handleGoToFilmsPress = () => {
    const { navigation } = this.props;
    navigation.navigate('Films');
  };

  render() {
    const { isLoading } = this.state;
    if (isLoading) {
      return <Spinner />;
    }

    return (
      <Container>
        <View style={styles.homeContent}>
          <View style={styles.homeContentLayout}>
            <Button
              success={Platform.OS === 'android'}
              onPress={this._handleGoToFilmsPress}
            >
              <Text>Go to films list</Text>
            </Button>
          </View>
        </View>
      </Container>
    );
  }
}
