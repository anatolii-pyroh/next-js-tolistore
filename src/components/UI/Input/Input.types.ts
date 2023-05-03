import {
  ReactNode,
  CSSProperties,
  ChangeEvent,
  FocusEvent,
  MouseEvent,
} from "react";

export type InputProps = {
  autoComplete?: string;
  className?: string;
  disabled?: boolean;
  errorMessage?: string;
  floatingLabel?: string;
  hasError?: boolean;
  id: string;
  label?: string;
  leftBlock?: ReactNode;
  maxLength?: number;
  placeholder?: string;
  rightBlock?: ReactNode;
  rightBlockClassName?: string;
  style?: CSSProperties;
  type?: "password" | "text";
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onClick?: (e: MouseEvent<HTMLInputElement>) => void;
  alwaysFocused?: boolean;
  required?: boolean;
};
