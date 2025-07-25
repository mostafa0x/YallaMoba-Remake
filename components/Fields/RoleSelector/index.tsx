import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { rf, rh, rw } from "@/utils/dimensions";
import React, { useRef } from "react";
import { StyleSheet } from "react-native";
import { List } from "react-native-paper";

interface props {
  isOpenMenu: boolean;
  setIsOpenMenu: any;
}

export default function RoleSelector({ setIsOpenMenu, isOpenMenu }: props) {
  const Roles = useRef(["MM", "Exp", "Jungle", "Mid", "Roam"]);
  return (
    <List.Accordion
      title="Select Your Role"
      titleStyle={Style.title}
      style={Style.mainlist}
      expanded={isOpenMenu}
      theme={{ colors: { background: "transparent" } }}
      onPress={() =>
        setIsOpenMenu((prev: boolean) => (prev == true ? false : true))
      }
    >
      {Roles.current.map((role, index: number) => (
        <List.Item
          onPress={() => {
            setIsOpenMenu(false);
          }}
          key={index}
          title={role}
          titleStyle={Style.title}
          style={Style.list}
        />
      ))}
    </List.Accordion>
  );
}

const Style = StyleSheet.create({
  title: {
    fontSize: rf(14),
    color: Colors.TextColor,
    fontFamily: Fonts.PoppinsSemiBold,
  },
  mainlist: {
    backgroundColor: "transparent",
    borderWidth: rw(3),
    borderRadius: rw(25),
    borderColor: Colors.boderColor,
    width: rw(200),
    height: rh(53),
  },
  list: {
    backgroundColor: "#635A8F",
    borderRadius: rw(10),
    marginVertical: rh(4),
  },
});
