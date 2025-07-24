import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { rf, rh, rw } from "@/utils/dimensions";
import React, { memo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CommentsIcon from "../../IconsSvg/CommentsIcon";
import HeartIcon from "../../IconsSvg/HeartIcon";

function ReactionsReel() {
  return (
    <View style={styles.reactions}>
      <View style={styles.reactionsBox}>
        <View style={styles.reactionsIcon}>
          <TouchableOpacity>
            <HeartIcon width={rw(30)} height={rh(30)} />
          </TouchableOpacity>
          <Text style={styles.reactionsTxt}>999</Text>
        </View>
        <View style={styles.reactionsIcon}>
          <TouchableOpacity>
            <CommentsIcon width={rw(30)} height={rh(30)} />
          </TouchableOpacity>
          <Text style={styles.reactionsTxt}>999</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  reactions: {
    marginTop: rh(11),
    paddingHorizontal: rw(23),
    marginBottom: rh(14),
  },
  reactionsBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: rw(12),
  },
  reactionsIcon: {
    flexDirection: "row",
    alignItems: "center",
    gap: rw(4),
  },
  reactionsTxt: {
    fontSize: rf(13),
    color: Colors.reactionTxt,
    fontFamily: Fonts.PoppinsMedium,
    textAlign: "center",
  },
});

export default memo(ReactionsReel);
