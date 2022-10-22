import { StatusBar } from 'expo-status-bar';
import { Alert, Image, TouchableHighlight, ScrollView, Text } from 'react-native';
import { styles } from './styles';

export default function BemVindo({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="auto" />
      <Image style={styles.img} source={require('./img/aperto-de-mao.jpg')} />
      <TouchableHighlight
        underlayColor="#f7b142"
        onPress={() => navigation.navigate('Albergues')}
        style={styles.button}>
        <Text style={styles.text}>Albergues</Text>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="#f7b142"
        onPress={() => navigation.navigate('Restaurantes')}
        style={styles.button}>
        <Text style={styles.text}>Restaurantes</Text>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="#f7b142"
        onPress={() => navigation.navigate('Saude')}
        style={styles.button}>
        <Text style={styles.text}>Saúde</Text>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="#f7b142"
        onPress={() => Alert.alert('furutamente vai navegar para Outros serviços, amém')}
        style={styles.button}>
        <Text style={styles.text}>Outros serviços</Text>
      </TouchableHighlight>
    </ScrollView>
  );
}
