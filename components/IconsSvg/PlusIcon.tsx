import * as React from "react";
import { memo } from "react";
import Svg, { Circle, Path, SvgProps } from "react-native-svg";
const PlusIcon = (props: SvgProps) => (
  <Svg width={70} height={70} viewBox="0 0 70 70" fill="none" {...props}>
    <Circle cx={35} cy={35} r={35} fill="#635A8F" />
    <Path
      stroke="#CECBD2"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={5.654}
      d="m34.814 24.919.46 22.917M23.585 36.607l22.917-.46"
    />
  </Svg>
);

export default memo(PlusIcon);
