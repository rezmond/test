import React from 'react';

import { FilmsList } from '../components';
import styles from './styles';

export default function Films() {
  return (
    <FilmsList style={styles.container} />
  );
}

Films.navigationOptions = {
  title: 'Films',
};
