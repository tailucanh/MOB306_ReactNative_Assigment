import { StyleSheet, Text, View } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgBackground: {
    flex: 1,
    justifyContent: "space-around",
  },
  textTitle: {
    fontSize: 30,
    alignSelf: "center",
    color: "white",
    fontWeight: "bold",
  },
  textContent: {
    fontSize: 15,
    alignSelf: "center",
    color: "white",
    marginTop: 8,
  },
  button: {
    marginHorizontal: 30,
    backgroundColor: "rgba(141, 141, 141, 0.8)",
    borderRadius: 15,
    elevation: 2,
  },
  textButton: {
    fontSize: 19,
    alignSelf: "center",
    marginVertical: 10,
    color: "white",
  },
});
