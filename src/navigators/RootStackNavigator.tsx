
import * as React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeStackNavigator from "./HomeStackNavigator";
import History from "../views/Root/Screen/Home/History";
import Information from "../views/Root/Screen/Home/Information";
import Account from "../views/Root/Screen/Home/Account";
import SignUpBiding from "../views/Root/Screen/Profile/SignUpBiding";
import Confirm from "../views/Root/Screen/Profile/Confirm";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { width } from '../configs';
// chổ này là cái tab
// const Stack = createNativeStackNavigator<Routers>();
const Tab = createBottomTabNavigator();
function RootStackNavigator() {
  return (
    <Tab.Navigator
      
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#A5C63F',
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          height: 84,
          width: "100%",
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 30,
          paddingHorizontal: 60,
          
        }
      }}
    >
      <Tab.Screen
        name="AllHome"
        
        component={HomeStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Image
                source={require('../../src/assets/images/tab1.png')}
                style={{ width: 20, height: 20, marginRight: 5 }}
              />
            </View>
          ),
          tabBarLabel: ({ }) => (
            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: 15 }}>
              <Text style={{ fontSize: 12, fontWeight: "600", color: '#000000' }}>Đấu thầu</Text>
            </View>
          ),
        }}

      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Image
                source={require('../../src/assets/images/tab2.png')}
                style={{ width: 20, height: 20, marginRight: 5 }}
              />
            </View>
          ),
          tabBarLabel: ({ }) => (
            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: 15 }}>
              <Text style={{ fontSize: 12, fontWeight: "600", color: '#000000' }}>Lịch sử</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Information"
        component={Information}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Image
                source={require('../../src/assets/images/tab3.png')}
                style={{ width: 20, height: 20, marginRight: 5 }}
              />
            </View>
          ),
          tabBarLabel: ({ }) => (
            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: 15 }}>
              <Text style={{ fontSize: 12, fontWeight: "600", color: '#000000' }}>Thông báo</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="account"
        component={Account}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Image
                source={require('../../src/assets/images/tab4.png')}
                style={{ width: 20, height: 20, marginRight: 5 }}
              />
            </View>
          ),
          tabBarLabel: ({ }) => (
            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: 15 }}>
              <Text style={{ fontSize: 12, fontWeight: "600", color: '#000000' }}>Tài khoản</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>



  );
}

export default RootStackNavigator;
{/* <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => <Tabs color={color} route={route.name} tabs={tabs} />,
        tabBarActiveTintColor: appConfig.colors.primary,
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        headerShown: false,
        tabBarButton: (icon: any) => <View style={{ width: width / tabs }}>{icon?.children}</View>,
        tabBarStyle: {
          height: tabState === true ? 60 + insets.bottom : 0,
          opacity: tabState === true ? 1 : 0,
          backgroundColor: '#fff',
        },
      })}>
      <Tab.Screen name="HomeTab" component={HomeNavigator} />
      <Tab.Screen name="User" component={UserNavigator} />
      <Tab.Screen name="SHOPPING" component={ShoppingCartScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="MESS" component={NewsNavigator} />
    </Tab.Navigator> */}
