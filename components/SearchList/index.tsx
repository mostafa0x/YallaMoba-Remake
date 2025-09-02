import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import SearchListCard from "./card";

function SearchList({ isLoading }: { isLoading: boolean }) {
  return (
    <View style={styles.container}>
      <SearchListCard isLoading={isLoading} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default memo(SearchList);
