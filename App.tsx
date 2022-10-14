//@ts-nocheck
import React, { useEffect } from "react";
import OneSignal from "react-native-onesignal";
import Constants from "expo-constants";
import { Provider as StoreProvider } from "react-redux";
import RootNavigator from "./src/navigators/rootNavigator";
import store from "./src/store";
import { LogBox, Text } from "react-native";


LogBox.ignoreAllLogs();
const App = () => {
  useEffect(() => {
    OneSignal.setAppId("300d518d-1d40-4a06-8f46-eeb920a7bc52");
  }, []);
  return (
    <>
    
      <StoreProvider store={store}>
        <RootNavigator />
      </StoreProvider>
      <Text>300d518d-1d40-4a06-8f46-eeb920a7bc52</Text>
    </>
  );
};

export default App;
