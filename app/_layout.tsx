import { Slot, SplashScreen, Stack } from "expo-router";
import { Text } from "react-native";
import { Colors } from "../constants/Colors";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // const insets = useSafeAreaInsets();

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();

    // Инициализация приложения
    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 2000);
  }, []);

  return (
    <SafeAreaProvider>
      {/* <Text>Header</Text>
      <Slot />
      <Text>footer</Text> */}
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          //   statusBarBackgroundColor: Colors.dark.background,

          contentStyle: {
            backgroundColor: Colors.light.background,
            // paddingTop: insets.top,
          },
          headerShown: false,
        }}
      >
        <Stack.Screen name="login" />
        <Stack.Screen
          name="restore"
          options={{
            presentation: "modal",
          }}
        />
        <Stack.Screen name="(home)" />
      </Stack>
    </SafeAreaProvider>
  );
}
