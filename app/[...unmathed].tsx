import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomLink } from "../shared/CustomLink/CustomLink";

export default function UnmatchedCustom() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.context}>
        <Image
          source={require("../assets/cargps.png")}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.text}>
          Ооо... что то пошло не так. Попробуйте вернуться на главный экран.
        </Text>
        <CustomLink href={"/"} text="На главный экран" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 55,
    justifyContent: "center",
  },
  context: {
    alignItems: "center",
    gap: 32,
  },
  image: {
    width: 200,
    height: 200,
  },
  text: {
    textAlign: "center",
  },
});
