import { Redirect, SplashScreen, Stack } from "expo-router";
import { useAtomValue } from "jotai";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { authAtom } from "../../entities/auth/model/auth.state";
import { DrawerLayoutAndroid, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Colors } from "../../constants/Colors";
import BurgerIcon from "../../assets/icons/burger.svg";

SplashScreen.preventAutoHideAsync();

export default function AppLayout() {
  const { accessToken } = useAtomValue(authAtom);

  //   const insets = useSafeAreaInsets();

  //   useEffect(() => {
  //     SplashScreen.preventAutoHideAsync();

  //     // Инициализация приложения
  //     setTimeout(() => {
  //       SplashScreen.hideAsync();
  //     }, 2000);
  //   }, []);

  if (!accessToken) {
    return <Redirect href="/login" />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={({ navigation }) => ({
          headerStyle: {
            backgroundColor: Colors.light.tint,
            shadowOpacity: 0,
            shadowColor: Colors.light.tint,
            // height: 100,
          },
          headerLeft: () => (
            <View
              style={
                {
                  // padding: 18,
                  // alignItems: "center",
                  // justifyContent: "center",
                  // flex: 1,
                }
              }
            >
              <BurgerIcon
                onPress={() => navigation.toggleDrawer()}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  paddingHorizontal: 20,
                  flex: 1,
                }}
              />
            </View>
          ),
          headerTitleStyle: {
            color: Colors.light.text,
            fontFamily: "FiraSans",
            fontSize: 20,
          },
          headerTitleAlign: "center",
          sceneStyle: {
            backgroundColor: Colors.light.placeholderTextColor,
          },
        })}
      >
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            // drawerLabel: "Home",
            title: "Мои курсы",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
    // <SafeAreaProvider>
    //   <Stack>
    //     <Stack.Screen name="index" />
    //   </Stack>
    // </SafeAreaProvider>
  );
}
