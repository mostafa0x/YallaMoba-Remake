import CustomButton from "@/components/CustomButton";
import GenderBtn from "@/components/GenderBtn";
import HelpAuth from "@/components/HelperAuth";
import InputText from "@/components/InputText";
import RoleSelector from "@/components/RoleSelector";
import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { rf, rh, rw } from "@/utils/dimensions";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SignUp() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <View style={Style.mainContainer}>
      <View style={Style.labelContainer}>
        <Text style={Style.label}>Sign up</Text>
      </View>
      <View style={Style.fieldsContainer}>
        {["username", "email", "password", "repassword"].map(
          (field: string) => (
            <InputText
              key={field}
              name={field}
              label={field.charAt(0).toUpperCase() + field.slice(1)}
            />
          )
        )}
        <View style={Style.roleContainer}>
          <Text style={Style.minlabel}>Role</Text>
          <RoleSelector isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
        </View>
      </View>

      {!isOpenMenu && (
        <>
          <View style={Style.genderContainer}>
            <Text style={Style.minlabel}>Gender</Text>
            <View style={Style.genderBtns}>
              <GenderBtn label={"Male"} />
              <GenderBtn label={"Female"} />
            </View>
          </View>
          <View style={Style.btnContainer}>
            <CustomButton context={"Sign Up"} />
          </View>
          <View style={Style.helper}>
            <HelpAuth mode="in" />
          </View>
        </>
      )}
    </View>
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
