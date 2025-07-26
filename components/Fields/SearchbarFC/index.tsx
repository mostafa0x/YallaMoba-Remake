import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { rf, rw } from "@/utils/dimensions";
import { usePathname, useRouter } from "expo-router";
import React, { memo, useEffect } from "react";
import { StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
import { Searchbar } from "react-native-paper";

function SearchbarFC({
  placeholder = "Explore",
  keyWord,
}: {
  placeholder: string;
  keyWord?: string;
}) {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = React.useState("");
  const pathName = usePathname();

  useEffect(() => {
    if (keyWord) {
      setSearchQuery(keyWord);
    }

    return () => {};
  }, []);

  const Seraching = () => {
    if (!searchQuery) return;
    router.push({
      pathname: "/Search",
      params: { keyWord: searchQuery },
    });
  };

  return (
    <Animatable.View
      animation="fadeInLeft"
      duration={800}
      style={styles.container}
    >
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
    </Animatable.View>
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
