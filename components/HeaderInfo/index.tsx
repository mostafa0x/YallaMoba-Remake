import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { rf, rw } from "@/utils/dimensions";
import { Skeleton } from "moti/skeleton";
import React, { memo } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-paper";
import AvatarIcon from "../AvatarIcon";

function HeaderInfo({ isLoadingPage }: { isLoadingPage: boolean }) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerContainerLeft}>
        <AvatarIcon isLoading={isLoadingPage} size={60} />
        <View>
          {isLoadingPage ? (
            <Skeleton width={rw(100)} show={true}></Skeleton>
          ) : (
            <Text style={styles.name}>NamePlayer</Text>
          )}
          {!isLoadingPage && <Text style={styles.agoTime}>5 minute</Text>}
        </View>
      </View>
      <View>
        {!isLoadingPage && (
          <TouchableOpacity>
            <Icon
              size={rf(30)}
              color={Colors.menuInReelList}
              source={"dots-vertical"}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
});

export default memo(HeaderInfo);
