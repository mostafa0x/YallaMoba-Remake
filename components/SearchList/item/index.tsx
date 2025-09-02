import AvatarIcon from "@/components/AvatarIcon";
import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { rf, rh, rw } from "@/utils/dimensions";
import { Skeleton } from "moti/skeleton";
import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";

function SearchListItem({ isLoading }: { isLoading: boolean }) {
  return (
    <View style={styles.container}>
      <AvatarIcon isLoading={isLoading} size={60} />
      {isLoading ? (
        <Skeleton width={rw(150)} height={rh(20)} />
      ) : (
        <Text style={styles.playerName}>Name</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: rw(4),
    alignItems: "center",
    marginLeft: rw(34),
    marginRight: rw(20),
    marginTop: rh(13),
  },
  playerName: {
    fontFamily: Fonts.PoppinsBold,
    color: Colors.TextColor,
    fontSize: rf(18),
  },
});

export default memo(SearchListItem);
