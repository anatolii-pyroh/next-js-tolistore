import classNames from "classnames";

import { IconsEnum, SvgIcon } from "@components/UI/SvgIcon";
import { TextSizeEnum, Text } from "@components/UI/Text";

import { ButtonProps, ButtonVariantEnum } from "./Button.types";

import styles from "./Button.module.scss";

const textSizeMap = {
  sm: TextSizeEnum.S14,
  md: TextSizeEnum.S14,
  lg: TextSizeEnum.S16,
} as const;

export const ButtonComponent = ({
  text,
  id,
  variant = ButtonVariantEnum.primary,
  size = "md",
  width = "content",
  icon,
  iconPosition = "left",
  onClick = () => null,
  type = "button",
  disabled,
  loading,
  style,
  className,
  ...props
}: ButtonProps) => {
  const buttonClass = classNames(
    styles.button,
    "myTransition",
    {
      [styles[`button_variant_${variant}`]]: variant,
      [styles[`button_size_${size}`]]: size,
      [styles[`button_width_${width}`]]: width,
      [styles[`button_icon_position_${iconPosition}`]]: iconPosition,
      [styles.disabled]: disabled,
      [styles.loading]: loading,
    },
    className
  );

  const isClickUnavailable = loading || disabled;

  return (
    <button
      className={buttonClass}
      disabled={disabled}
      onClick={isClickUnavailable ? () => null : onClick}
      style={style}
      type={type}
      id={id}
      {...props}
    >
      <div className={styles.loader}>
        <SvgIcon src={IconsEnum.loader} size={30} />
      </div>
      {icon && <SvgIcon src={icon} size={20} />}
      {text && <Text size={textSizeMap[size]}>{text}</Text>}
    </button>
  );
};

ButtonComponent.displayName = "Button";
