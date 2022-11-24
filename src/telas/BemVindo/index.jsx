import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, Text, Pressable } from 'react-native';
import Toast from 'react-native-root-toast';
import { BotãoApoioColetivo } from '../../componentes';
import logoApertoMão from './img/logo-aperto-de-mao.png';
import { styles } from './styles';

const botõesApoioColetivo = [
  {
    paraTela: 'BomPrato',
    imagem: require('./img/icone-faca-garfo-branco.png'),
    texto: 'Bom Prato',
  },
  {
    paraTela: 'Albergues',
    imagem: require('./img/icone-albergue-icone-branco.png'),
    texto: 'Albergues',
  },
  {
    paraTela: 'Saúde',
    imagem: require('./img/icone-saude-branco.png'),
    texto: 'Saúde',
  },
  {
    paraTela: 'OutrosServiços',
    imagem: require('./img/icone-outros-servicos-branco.png'),
    texto: 'Outros serviços',
  },
];

export default function BemVindo({ navigation }) {
  const aoPressionarTela = () => Toast.show('Selecione alguma categoria abaixo para começar');

  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />

      <Pressable onPress={aoPressionarTela}>
        <Text style={styles.título}>Apoio Coletivo</Text>

        <Image style={styles.logoImagem} source={logoApertoMão} />

        {botõesApoioColetivo.map(({ paraTela, imagem, texto }) => (
          <BotãoApoioColetivo
            key={texto}
            aoPressionar={() => navigation.navigate(paraTela)}
            imgOrigem={imagem}
            styles={{
              botão: styles.botão,
              botãoContainer: styles.botãoContainer,
              botãoImagem: styles.botãoImagem,
            }}>
            <Text style={styles.botãoTexto}>{texto}</Text>
          </BotãoApoioColetivo>
        ))}
      </Pressable>
    </ScrollView>
  );
}
