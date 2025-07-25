import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import SearchListCard from "./card";

function SearchList() {
  return (
    <View style={styles.container}>
      <SearchListCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default memo(SearchList);
