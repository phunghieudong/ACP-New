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

const Stack = createNativeStackNavigator<Routers>();

function RootNavigator() {
  // const [login, setLogin] = useState(true);

  // useEffect(() => {
  //   if (!login) {
  //     Alert.alert("Thông báo", "Phiên đăng nhập đã hết hạn", [
  //       {
  //         text: "Đồng ý",
  //         onPress: async () => {
  //           await dispatch(logout());
  //           await dispatch(getPassword(""));
  //         },
  //       },
  //     ]);
  //     eventManager.unsubscribe();
  //   }
  // }, [login]);
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       await Splash.preventAutoHideAsync();
  //       await dispatch(fetchLocalUser());
  //       await dispatch(fetchPassword());
  //       await new Promise((resolve) => setTimeout(resolve, 2000));
  //     } catch (e) {
  //       console.warn(e);
  //     } finally {
  //       setAppIsReady(true);
  //     }
  //   })();
  // }, [dispatch]);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false, gestureEnabled: true }}
      >
        {/* <Stack.Screen name="HomeScreeen" component={HomeScreen} />
        <Stack.Screen name="ExampleScreen" component={ExampleScreen} /> */}
        <Stack.Screen name="Home" component={AuthNavigator} />
        <Stack.Screen name="Auth" component={RootStackNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
