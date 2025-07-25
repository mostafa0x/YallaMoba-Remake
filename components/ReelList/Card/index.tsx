import { rh } from "@/utils/dimensions";
import { FlashList } from "@shopify/flash-list";
import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import DeatilsProfile from "../DeatilsProfile";
import ReelListItems from "../Item";

function ReelListCard({ calledFromHome }: { calledFromHome: boolean }) {
  return (
    <View style={styles.container}>
      <View style={styles.flashListContainer}>
        <FlashList
          contentContainerStyle={{
            paddingBottom: calledFromHome ? rh(300) : rh(480),
          }}
          ItemSeparatorComponent={() => (
            <View style={styles.ItemSeparator}></View>
          )}
          data={[1, 2, 1, 2, 1, 2, 1, 2, 1, 2]}
          estimatedItemSize={417}
          renderItem={() => <ReelListItems />}
          ListHeaderComponent={() => {
            return <DeatilsProfile />;
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
