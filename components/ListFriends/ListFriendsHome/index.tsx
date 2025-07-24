import { rh } from "@/utils/dimensions";
import { FlashList } from "@shopify/flash-list";
import React from "react";
import { StyleSheet, View } from "react-native";
import ItemListFriedns from "../ItemListFriedns";

export default function ListFriendsHome() {
  return (
    <View style={styles.container}>
      <View style={styles.containeFlashList}>
        <FlashList
          horizontal
          ItemSeparatorComponent={() => <View style={styles.ItemSeparator} />}
          data={[1, 2, 3, 4, 5, 6, 7, 8]}
          keyExtractor={(_, index) => index.toString()}
          estimatedItemSize={66}
          renderItem={() => <ItemListFriedns />}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  containeFlashList: {
    width: "100%",
    height: rh(100),
    flexDirection: "row",
  },
  flashList: {},
  ItemSeparator: {
    width: 20,
  },
});
