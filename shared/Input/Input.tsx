import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { Colors } from "../../constants/Colors";

export function Input(props: TextInputProps) {
  return (
    <TextInput
      style={styles.input}
      placeholderTextColor={Colors.light.placeholderTextColor}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 58,
    backgroundColor: Colors.light.inputBackgroundColor,
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 16,
  },
});
