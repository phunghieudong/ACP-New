//@ts-nocheck
import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SigninScreen from "../views/Auth/Screen/Signin";
import ForgotPassword from "../views/Auth/Screen/ForgotPassword";
import SplashScreen from "../views/Auth/Screen/SplashScreen";
import OTPScreen from "../views/Auth/Screen/OTP";
import RootStackNavigator from "./RootStackNavigator";

const Stack = createNativeStackNavigator<Routers>();

function AuthNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                options={{
                    tabBarStyle: { display: "none" },
                }}
                name="SigninScreen"
                component={SigninScreen}
            />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            {/* <Stack.Screen name="SplashScreen" component={SplashScreen} /> */}
            <Stack.Screen name="OTP" component={OTPScreen} />
            <Stack.Screen name="Auth" component={RootStackNavigator} />
        </Stack.Navigator>
    );
}

export default AuthNavigator;
