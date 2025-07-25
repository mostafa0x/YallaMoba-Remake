import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { rf, rw } from "@/utils/dimensions";
import { usePathname, useRouter } from "expo-router";
import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";

function SearchbarFC({ placeholder = "Explore" }: { placeholder: string }) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = React.useState("");
  const pathName = usePathname();

  const Seraching = () => {
    router.push({ pathname: "/Search", params: { keyWord: searchQuery } });
  };

  return (
    <View style={styles.container}>
      <Searchbar
        onIconPress={Seraching}
        onSubmitEditing={Seraching}
        inputStyle={styles.input}
        style={{ backgroundColor: Colors.customInputBackColor }}
        placeholder={placeholder}
        placeholderTextColor={Colors.magnify}
        onChangeText={setSearchQuery}
        value={searchQuery}
        iconColor={Colors.magnify}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { justifyContent: "center", alignItems: "center", width: rw(284) },
  input: {
    color: Colors.customInputText,
    fontFamily: Fonts.PoppinsMedium,
    fontSize: rf(17),
    textAlignVertical: "center",
  },
});

export default memo(SearchbarFC);
