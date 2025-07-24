import { rh } from "@/utils/dimensions";
import { FlashList } from "@shopify/flash-list";
import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import ReelListItems from "../Item";

function ReelListCard() {
  return (
    <View style={styles.container}>
      <View style={styles.flashListContainer}>
        <FlashList
          ItemSeparatorComponent={() => (
            <View style={styles.ItemSeparator}></View>
          )}
          data={[1, 2]}
          estimatedItemSize={100}
          renderItem={() => <ReelListItems />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  flashListContainer: {
    width: "100%",
    height: "100%",
    paddingBottom: rh(210),
  },
  ItemSeparator: {
    height: rh(28),
  },
});

export default memo(ReelListCard);
