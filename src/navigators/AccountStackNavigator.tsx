
//@ts-nocheck
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../views/Root/Screen/Home/Home";
import BiddingList from "../views/Root/Screen/Profile/BiddingList";
import SignUpBiding from "../views/Root/Screen/Profile/SignUpBiding";
import Confirm from "../views/Root/Screen/Profile/Confirm";
import ChangePassword from "../views/Root/Screen/Home/ChangePassword";
import UpdateAccount from "../views/Root/Screen/Home/UpdateAccount";
import Account from "../views/Root/Screen/Home/Account";

// chổ này là cái tab
const Stack = createNativeStackNavigator<Routers>();
// const Tab = createNativeStackNavigator<Routers>();
function AccountStackNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,

            }}
        >
            <Stack.Screen name="Account" component={Account} />
            <Stack.Screen name="UpdateAccount" component={UpdateAccount} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} />
        </Stack.Navigator>
    );
}

export default AccountStackNavigator; 
