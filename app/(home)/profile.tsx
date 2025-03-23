import { useState } from "react";
import { Alert, Image, StyleSheet, Text, View } from "react-native";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
  launchImageLibraryAsync,
  useMediaLibraryPermissions,
} from "expo-image-picker";
import { Button } from "../../shared/Button/Button";
import { openSettings } from "expo-linking";
import { ImageUploader } from "../../shared/ImageUploader/ImageUploader";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Avatar } from "../../entities/user/ui/Avatar/Avatar";

export default function Profile() {
  const [image, setImage] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <Avatar image={image} />

      <ImageUploader
        onUpload={setImage}
        onError={(e) => console.error("ImageUploader Error :>> ", e)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    paddingHorizontal: 32,
    paddingVertical: 16,
  },
  text: {
    color: "red",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
});
