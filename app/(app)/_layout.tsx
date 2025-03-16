import { SplashScreen, Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();

export default function AppLayout() {
  //   const insets = useSafeAreaInsets();

  //   useEffect(() => {
  //     SplashScreen.preventAutoHideAsync();

  //     // Инициализация приложения
  //     setTimeout(() => {
  //       SplashScreen.hideAsync();
  //     }, 2000);
  //   }, []);

  return (
    <SafeAreaProvider>
      <Stack.Screen name="index" />
    </SafeAreaProvider>
  );
}
