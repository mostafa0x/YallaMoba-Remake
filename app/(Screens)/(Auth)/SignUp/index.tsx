import CustomButton from "@/components/Fields/CustomButton";
import GenderBtn from "@/components/Fields/GenderBtn";
import InputText from "@/components/Fields/InputText";
import RoleSelector from "@/components/Fields/RoleSelector";
import HelpAuth from "@/components/HelperAuth";
import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { AuthInputType, AuthType } from "@/types/Auth/AuthType";
import { rf, rh, rw } from "@/utils/dimensions";
import { useFormik } from "formik";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Animatable from "react-native-animatable";

const fields: AuthInputType[] = ["username", "email", "password", "repassword"];

const initialValues: AuthType = {
  username: "",
  email: "",
  password: "",
  repassword: "",
  gender: "Male",
  role: "roam",
};
export default function SignUp() {
  const Formik = useFormik<AuthType>({
    initialValues,
    onSubmit: (x) => console.log(x),
  });
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <Animatable.View
      animation="fadeInUp"
      direction="alternate"
      style={Style.mainContainer}
    >
      <View style={Style.labelContainer}>
        <Text style={Style.label}>Sign up</Text>
      </View>
      <View style={Style.fieldsContainer}>
        {fields.map((field: AuthInputType) => (
          <InputText
            key={field}
            name={field}
            width={323}
            Formik={Formik}
            label={field.charAt(0).toUpperCase() + field.slice(1)}
          />
        ))}
        <View style={Style.roleContainer}>
          <Text style={Style.minlabel}>Role</Text>
          <RoleSelector
            Formik={Formik}
            isOpenMenu={isOpenMenu}
            setIsOpenMenu={setIsOpenMenu}
          />
        </View>
      </View>

      {!isOpenMenu && (
        <>
          <View style={Style.genderContainer}>
            <Text style={Style.minlabel}>Gender</Text>
            <View style={Style.genderBtns}>
              {["Male", "Female"].map((gender: string) => (
                <GenderBtn Formik={Formik} key={gender} label={gender} />
              ))}
            </View>
          </View>
          <View style={Style.btnContainer}>
            <CustomButton context={"Sign Up"} Width={320} />
          </View>
          <View style={Style.helper}>
            <HelpAuth mode="in" />
          </View>
        </>
      )}
    </Animatable.View>
  );
}

const Style = StyleSheet.create({
  mainContainer: {
    marginTop: rh(21),
    marginHorizontal: rw(32),
  },
  fieldsContainer: {
    gap: rh(20),
  },
  roleContainer: {
    gap: rh(7),
  },
  genderContainer: {
    gap: rh(7),
    marginTop: rh(10),
  },
  labelContainer: {
    marginBottom: rh(36),
  },
  label: {
    color: Colors.TextColor,
    fontSize: rf(30),
    fontFamily: Fonts.InterBold,
  },
  minlabel: {
    color: Colors.TextColor,
    fontSize: rf(17),
    fontFamily: Fonts.Inter,
    fontWeight: "medium",
  },
  genderBtns: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  btnContainer: {
    marginTop: rh(66),
  },
  helper: {
    marginTop: rh(33),
  },
});
