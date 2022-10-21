import { StatusBar } from 'expo-status-bar';
import { Alert, Pressable, Text, View } from 'react-native';
import { bancoDeDados } from '../../api';

export default function BemVindo({ navigation }) {
  const { restaurantes: [restaurante1, restaurante2] } = bancoDeDados;

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Pressable onPress={() => Alert.alert('furutamente vai navegar para Restaurantes')} style={styles.button}>
        <Text style={styles.text}>Restaurantes</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Albergues")} style={styles.button}>
        <Text style={styles.text}>Albergues</Text>
      </Pressable>
      <Pressable onPress={() => Alert.alert('furutamente vai navegar para Outros serviços')} style={styles.button}>
        <Text style={styles.text}>Outros serviços.</Text>
      </Pressable>
      <Text>{restaurante1.horarioFuncionamento}</Text>
      <Text>{restaurante2.horarioFuncionamento}</Text>
    </View>
  );
}
