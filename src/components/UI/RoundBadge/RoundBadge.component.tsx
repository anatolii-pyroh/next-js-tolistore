import React from "react";
import { RoundBadgeProps } from "./RoundBadge.types";

import styles from "./RoundBadge.module.scss";

export const RoundBadgeComponent: React.FC<RoundBadgeProps> = ({
  color = "red",
  children,
}) => {
  return (
    <div className={styles.badgeContainer}>
      {children}
      <div className={styles.badge} style={{ backgroundColor: color }} />
    </div>
  );
};

RoundBadgeComponent.displayName = "RoundBadge";
