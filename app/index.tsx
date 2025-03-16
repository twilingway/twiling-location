import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Button } from "../shared/Button/Button";
import { CustomLink } from "../shared/CustomLink/CustomLink";
import { Input } from "../shared/Input/Input";
import { Notification } from "../shared/Notification/Notification";

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
        <CustomLink href={"/restores"} text="Восстановить пароль" />
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
