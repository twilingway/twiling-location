import { useSetAtom } from "jotai";
import { StyleSheet, Text, View } from "react-native";
import { logoutAtom } from "../../entities/auth/model/auth.state";
import { Button } from "../../shared/Button/Button";

export default function MyCourses() {
  const logout = useSetAtom(logoutAtom);

  return (
    <View>
      <Text style={styles.text}>Мои курсы3 </Text>
      <Button title="Выйти" onPress={logout} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#ff0000",
  },
});
