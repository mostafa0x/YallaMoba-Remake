import CustomButton from "@/components/Fields/CustomButton";
import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { rf, rh, rw } from "@/utils/dimensions";
import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ActivityIndicator } from "react-native-paper";

function DeatilsProfile({ isLoadingPage }: { isLoadingPage: boolean }) {
  return (
    <>
      {/*Header detiels*/}
      {!isLoadingPage ? (
        <View style={styles.detiles}>
          <View style={styles.colInfo}>
            <Text style={styles.count}>146</Text>
            <Text style={styles.nameCol}>post</Text>
          </View>
          <View style={styles.spbctor}></View>
          <View style={styles.colInfo}>
            <Text style={styles.count}>12k</Text>
            <Text style={styles.nameCol}>Followers</Text>
          </View>
          <View style={styles.spbctor}></View>
          <View style={styles.colInfo}>
            <Text style={styles.count}>1k</Text>
            <Text style={styles.nameCol}>Following</Text>
          </View>
        </View>
      ) : (
        <View style={styles.Indicator}>
          <ActivityIndicator size={rf(50)} />
        </View>
      )}
      {/*btns*/}
      {isLoadingPage ? (
        <View style={styles.btnSkelton}></View>
      ) : (
        <View style={styles.btnsContainer}>
          {isLoadingPage ? (
            <CustomButton Width={130} context={"Follow"} />
          ) : null}
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  ItemSeparator: {
    height: rh(28),
  },
  detiles: {
    height: rh(61),
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: rw(20),
    marginTop: rh(13),
  },
  count: {
    fontFamily: Fonts.PoppinsSemiBold,
    fontSize: rf(28),
    color: Colors.TextColor,
    textAlign: "center",
  },
  nameCol: {
    fontFamily: Fonts.PoppinsLight,
    fontSize: rf(16),
    color: Colors.txtAgoTime,
    textAlign: "center",
  },
  spbctor: {
    width: rw(1),
    height: rh(55),
    backgroundColor: "white",
  },
  colInfo: {
    justifyContent: "center",
    alignItems: "center",
  },
  btnsContainer: {
    marginTop: rh(14),
    marginRight: rw(25),
    justifyContent: "center",
    alignItems: "center",
    marginBottom: rh(15),
  },
  Indicator: {
    marginRight: rh(30),
    alignItems: "center",
    justifyContent: "center",
  },
  btnSkelton: { marginBottom: rh(10) },
});

export default memo(DeatilsProfile);
