import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootSiblingParent } from 'react-native-root-siblings';
import { Albergues, BemVindo, BomPrato, Saúde, OutrosServiços } from './src/telas';
import { cor } from './src/tema';
import { CardsBase } from './src/componentes';

const Stack = createNativeStackNavigator();

const opçõesDaTela = {
  geral: {
    title: '',
    headerShadowVisible: false,
    headerStyle: {
      backgroundColor: cor.planoDeFundo,
    },
    headerTintColor: cor.secundária,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
  bemVindo: {
    headerShown: false,
  },
};

export default function App() {
  return (
    <RootSiblingParent>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="BemVindo" screenOptions={opçõesDaTela.geral}>
          <Stack.Screen name="BemVindo" component={BemVindo} options={opçõesDaTela.bemVindo} />
          <Stack.Screen name="Albergues" component={Albergues} />
          <Stack.Screen name="BomPrato" component={BomPrato} />
          <Stack.Screen name="Saúde" component={Saúde} />
          <Stack.Screen name="OutrosServiços" component={OutrosServiços} />
          <Stack.Screen name="CardsBase" component={CardsBase} />
        </Stack.Navigator>
      </NavigationContainer>
    </RootSiblingParent>
  );
}
