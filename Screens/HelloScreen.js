import {
  View,
  Text,
  Button,
  StyleSheet,
  Pressable,
  Image,
  ImageBackground,
  StatusBar,
  TouchableHighlight,
} from "react-native";
import React, { useState, useEffect } from "react";
import { styles } from "../Components/Styles/HelloScreenStyle";
import loadFonts from "../Components/MyCustomFonts";

export default function HelloScreen(props) {
  const navigation = props.navigation;
  useEffect(() => {
    loadFonts();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        barStyle={"light-content"}
        translucent={true}
      />
      <ImageBackground
        source={require("../assets/images/background_2.jpg")}
        resizeMode="cover"
        style={styles.imgBackground}
      >
        <View>
          <Text style={styles.textTitle}>QUẢN LÝ CỬA HÀNG</Text>
          <Text style={styles.textContent}>Assigment Mob306 ReactNative</Text>
        </View>
        <Pressable
          android_ripple={{
            color: "rgba(141, 141, 141, 0.8)",
            borderRadius: 15,
          }}
          style={styles.button}
          onPress={() => navigation.navigate("BottomNav")}
        >
          <Text style={styles.textButton}>Bắt đầu</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
}
