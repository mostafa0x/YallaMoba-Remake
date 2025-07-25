import CustomButton from "@/components/Fields/CustomButton";
import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { rf, rh, rw } from "@/utils/dimensions";
import { FlashList } from "@shopify/flash-list";
import React, { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import ReelListItems from "../Item";

function ReelListCard({ calledFromHome }: { calledFromHome: boolean }) {
  return (
    <View style={styles.container}>
      <View style={styles.flashListContainer}>
        <FlashList
          contentContainerStyle={{
            paddingBottom: calledFromHome ? rh(300) : rh(710),
          }}
          ItemSeparatorComponent={() => (
            <View style={styles.ItemSeparator}></View>
          )}
          data={[1, 2]}
          estimatedItemSize={417}
          renderItem={() => <ReelListItems />}
          ListHeaderComponent={() => {
            return (
              <>
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
                </View>
                {/*btns*/}
                <View style={styles.btnsContainer}>
                  <CustomButton Width={130} context={"Follow"} />
                </View>
              </>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: "100%", height: "100%" },
  flashListContainer: {
    width: "100%",
    height: "100%",
  },
  ItemSeparator: {
    height: rh(28),
  },
  detiles: {
    height: rh(61),
    alignItems: "center",
    justifyContent: "center",
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
    marginRight: rw(25),
    justifyContent: "center",
    alignItems: "center",
    marginBottom: rh(15),
  },
});

export default memo(ReelListCard);
