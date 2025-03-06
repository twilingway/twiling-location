import { StatusBar } from "expo-status-bar";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { Input } from "./shared/Input/Input";
import Eye from "./assets/icons/eye.svg";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>TwilingLocation</Text>
        <Image
          source={require("./assets/cargps.png")}
          style={styles.logo}
          resizeMode="cover"
        />
        <View style={styles.form}>
          <Input placeholder="E-mail" />
          <Input placeholder="Пароль" />

          <Button title="Войти" />
          <Eye />
        </View>
        <Text>Восстановить пароль1</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    // alignItems: "center",
    flex: 1,
    padding: 32,
  },
  logo: {
    width: 200,
    height: 200,
  },
  content: {
    alignItems: "center",
    gap: 12,
  },
  form: {
    alignSelf: "stretch",
    gap: 16,
  },
});
