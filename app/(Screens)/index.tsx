import CustomInputField from "@/components/CustomInputField";
import ListFriendsHome from "@/components/ListFriendsHome";
import { rh, rw } from "@/utils/dimensions";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={Style.contianer}>
      <View style={Style.appBar}>
        <CustomInputField name={"Explore"} label={"Explore"} />
      </View>
      <View>
        <ListFriendsHome />
      </View>
    </View>
  );
}

const Style = StyleSheet.create({
  contianer: {
    marginTop: rh(19),
  },
  appBar: {
    justifyContent: "center",
    marginLeft: rw(39),
  },
});
