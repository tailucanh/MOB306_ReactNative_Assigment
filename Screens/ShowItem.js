import {
  View,
  Text,
  Button,
  StyleSheet,
  Pressable,
  Image,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from "react-native";
import { useEffect, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
export default function ShowItem(props) {
  const navigation = props.navigation;
  const showItem = props.route.params?.item;

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Chi tiết cửa hàng",
      headerTransparent: false,
      headerStyle: {
        backgroundColor: "#141927",
        height: 100,
      },
      headerTintColor: "white",
      headerTitleAlign: "center",
      headerTitleStyle: {
        color: "white",
        fontFamily: "SignikaNegative",
        fontSize: 24,
      },
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#141927" barStyle={"light-content"} />
      <View style={styles.boxImg}>
        <Image
          source={
            showItem.logo?.uri
              ? { uri: showItem.logo.uri }
              : require("../assets/images/react.png")
          }
          style={styles.imgLogo}
        />
      </View>

      <View style={styles.boxInfo}>
        <Text style={styles.textName}>{showItem.name}</Text>
        <View style={styles.info}>
          <View style={styles.talkBubble}>
            <View style={styles.talkBubbleSquare}>
              <Ionicons
                name={"call"}
                style={[styles.iconInfo, { color: "#5a9fee" }]}
              />
              <Text style={styles.textIcon}>Số điện thoại</Text>
            </View>
            <View style={styles.talkBubbleTriangle} />
          </View>

          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.textInfo}>
            {showItem.phone}
          </Text>
        </View>

        <View style={styles.info}>
          <View style={styles.talkBubble}>
            <View style={styles.talkBubbleSquare}>
              <Ionicons
                name={"location"}
                style={[styles.iconInfo, { color: "#39cc4c" }]}
              />
              <Text style={styles.textIcon}>Địa chỉ</Text>
            </View>
            <View style={styles.talkBubbleTriangle} />
          </View>
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.textInfo}>
            {showItem.address}
          </Text>
        </View>

        <View style={styles.info}>
          <View style={styles.talkBubble}>
            <View style={styles.talkBubbleSquare}>
              <Ionicons
                name={"flash"}
                style={[
                  styles.iconInfo,
                  { color: showItem.status ? "#f32d79" : "#a5a4a4" },
                ]}
              />
              <Text style={styles.textIcon}>Trạng thái</Text>
            </View>
            <View style={styles.talkBubbleTriangle} />
          </View>
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.textInfo}>
            {showItem.status ? "Hoạt dộng" : "Không hoạt động"}
          </Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161e33",
    paddingTop: 30,
  },
  boxImg: {
    flex: 2,
  },
  imgLogo: {
    width: 200,
    height: 200,
    alignSelf: "center",
    resizeMode: "contain",
    overflow: "hidden",
    borderRadius: 200,
    zIndex: 2,
  },
  boxInfo: {
    flex: 6,
    backgroundColor: "#394057",
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    paddingTop: 65,
    paddingHorizontal: 15,
  },
  textName: {
    color: "#ffffff",
    fontSize: 30,
    fontFamily: "Sriracha",
    alignSelf: "center",
    paddingBottom: 20,
  },
  textInfo: {
    color: "#d8d8d8",
    fontSize: 19,
    fontFamily: "Sriracha",
    alignSelf: "center",
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 15,
  },

  talkBubble: {
    backgroundColor: "transparent",
    marginRight: 15,
    marginLeft: 20,
  },
  talkBubbleSquare: {
    paddingHorizontal: 15,
    paddingVertical: 9.5,
    backgroundColor: "#2a3352",
    borderRadius: 18,
    flexDirection: "row",
    alignItems: "center",
  },
  talkBubbleTriangle: {
    position: "absolute",
    left: -25,
    top: 5,
    width: 0,
    height: 0,
    borderTopColor: "transparent",
    borderTopWidth: 18,
    borderRightWidth: 30,
    borderRightColor: "#2a3352",
    borderBottomWidth: 18,
    borderBottomColor: "transparent",
  },
  textIcon: {
    color: "#d8d8d8",
    fontSize: 14,
    fontFamily: "SignikaNegative",
    fontWeight: "100",
  },
  iconInfo: {
    fontSize: 25,
    marginRight: 8,
  },
});
