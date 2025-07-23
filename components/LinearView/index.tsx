import { BASE_HEIGHT, BASE_WIDTH, rh, rw } from "@/utils/dimensions";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";

export default function LinearView({ children }: any) {
  return (
    <LinearGradient
      colors={["#3B21B7", "#8B64DA", "#D195EE", "#CECBD3"]}
      locations={[0, 0.08, 0.73, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{
        width: rw(BASE_WIDTH),
        height: rh(BASE_HEIGHT),
        flex: 1,
      }}
    >
      {children}
    </LinearGradient>
  );
}
