import AvatarIcon from "@/components/AvatarIcon";
import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { rf, rh, rw } from "@/utils/dimensions";
import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";

function ItemListFriedns() {
  return (
    <View style={styles.container}>
      <AvatarIcon />
      <View style={styles.txtContainer}>
        <Text style={styles.name}>name Player</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: rw(66),
    height: rh(100),
  },
  txtContainer: {},

  name: {
    textAlign: "center",
    width: "100%",
    marginTop: rh(4.5),
    fontSize: rf(12),
    fontFamily: Fonts.PoppinsMedium,
    color: Colors.TextColor,
  },
});

export default memo(ItemListFriedns);
