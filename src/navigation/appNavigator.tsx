import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screen/LoginScreen';
import RegisterScreen from '../screen/RegisterScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Inicio Usuario ">
      <Stack.Screen name="Inicio Usuario" component={LoginScreen} />
      <Stack.Screen name="Registro Usuario" component={RegisterScreen} />
    </Stack.Navigator>
  );
}
