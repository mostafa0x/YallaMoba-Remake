import AvatarIcon from "@/components/AvatarIcon";
import BackIcon from "@/components/IconsSvg/BackIcon";
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
      <View style={styles.appBar}>
        <TouchableOpacity>
          <BackIcon width={rw(11)} height={rh(30)} />
        </TouchableOpacity>
        <Text style={styles.namePlayer}>Player Name</Text>
      </View>
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
      {/*Contant*/}
      <View style={styles.contant}>
        <ReelListCard calledFromHome={false} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: rh(13),
    // marginLeft: rw(31),
  },
  appBar: {
    marginLeft: rw(31),
    flexDirection: "row",
    gap: rw(10),
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: rh(20),
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

  contant: {
    marginTop: rh(10),
    alignItems: "center",
    marginLeft: rw(31),
  },
});
