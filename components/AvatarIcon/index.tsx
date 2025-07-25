import { rf, rh, rw } from "@/utils/dimensions";
import { LinearGradient } from "expo-linear-gradient";
import React, { memo } from "react";
import { View } from "react-native";
import { Avatar } from "react-native-paper";

function AvatarIcon({ size = 60 }: { size: number }) {
  return (
    <LinearGradient
      colors={["#5334C7", "#C79BE7"]}
      locations={[0, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={{
        width: rw(size + 3),
        height: rh(size + 3),
        borderRadius: rw(100),
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View>
        <Avatar.Image
          size={rf(size)}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBlNYFmHwzixn-mZOW9UWGgxMvt4Tx0bL_Jw&s",
          }}
        />
      </View>
    </LinearGradient>
  );
}

export default memo(AvatarIcon);
