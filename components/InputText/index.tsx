import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { rf, rh, rw } from "@/utils/dimensions";
import React, { memo, useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-paper";

interface props {
  name: string;
  label: string;
}
function InputText({ name, label }: props) {
  const isPassword = ["password", "repassword"].includes(name);
  const [isShowPassword, setIsShowPassword] = useState(false);
  return (
    <View style={Style.inputContiner}>
      <TextInput
        style={Style.input}
        placeholderTextColor={"white"}
        placeholder={label}
        secureTextEntry={!isShowPassword}
      />
      {isPassword && (
        <TouchableOpacity
          onPress={() =>
            setIsShowPassword((prev) => (prev == true ? false : true))
          }
        >
          <Icon
            color={Colors.iconEye}
            size={rf(25)}
            source={isShowPassword ? "eye-outline" : "eye-off-outline"}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const Style = StyleSheet.create({
  inputContiner: {
    borderWidth: rw(2.96),
    borderColor: Colors.boderColor,
    borderRadius: rw(29),
    alignItems: "center",
    width: rw(323),
    height: rh(53),
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: rw(19),
  },
  input: {
    width: "90%",
    fontSize: rf(17),
    fontFamily: Fonts.PoppinsMedium,
    fontWeight: "medium",
    textAlignVertical: "center",
  },
});

export default memo(InputText);
