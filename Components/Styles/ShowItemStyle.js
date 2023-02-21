import {
  View,
  Text,
  Button,
  StyleSheet,
  Pressable,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161e33",
    paddingTop: 30,
  },
  boxImg: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
  },
  iconHeader: {
    position: "absolute",
    width: 100,
    height: 100,
    right: 45,
    top: -30,
    zIndex: 3,
  },
  boxName: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 60,
    height: 60,
    resizeMode: "contain",
    overflow: "hidden",
  },
  iconBottom: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    overflow: "hidden",
  },
  imgLogo: {
    width: 170,
    height: 170,
    alignSelf: "center",
    resizeMode: "contain",
    overflow: "hidden",

    borderRadius: 200,
    zIndex: 2,
  },
  boxInfo: {
    flex: 6,
    justifyContent: "space-between",
    backgroundColor: "#394057",
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    paddingTop: 25,
    paddingHorizontal: 15,
  },
  textName: {
    flex: 1,
    color: "#ffffff",
    fontSize: 30,
    fontFamily: "Sriracha",
    textAlign: "center",
    marginRight: 60,
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
    top: 6,
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
    width: 30,
    height: 30,
    marginRight: 8,
  },
  iconInfo2: {
    fontSize: 25,
    marginRight: 8,
  },
});