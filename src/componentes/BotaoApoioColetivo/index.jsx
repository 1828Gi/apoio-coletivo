import React from 'react';
import { Image, TouchableHighlight, View } from 'react-native';
import PropTypes from 'prop-types';
import { cor } from '../../tema';

export default function BotãoApoioColetivo({ aoPressionar, imgOrigem, children, styles }) {
  const { botão, botãoContainer, botãoImagem } = styles;

  return (
    <TouchableHighlight underlayColor={cor.secundária} onPress={aoPressionar} style={botão}>
      <View style={botãoContainer}>
        <Image style={botãoImagem} source={imgOrigem} />
        {children}
      </View>
    </TouchableHighlight>
  );
}

BotãoApoioColetivo.propTypes = {
  aoPressionar: PropTypes.func,
  imgOrigem: PropTypes.any,
  children: PropTypes.node.isRequired,
  styles: PropTypes.shape({
    botão: PropTypes.object,
    botãoContainer: PropTypes.object,
    botãoImagem: PropTypes.object,
  }),
};
