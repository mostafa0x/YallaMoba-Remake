import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { rf } from "@/utils/dimensions";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HelpAuth({ mode }: { mode: "in" | "up" }) {
  return (
    <View style={Style.crateAcc}>
      <Text style={Style.txtNotHave}>
        {mode == "up" ? "Don’t have an account?" : "Already have an account ?"}
      </Text>
      <TouchableOpacity>
        <Text style={Style.BtnSignUp}>
          {mode == "up" ? "Sign Up" : "Sign in"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const Style = StyleSheet.create({
  crateAcc: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  txtNotHave: {
    textAlign: "center",
    fontSize: rf(17),
    fontFamily: Fonts.Inter,
    fontWeight: "medium",
    color: Colors.TextColor,
  },
  BtnSignUp: {
    textAlign: "center",
    fontSize: rf(17),
    fontFamily: Fonts.InterBold,
    fontWeight: "bold",
    color: Colors.minBtn,
  },
});
