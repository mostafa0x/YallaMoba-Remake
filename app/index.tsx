import SearchbarFC from "@/components/Fields/SearchbarFC";
import ListFriendsHome from "@/components/ListFriends/ListFriendsHome";
import ReelListCard from "@/components/ReelList/Card";
import { rh, rw } from "@/utils/dimensions";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={Style.contianer}>
      <View style={Style.appBar}>
        {/* <CustomInputField name={"Explore"} label={"Explore"} /> */}
        <SearchbarFC />
      </View>
      <View style={Style.listFriend}>
        <ListFriendsHome />
      </View>

      <View style={Style.contant}>
        <ReelListCard calledFromHome={true} />
      </View>
    </View>
  );
}

const Style = StyleSheet.create({
  contianer: {
    marginTop: rh(19),
  },
  appBar: {
    justifyContent: "center",
    marginLeft: rw(39),
  },
  listFriend: {
    marginTop: rh(26),
    marginLeft: rw(32),
  },
  contant: {
    marginTop: rh(130),
    marginLeft: rw(32),
    marginRight: rw(19),
  },
});
