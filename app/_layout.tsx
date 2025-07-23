import LinearView from "@/components/LinearView";
import { store } from "@/lib/store";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
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
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <LinearView>
          <SafeAreaView style={{ flex: 1 }}>
            <Slot />
            <StatusBar style="light" />
          </SafeAreaView>
        </LinearView>
      </SafeAreaProvider>
    </Provider>
  );
}
function useEffect(arg0: () => () => void, arg1: any[]) {
  throw new Error("Function not implemented.");
}
