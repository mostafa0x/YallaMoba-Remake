import { rf, rh, rw } from "@/utils/dimensions";
import { LinearGradient } from "expo-linear-gradient";
import { Skeleton } from "moti/skeleton";
import React, { memo } from "react";
import { Avatar } from "react-native-paper";

function AvatarIcon({
  size = 60,
  isLoading,
}: {
  size: number;
  isLoading: boolean;
}) {
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
      {isLoading ? (
        <Skeleton
          radius={"round"}
          show={isLoading}
          width={rw(size - 3)}
          height={rh(size - 3)}
        />
      ) : (
        <Avatar.Image
          size={rf(size)}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBlNYFmHwzixn-mZOW9UWGgxMvt4Tx0bL_Jw&s",
          }}
        />
      )}
    </LinearGradient>
  );
}

export default memo(AvatarIcon);
