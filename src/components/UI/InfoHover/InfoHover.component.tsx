import { PropsWithChildren } from "react";

import { CustomTooltip } from "@components/UI/CustomTooltip";
import { IconsEnum, SvgIcon } from "@components/UI/SvgIcon";

import { InfoHoverProps } from "./InfoHover.types";

export const InfoHoverComponent = ({
  id,
  children,
  className,
}: PropsWithChildren<InfoHoverProps>) => {
  return (
    <>
      <SvgIcon
        src={IconsEnum.help}
        size={20}
        data-tooltip-id={id}
        className={className}
      />
      <CustomTooltip data-tooltip-id={id}>{children}</CustomTooltip>
    </>
  );
};

InfoHoverComponent.displayName = "InfoHover";
