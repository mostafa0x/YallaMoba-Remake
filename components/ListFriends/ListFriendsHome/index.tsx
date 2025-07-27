import { rh, rw } from "@/utils/dimensions";
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
          data={[1, 2, 3, 4, 5, 6, 7, 8, 3, 5, 6, 7]}
          keyExtractor={(_, index) => index.toString()}
          estimatedItemSize={rw(66)}
          renderItem={({ item, index }) => <ItemListFriedns key={index} />}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1 },
  containeFlashList: {
    width: "100%",
    height: rh(100),
    flexDirection: "row",
  },
  flashList: {},
  ItemSeparator: {
    width: rw(15),
  },
});
