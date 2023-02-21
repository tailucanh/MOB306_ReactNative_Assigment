import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HelloScreen from "./Screens/HelloScreen";
import BottomNav from "./Components/BottomNav";
import loadFonts from "./Components/MyCustomFonts";
import DetailsProfile from "./Screens/DetailsProfile";
import ScreenAdd from "./Screens/ScreenAdd";
import ShowItem from "./Screens/ShowItem";
import Manage from "./Screens/Manage";
const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    loadFonts();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HelloScreen">
        <Stack.Screen
          name="HelloScreen"
          component={HelloScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BottomNav"
          component={BottomNav}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailsProfile"
          component={DetailsProfile}
          options={{
            headerShown: false,
            presentation: "card",
          }}
        />
        <Stack.Screen
          name="ScreenAdd"
          component={ScreenAdd}
          options={{
            headerShown: false,
            presentation: "card",
          }}
        />
        <Stack.Screen
          name="ScreenShowItem"
          component={ShowItem}
          options={{
            headerShown: true,
            presentation: "card",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
