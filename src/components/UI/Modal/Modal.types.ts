import { ReactNode } from 'react';

export type ModalProps = {
  customStyles?: Record<string, string>;
  backdrop?: boolean;
  flowBackdrop?: boolean;
  className?: string;
  isVisible: boolean;
  onClose: () => void;
  renderCustomCross?: (onClose: () => void) => ReactNode;
};
