import React from "react";
import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { styles } from "../Components/Styles/ManagerStyle";
import Home from "../Screens/Home";
import MyProfile from "../Screens/MyProfile";
import Manage from "../Screens/Manage";

const Tab = createBottomTabNavigator();

export default function BottomNav(props) {
  const navigation = props.navigation;
  const getTabBarVisible = (route) => {
    const params = route.params;
    if (params) {
      if (params.tabBarVisible === false) {
        return false;
      }
    }
    return true;
  };
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#2a3352",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: 60,
          borderTopWidth: 0,
          borderTopColor: "transparent",
          elevation: 5,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#2a3352",
              }}
            >
              <Image
                source={require("../assets/images/ic_home.png")}
                resizeMode="contain"
                style={{
                  width: 22,
                  height: 22,
                  tintColor: focused ? "#4870FF" : "#8E8E93",
                }}
              />
              <Text
                style={{
                  fontSize: 13,
                  color: focused ? "#4870FF" : "#8E8E93",
                }}
              >
                Trang chủ
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={MyProfile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../assets/images/ic_information.png")}
                resizeMode="contain"
                style={{
                  width: 22,
                  height: 22,
                  tintColor: focused ? "#4870FF" : "#8E8E93",
                }}
              />
              <Text
                style={{
                  fontSize: 13,
                  color: focused ? "#4870FF" : "#8E8E93",
                }}
              >
                Thông tin
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Manage"
        component={Manage}
        options={({ route }) => ({
          tabBarVisible: getTabBarVisible(route),
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Image
                source={require("../assets/images/ic_store.png")}
                resizeMode="contain"
                style={{
                  width: 22,
                  height: 22,
                  tintColor: focused ? "#4870FF" : "#8E8E93",
                }}
              />
              <Text
                style={{
                  fontSize: 13,
                  color: focused ? "#4870FF" : "#8E8E93",
                }}
              >
                Quản lý
              </Text>
            </View>
          ),
        })}
      />
    </Tab.Navigator>
  );
}
