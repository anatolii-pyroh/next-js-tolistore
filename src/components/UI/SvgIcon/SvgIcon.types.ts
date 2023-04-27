import { CSSProperties } from "react";

export enum IconsEnum {
  search = "/icons/common/search.svg",
  minus = "/icons/common/minus.svg",
  arrow = "/icons/common/arrow.svg",
  arrowChevron = "/icons/common/arrow-chevron.svg",
  loader = "/icons/common/loader.svg",
  checkboxV = "/icons/common/checkbox-v.svg",
  cross = "/icons/common/cross.svg",
  refresh = "/icons/common/refresh.svg",
  info = "/icons/common/info.svg",
  help = "/icons/common/help.svg",
  settings = "/icons/common/settings.svg",
  logout = "/icons/common/logout.svg",

  // side menu
  tokens = "/icons/common/tokens.svg",
  game = "/icons/common/game.svg",
  nft = "/icons/common/nft.svg",
  fund = "/icons/common/fund.svg",
  account = "/icons/common/account.svg",
}

export type SvgIconProps = {
  src: IconsEnum;
  onClick?: () => void;
  size?: number;
  rotate?: "0" | "90" | "180" | "270";
  className?: string;
  style?: CSSProperties;
};
