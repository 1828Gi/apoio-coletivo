import React from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles.js';

export default function Tela({ children }) {
  return <ScrollView style={styles.container}>{children}</ScrollView>;
}

Tela.propTypes = {
  children: PropTypes.node,
};
