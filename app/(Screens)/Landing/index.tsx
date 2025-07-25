import Btn from "@/components/Fields/CustomButton";
import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { rf, rh, rw } from "@/utils/dimensions";
import { Image } from "expo-image";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Shadow } from "react-native-shadow-2";

export default function LandingPage() {
  return (
    <View style={{}}>
      <View style={Style.mainContiner}>
        <Image
          style={Style.img}
          contentFit="contain"
          source={require("../../../assets/images/landing/introLayla.png")}
        />
      </View>
      <Shadow
        distance={16}
        startColor="rgba(0,0,0,0.60)"
        offset={[0, rh(560)]}
        style={{ borderRadius: rw(40) }}
      >
        <View style={Style.continer}>
          <Text style={Style.mainTxt}>Welcome, Gamer ! </Text>
          <Text style={Style.secTxt}>
            Get ready to connect, share , epic moments, and team up with players
            just like you. Let the fun begin
          </Text>
          <View style={{ marginTop: rh(5) }}>
            <Btn Width={320} context="Get Started" />
          </View>
        </View>
      </Shadow>
    </View>
  );
}

const Style = StyleSheet.create({
  mainContiner: {
    position: "absolute",
    width: rw(390),
    height: rh(714),
  },
  img: {
    width: "100%",
    height: "100%",
  },
  continer: {
    position: "absolute",
    top: rh(560),
    width: rw(390),
    height: rh(400),
    borderWidth: 1,
    backgroundColor: Colors.LandingContiner,
    borderRadius: rw(40),
    paddingVertical: rh(20),
    paddingHorizontal: rw(30),
  },
  mainTxt: {
    fontSize: rf(36),
    fontFamily: Fonts.PoppinsBold,
    color: "#FFFFFF",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
  },
  secTxt: {
    paddingTop: rh(2),
    paddingLeft: rw(5),
    fontSize: rf(20),
    fontFamily: Fonts.PoppinsMedium,
    color: "#FFFFFF",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowRadius: 4,
    textShadowOffset: { width: 0, height: 4 },
  },
});
