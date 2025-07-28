import SearchbarFC from "@/components/Fields/SearchbarFC";
import ListFriendsHome from "@/components/ListFriends/ListFriendsHome";
import ReelListCard from "@/components/ReelList/Card";
import { StateType } from "@/types/store/StateType";
import { rh, rw } from "@/utils/dimensions";
import React from "react";
import { StyleSheet, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { useSelector } from "react-redux";

export default function HomeScreen() {
  const { isLoadingHome } = useSelector((state: StateType) => state.AppReducer);
  return (
    <Animatable.View
      animation="fadeInUp"
      direction="alternate"
      style={Style.contianer}
    >
      <View style={Style.appBar}>
        {/* <CustomInputField name={"Explore"} label={"Explore"} /> */}
        <SearchbarFC placeholder="Explore" />
      </View>
      <Animatable.View
        animation="lightSpeedIn"
        direction="alternate"
        style={Style.listFriend}
      >
        <ListFriendsHome isLoading={isLoadingHome} />
      </Animatable.View>

      <View style={Style.contant}>
        <ReelListCard isLoadingPage={isLoadingHome} calledFromHome={true} />
      </View>
    </Animatable.View>
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
    flexGrow: 1,
    //  marginLeft: rw(32),
  },
  contant: {
    marginTop: rh(15),
    marginLeft: rw(32),
    marginRight: rw(19),
  },
});
