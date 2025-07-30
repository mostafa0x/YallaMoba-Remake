import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { AuthType } from "@/types/Auth/AuthType";
import { rf, rh, rw } from "@/utils/dimensions";
import { FormikProps } from "formik";
import React, { useRef } from "react";
import { StyleSheet } from "react-native";
import { List } from "react-native-paper";

interface props {
  isOpenMenu: boolean;
  setIsOpenMenu: any;
  Formik: FormikProps<AuthType>;
}

export default function RoleSelector({
  setIsOpenMenu,
  isOpenMenu,
  Formik,
}: props) {
  const Roles = useRef(["MM", "Exp", "Jungle", "Mid", "Roam"]);
  const ActivyRole = Formik?.values?.role || "roam";

  return (
    <List.Accordion
      title={ActivyRole.charAt(0).toLocaleUpperCase() + ActivyRole.slice(1)}
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
            Formik.setFieldValue("role", role);
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
    backgroundColor: Colors.listBackground,
    borderRadius: rw(10),
    marginVertical: rh(4),
  },
});
