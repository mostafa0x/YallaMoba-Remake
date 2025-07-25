import * as React from "react";
import { memo } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const BackIcon = (props: SvgProps) => (
  <Svg width={11} height={20} viewBox="0 0 11 20" fill="none" {...props}>
    <Path
      stroke="#B1ACC7"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2.96}
      d="m9.098 17.84-6.52-6.52c-.77-.77-.77-2.03 0-2.8L9.098 2"
    />
  </Svg>
);
export default memo(BackIcon);
