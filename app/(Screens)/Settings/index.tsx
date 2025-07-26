import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { rf, rh, rw } from "@/utils/dimensions";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { Divider, Icon } from "react-native-paper";

const BtnMenu = React.memo(({ name }: { name: string }) => {
  const isEditProlfie = name == "Edit Profile";
  const router = useRouter();
  return (
    <>
      <TouchableOpacity
        onPress={() =>
          isEditProlfie ? router.push("/EditProfile") : console.log("x")
        }
        style={styles.btns}
      >
        <Text style={styles.txtBtns}>{name}</Text>
      </TouchableOpacity>
      <Divider style={styles.divider} bold />
    </>
  );
});

export default function Settings() {
  return (
    <Animatable.View
      animation="fadeInUp"
      direction="alternate"
      style={styles.container}
    >
      <View style={styles.appBar}>
        <TouchableOpacity>
          <Icon color="white" size={rf(40)} source={"arrow-left"} />
        </TouchableOpacity>
        <Text style={styles.appBarTxt}>Settings</Text>
      </View>
      <Divider style={styles.divider} bold />
      <View style={styles.contant}>
        <BtnMenu name={"Edit Profile"} />
        <BtnMenu name={"Log Out"} />
      </View>
    </Animatable.View>
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
  contant: {},
  btns: {
    marginVertical: rh(20),
    marginLeft: rw(31),
  },
  txtBtns: {
    fontFamily: Fonts.PoppinsSemiBold,
    color: Colors.TextColor,
    fontSize: rf(20),
  },
  divider: {
    backgroundColor: Colors.divider,
  },
});
