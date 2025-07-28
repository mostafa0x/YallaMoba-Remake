import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { InputSignInTypes, SignInType } from "@/types/Auth/SignInType";
import { rf, rh, rw } from "@/utils/dimensions";
import { useFormikContext } from "formik";
import React, { memo, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-paper";

interface props {
  name: InputSignInTypes;
  label: string;
  width: number;
}
function InputText({ name, label, width = 323 }: props) {
  const { values, handleChange, handleBlur } = useFormikContext<SignInType>();
  const isPassword = ["password", "repassword"].includes(name);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const isIdentifier = ["identifier"].includes(name);
  const isErrorField = true;
  const minLetters = name == "identifier" ? 6 : 8;

  return (
    <View
      style={{
        width: rw(width),
        borderWidth: rw(2.96),
        borderColor: isErrorField ? Colors.boaderColorError : Colors.boderColor,
        borderRadius: rw(29),
        alignItems: "center",
        height: rh(53),
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: rw(19),
      }}
    >
      <TextInput
        style={Style.input}
        placeholderTextColor={"white"}
        placeholder={label}
        secureTextEntry={isPassword && !isShowPassword}
        value={values[name]}
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
      />
      <View style={Style.inputProps}>
        {isPassword && (
          <TouchableOpacity
            onPress={() => {
              setIsShowPassword((prev) => (prev == true ? false : true));
              console.log(values);
            }}
          >
            <Icon
              color={Colors.iconEye}
              size={rf(25)}
              source={isShowPassword ? "eye-outline" : "eye-off-outline"}
            />
          </TouchableOpacity>
        )}
        {values?.[name].length > 0 && (
          <View
            style={{
              borderRadius: rw(100),
              height: rh(30),
              width: rw(30),
              borderWidth: 2,
              borderColor: "#d3c6c6",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {values?.[name].length < minLetters ? (
              <Text style={Style.txtCircel}>
                {values?.[name].length}/{minLetters}
              </Text>
            ) : (
              <Icon color="green" size={rf(30)} source={"check"} />
            )}
          </View>
        )}
      </View>
    </View>
  );
}

const Style = StyleSheet.create({
  input: {
    width: "82%",
    fontSize: rf(17),
    fontFamily: Fonts.PoppinsMedium,
    fontWeight: "medium",
    textAlignVertical: "center",
    color: Colors.TextColor,
    textAlign: "left",
  },
  inputProps: {
    flexDirection: "row",
    gap: rw(5),
    alignItems: "center",
    paddingRight: rw(5),
  },
  txtCircel: {
    color: Colors.TextColor,
    fontFamily: Fonts.WendyOneRegular,
    fontSize: rf(14),
  },
});

export default memo(InputText);
