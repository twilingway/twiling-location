import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Colors } from "../constants/Colors";

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
