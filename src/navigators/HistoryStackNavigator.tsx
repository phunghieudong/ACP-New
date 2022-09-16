
//@ts-nocheck
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import History from "../views/Root/Screen/Home/History";
import HistoryDetail from "../views/Root/Screen/Home/HistoryDetail";
const Stack = createNativeStackNavigator<Routers>();
// const Tab = createNativeStackNavigator<Routers>();
function HistoryStackNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="History" component={History} />
            <Stack.Screen name="HistoryDetail" component={HistoryDetail} />

        </Stack.Navigator>
    );
}

export default HistoryStackNavigator; 
