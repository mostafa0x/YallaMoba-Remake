import LinearView from "@/components/LinearView";
import NavgationBar from "@/components/NavgationBar";
import { store } from "@/lib/store";
import { rh, rw } from "@/utils/dimensions";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
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
            <View>
              <View
                style={{
                  backgroundColor: "#E7E7E7",
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: 100,
                }}
              ></View>
              <View
                style={{
                  position: "absolute",
                  bottom: rh(70),
                  left: rw(45),
                }}
              >
                <NavgationBar scaleX={1.4} scaleY={1.4} />
              </View>
            </View>

            <StatusBar style="light" />
          </SafeAreaView>
        </LinearView>
      </SafeAreaProvider>
    </Provider>
  );
}
