
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SigninScreeen from '../views/Auth/Screen/Signin';
import  ForgotPassword from '../views/Auth/Screen/ForgotPassword';
const Stack = createNativeStackNavigator<Routers>();

function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}

    >
      <Stack.Screen name="SigninScreeen" component={SigninScreeen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
}

export default AuthNavigator; 
