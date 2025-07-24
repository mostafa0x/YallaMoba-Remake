import AvatarIcon from "@/components/AvatarIcon";
import ReactionsReel from "@/components/ReelList/ReactionsReel";
import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { rf, rh, rw } from "@/utils/dimensions";
import React, { memo } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-paper";
import ReelCard from "../ReelCard";

function ReelListItems() {
  return (
    <View style={styles.container}>
      {/*Header */}
      <View style={styles.headerContainer}>
        <View style={styles.headerContainerLeft}>
          <AvatarIcon />
          <View>
            <Text style={styles.name}>NamePlayer</Text>
            <Text style={styles.agoTime}>5 minute</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity>
            <Icon
              size={rf(30)}
              color={Colors.menuInReelList}
              source={"dots-vertical"}
            />
          </TouchableOpacity>
        </View>
      </View>
      {/*Des */}
      <View style={styles.des}>
        <ScrollView>
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.desTxt}>
            hi dsajdksajlcj ldvj hlsdf fdsfjdslk ... hi dsajdksajlcj ldvj hlsdf
            fdsfjdslk ... hi dsajdksajlcj ldvj hlsdf fdsfjdslk ... hi
            dsajdksajlcj ldvj hlsdf fdsfjdslk ... hi dsajdksajlcj ldvj hlsdf
            fdsfjdslk ... hi dsajdksajlcj ldvj hlsdf fdsfjdslk
          </Text>
        </ScrollView>
      </View>
      {/*Reel */}
      <View style={styles.reelCard}>
        <ReelCard />
      </View>
      {/*Reactions */}
      <ReactionsReel />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: rw(337),
    height: rh(417),
    backgroundColor: Colors.ReelListBack,
    borderRadius: rw(20),
    paddingVertical: rh(14),
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: rw(15),
  },
  headerContainerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: rw(6),
  },

  name: {
    fontSize: rf(15),
    fontFamily: Fonts.PoppinsMedium,
    color: Colors.TextColor,
  },
  agoTime: {
    color: Colors.txtAgoTime,
    fontSize: rf(12),
    fontFamily: Fonts.PoppinsMedium,
  },
  des: {
    width: "100%",
    marginTop: rh(23),
    paddingHorizontal: rw(23),
    height: rh(50),
    overflow: "hidden",
  },
  desTxt: {
    fontFamily: Fonts.PoppinsMedium,
    fontSize: rf(13),
    color: Colors.TextColor,
  },
  reelCard: { marginTop: rh(5), paddingHorizontal: rw(23) },
});

export default memo(ReelListItems);
