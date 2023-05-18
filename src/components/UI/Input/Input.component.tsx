/* eslint-disable jsx-a11y/no-autofocus */
import { FocusEvent, forwardRef, useRef, useState } from "react";
import classNames from "classnames";

import { Text, TextSizeEnum } from "../Text";

import { InputProps } from "./Input.types";

import styles from "./Input.module.scss";

export const InputComponent = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      label,
      type = "text",
      autoComplete = "off",
      placeholder,
      className,
      style,
      hasError,
      errorMessage,
      value,
      disabled,
      leftBlock,
      rightBlock,
      rightBlockClassName,
      onChange = () => null,
      onFocus = () => null,
      onBlur = () => null,
      onClick = () => null,
      alwaysFocused,
      required,
      ...rest
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(!!alwaysFocused);
    const innerRef = useRef<HTMLInputElement>(null);

    const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
      if (disabled) return;

      setIsFocused(true);
      onFocus(e);
    };

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
      if (disabled) return;

      setIsFocused(false);
      onBlur(e);
    };

    const inputClass = classNames(
      styles.input,

      {
        [styles.input_focused]: isFocused,
        [styles.input_error]: !!errorMessage || hasError,
        [styles.input_disabled]: disabled,
      },
      className
    );

    const rightBlockClass = classNames(styles.rightBlock, rightBlockClassName);

    const leftRightBlockClickHandler = () => {
      const input: HTMLInputElement | null = document.querySelector(`#${id}`);
      if (!input) return;
      input.focus();
    };

    return (
      <div className={inputClass} style={style}>
        {!!label && (
          <Text size={TextSizeEnum.S14} className={styles.inputLabel}>
            {label}
          </Text>
        )}
        <div className={styles.inner + " myTransition"}>
          {leftBlock && (
            <div
              className={styles.leftBlock}
              onClick={leftRightBlockClickHandler}
            >
              {leftBlock}
            </div>
          )}
          <input
            key={`${id}_${!!alwaysFocused}`}
            autoFocus={!!alwaysFocused}
            autoComplete={autoComplete}
            placeholder={placeholder}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onClick={onClick}
            value={value}
            id={id}
            name={id}
            type={type}
            disabled={disabled}
            ref={ref || innerRef}
            required={required}
            {...rest}
          />
          {rightBlock && (
            <div
              className={rightBlockClass}
              onClick={leftRightBlockClickHandler}
            >
              {rightBlock}
            </div>
          )}
        </div>
        {!!errorMessage && (
          <Text size={TextSizeEnum.S14} className={styles.errorMessage}>
            {errorMessage}
          </Text>
        )}
      </div>
    );
  }
);

InputComponent.displayName = "Input";
