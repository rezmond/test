import React from 'react';

import { FilmsList } from '../components';
import styles from './styles';

export default function Films(props) {
  return (
    <FilmsList style={styles.container} {...props} />
  );
}

Films.navigationOptions = {
  title: 'Films',
};
