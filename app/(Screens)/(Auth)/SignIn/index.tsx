import CustomButton from "@/components/Fields/CustomButton";
import InputText from "@/components/Fields/InputText";
import HelpAuth from "@/components/HelperAuth";
import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { SignInVaildion } from "@/lib/Vaildtions/SignInVaildtion";
import { SignInType } from "@/types/Auth/SignInType";
import { rf, rh, rw } from "@/utils/dimensions";
import { useFormik } from "formik";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { HelperText } from "react-native-paper";

const initialValues: SignInType = {
  identifier: "",
  password: "",
};

export default function SignIn() {
  const Formik = useFormik({
    initialValues,
    validationSchema: SignInVaildion,
    onSubmit: (x) => console.log(x),
  });
  const [apiError, setApiError] = useState<String | null>(null);
  return (
    <Animatable.View animation="fadeInUp" direction="alternate">
      <View style={Style.containerTxt}>
        <Text style={Style.txtYalla}>Yalla Moba</Text>
      </View>
      <View style={Style.MainContiner}>
        <View style={Style.LoginCard}>
          <Text style={Style.txtSignIn}>Sign in</Text>
          <View style={Style.Fields}>
            <InputText
              Formik={Formik}
              name={"identifier"}
              label={"Email/Username"}
              width={323}
            />
            <InputText
              Formik={Formik}
              name={"password"}
              label={"Password"}
              width={323}
            />
          </View>
          <View style={Style.BtnBox}>
            <HelperText
              style={Style.apiError}
              type="error"
              visible={!!apiError}
            >
              {apiError}
            </HelperText>
            <CustomButton Formik={Formik} context={"Sign in"} Width={320} />
          </View>
        </View>
        <View style={Style.helper}>
          <HelpAuth mode="up" />
        </View>
      </View>
    </Animatable.View>
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
  apiError: {
    fontSize: rf(20),
    fontFamily: Fonts.PoppinsMedium,
    textAlign: "center",
    lineHeight: rf(24),
  },
  BtnBox: {
    marginTop: rh(67),
    gap: rh(10),
  },
});
