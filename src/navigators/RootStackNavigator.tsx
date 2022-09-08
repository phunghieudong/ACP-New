
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeStackNavigator from "./HomeStackNavigator";
import BiddingList from "../views/Root/Screen/Profile/BiddingList";
import SignUpBiding from "../views/Root/Screen/Profile/SignUpBiding";
import Confirm from "../views/Root/Screen/Profile/Confirm";
// chổ này là cái tab
// const Stack = createNativeStackNavigator<Routers>();
const Tab = createNativeStackNavigator<Routers>();
function RootStackNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}

    >
      <Tab.Screen name="AllHome" component={HomeStackNavigator} />


    </Tab.Navigator>
  );
}

export default RootStackNavigator; 
