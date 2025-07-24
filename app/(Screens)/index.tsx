import AvatarIcon from "@/components/AvatarIcon";
import CustomButton from "@/components/Fields/CustomButton";
import EditIcon from "@/components/IconsSvg/EditIcon";
import ReelListCard from "@/components/ReelList/Card";
import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { rf, rh, rw } from "@/utils/dimensions";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/*AppBar */}
      <View></View>
      {/*Header Info*/}
      <View style={styles.header}>
        <AvatarIcon size={84} />
        <View style={styles.infoBox}>
          <Text style={styles.namePlayer}>Player Name</Text>
          <TouchableOpacity>
            <EditIcon />
          </TouchableOpacity>
        </View>
      </View>
      {/*Header detiels*/}
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
        <View style={styles.spbctor}></View>
      </View>
      {/*btns*/}
      <View style={styles.btnsContainer}>
        <CustomButton Width={130} context={"Follow"} />
      </View>
      {/*Contant*/}
      <View style={styles.contant}>
        <ReelListCard calledFromHome={false} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: rw(31),
  },
  appBar: {},
  header: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: rh(35),
  },
  namePlayer: {
    fontSize: rf(21),
    fontFamily: Fonts.PoppinsSemiBold,
    color: Colors.playerNameProfile,
    textAlign: "center",
  },
  infoBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: rw(6),
  },
  detiles: {
    height: rh(61),
    justifyContent: "center",
    alignItems: "center",
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
    justifyContent: "center",
    alignItems: "center",
  },
  contant: {
    marginTop: rh(25),
    alignItems: "center",
  },
});
