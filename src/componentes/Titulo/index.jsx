import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles.js';

export default function Título({ children }) {
  return <Text style={styles.título}>{children}</Text>;
}

Título.propTypes = {
  children: PropTypes.string,
};
