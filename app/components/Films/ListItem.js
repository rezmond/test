import React from 'react';
import PropTypes from 'prop-types';
import {
  TouchableHighlight,
  Text,
} from 'react-native';

import styles from './styles';

export default class ListItem extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
  };

  _handlePress = () => {
    const { id, onPress } = this.props;
    onPress(id);
  };

  render() {
    const { title } = this.props;
    return (
      <TouchableHighlight
        underlayColor={styles.$underlayColor}
        style={styles.listItem}
        onPress={this._handlePress}
      >
        <Text style={styles.listItemText}>{title}</Text>
      </TouchableHighlight>
    );
  }
}
