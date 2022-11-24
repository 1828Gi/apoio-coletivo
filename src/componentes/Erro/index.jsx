import React from 'react';
import { Pressable, Text } from 'react-native';
import PropTypes from 'prop-types';
import { styles } from './styles';

export default function Carregando({ aoRecarregar }) {
  return (
    <Pressable style={styles.containerErro} onPress={aoRecarregar}>
      <Text style={styles.textoEmojiErro}>:(</Text>
      <Text style={styles.textoErro}>
        {'Ocorreu um erro verifique sua conexão ou tente mais tarde\n\nToque para recarregar'}
      </Text>
    </Pressable>
  );
}

Carregando.propTypes = {
  aoRecarregar: PropTypes.func,
};
