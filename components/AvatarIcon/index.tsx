import { rf, rh, rw } from "@/utils/dimensions";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Avatar } from "react-native-paper";

export default function AvatarIcon() {
  return (
    <LinearGradient
      colors={["#5334C7", "#C79BE7"]}
      locations={[0, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.boderAvatar}
    >
      <View>
        <Avatar.Image size={rf(60)} source={{ uri: "" }} />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  boderAvatar: {
    width: rw(66),
    height: rh(66),
    borderRadius: rw(100),
    alignItems: "center",
    justifyContent: "center",
  },
});
