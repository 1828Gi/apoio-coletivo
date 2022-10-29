import { StatusBar } from 'expo-status-bar';
import { Alert, Image, TouchableHighlight, ScrollView, Text, View } from 'react-native';
import { styles } from './styles';

export default function BemVindo({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.título}>Apoio Coletivo</Text>
      <Image style={styles.img} source={require('./img/aperto-de-mao.jpg')} />
      <TouchableHighlight
        underlayColor="#f7b142"
        onPress={() => navigation.navigate('BomPrato')}
        style={styles.botão}>
        <View style={styles.botãoContainer}>
          <Image style={styles.botãoImagem} source={require('./img/icone-faca-garfo-branco.png')} />
          <Text style={styles.botãoTexto}>Bom Prato</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="#f7b142"
        onPress={() => navigation.navigate('Albergues')}
        style={styles.botão}>
        <View style={styles.botãoContainer}>
          <Image style={styles.botãoImagem} source={require('./img/albergue-icone-branco.png')} />
          <Text style={styles.botãoTexto}>Albergues</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="#f7b142"
        onPress={() => navigation.navigate('Saude')}
        style={styles.botão}>
        <View style={styles.botãoContainer}>
          <Image
            style={[styles.botãoImagem, styles.botãoImagemAjuste]}
            source={require('./img/icone-saude-branco.png')}
          />
          <Text style={styles.botãoTexto}>Saúde</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="#f7b142"
        onPress={() => Alert.alert('furutamente vai navegar para Outros serviços, amém')}
        style={styles.botão}>
        <View style={styles.botãoContainer}>
          <Image
            style={[styles.botãoImagem, styles.botãoImagemAjuste]}
            source={require('./img/outros-servicos-branco.png')}
          />
          <Text style={styles.botãoTexto}>Outros serviços</Text>
        </View>
      </TouchableHighlight>
    </ScrollView>
  );
}
