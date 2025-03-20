import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { StyleSheet, Text, View } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import {
  authAtom,
  loginAtom,
  logoutAtom,
} from "../../entities/auth/model/auth.state";
import { router, useRootNavigationState } from "expo-router";
import { Button } from "../../shared/Button/Button";

export default function MyCourses() {
  // const [auth, login] = useAtom(loginAtom);
  const logout = useSetAtom(logoutAtom);
  // const { accessToken } = useAtomValue(authAtom);
  // const state = useRootNavigationState();
  // const login = useCallback(async () => {
  //   const { data } = await axios.post<IAuthResponse>(API.login, {
  //     email: "993468@gmail.com",
  //     password: "NewMyPass2025",
  //   });
  //   console.log("data :>> ", data);
  // }, []);

  // useEffect(() => {
  //   AsyncStorage.clear();
  // }, []);

  // useEffect(() => {
  //   login({ email: "993468@gmail.com", password: "NewMyPass2025" });
  // }, []);

  // useEffect(() => {
  //   console.log("accessToken :>> ", accessToken);
  //   if (!state.key) {
  //     return;
  //   }

  //   if (!accessToken) {
  //     router.replace("/login");
  //   }
  // }, [accessToken, state]);

  return (
    <View>
      <Text style={styles.text}>Мои курсы3 </Text>
      {/* <Text style={styles.text}>{auth?.accessToken}</Text> */}
      <Button title="Выйти" onPress={logout} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "red",
  },
});
