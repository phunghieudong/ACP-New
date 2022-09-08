// Xem thêm: https://reactnavigation.org/docs/typescript

import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import ExampleScreen from '../views/example';
// import HomeScreen from '../views/home';
import RootStackNavigator from './RootStackNavigator';
import AuthNavigator from "./AuthNavigator";

const Stack = createNativeStackNavigator<Routers>();

function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="HomeScreeen" component={HomeScreen} />
        <Stack.Screen name="ExampleScreen" component={ExampleScreen} /> */}
        
        <Stack.Screen name="Home" component={AuthNavigator} />
        <Stack.Screen name="Auth" component={RootStackNavigator} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator; 
