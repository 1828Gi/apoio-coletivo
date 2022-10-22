import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BemVindo from './src/telas/BemVindo';
import Albergues from './src/telas/Albergues';
import Restaurantes from './src/telas/Restaurantes';
import Saude from './src/telas/Saude';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BemVindo">
        <Stack.Screen
          name="BemVindo"
          component={BemVindo}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Albergues" component={Albergues} />
        <Stack.Screen name="Restaurantes" component={Restaurantes} />
        <Stack.Screen name="Saude" component={Saude} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
