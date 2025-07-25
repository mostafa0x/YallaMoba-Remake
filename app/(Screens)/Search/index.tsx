import SearchbarFC from "@/components/Fields/SearchbarFC";
import SearchListItem from "@/components/SearchList/item";
import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { rf, rh, rw } from "@/utils/dimensions";
import { FlashList } from "@shopify/flash-list";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
export default function Serach() {
  const { keyWord } = useLocalSearchParams();
  return (
    <View>
      {/**Header */}
      <View style={styles.header}>
        <SearchbarFC placeholder="Search" />
      </View>
      <View style={styles.contant}>
        <Text style={styles.ResultsTxt}>Results : {keyWord}</Text>
        <FlashList
          data={[1, 3, 3, 5, 6, 1, 3, 3, 5, 6, 3, 5, 6, 7]}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={styles.flashListContiner}
          renderItem={() => <SearchListItem />}
          ListEmptyComponent={() => (
            <View style={styles.emptyList}>
              <Text style={styles.emptyListTxt}>no Results</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: rh(15),
    alignItems: "center",
  },
  contant: {
    marginTop: rh(25),
    width: "100%",
    height: "100%",
  },
  ResultsTxt: {
    fontFamily: Fonts.PoppinsMedium,
    color: Colors.TextColor,
    fontSize: rf(14),
    marginHorizontal: rw(23),
  },
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
    paddingBottom: rh(300),
  },
});
