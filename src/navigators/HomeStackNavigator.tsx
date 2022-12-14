//@ts-nocheck
import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../views/Root/Screen/Home/Home";
import BiddingList from "../views/Root/Screen/Profile/BiddingList";
import SignUpBiding from "../views/Root/Screen/Profile/SignUpBiding";
import Confirm from "../views/Root/Screen/Profile/Confirm";
import ConfirmFail from "../views/Root/Screen/Profile/ConfirmFail";
import ChangePassword from "../views/Root/Screen/Home/ChangePassword";
import UpdateAccount from "../views/Root/Screen/Home/UpdateAccount";
import SigninScreen from "../views/Auth/Screen/Signin";
// chổ này là cái tab
const Stack = createNativeStackNavigator<Routers>();
// const Tab = createNativeStackNavigator<Routers>();
function RootStackNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="BiddingList" component={BiddingList} />
            <Stack.Screen name="SignUpBiding" component={SignUpBiding} />
            <Stack.Screen name="Confirm" component={Confirm} />
            <Stack.Screen name="ConfirmFail" component={ConfirmFail} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} />
            <Stack.Screen name="UpdateAccount" component={UpdateAccount} />
            {/* QUen mat khau */}
            <Stack.Screen
                options={{
                    tabBarStyle: { display: "none" },
                }}
                name="SigninScreen"
                component={SigninScreen}
            />
        </Stack.Navigator>
    );
}

export default RootStackNavigator;
