import { rh, rw } from "@/utils/dimensions";
import * as React from "react";
import { memo } from "react";
import Svg, {
  Defs,
  LinearGradient,
  Path,
  Stop,
  SvgProps,
} from "react-native-svg";

const HeartIcon = ({ width = rw(24), height = rh(24), ...props }: SvgProps) => (
  <Svg width={width} height={height} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fill="url(#a)"
      stroke="#CFB6DD"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={12}
        x2={12}
        y1={3.1}
        y2={20.9}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.086} stopColor="#3B20BB" />
        <Stop offset={0.987} stopColor="#931FDD" stopOpacity={0.58} />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default memo(HeartIcon);
