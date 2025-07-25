import HeaderInfo from "@/components/HeaderInfo";
import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { rf, rh, rw } from "@/utils/dimensions";
import { FlashList } from "@shopify/flash-list";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Shadow } from "react-native-shadow-2";
import CommentsItem from "../item";

export default function CommentsCard() {
  return (
    <View style={styles.continer}>
      <HeaderInfo />
      <Shadow
        style={styles.commetnsContiner}
        distance={12}
        startColor="rgba(0, 0, 0, 0.25)"
        offset={[rw(2), rh(8)]}
      >
        <FlashList
          data={[1, 2]}
          contentContainerStyle={styles.flashListContiner}
          keyExtractor={(_, index) => index.toString()}
          renderItem={() => <CommentsItem />}
          estimatedItemSize={72}
          ListEmptyComponent={() => (
            <View style={styles.emptyList}>
              <Text style={styles.emptyListTxt}>No Comments</Text>
            </View>
          )}
        />
      </Shadow>
    </View>
  );
}

const styles = StyleSheet.create({
  continer: {
    width: "100%",
    height: "100%",
    marginTop: rh(10),
  },
  commetnsContiner: {
    width: "100%",
    height: "100%",
    marginTop: rh(14),
    borderRadius: rw(40),
    backgroundColor: Colors.CommenitBack,
  },
  flashListContiner: {
    paddingTop: rh(36),
    paddingBottom: rh(100),
    paddingHorizontal: rw(19),
  },
  emptyList: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: rh(100),
  },
  emptyListTxt: {
    fontFamily: Fonts.PoppinsBold,
    color: Colors.TextColor,
    fontSize: rf(24),
  },
});
