import { rf, rh, rw } from "@/utils/dimensions";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import HomeIcon from "../IconsSvg/HomeIcon";
import ProfileIcon from "../IconsSvg/ProfileIcon";
import NavBack from "./NavBack";

export default function NavBar() {
  return (
    <View>
      <View
        style={{
          backgroundColor: "#E7E7E7",
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: rf(90),
        }}
      ></View>
      <View
        style={{
          position: "absolute",
          bottom: rh(70),
          left: rw(45),
        }}
      >
        <NavBack scaleX={1.4} scaleY={1.3} />
        <TouchableOpacity
          style={{ position: "absolute", bottom: rh(15), left: rw(20) }}
        >
          <HomeIcon width={rw(40)} height={rh(40)} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ position: "absolute", bottom: rh(15), right: rw(20) }}
        >
          <ProfileIcon width={rw(40)} height={rh(40)} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
