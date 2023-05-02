import classNames from "classnames";
import { ReactSVG } from "react-svg";

import { SvgIconProps } from "./SvgIcon.types";

import styles from "./SvgIcon.module.scss";

export const SvgIconComponent = ({
  src,
  size = 24,
  rotate = "0",
  className,
  style,
  onClick,
  ...rest
}: SvgIconProps) => {
  const svgIconClass = classNames(
    styles.svgIcon,
    {
      [styles[`svgIcon_rotate_${rotate}`]]: rotate,
    },
    className
  );

  const customStyles = {
    width: `${size}px`,
    height: `${size}px`,
    ...style,
  };

  return (
    <ReactSVG
      src={src}
      className={svgIconClass}
      onClick={onClick}
      style={customStyles}
      {...rest}
    />
  );
};

SvgIconComponent.displayName = "SvgIcon";
