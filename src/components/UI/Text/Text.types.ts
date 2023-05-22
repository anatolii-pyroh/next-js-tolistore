import { LinkProps } from "next/link";
import { CSSProperties } from "react";

export enum TextSizeEnum {
  S10 = "S10",
  S12 = "S12",
  S14 = "S14",
  S16 = "S16",
  S18 = "S18",
  S20 = "S20",
  S22 = "S22",
  S24 = "S24",
  S26 = "S26",
  S28 = "S28",
  S30 = "S30",
  S32 = "S32",
  S40 = "S40",
  S48 = "S48",
}

export enum FontWeightEnum {
  FW400 = "FW400",
  FW500 = "FW500",
  FW600 = "FW600",
  FW700 = "FW700",
}

export type TextProps = {
  size: TextSizeEnum;
  fontWeight?: FontWeightEnum;
  id?: string;
  dots?: boolean;
  textTransform?: "lowercase" | "uppercase" | "capitalize";
  className?: string;
  style?: CSSProperties;
  //   tooltip?: {
  //     text: string;
  //     id: string;
  //   };
  onClick?: () => void;
};

export type CustomLinkProps = LinkProps & TextProps & { disabled?: boolean };
