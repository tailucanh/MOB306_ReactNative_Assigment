import { StyleSheet, Text, View } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141927",
    paddingTop: 30,
  },
  icHomeScreen: {
    position: "absolute",
    width: "70%",
    height: 280,
    right: 0,
    top: 0,
    resizeMode: "contain",
  },
  textTitle: {
    fontSize: 30,
    color: "#d4d4d4",
    fontFamily: "PatrickHand",
    marginStart: 15,
    marginTop: 30,
  },
  inputSearch: {
    backgroundColor: "#48526d",
    height: 45,
    marginHorizontal: 15,
    paddingLeft: 15,
    color: "#d5d8e0",
    fontSize: 16,
    borderRadius: 10,
    marginTop: 100,
  },
  icHomeScreen2: {
    width: "100%",
    height: 280,
    resizeMode: "contain",
  },
});
