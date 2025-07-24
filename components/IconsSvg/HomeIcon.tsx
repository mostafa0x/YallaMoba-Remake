import { Colors } from "@/constants/Colors";
import * as React from "react";
import { memo } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const HomeIcon = (props: SvgProps & { isActive: boolean }) => (
  <Svg width={30} height={30} viewBox="0 0 30 30" fill="none" {...props}>
    <Path
      fill={props.isActive ? Colors.isActiveIcon : Colors.unActiveIcon}
      d="M15.48 22.241c-.81.001-1.587.293-2.159.81-.572.52-.894 1.222-.895 1.955V30h6.107v-4.994c-.001-.733-.323-1.436-.895-1.954a3.225 3.225 0 0 0-2.159-.81Z"
    />
    <Path
      fill={props.isActive ? Colors.isActiveIcon : Colors.unActiveIcon}
      d="M28.2 7.94 17.703.81a4.843 4.843 0 0 0-2.7-.81c-.973 0-1.92.284-2.7.81L1.806 7.94C1.247 8.32.793 8.81.48 9.377A3.774 3.774 0 0 0 0 11.199v14.26c.002 1.08.477 2.115 1.32 2.879.844.764 1.987 1.194 3.18 1.196h4.879V24.54c0-1.35.593-2.646 1.648-3.601 1.054-.955 2.485-1.492 3.976-1.492 1.491.001 2.921.538 3.976 1.493 1.054.955 1.647 2.25 1.649 3.6v4.994H25.5c1.193-.002 2.337-.431 3.18-1.195.844-.764 1.319-1.8 1.32-2.88V11.2a3.792 3.792 0 0 0-.479-1.82 4.229 4.229 0 0 0-1.32-1.44Z"
    />
  </Svg>
);

export default memo(HomeIcon);
