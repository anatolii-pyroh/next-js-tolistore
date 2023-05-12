import { MouseEvent, PropsWithChildren, useEffect, useRef } from "react";
import classNames from "classnames";
import { CSSTransition } from "react-transition-group";

import { Portal } from "@components/Portal";
import { Scrolling } from "@components/Scrolling";
import { IconsEnum, SvgIcon } from "@components/UI/SvgIcon";

import { ModalProps } from "./Modal.types";

import styles from "./Modal.module.scss";
import { useDisableBodyScroll } from "@hooks/useDisableBodyScroll";

export const ModalComponent = ({
  isVisible,
  backdrop = true,
  children,
  customStyles,
  className,
  flowBackdrop = false,
  renderCustomCross,
  onClose,
}: PropsWithChildren<ModalProps>) => {
  const backdropRef = useRef(null);

  const backdropClick = (e: MouseEvent) => {
    if (e.target === backdropRef.current) {
      onClose();
    }
  };

  const modalClass = classNames(styles.modal, className);
  const backdropClass = classNames(styles.backdrop, {
    [styles.backdrop_enabled]: backdrop,
    [styles.flow_backdrop_enabled]: flowBackdrop,
  });

  const cross = renderCustomCross ? (
    renderCustomCross(onClose)
  ) : (
    <div className={styles.cross} onClick={onClose}>
      <SvgIcon src={IconsEnum.cross} size={24} />
    </div>
  );

  useEffect(() => {
    const trackEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Esc") {
        onClose();
      }
    };

    window.addEventListener("keydown", trackEsc);

    return () => {
      window.removeEventListener("keydown", trackEsc);
    };
  }, [onClose]);

  useDisableBodyScroll(isVisible);
  return (
    <Portal>
      <CSSTransition
        in={isVisible}
        classNames='pageTransition'
        timeout={300}
        unmountOnExit
        nodeRef={backdropRef}
      >
        <div
          className={backdropClass}
          onClick={backdropClick}
          ref={backdropRef}
        >
          <Scrolling vertical className={modalClass} style={customStyles}>
            {cross}
            {children}
          </Scrolling>
        </div>
      </CSSTransition>
    </Portal>
  );
};

ModalComponent.displayName = "Modal";
