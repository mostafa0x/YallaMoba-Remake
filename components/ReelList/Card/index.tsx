import { rh } from "@/utils/dimensions";
import { FlashList } from "@shopify/flash-list";
import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import DeatilsProfile from "../DeatilsProfile";
import ReelListItems from "../Item";

function ReelListCard({
  calledFromHome,
  isLoadingPage,
}: {
  calledFromHome: boolean;
  isLoadingPage: boolean;
}) {
  return (
    <View style={styles.container}>
      <View style={styles.flashListContainer}>
        <FlashList
          contentContainerStyle={{
            paddingBottom: calledFromHome ? rh(480) : rh(480),
          }}
          ItemSeparatorComponent={() => (
            <View style={styles.ItemSeparator}></View>
          )}
          data={isLoadingPage ? [1, 2, 3] : [1]}
          estimatedItemSize={rh(417)}
          renderItem={({ item, index }) => (
            <ReelListItems isLoadingPage={isLoadingPage} key={index} />
          )}
          ListHeaderComponent={() => {
            return calledFromHome ? null : (
              <DeatilsProfile isLoadingPage={isLoadingPage} />
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
});

export default memo(ReelListCard);
