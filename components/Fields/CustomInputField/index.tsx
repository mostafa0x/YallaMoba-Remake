import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { rf, rh, rw } from "@/utils/dimensions";
import React, { memo } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Icon } from "react-native-paper";

interface props {
  name: string;
  label: string;
}

function CustomInputField({ name, label }: props) {
  return (
    <View style={Style.Container}>
      <View style={Style.secContainer}>
        <Icon color={Colors.magnify} size={rf(25)} source={"magnify"} />
        <TextInput
          placeholderTextColor={Colors.customInputText}
          style={Style.input}
          placeholder={label}
        />
      </View>
    </View>
  );
}

const Style = StyleSheet.create({
  Container: {
    width: rw(284),
    height: rh(53),
    borderRadius: rw(25),
    backgroundColor: Colors.customInputBackColor,
    flexDirection: "row",
    paddingHorizontal: rw(23),
    paddingTop: rh(5),
  },
  secContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: rw(13),
  },
  input: {
    width: "90%",
    fontFamily: Fonts.PoppinsMedium,
    fontSize: rf(17),
    color: Colors.customInputText,
    textAlignVertical: "center",
  },
});

export default memo(CustomInputField);
