



import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../views/Root/Screen/Home/Home";
const Stack = createNativeStackNavigator<Routers>();
const Tab = createNativeStackNavigator<Routers>();
function RootStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}

    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />

    </Stack.Navigator>
  );
}

export default RootStackNavigator; 
