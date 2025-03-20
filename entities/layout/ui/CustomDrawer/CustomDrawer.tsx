import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { Image, StyleSheet, Text, View } from "react-native";

import { Colors } from "../../../../constants/Colors";
import { CustomLink } from "../../../../shared/CustomLink/CustomLink";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useAtom, useSetAtom } from "jotai";
import { logoutAtom } from "../../../auth/model/auth.state";
import { loadUserProfileAtom } from "../../../user/model/user.state";
import { useEffect } from "react";
import { UserMenu } from "../../../user/ui/UserMenu/UserMenu";

export function CustomDrawer(props: DrawerContentComponentProps) {
  const logout = useSetAtom(logoutAtom);
  const [user, loadProfile] = useAtom(loadUserProfileAtom);

  useEffect(() => {
    loadProfile();
  }, []);

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.scrollView}
    >
      <View style={styles.content}>
        <Ionicons
          name="close-circle-outline"
          size={50}
          color=""
          onPress={() => props.navigation.closeDrawer()}
          style={styles.iconClose}
        />
        <UserMenu profile={user.user?.profile} />
      </View>
      <View style={styles.footer}>
        <CustomLink text="Выход" href={"/login"} onPress={() => logout()} />
        <View style={styles.footerLogo}>
          <Image
            source={require("../../../../assets/cargps.png")}
            style={styles.logo}
            resizeMode="cover"
          />
          {/* <Text style={styles.text}>Twiling Location</Text> */}
        </View>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: Colors.light.background,
    color: Colors.light.text,
  },
  logo: {
    width: 100,
    height: 100,
  },
  iconClose: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: 0,
    right: 0,
  },
  content: {
    flex: 1,
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
  },
  footerLogo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: Colors.light.placeholderTextColor,
  },
});
