import SearchListItem from "@/components/SearchList/item";
import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { rf, rh } from "@/utils/dimensions";
import { FlashList } from "@shopify/flash-list";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function SearchListCard({ isLoading }: { isLoading: boolean }) {
  return (
    <FlashList
      data={isLoading ? [1, 2, 3] : [1, 3, 3, 5, 6, 1, 3, 3, 5, 6, 3, 5, 6, 7]}
      keyExtractor={(_, index) => index.toString()}
      contentContainerStyle={styles.flashListContiner}
      estimatedItemSize={93}
      renderItem={() => <SearchListItem isLoading={isLoading} />}
      ListEmptyComponent={() => (
        <View style={styles.emptyList}>
          <Text style={styles.emptyListTxt}>no Results</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  emptyList: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: rh(100),
  },
  emptyListTxt: {
    fontFamily: Fonts.PoppinsMedium,
    color: Colors.TextColor,
    fontSize: rf(24),
  },
  flashListContiner: {
    paddingBottom: rh(320),
  },
});
