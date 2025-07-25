import * as React from "react";
import { memo } from "react";
import Svg, {
  ClipPath,
  Defs,
  ForeignObject,
  G,
  LinearGradient,
  Path,
  Stop,
  SvgProps,
} from "react-native-svg";
const NavBack = (props: SvgProps) => (
  <Svg width={390} height={73} viewBox="0 0 390 73" fill="none" {...props}>
    <ForeignObject width={430} height={116} x={-20} y={-20}></ForeignObject>
    <G data-figma-bg-blur-radius={20} filter="url(#b)">
      <Path
        fill="#E7E7E7"
        d="M0 27.558A20 20 0 0 1 9.038 10.83l6.542-4.287A40 40 0 0 1 37.504 0h87.484a40 40 0 0 1 29.803 13.321l17.041 19.037c15.851 17.707 43.554 17.77 59.486.134l17.438-19.305A40 40 0 0 1 278.439 0H350.9a40 40 0 0 1 20.498 5.652l8.851 5.282A20 20 0 0 1 390 28.108V36c0 22.091-17.909 40-40 40H40C17.909 76 0 58.091 0 36v-8.442Z"
      />
      <Path
        stroke="url(#c)"
        strokeWidth={2}
        d="M37.504 1h87.483a39 39 0 0 1 29.059 12.988l17.041 19.036c16.248 18.15 44.643 18.215 60.973.138l17.438-19.305A39.001 39.001 0 0 1 278.438 1h72.461a39.005 39.005 0 0 1 19.987 5.51l8.85 5.282A19 19 0 0 1 389 28.107V36c0 21.54-17.461 39-39 39H40C18.46 75 1 57.54 1 36v-8.441a19 19 0 0 1 8.586-15.892l6.542-4.287A39.002 39.002 0 0 1 37.504 1Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="c"
        x1={195}
        x2={195}
        y1={0}
        y2={76}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.438} stopColor="#CFAFE1" />
        <Stop offset={0.969} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <ClipPath id="a">
        <Path
          transform="translate(20 20)"
          d="M0 27.558A20 20 0 0 1 9.038 10.83l6.542-4.287A40 40 0 0 1 37.504 0h87.484a40 40 0 0 1 29.803 13.321l17.041 19.037c15.851 17.707 43.554 17.77 59.486.134l17.438-19.305A40 40 0 0 1 278.439 0H350.9a40 40 0 0 1 20.498 5.652l8.851 5.282A20 20 0 0 1 390 28.108V36c0 22.091-17.909 40-40 40H40C17.909 76 0 58.091 0 36v-8.442Z"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
const Memo = memo(NavBack);
export default Memo;
