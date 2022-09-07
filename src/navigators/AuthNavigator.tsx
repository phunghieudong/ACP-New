
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../views/home';
const Stack = createNativeStackNavigator<Routers>();

function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}

    >
      <Stack.Screen name="HomeScreeen" component={HomeScreen} />

    </Stack.Navigator>
  );
}

export default AuthNavigator; 
