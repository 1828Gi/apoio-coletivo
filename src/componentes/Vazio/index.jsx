import React from 'react';
import { Pressable, Text } from 'react-native';
import PropTypes from 'prop-types';
import Toast from 'react-native-root-toast';
import { styles } from './styles.js';

export default function Vazio({ texto }) {
  const aoPressionarSemUnidades = () => {
    Toast.show('Por favor verifique sua conexão com a internet e tente novamente mais tarde.');
  };

  return (
    <Pressable style={styles.semUnidades} onPress={aoPressionarSemUnidades}>
      <Text style={styles.semUnidadesTexto}>{texto}</Text>
    </Pressable>
  );
}

Vazio.propTypes = {
  texto: PropTypes.string,
};
