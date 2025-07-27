import HeaderInfo from "@/components/HeaderInfo";
import ReactionsReel from "@/components/ReelList/ReactionsReel";
import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { StateType } from "@/types/store/StateType";
import { rf, rh, rw } from "@/utils/dimensions";
import { Skeleton } from "moti/skeleton";
import React, { memo } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import ReelCard from "../ReelCard";

function ReelListItems() {
  const { isLoadingPage } = useSelector((state: StateType) => state.AppReducer);
  return (
    <View style={styles.container}>
      {/*Header */}
      <HeaderInfo isLoadingPage={isLoadingPage} />
      {/*Des */}
      <View style={styles.des}>
        {isLoadingPage ? (
          <Skeleton show={isLoadingPage} width={"100%"}></Skeleton>
        ) : (
          <ScrollView>
            <Text numberOfLines={2} ellipsizeMode="tail" style={styles.desTxt}>
              hi dsajdksajlcj ldvj hlsdf fdsfjdslk ... hi dsajdksajlcj ldvj
              hlsdf fdsfjdslk ... hi dsajdksajlcj ldvj hlsdf fdsfjdslk ... hi
              dsajdksajlcj ldvj hlsdf fdsfjdslk ... hi dsajdksajlcj ldvj hlsdf
              fdsfjdslk ... hi dsajdksajlcj ldvj hlsdf fdsfjdslk
            </Text>
          </ScrollView>
        )}
      </View>
      {/*Reel */}
      <View style={styles.reelCard}>
        <ReelCard isLoadingPage={isLoadingPage} />
      </View>
      {/*Reactions */}
      {isLoadingPage ? null : <ReactionsReel />}
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
