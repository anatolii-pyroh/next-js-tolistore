import { CSSProperties, PropsWithChildren } from 'react';

export type ScrollingProps = PropsWithChildren<{
  className?: string;
  style?: CSSProperties;
  horizontal?: boolean;
  vertical?: boolean;
  onClick?: () => void;
}>;
