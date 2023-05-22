import { PropsWithChildren } from "react";
import classNames from "classnames";
import Link from "next/link";

import { CustomLinkProps, FontWeightEnum } from "./Text.types";

import styles from "./Text.module.scss";

export const CustomLinkComponent = ({
  id,
  children,
  className,
  dots,
  fontWeight = FontWeightEnum.FW400,
  style,
  textTransform,
  size,
  onClick,
  ...rest
}: PropsWithChildren<CustomLinkProps>) => {
  const textClass = classNames(
    styles.text,
    {
      [styles.customLink]: typeof children === "string",
      [styles[`text_size_${size}`]]: size,
      [styles[`text_fontWeight_${fontWeight}`]]: fontWeight,
      [styles[`text_textTransform_${textTransform}`]]: textTransform,
      [styles[`text_dots`]]: dots,
    },
    className
  );

  return (
    <Link
      className={textClass}
      onClick={onClick}
      style={{ ...style }}
      id={id}
      {...rest}
      // onClickCapture={(e) => e.preventDefault()}
    >
      {children}
    </Link>
  );
};

CustomLinkComponent.displayName = "Text";
