import { rf, rh, rw } from "@/utils/dimensions";
import { LinearGradient } from "expo-linear-gradient";
import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-paper";

function ItemListFriedns() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#5334C7", "#C79BE7"]}
        locations={[0, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.boderAvatar}
      >
        <View style={styles.avatar}>
          <Avatar.Image size={rf(60)} source={{ uri: "" }} />
        </View>
      </LinearGradient>
      <View>
        <Text style={styles.name}>name Player</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: rw(66),
    height: rh(100),
  },
  avatar: {},
  boderAvatar: {
    width: rw(66),
    height: rh(66),
    borderRadius: rw(100),
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    textAlign: "center",
    marginTop: rh(4.5),
  },
});

export default memo(ItemListFriedns);
