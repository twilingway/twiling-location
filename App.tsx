import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { Input } from "./shared/Input/Input";
import { Button } from "./shared/Button/Button";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.logoTitle}>Twiling Location</Text>
        <Image
          source={require("./assets/cargps.png")}
          style={styles.logo}
          resizeMode="cover"
        />
        <View style={styles.form}>
          <Input placeholder="E-mail" />
          <Input placeholder="Пароль" isPassword />

          <Button title="ВОЙТИ" />
        </View>
        <Text>Восстановить пароль</Text>
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
  logoTitle: {
    fontSize: 24,
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
