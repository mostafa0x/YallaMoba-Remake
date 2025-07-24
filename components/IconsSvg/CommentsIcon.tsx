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
const CommentsIcon = (props: SvgProps) => (
  <Svg
    width={rw(26)}
    height={rh(26)}
    viewBox="0 0 26 26"
    fill="none"
    {...props}
  >
    <Path
      fill="url(#a)"
      stroke="#CFB6DD"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 1H5C2.8 1 1 2.965 1 5.367v10.916c0 2.401 1.8 4.366 4 4.366v3.275c0 .983 1.1 1.42 1.7.765l3.7-4.04H21c2.2 0 4-1.965 4-4.366V5.367C25 2.965 23.2 1 21 1Zm-6 13.1H9c-.6 0-1-.437-1-1.092s.4-1.092 1-1.092h6c.6 0 1 .437 1 1.092s-.4 1.092-1 1.092Zm2-4.367H9c-.6 0-1-.437-1-1.092S8.4 7.55 9 7.55h8c.6 0 1 .436 1 1.091s-.4 1.092-1 1.092Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={13}
        x2={13}
        y1={1}
        y2={25}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.086} stopColor="#3B20BB" />
        <Stop offset={0.987} stopColor="#931FDD" stopOpacity={0.58} />
      </LinearGradient>
    </Defs>
  </Svg>
);
const Memo = memo(CommentsIcon);
export default Memo;
