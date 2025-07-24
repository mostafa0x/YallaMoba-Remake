import { Colors } from "@/constants/Colors";
import * as React from "react";
import { memo } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const ProfileIcon = (props: SvgProps & { isActive: boolean }) => (
  <Svg width={30} height={30} viewBox="0 0 30 30" fill="none" {...props}>
    <Path
      fill={props.isActive ? Colors.isActiveIcon : Colors.unActiveIcon}
      d="M15 18c4.136 0 7.488-4.03 7.488-9S19.136 0 15 0c-4.136 0-7.488 4.03-7.488 9s3.352 9 7.488 9ZM29.677 25.65c-1.348-2.7-3.894-4.95-7.189-6.3-.898-.3-1.947-.3-2.695.15-1.498.9-2.996 1.35-4.793 1.35-1.797 0-3.295-.45-4.792-1.35-.75-.3-1.797-.45-2.696 0-3.295 1.35-5.84 3.6-7.189 6.3-1.048 1.95.6 4.2 2.846 4.2H26.83c2.247 0 3.894-2.25 2.846-4.35Z"
    />
  </Svg>
);
export default memo(ProfileIcon);
