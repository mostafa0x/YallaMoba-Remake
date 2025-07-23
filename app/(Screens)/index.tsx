import { Colors } from "@/constants/Colors";
import { rh, rw } from "@/utils/dimensions";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <View style={Style.mainContiner}>
        <Image
          style={Style.img}
          contentFit="contain"
          source={require("../../assets/images/landing/introLayla.png")}
        />
      </View>
      <View stlye={Style.continer}>
        <Text>Welcome, Gamer ! </Text>
        <Text>HomeScreen</Text>
      </View>
    </View>
  );
}

const Style = StyleSheet.create({
  mainContiner: {
    width: rw(390),
    height: rh(714),
  },
  img: {
    width: "100%",
    height: "100%",
  },
  continer: {
    width: rw(390),
    height: rh(282),
    borderWidth: 2,
    borderColor: "red",
    backgroundColor: Colors.LandingContiner,
  },
});
