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

export default function Profile() {
  const [image, setImage] = useState<string | null>(null);
  //   const [cameraPermissions, requestCameraPermissions] = useCameraPermissions();
  //   const [libraryPermissions, requestLibraryPermissions] =
  //     useMediaLibraryPermissions();

  //   const verifyCameraPermissions = async () => {
  //     if (cameraPermissions?.status === PermissionStatus.UNDETERMINED) {
  //       const res = await requestCameraPermissions();
  //       return res.granted;
  //     }
  //     if (cameraPermissions?.status === PermissionStatus.DENIED) {
  //       Alert.alert(
  //         "Ошибка доступа к камере!",
  //         "Доступ к камере запрещен.\nПожалуйста, предоставьте\nразрешение в настройках.",
  //         [
  //           {
  //             text: "Отмена", // Текст кнопки
  //             onPress: () => console.log("Пользователь нажал Отмена"), // Обработчик нажатия
  //             style: "cancel", // Стиль кнопки (необязательно)
  //           },
  //           {
  //             text: "Перейти в настройки", // Текст кнопки
  //             onPress: openSettings, // Обработчик нажатия
  //           },
  //         ],
  //         { cancelable: true } // Опционально: позволяет закрыть Alert нажатием вне его области
  //       );
  //       //   openSettings();
  //       return false;
  //     }
  //     return true;
  //   };

  //   const captureAvatar = async () => {
  //     const isPermissionGranted = await verifyCameraPermissions();
  //     if (!isPermissionGranted) {
  //       return;
  //     }
  //     const result = await launchCameraAsync({
  //       mediaTypes: ["images", "livePhotos"],
  //       allowsEditing: true,
  //       aspect: [1, 1],
  //       quality: 1,
  //     });
  //     console.log("result :>> ", result);
  //     if (result?.assets && result?.assets.length > 0) {
  //       setImage(result.assets[0].uri);
  //     }
  //   };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Профайл </Text> */}
      {/* <Text style={styles.text}>{auth?.accessToken}</Text> */}
      {/* <Button title="Выйти" onPress={logout} /> */}
      {/* <Button title="Снять изображение" onPress={captureAvatar} /> */}

      {image ? (
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
          resizeMode="cover"
        />
      ) : (
        <FontAwesome6 name="user-circle" size={70} color="black" />
      )}

      <ImageUploader onUpload={setImage} />
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
