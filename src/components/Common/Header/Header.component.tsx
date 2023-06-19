import React, { useEffect, useRef, useState } from "react";
import Cookies from "js-cookie";
import classNames from "classnames";
import { CSSTransition } from "react-transition-group";

import Link from "next/link";
import { useRouter } from "next/router";

import { useProfileSelector } from "@reducers/profile/useProfileSelector";
import { useProfileActions } from "@reducers/profile/useProfileActions";

import { CustomLink, Text, TextSizeEnum } from "@components/UI/Text";
import { IconsEnum, SvgIcon } from "@components/UI/SvgIcon";
import { Modal } from "@components/UI/Modal";
import { RoundBadge } from "@components/UI/RoundBadge";
import { LoginForm } from "@components/LoginForm";
import {
  Button,
  ButtonVariantEnum,
  SwitchThemeButton,
} from "@components/UI/Button";

import styles from "./Header.module.scss";

export const HeaderComponent = () => {
  const { accessToken, loading, userData } = useProfileSelector();
  const { changeAccessToken } = useProfileActions();
  const [isLoggedIn, setIsLoggedIn] = useState(Boolean(accessToken));
  const [isVisibleLoginForm, setIsVisibleLoginForm] = useState(false);
  const loggedInButtonsRef = useRef(null);
  const loggedOutButtonRef = useRef(null);
  const router = useRouter();

  const headerClassName = classNames(`${styles.header} container`);

  const handleLogoutClick = () => {
    changeAccessToken("");
    Cookies.remove("userId");
  };

  useEffect(() => {
    setIsLoggedIn(Boolean(accessToken));
  }, [accessToken]);

  return (
    <>
      <header className={headerClassName}>
        {loading ? null : (
          <>
            <CustomLink
              href='/'
              size={TextSizeEnum.S16}
              style={{
                color: "var(--white)",
                opacity: router.pathname !== "/" ? 1 : 0,
                pointerEvents: router.pathname !== "/" ? "all" : "none",
              }}
            >
              ← Back to home
            </CustomLink>
            <CSSTransition
              in={isLoggedIn}
              classNames='pageTransition'
              timeout={300}
              nodeRef={loggedInButtonsRef}
              unmountOnExit
            >
              <>
                <div className={styles.buttonsContainer}>
                  <Text size={TextSizeEnum.S18} textTransform='capitalize'>
                    welcome, {userData.username}!
                  </Text>
                  <Link href='/cart'>
                    <RoundBadge>
                      <SvgIcon src={IconsEnum.cart} />
                    </RoundBadge>
                  </Link>
                </div>

                <div className={styles.buttonsContainer}>
                  <Button
                    icon={IconsEnum.exit}
                    iconPosition='right'
                    variant={ButtonVariantEnum.primary}
                    size='sm'
                    onClick={handleLogoutClick}
                    text='Logout'
                  />
                  <SwitchThemeButton />
                </div>
              </>
            </CSSTransition>
            <CSSTransition
              in={!isLoggedIn}
              classNames='pageTransition'
              timeout={300}
              nodeRef={loggedOutButtonRef}
              unmountOnExit
            >
              <div className={styles.buttonsContainer}>
                <Button
                  onClick={() => setIsVisibleLoginForm(true)}
                  variant={ButtonVariantEnum.primary}
                  size='sm'
                  text='Login'
                />
                <SwitchThemeButton />
              </div>
            </CSSTransition>
          </>
        )}
      </header>
      <Modal
        isVisible={isVisibleLoginForm}
        onClose={() => setIsVisibleLoginForm(false)}
      >
        <LoginForm onSuccess={() => setIsVisibleLoginForm(false)} />
      </Modal>
    </>
  );
};

HeaderComponent.displayName = "Header";
