



import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../views/Root/Screen/Home/Home";
import BiddingList from "../views/Root/Screen/Profile/BiddingList";
import SignUpBiding from "../views/Root/Screen/Profile/SignUpBiding";
import Confirm from "../views/Root/Screen/Profile/Confirm";

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
      <Tab.Screen name="BiddingList" component={BiddingList} />
      <Tab.Screen name="SignUpBiding" component={SignUpBiding} />
      <Tab.Screen name="Confirm" component={Confirm} />
    </Stack.Navigator>
  );
}

export default RootStackNavigator; 
