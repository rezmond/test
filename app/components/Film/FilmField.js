import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
} from 'native-base';

import styles from './styles';

export default function FilmField({
  title,
  children,
}) {
  return (
    <View style={styles.field}>
      <Text style={styles.fieldHeader}>
        {title}
        :
      </Text>
      <Text>
        {children}
      </Text>
    </View>
  );
}

FilmField.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
