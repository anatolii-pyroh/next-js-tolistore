import { CSSProperties } from "react";

export enum IconsEnum {
  exit = "/icons/stroke/exit.svg",
  loader = "/icons/stroke/loader.svg",
  cart = "/icons/stroke/cart.svg",
}

export type SvgIconProps = {
  src: IconsEnum;
  onClick?: () => void;
  color?: string;
  size?: number;
  rotate?: "0" | "90" | "180" | "270";
  className?: string;
  style?: CSSProperties;
};
