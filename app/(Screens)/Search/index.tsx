import SearchbarFC from "@/components/Fields/SearchbarFC";
import SearchList from "@/components/SearchList";
import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { rf, rh, rw } from "@/utils/dimensions";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
export default function Serach() {
  const { keyWord } = useLocalSearchParams();
  return (
    <View>
      {/**Header */}
      <View style={styles.header}>
        <SearchbarFC placeholder="Search" />
      </View>
      <View style={styles.contant}>
        <Text style={styles.ResultsTxt}>Results : {keyWord}</Text>
        <SearchList />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: rh(15),
    alignItems: "center",
  },
  contant: {
    marginTop: rh(25),
    width: "100%",
    height: "100%",
  },
  ResultsTxt: {
    fontFamily: Fonts.PoppinsMedium,
    color: Colors.TextColor,
    fontSize: rf(14),
    marginHorizontal: rw(23),
  },
});
