
//@ts-nocheck
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SigninScreeen from '../views/Auth/Screen/Signin';
import ForgotPassword from '../views/Auth/Screen/ForgotPassword';
import SplashScreen from '../views/Auth/Screen/SplashScreen';
import OTPScreen from '../views/Auth/Screen/OTP';
const Stack = createNativeStackNavigator<Routers>();

function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,

      }}
    >
      <Stack.Screen
    
        name="SigninScreeen" component={SigninScreeen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="OTP" component={OTPScreen} />
    </Stack.Navigator>
  );
}

export default AuthNavigator; 
