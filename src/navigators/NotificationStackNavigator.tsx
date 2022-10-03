
//@ts-nocheck
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Information from "../views/Root/Screen/Home/Information";
import InformationDetail from "../views/Root/Screen/Home/InformationDetail";
const Stack = createNativeStackNavigator<Routers>();
// const Tab = createNativeStackNavigator<Routers>();
function NotificationStackNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Information" component={Information} />
            <Stack.Screen name="InformationDetail" component={InformationDetail} />

        </Stack.Navigator>
    );
}

export default NotificationStackNavigator; 
