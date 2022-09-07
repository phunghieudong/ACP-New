



import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExampleScreen from '../views/example';
const Stack = createNativeStackNavigator<Routers>();
const Tab = createNativeStackNavigator<Routers>();
function RootStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}

    >
      <Tab.Screen name="ExampleScreen" component={ExampleScreen} />

    </Stack.Navigator>
  );
}

export default RootStackNavigator; 
