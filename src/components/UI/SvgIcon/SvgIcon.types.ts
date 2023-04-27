import { CSSProperties } from "react";

export enum IconsEnum {
  exit = "/icons/stroke/exit.svg",
  loader = "/icons/stroke/loader.svg",
}

export type SvgIconProps = {
  src: IconsEnum;
  onClick?: () => void;
  size?: number;
  rotate?: "0" | "90" | "180" | "270";
  className?: string;
  style?: CSSProperties;
};
