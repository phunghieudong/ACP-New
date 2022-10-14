//@ts-nocheck
import React, { useEffect, useState } from "react";
import OneSignal from "react-native-onesignal";
import Constants from "expo-constants";
import { Provider as StoreProvider } from "react-redux";
import RootNavigator from "./src/navigators/rootNavigator";
import store from "./src/store";
import { LogBox, Text, View } from "react-native";

LogBox.ignoreAllLogs();

const App = () => {
  const [info, setInfo] = useState({});

  function initOneSignal() {
    OneSignal.setAppId(Constants.manifest.extra.oneSignalAppId);

    // OneSignal.promptForPushNotificationsWithUserResponse();

    // //Method for handling notifications received while app in foreground
    // OneSignal.setNotificationWillShowInForegroundHandler(
    //   (notificationReceivedEvent) => {
    //     console.log(
    //       "OneSignal: notification will show in foreground:",
    //       notificationReceivedEvent
    //     );
    //     let notification = notificationReceivedEvent.getNotification();
    //     console.log("notification: ", notification);
    //     const data = notification.additionalData;
    //     console.log("additionalData: ", data);
    //     // Complete with null means don't show a notification.
    //     notificationReceivedEvent.complete(notification);
    //   }
    // );

    // //Method for handling notifications opened
    // OneSignal.setNotificationOpenedHandler((notification) => {
    //   console.log("OneSignal: notification opened:", notification);
    // });
  }

  useEffect(() => {
    initOneSignal();
  }, []);

  return (
    <>
      <StoreProvider store={store}>
        <RootNavigator />
      </StoreProvider>

      <Text style={{ padding: 24 }}>
        {Constants.manifest.extra.oneSignalAppId}
      </Text>
    </>
  );
};

export default App;
