import AvatarIcon from "@/components/AvatarIcon";
import { Colors } from "@/constants/Colors";
import { rf, rw } from "@/utils/dimensions";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-paper";

export default function EditAvatar() {
  return (
    <View style={styles.continaer}>
      <TouchableOpacity>
        <Icon color={Colors.EditAvatrBtn} size={rf(35)} source={"less-than"} />
      </TouchableOpacity>
      <AvatarIcon size={100} />
      <TouchableOpacity>
        <Icon
          color={Colors.EditAvatrBtn}
          size={rf(35)}
          source={"greater-than"}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  continaer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: rw(25),
  },
});
