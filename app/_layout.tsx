import LinearView from "@/components/LinearView";
import NavBar from "@/components/NavgationBarX";
import SplashScreen from "@/components/SplashScreen";
import { store } from "@/lib/store";
import Providers from "@/Providers/Providers";
import { useFonts } from "expo-font";
import * as NavigationBar from "expo-navigation-bar";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PaperProvider } from "react-native-paper";
import "react-native-reanimated";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Inter: require("../assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("../assets/fonts/Inter-Bold.ttf"),
    "Inter-Italic": require("../assets/fonts/Inter-Italic.ttf"),
    "Inter-BoldItalic": require("../assets/fonts/Inter-BoldItalic.ttf"),
    "WendyOne-Regular": require("../assets/fonts/WendyOne-Regular.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
  });

  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    const Nav = async () => {
      await NavigationBar.setVisibilityAsync("hidden");
      await NavigationBar.setButtonStyleAsync("light");
    };

    Nav();
  }, []);
  useEffect(() => {
    if (!fontsLoaded) return;
    const time = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => {
      clearTimeout(time);
    };
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <SplashScreen />;
  }

  return Loading ? (
    <SplashScreen />
  ) : (
    <Provider store={store}>
      <Providers>
        <PaperProvider>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaProvider>
              <LinearView>
                <SafeAreaView style={{ flex: 1 }}>
                  <Slot />
                  <NavBar />
                  <StatusBar style="light" />
                </SafeAreaView>
              </LinearView>
            </SafeAreaProvider>
          </GestureHandlerRootView>
        </PaperProvider>
      </Providers>
    </Provider>
  );
}
