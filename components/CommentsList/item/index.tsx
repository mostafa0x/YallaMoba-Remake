import AvatarIcon from "@/components/AvatarIcon";
import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { rf, rh, rw } from "@/utils/dimensions";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-paper";

export default function CommentsItem() {
  return (
    <View style={styles.container}>
      <View style={styles.contant}>
        <AvatarIcon size={41} />
        <View style={styles.comment}>
          <View style={styles.commentHeader}>
            <Text style={styles.playerName}>Player Name</Text>
            <TouchableOpacity>
              <Icon
                size={rf(20)}
                color={Colors.menuInReelList}
                source={"dots-vertical"}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.commentTxt}>
            hi all im new here ! dsadsadas sadas das das dsadasdas a sdasd asd
            asdas dasdass sad adsa
          </Text>
        </View>
      </View>
      <View style={styles.reactions}>
        <Text style={styles.reactionsTxt}>1 hour</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  contant: {
    flexDirection: "row",
    gap: rw(5.41),
  },
  comment: {
    backgroundColor: Colors.commentContant,
    borderRadius: rw(18),
    width: rw(293),
    height: "auto",
    paddingHorizontal: rw(9.85),
    paddingVertical: rh(2),
  },
  commentHeader: { flexDirection: "row", justifyContent: "space-between" },
  playerName: {
    fontFamily: Fonts.PoppinsBold,
    fontSize: rf(14),
    color: Colors.commentName,
  },
  commentTxt: {
    fontFamily: Fonts.PoppinsMedium,
    fontSize: rf(14),
    color: Colors.commentName,
  },
  reactions: {
    marginLeft: rw(60),
    marginTop: rh(7),
  },
  reactionsTxt: {
    fontFamily: Fonts.PoppinsMedium,
    fontSize: rf(14),
    color: Colors.reactionCommentTxt,
  },
});
