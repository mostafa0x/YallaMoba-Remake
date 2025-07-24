import CustomButton from "@/components/Fields/CustomButton";
import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { rf, rh } from "@/utils/dimensions";
import { StyleSheet, Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Not Found Screen</Text>
      <CustomButton context={"Back To Home"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    color: Colors.TextColor,
    gap: rh(50),
  },
  title: {
    color: Colors.TextColor,
    fontSize: rf(30),
    fontFamily: Fonts.InterBold,
  },
});
