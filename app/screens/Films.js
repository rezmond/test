import React from 'react';
import PropTypes from 'prop-types';

import { FilmsList } from '../components';
import styles from './styles';

export default function Films() {
  return (
    <FilmsList style={styles.container} />
  );
}
