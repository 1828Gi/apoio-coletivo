import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BemVindo from "./src/telas/BemVindo";
import Albergues from "./src/telas/Albergues";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BemVindo">
        <Stack.Screen name="BemVindo" component={BemVindo} />
        <Stack.Screen name="Albergues" component={Albergues} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}