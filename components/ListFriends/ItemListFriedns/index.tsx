import AvatarIcon from "@/components/AvatarIcon";
import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { rf, rh, rw } from "@/utils/dimensions";
import { Skeleton } from "moti/skeleton";
import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";

function ItemListFriedns({ isLoading }: { isLoading: boolean }) {
  return (
    <View style={styles.container}>
      <AvatarIcon isLoading={isLoading} size={58} />
      <View style={styles.txtContainer}>
        {isLoading ? (
          <Skeleton
            width={"100%"}
            height={rh(12)}
            transition={{
              type: "spring",
            }}
          />
        ) : (
          <Text style={styles.name}>name Player</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: rw(66),
    height: rh(100),
  },
  txtContainer: {
    marginTop: rh(5),
  },

  name: {
    textAlign: "center",
    width: "100%",
    marginTop: rh(4.5),
    fontSize: rf(12),
    fontFamily: Fonts.PoppinsMedium,
    color: Colors.TextColor,
  },
});

export default memo(ItemListFriedns);
