import AvatarIcon from "@/components/AvatarIcon";
import BackIcon from "@/components/IconsSvg/BackIcon";
import ReelListCard from "@/components/ReelList/Card";
import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { StateType } from "@/types/store/StateType";
import { rf, rh, rw } from "@/utils/dimensions";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Skeleton } from "moti/skeleton";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { Icon } from "react-native-paper";
import { useSelector } from "react-redux";

export default function Profile() {
  const { isLoadingProfile } = useSelector(
    (state: StateType) => state.AppReducer
  );
  const router = useRouter();
  return (
    <Animatable.View
      animation="fadeInUp"
      direction="alternate"
      style={styles.container}
    >
      {/*AppBar */}
      <View style={styles.appBar}>
        <View style={styles.appBarLeftSide}>
          <TouchableOpacity>
            <BackIcon width={rw(11)} height={rh(30)} />
          </TouchableOpacity>
        </View>

        {isLoadingProfile ? null : (
          <TouchableOpacity onPress={() => router.push("/Settings")}>
            <Icon
              size={rf(30)}
              color={Colors.menuInReelList}
              source={"dots-vertical"}
            />
          </TouchableOpacity>
        )}
      </View>
      {/*Header Info*/}

      <Animatable.View
        animation="zoomIn"
        direction="alternate"
        style={styles.header}
      >
        <AvatarIcon isLoading={isLoadingProfile} size={84} />
        <View style={styles.infoBox}>
          {isLoadingProfile ? (
            <View style={styles.skeletonInfoBox}>
              <Skeleton width={rw(100)} height={rh(15)} />
            </View>
          ) : (
            <>
              <Text style={styles.namePlayer}>Player Name</Text>
              {/* <TouchableOpacity>
            <EditIcon />
          </TouchableOpacity> */}
              <Image
                style={styles.RoleImg}
                source={require("../../../assets/RoleIcons/mid.webp")}
              />
            </>
          )}
        </View>
      </Animatable.View>
      {/*Contant*/}
      <View style={styles.contant}>
        <ReelListCard isLoadingPage={isLoadingProfile} calledFromHome={false} />
      </View>
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: rh(13),
    // marginLeft: rw(31),
  },
  appBar: {
    marginHorizontal: rw(16),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  appBarLeftSide: {
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
  RoleImg: {
    width: rw(25),
    height: rh(25),
  },
  skeletonInfoBox: {
    marginTop: rh(10),
    gap: rh(10),
  },
});
