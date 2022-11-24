import React from 'react';
import { Image, Text, View } from 'react-native';
import animaçãoApertoMão from '../../imagens/animacao-aperto-de-mao.gif';
import { styles } from './styles';

export default function Carregando() {
  return (
    <View>
      <Image style={styles.imagemCarregando} source={animaçãoApertoMão} />
      <Text style={styles.textoCarregando}>Carregando, por favor aguarde...</Text>
    </View>
  );
}
