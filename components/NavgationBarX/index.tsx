import { rf, rh, rw } from "@/utils/dimensions";
import { usePathname, useRouter } from "expo-router";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import HomeIcon from "../IconsSvg/HomeIcon";
import PlusIcon from "../IconsSvg/PlusIcon";
import ProfileIcon from "../IconsSvg/ProfileIcon";
import NavBack from "./NavBack";

export default function NavBar() {
  const router = useRouter();
  const pathName = usePathname();
  const inAuth = ["/SignIn", "/SignUp"].includes(pathName);
  return inAuth ? null : (
    <View
      style={{
        position: "absolute",
        bottom: rh(-40),
        left: 0,
        width: "100%",
        height: rf(90),
        zIndex: 50,
      }}
    >
      <View
        style={{
          position: "absolute",
          backgroundColor: "#E7E7E7",
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
          onPress={() => pathName !== "/" && router.push("/")}
          style={{ position: "absolute", bottom: rh(15), left: rw(20) }}
        >
          <HomeIcon
            isActive={pathName == "/" ? true : false}
            width={rw(40)}
            height={rh(40)}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{ position: "absolute", bottom: rh(40), left: rw(120) }}
        >
          <PlusIcon width={rw(70)} height={rh(70)} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => pathName !== "/Proflie" && router.push("/Profile")}
          style={{ position: "absolute", bottom: rh(15), right: rw(20) }}
        >
          <ProfileIcon
            isActive={pathName == "/Proflie" ? true : false}
            width={rw(40)}
            height={rh(40)}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
