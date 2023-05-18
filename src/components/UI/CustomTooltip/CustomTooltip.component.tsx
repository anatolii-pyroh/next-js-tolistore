import { PropsWithChildren } from "react";
import { Tooltip } from "react-tooltip";

import { CustomTooltipProps } from "./CustomTooltip.types";

import styles from "./CustomTooltip.module.scss";

export const CustomTooltipComponent = ({
  "data-tooltip-id": id,
  children,
}: PropsWithChildren<CustomTooltipProps>) => {
  return (
    <Tooltip
      id={id}
      place={"bottom"}
      className={styles.customTooltip}
      // float
    >
      {children}
    </Tooltip>
  );
};

CustomTooltipComponent.displayName = "CustomTooltip";
