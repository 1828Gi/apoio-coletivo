import React from 'react';
import PropTypes from 'prop-types';
import { Image, Pressable, Text } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export default function CardsOutrosServiços({ serviçosProps }) {
  const navigation = useNavigation();

  const aoPressionarCard = ({ unidades }) => navigation.navigate('CardsBase', unidades);

  const imagemSrc = {
    pop: require('./img/pop.png'),
    cras: require('./img/cras.png'),
  };

  return serviçosProps?.map((serviço, index) => (
    <Pressable
      key={index}
      style={[styles.cardServiços, { backgroundColor: serviço.planoDeFundo}]}
      onPress={() => aoPressionarCard(serviço)}
    >
      <Image style={styles.cardImagem} source={imagemSrc[serviço.imagem]}/>
      <Text style={styles.cardDescrição}>{serviço.descrição}</Text>
    </Pressable>
  ));
}

CardsOutrosServiços.propTypes = {
  serviçosProps: PropTypes.array,
};
