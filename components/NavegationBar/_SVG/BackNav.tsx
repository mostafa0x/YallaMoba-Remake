import { rh, rw } from "@/utils/dimensions";
import * as React from "react";

const BackNav: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={rw(390)}
    height={rh(73)}
    fill="none"
    viewBox="0 0 390 73"
  >
    <g data-figma-bg-blur-radius="20" filter="url(#filter0_d_17_1367)">
      <path
        fill="#E7E7E7"
        d="M0 27.559A20 20 0 0 1 9.038 10.83l6.542-4.287A40 40 0 0 1 37.504 0h87.484a40 40 0 0 1 29.803 13.321l17.041 19.037c15.851 17.707 43.554 17.77 59.486.134l17.438-19.305A40 40 0 0 1 278.439 0H350.9a40 40 0 0 1 20.498 5.652l8.851 5.282A20 20 0 0 1 390 28.108V36c0 22.091-17.909 40-40 40H40C17.909 76 0 58.091 0 36z"
      ></path>
      <path
        stroke="url(#paint0_linear_17_1367)"
        strokeWidth="2"
        d="M37.504 1h87.483a39 39 0 0 1 29.059 12.988l17.041 19.036c16.248 18.15 44.643 18.215 60.973.138l17.438-19.305A39 39 0 0 1 278.438 1h72.461a39 39 0 0 1 19.987 5.51l8.85 5.282A19 19 0 0 1 389 28.107V36c0 21.54-17.461 39-39 39H40C18.46 75 1 57.54 1 36v-8.441a19 19 0 0 1 8.586-15.892l6.542-4.287A39 39 0 0 1 37.504 1Z"
      ></path>
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_17_1367"
        x1="195"
        x2="195"
        y1="0"
        y2="76"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.438" stopColor="#CFAFE1"></stop>
        <stop offset="0.969" stopColor="#fff" stopOpacity="0"></stop>
      </linearGradient>
      <clipPath id="bgblur_0_17_1367_clip_path" transform="translate(20 20)">
        <path d="M0 27.559A20 20 0 0 1 9.038 10.83l6.542-4.287A40 40 0 0 1 37.504 0h87.484a40 40 0 0 1 29.803 13.321l17.041 19.037c15.851 17.707 43.554 17.77 59.486.134l17.438-19.305A40 40 0 0 1 278.439 0H350.9a40 40 0 0 1 20.498 5.652l8.851 5.282A20 20 0 0 1 390 28.108V36c0 22.091-17.909 40-40 40H40C17.909 76 0 58.091 0 36z"></path>
      </clipPath>
      <filter
        id="filter0_d_17_1367"
        width="430"
        height="116"
        x="-20"
        y="-20"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        ></feColorMatrix>
        <feOffset dy="4"></feOffset>
        <feGaussianBlur stdDeviation="2"></feGaussianBlur>
        <feComposite in2="hardAlpha" operator="out"></feComposite>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_17_1367"
        ></feBlend>
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_17_1367"
          result="shape"
        ></feBlend>
      </filter>
    </defs>
  </svg>
);

export default BackNav;
