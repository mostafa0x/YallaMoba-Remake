import { rh, rw } from "@/utils/dimensions";
import { Image } from "expo-image";
import React, { memo } from "react";
import { StyleSheet, View } from "react-native";

function ReelCard() {
  return (
    <View style={styles.container}>
      <Image
        contentFit="contain"
        style={styles.img}
        source={require("../../../assets/images/ReelList/defImge.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: rw(307),
    height: rh(210),
  },
});

export default memo(ReelCard);
