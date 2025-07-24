import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { rf, rh, rw } from "@/utils/dimensions";
import React, { memo } from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { Shadow } from "react-native-shadow-2";

interface props {
  context: string;
}

function Btn({ context }: props) {
  return (
    <Shadow distance={4} startColor="rgba(0, 0, 0, 0.25)" offset={[0, 4]}>
      <Button
        style={Style.mainBtn}
        labelStyle={Style.labelBtn}
        contentStyle={Style.contentBtn}
        buttonColor={Colors.BtnColor}
      >
        {context}
      </Button>
    </Shadow>
  );
}

const Style = StyleSheet.create({
  mainBtn: {
    borderRadius: rw(25),
    width: rw(320),
    height: rh(54),
  },
  contentBtn: {
    height: "100%",
  },
  labelBtn: {
    fontSize: rf(22),
    fontFamily: Fonts.InterBold,
    lineHeight: rh(23.7),
    color: Colors.BtnTxtColor,
  },
});

export default memo(Btn);
