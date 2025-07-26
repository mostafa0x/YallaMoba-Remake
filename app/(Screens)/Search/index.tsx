import SearchbarFC from "@/components/Fields/SearchbarFC";
import BackIcon from "@/components/IconsSvg/BackIcon";
import SearchList from "@/components/SearchList";
import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { rf, rh, rw } from "@/utils/dimensions";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Animatable from "react-native-animatable";

export default function Serach() {
  const { keyWord } = useLocalSearchParams();
  return (
    <View>
      {/**Header */}
      <Animatable.View
        animation="fadeInLeft"
        duration={800}
        style={styles.header}
      >
        <BackIcon width={rw(15)} height={rh(30)} />
        <SearchbarFC
          keyWord={Array.isArray(keyWord) ? keyWord[0] : keyWord}
          placeholder="Search"
        />
      </Animatable.View>
      <Animatable.View
        animation="fadeInUp"
        direction="alternate"
        style={styles.contant}
      >
        <Text style={styles.ResultsTxt}>Results : {keyWord}</Text>
        <SearchList />
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: rh(15),
    marginLeft: rw(31),
    alignItems: "center",
    flexDirection: "row",
    gap: rw(30),
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
