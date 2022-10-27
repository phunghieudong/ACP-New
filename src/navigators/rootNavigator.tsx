// Xem thêm: https://reactnavigation.org/docs/typescript
//@ts-nocheck
import * as React from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import ExampleScreen from '../views/example';
// import HomeScreen from '../views/home';
import RootStackNavigator from "./RootStackNavigator";
import AuthNavigator from "./AuthNavigator";
import { LocalStorage } from "../utils/LocalStorage";
import { setWelcome } from "../store/reducers/globalState";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Stack = createNativeStackNavigator<Routers>();

function RootNavigator() {
    const [checklogin, setChecklogin] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    //check
    React.useEffect(() => {
        getDataWelcome();
    }, []);

    const getDataWelcome = async () => {
        const res: any = await LocalStorage.getToken();
        console.log(res);
        // check xem token có oki không

        !!res ? setChecklogin(true) : setChecklogin(false);
        setLoading(false);
    };
    return (
        <NavigationContainer>
            {!loading && (
                <Stack.Navigator
                    screenOptions={{ headerShown: false, gestureEnabled: true }}
                >
                    {!checklogin && (
                        <Stack.Screen name="Home" component={AuthNavigator} />
                    )}
                    {checklogin && (
                        <>
                            <Stack.Screen
                                name="Auth"
                                component={RootStackNavigator}
                            />
                            <Stack.Screen
                                name="Home"
                                component={AuthNavigator}
                            />
                        </>
                    )}
                    {/* <Stack.Screen name="Home" component={AuthNavigator} /> */}
                </Stack.Navigator>
            )}
        </NavigationContainer>
    );
}

export default RootNavigator;
