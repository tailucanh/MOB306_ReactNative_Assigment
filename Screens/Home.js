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

import { styles } from "../Components/Styles/HomeStyle";

export default function Home(props) {
  const navigation = props.navigation;

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#141927" barStyle={"light-content"} />
      <Image
        source={require("../assets/images/icHomeScreen3.png")}
        style={styles.icHomeScreen}
      />
      <Text style={styles.textTitle}>Chào mừng bạn quay {"\n"}trở lại</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputSearch}
        placeholder="Search"
        placeholderTextColor="#d5d8e0"
      />
      <Image
        source={require("../assets/images/icHomeScreen2.png")}
        style={styles.icHomeScreen2}
      />
    </View>
  );
}
