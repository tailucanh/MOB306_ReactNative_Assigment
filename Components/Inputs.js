import { TextInput, StyleSheet, View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";

const InputText = ({
  label,
  icon,
  error,
  value,
  onChangeText,
  placeholder,
  keyboardType,
  onFocus = () => {},
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={styles.boxInput}>
      <Text style={styles.textLabel}>{label}</Text>
      <View
        style={[
          styles.inputContainer,
          {
            backgroundColor: isFocused ? "#3f4c7c" : "#1b243a",
            borderColor: error ? "#ff0000" : isFocused ? "#8ca1da" : "#919191",
          },
        ]}
      >
        <Ionicons name={icon} style={styles.iconInput} />
        <TextInput
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          style={styles.textInput}
          {...props}
          value={value}
          keyboardType={keyboardType}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#d5d8e0"
        />
      </View>
      {error && <Text style={styles.textError}>{error}</Text>}
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  boxInput: {
    marginBottom: 10,
    paddingHorizontal: 8,
  },
  textLabel: {
    fontSize: 18,
    marginVertical: 5,
    color: "#cccccc",
    fontFamily: "PatrickHand",
  },
  iconInput: {
    fontSize: 24,
    color: "#cccccc",
  },
  inputContainer: {
    height: 55,
    flexDirection: "row",
    borderWidth: 0.5,
    alignItems: "center",
    marginHorizontal: 15,
    paddingHorizontal: 8,
    borderWidth: 1.5,
    borderRadius: 8,
  },
  textInput: {
    flex: 1,
    color: "#d5d8e0",
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  textError: {
    color: "#ff0000",
    fontSize: 15,
    marginTop: 7,
    marginStart: 18,
  },
});
