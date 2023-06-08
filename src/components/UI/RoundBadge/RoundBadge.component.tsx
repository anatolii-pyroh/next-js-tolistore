import React from "react";

import { FontWeightEnum, Text, TextSizeEnum } from "../Text";

import { RoundBadgeProps } from "./RoundBadge.types";
import styles from "./RoundBadge.module.scss";

export const RoundBadgeComponent: React.FC<RoundBadgeProps> = ({
  color = "white",
  children,
}) => {
  return (
    <div className={styles.badgeContainer}>
      {children}
      <Text
        size={TextSizeEnum.S16}
        fontWeight={FontWeightEnum.FW600}
        className={styles.badge}
        style={{ backgroundColor: color }}
      >
        3
      </Text>
    </div>
  );
};

RoundBadgeComponent.displayName = "RoundBadge";
