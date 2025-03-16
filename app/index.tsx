import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";
import { Input } from "../shared/Input/Input";
import { Button } from "../shared/Button/Button";
import { Notification } from "../shared/Notification/Notification";
import { useState } from "react";
import { Link } from "expo-router";

export default function Login() {
  const [error, setError] = useState<string | undefined>();

  const alert = () => {
    setError("неверный логин или пароль");
    setTimeout(() => {
      setError(undefined);
    }, 3500);
  };

  return (
    <View style={styles.container}>
      <Notification message={error} />
      <View style={styles.content}>
        <Text style={styles.logoTitle}>Twiling Location</Text>
        <Image
          source={require("../assets/cargps.png")}
          style={styles.logo}
          resizeMode="cover"
        />
        <View style={styles.form}>
          <Input placeholder="E-mail" />
          <Input placeholder="Пароль" isPassword />

          <Button title="ВОЙТИ" onPress={alert} />
        </View>
        <Link href={"/restore"}>
          <Text>Восстановить пароль</Text>
        </Link>
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
