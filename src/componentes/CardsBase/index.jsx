import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Alert, Image, Pressable, Text, TouchableHighlight, View } from 'react-native';
import Toast from 'react-native-root-toast';
import íconeChevronDown from '../../imagens/icone-chevron-down-circulo.png';
import íconeChevronUp from '../../imagens/icone-chevron-up-circulo.png';
import íconeGoogleMaps from '../../imagens/icone-google-maps.png';
import { cor } from '../../tema';
import { adicionaAtributosEmElementos } from '../../utils';
import { styles } from './styles';

export default function CardsBase({ unidadesProps, route }) {
  const [unidadesControladas, setUnidadesControladas] = useState(
    adicionaAtributosEmElementos(unidadesProps ?? route?.params, 'cardAberto')
  );

  const aoPressionarMaisInformações = index => {
    setUnidadesControladas(prev =>
      unidadesControladas.map((unidade, i) => ({
        ...unidade,
        cardAberto: i === index && !prev[index].cardAberto,
      }))
    );
  };

  const aoPressionarComoChegar = ({ nome }) => {
    Alert.alert(
      'Implementação para o futuro',
      `No futuro essa ação vai abrir o google maps com a rota para ${nome}`
    );
  };

  const aoPressionarCard = ({ nome }) => {
    Toast.show(`Você pode ver a rota até a unidade ${nome} pressionando o botão "Como chegar`, {
      duration: Toast.durations.LONG,
    });
  };

  return unidadesControladas?.map((unidade, index) => (
    <Pressable key={index} style={styles.cardUnidades} onPress={() => aoPressionarCard(unidade)}>
      <Text style={styles.cardNome}>{unidade.nome}</Text>
      <Text style={styles.cardEndereço}>{unidade.endereço}</Text>
      {unidade.cardAberto && <Text style={styles.cardMaisInformações}>{unidade.informações}</Text>}
      <View style={styles.cardContainerBotões}>
        <TouchableHighlight
          style={styles.cardBotãoInformações}
          underlayColor=""
          onPress={() => aoPressionarMaisInformações(index)}>
          <Text>
            <Image
              style={styles.cardBotãoInformaçõesImagem}
              source={unidade.cardAberto ? íconeChevronUp : íconeChevronDown}
            />
            {unidade.cardAberto ? ' Menos' : ' Mais'} informações
          </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.cardBotãoComoChegar}
          underlayColor={cor.secundária}
          onPress={() => aoPressionarComoChegar(unidade)}>
          <Text style={styles.cardBotãoComoChegarTexto}>
            Como chegar <Image style={styles.cardBotãoComoChegarImagem} source={íconeGoogleMaps} />
          </Text>
        </TouchableHighlight>
      </View>
    </Pressable>
  ));
}

CardsBase.propTypes = {
  unidadesProps: PropTypes.array,
};
