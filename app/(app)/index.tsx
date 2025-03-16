import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import { ProfileAtom } from "../../entities/user/model/user.state";
import { useAtom } from "jotai";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

export default function MyCourses() {
  const [profile] = useAtom(ProfileAtom);

  useEffect(() => {
    AsyncStorage.clear();
  }, []);

  return (
    <View>
      <Text>Мои курсы {profile.isLoading} </Text>
    </View>
  );
}
