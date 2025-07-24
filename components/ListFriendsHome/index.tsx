import { FlashList } from "@shopify/flash-list";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ListFriendsHome() {
  return (
    <View style={styles.container}>
      <View style={styles.containeFlashList}>
        <FlashList
          style={styles.flashList}
          data={[]}
          renderItem={() => <Text>Hi</Text>}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  containeFlashList: {},
  flashList: {},
});
