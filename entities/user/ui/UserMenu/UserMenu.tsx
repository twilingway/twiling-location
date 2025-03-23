import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Image, StyleSheet, Text, View } from "react-native";
import { IProfileUser } from "../../model/user.model";

export function UserMenu({ profile }: { profile: IProfileUser | undefined }) {
  if (!profile) {
    return null;
  }

  return (
    <View style={styles.container}>
      {profile?.photo ? (
        <Image
          source={{ uri: profile.photo }}
          style={styles.profileLogo}
          resizeMode="cover"
        />
      ) : (
        <FontAwesome6 name="user-circle" size={70} color="black" />
      )}
      <Text style={styles.name}>{profile?.name}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    gap: 8,
    marginTop: 32,
  },
  profileLogo: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  name: {
    fontSize: 24,
  },
});
