import SearchbarFC from "@/components/Fields/SearchbarFC";
import ReelListCard from "@/components/ReelList/Card";
import { rh, rw } from "@/utils/dimensions";
import { Skeleton } from "moti/skeleton";
import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import * as Animatable from "react-native-animatable";

function HomeSkeleton() {
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
        {[1, 2, 3, 4].map((item, index) => {
          return (
            <View
              style={{ paddingLeft: index == 0 ? rw(0) : rw(15) }}
              key={index}
            >
              <Skeleton
                colorMode="light"
                height={rh(60)}
                width={rw(60)}
                radius={"round"}
                show={true}
              ></Skeleton>
            </View>
          );
        })}
      </Animatable.View>

      <View style={Style.contant}>
        <ReelListCard calledFromHome={true} />
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
    flexDirection: "row",
    //  marginLeft: rw(32),
  },
  contant: {
    marginTop: rh(15),
    marginLeft: rw(32),
    marginRight: rw(19),
  },
});

export default memo(HomeSkeleton);
