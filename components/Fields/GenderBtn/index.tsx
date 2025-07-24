import { Colors } from "@/constants/Colors";
import { rf, rh, rw } from "@/utils/dimensions";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function GenderBtn({ label }: { label: string }) {
  return (
    <TouchableOpacity>
      <View
        style={{
          borderWidth: rw(2.96),
          width: rw(87),
          height: rh(54),
          borderColor: Colors.boderColor,
          borderRadius: rw(25),
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: rf(17),
            fontWeight: "medium",
            color: Colors.TextColor,
          }}
        >
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
