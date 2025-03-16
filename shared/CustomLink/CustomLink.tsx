import {
  Pressable,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  Text,
} from "react-native";
import { Colors } from "../../constants/Colors";
import { useState } from "react";
import EyeIcon from "../../assets/icons/eye.svg";
import EyeClosedIcon from "../../assets/icons/eye_closed.svg";
import { Link, LinkProps } from "expo-router";

export function CustomLink({ text, ...props }: LinkProps & { text: string }) {
  return (
    <Link style={styles.link} {...props}>
      <Text>{text}</Text>
    </Link>
  );
}

const styles = StyleSheet.create({
  link: {
    fontSize: 18,
    color: Colors.light.tint,
  },
});
