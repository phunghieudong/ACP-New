//@ts-nocheck
import React, { useEffect, useState } from "react";
import OneSignal, { DeviceState } from "react-native-onesignal";
import Constants from "expo-constants";
import { Provider as StoreProvider } from "react-redux";
import RootNavigator from "./src/navigators/rootNavigator";
import store from "./src/store";
import { LogBox, Text, View } from "react-native";
import { async } from "rxjs";

LogBox.ignoreAllLogs();

const App = () => {
    async function initOneSignal() {
        await OneSignal.setAppId(Constants.manifest.extra.oneSignalAppId);

        const device = await OneSignal.getDeviceState();

        console.log("---- Device ID: ", device?.userId); // Gửi mã này cho BE
    }

    useEffect(() => {
        initOneSignal();
    }, []);

    return (
        <>
            <StoreProvider store={store}>
                <RootNavigator />
            </StoreProvider>
        </>
    );
};

export default App;
