import { useEffect, useState } from "react";
import {
  Image,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  TextInputChangeEventData,
  View,
} from "react-native";
import { Button } from "../shared/Button/Button";
import { CustomLink } from "../shared/CustomLink/CustomLink";
import { Input } from "../shared/Input/Input";
import { Notification } from "../shared/Notification/Notification";
import { useAtom } from "jotai";
import { loginAtom } from "../entities/auth/model/auth.state";
import { router } from "expo-router";

export default function Login() {
  const [localError, setLocalError] = useState<string | undefined>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [{ accessToken, isLoading, error }, login] = useAtom(loginAtom);

  // const alert = () => {
  //   setError("неверный логин или пароль");
  //   setTimeout(() => {
  //     setError(undefined);
  //   }, 3500);
  // };

  const submit = () => {
    if (!email) {
      setLocalError("Не введен email");
      return;
    }
    if (!password) {
      setLocalError("Не введен пароль");
      return;
    }
    login({ email, password });
  };

  useEffect(() => {
    if (error) {
      setLocalError(error);
    }
  }, [error]);

  useEffect(() => {
    if (accessToken) {
      router.replace("/(home)");
    }
  }, [accessToken]);
  return (
    <View style={styles.container}>
      <Notification message={localError} />
      <View style={styles.content}>
        <Text style={styles.logoTitle}>Twiling Location</Text>
        <Image
          source={require("../assets/cargps.png")}
          style={styles.logo}
          resizeMode="cover"
        />
        <View style={styles.form}>
          <Input placeholder="E-mail" onChangeText={setEmail} value={email} />
          <Input
            placeholder="Пароль"
            isPassword
            onChangeText={setPassword}
            value={password}
          />

          <Button title="ВОЙТИ" onPress={submit} isLoading={isLoading} />
        </View>
        <CustomLink href={"/restore"} text="Восстановить пароль" />
        <CustomLink href={"/(home)/course/ts"} text="Course" />
        <CustomLink href={"/(home)"} text="App" />
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
