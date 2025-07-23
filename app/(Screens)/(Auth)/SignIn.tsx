import Btn from "@/components/CustomButton";
import HelpAuth from "@/components/HelperAuth";
import InputText from "@/components/InputText";
import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { rf, rh, rw } from "@/utils/dimensions";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SignIn() {
  return (
    <View>
      <View style={Style.containerTxt}>
        <Text style={Style.txtYalla}>Yalla Moba</Text>
      </View>
      <View style={Style.MainContiner}>
        <View style={Style.LoginCard}>
          <Text style={Style.txtSignIn}>Sign in</Text>
          <View style={Style.Fields}>
            <InputText name={"identifier"} label={"Email/Username"} />
            <InputText name={"password"} label={"Password"} />
          </View>
          <View style={{ marginTop: rh(67) }}>
            <Btn context={"Sign in"} />
          </View>
        </View>
        <View style={Style.helper}>
          <HelpAuth mode="up" />
        </View>
      </View>
    </View>
  );
}

const Style = StyleSheet.create({
  MainContiner: {
    paddingLeft: rw(32),
    paddingRight: rw(35),
  },
  containerTxt: {
    marginTop: rh(111),
  },
  txtYalla: {
    color: Colors.txtYallaMoba,
    fontSize: rw(62),
    fontFamily: Fonts.WendyOneRegular,
    textAlign: "center",
  },
  txtSignIn: {
    color: "white",
    fontSize: rf(30),
    fontFamily: Fonts.InterBold,
    marginBottom: rh(36),
  },
  LoginCard: {
    marginTop: rh(73.5),
  },
  Fields: {
    gap: rh(19),
  },
  helper: {
    marginTop: rh(118),
  },
});
