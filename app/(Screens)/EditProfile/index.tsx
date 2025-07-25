import AvatarIcon from "@/components/AvatarIcon";
import CustomButton from "@/components/Fields/CustomButton";
import InputText from "@/components/Fields/InputText";
import RoleSelector from "@/components/Fields/RoleSelector";
import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { rf, rh, rw } from "@/utils/dimensions";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Divider, Icon } from "react-native-paper";

export default function EditProflie() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <TouchableOpacity>
          <Icon color="white" size={rf(40)} source={"arrow-left"} />
        </TouchableOpacity>
        <Text style={styles.appBarTxt}>Edit Profile</Text>
      </View>
      <Divider />
      <View style={styles.contant}>
        <AvatarIcon size={100} />
        <InputText name={"name"} label={"Username"} width={rw(200)} />
        <RoleSelector isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
        {!isOpenMenu && <CustomButton context={"Save Edits"} Width={170} />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: rh(13),
  },
  appBar: {
    flexDirection: "row",
    alignItems: "center",
    gap: rw(10),
    marginLeft: rw(31),
    marginBottom: rh(15),
  },
  appBarTxt: {
    fontFamily: Fonts.PoppinsBold,
    color: Colors.TextColor,
    fontSize: rf(24),
  },
  contant: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: rh(30),
    gap: rh(50),
  },
});
