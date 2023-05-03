import { CSSProperties, MouseEvent } from "react";

import { IconsEnum } from "@components/UI/SvgIcon";

export enum ButtonVariantEnum {
  primary = "primary",
  secondary = "secondary",
  red = "red",
  outlined = "outlined",
}

export type ButtonProps = {
  text?: string;
  id?: string;
  variant?: ButtonVariantEnum;
  size?: "sm" | "md" | "lg";
  width?: "full" | "content";
  icon?: IconsEnum;
  iconPosition?: "left" | "right";
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit";
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  style?: CSSProperties;
};
