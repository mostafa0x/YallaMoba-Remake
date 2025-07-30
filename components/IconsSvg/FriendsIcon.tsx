import * as React from "react";
import { memo } from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
const FriendsIcon = (props: SvgProps) => (
  <Svg width={18} height={18} viewBox="0 0 18 18" fill="none" {...props}>
    <Path
      stroke="#E5D7F7"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.023}
      d="M6.989 8.167a1.24 1.24 0 0 0-.225 0 3.014 3.014 0 0 1-2.912-3.02c0-1.67 1.35-3.028 3.027-3.028a3.024 3.024 0 0 1 .11 6.048ZM11.932 3.483a2.385 2.385 0 0 1 2.386 2.386 2.39 2.39 0 0 1-2.298 2.387.771.771 0 0 0-.177 0M3.58 10.683c-1.65 1.105-1.65 2.905 0 4.003 1.874 1.254 4.95 1.254 6.825 0 1.65-1.105 1.65-2.905 0-4.003-1.869-1.247-4.944-1.247-6.826 0ZM13.248 14.393a3.3 3.3 0 0 0 1.337-.594c1.063-.797 1.063-2.113 0-2.911a3.39 3.39 0 0 0-1.317-.586"
    />
  </Svg>
);
export default memo(FriendsIcon);
